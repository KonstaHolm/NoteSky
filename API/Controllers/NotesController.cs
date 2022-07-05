using Microsoft.AspNetCore.Mvc;
using Persistence;
using Domain;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
   public class NotesController : BaseApiController
   {
      private readonly DataContext context;

      public NotesController(DataContext context)
      {
         this.context = context;
      }

      [HttpGet]
      public async Task<ActionResult<List<Note>>> GetNotes()
      {
         return await context.Notes.ToListAsync();
      }
      [HttpGet("{id}")]
      public async Task<ActionResult<Note>> GetNote(Guid id)
      {
         return await context.Notes.FindAsync(id);
      }
   }
}