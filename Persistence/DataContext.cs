using Domain;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

namespace Persistence
{
   public class DataContext : IdentityDbContext<AppUser>
   {
      protected readonly IConfiguration Configuration;

      public DataContext(IConfiguration configuration)
      {
         Configuration = configuration;
      }

      protected override void OnConfiguring(DbContextOptionsBuilder options)
      {
         // connect to SQLite database
         options.UseSqlite(Configuration.GetConnectionString("DefaultConnection"));
      }

      public DbSet<Note> Notes { get; set; }
      public DbSet<AppUser> AppUsers { get; set; }
   }
}