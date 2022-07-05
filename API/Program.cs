using Domain;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Persistence;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddDbContext<DataContext>();
builder.Services.AddIdentityCore<AppUser>(opt =>
         {
            opt.Password.RequireNonAlphanumeric = false;
         })
         .AddEntityFrameworkStores<DataContext>()
         .AddSignInManager<SignInManager<AppUser>>();
builder.Services.AddAuthentication();

var app = builder.Build();

try
{
   using (var scope = app.Services.CreateScope())
   {
      var dataContext = scope.ServiceProvider.GetRequiredService<DataContext>();
      var userManager = scope.ServiceProvider.GetRequiredService<UserManager<AppUser>>();

      dataContext.Database.Migrate();
      await Seed.SeedData(dataContext, userManager);
   }
}
catch (Exception ex)
{
   using (var scope = app.Services.CreateScope())
   {
      var logger = scope.ServiceProvider.GetRequiredService<ILogger<Program>>();
      logger.LogError(ex, "An error occured during migration");
   }
}

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
   app.UseSwagger();
   app.UseSwaggerUI();
}

// app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
