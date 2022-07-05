using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Persistence;
using Domain;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
   [ApiController]
   [Route("api/[controller]")]
   public class AppUserController : BaseApiController
   {
      private readonly DataContext context;
      public AppUserController(DataContext context)
      {
         this.context = context;
      }

      [HttpGet]
      public async Task<ActionResult<List<AppUser>>> GetUsers()
      {
         return await context.AppUsers.ToListAsync();
      }

      [HttpGet("{id}")]
      public async Task<ActionResult<AppUser>> GetUser(Guid id)
      {
         return await context.AppUsers.FindAsync(id);
      }


   }
}