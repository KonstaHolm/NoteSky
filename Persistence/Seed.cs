using Domain;
using Microsoft.AspNetCore.Identity;

namespace Persistence
{
   public class Seed
   {
      public static async Task SeedData(DataContext context, UserManager<AppUser> userManager)
      {
         //Written to have option for adding more seed data if wanted simply by adding to the list
         if (!context.Notes.Any() && !context.AppUsers.Any())
         {
            var notes = new List<Note>
            {
                new Note
                {
                    Title = "Note template",
                    Description = "This is an example description text",
                    AddingDate = DateTime.Now
                }
            };

            var users = new List<AppUser>
            {
                new AppUser
                {
                  DisplayName = "Guest",
                  UserName = "guest",
                  Email = "guest@guest.com",
                  Notes = notes
                }
            };

            foreach (var user in users)
            {
               await userManager.CreateAsync(user, "Pa$$w0rd");
            }

            await context.Notes.AddRangeAsync(notes);
            await context.AppUsers.AddRangeAsync(users);
            await context.SaveChangesAsync();
         }
      }
   }
}