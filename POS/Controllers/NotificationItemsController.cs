using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using POS.Models;

namespace EasyCall.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NotificationItemsController : ControllerBase
    {
        private readonly POSContext _context;

        public NotificationItemsController(POSContext context)
        {
            _context = context;
        }

        // GET: api/NotificationItems
        [HttpGet]
        public async Task<ActionResult<IEnumerable<NotificationItem>>> GetNotificationItems()
        {
            return await _context.NotificationItems.ToListAsync();
        }

        // GET: api/NotificationItems/5
        [HttpGet("{id}")]
        public async Task<ActionResult<NotificationItem>> GetNotificationItem(int id)
        {
            var notificationItem = await _context.NotificationItems.FindAsync(id);

            if (notificationItem == null)
            {
                return NotFound();
            }

            return notificationItem;
        }

        // PUT: api/NotificationItems/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutNotificationItem(int id, NotificationItem notificationItem)
        {
            if (id != notificationItem.NotificationItemId)
            {
                return BadRequest();
            }

            _context.Entry(notificationItem).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!NotificationItemExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/NotificationItems
        [HttpPost]
        public async Task<ActionResult<NotificationItem>> PostNotificationItem(NotificationItem notificationItem)
        {
            _context.NotificationItems.Add(notificationItem);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetNotificationItem", new { id = notificationItem.NotificationItemId }, notificationItem);
        }

        // DELETE: api/NotificationItems/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<NotificationItem>> DeleteNotificationItem(int id)
        {
            var notificationItem = await _context.NotificationItems.FindAsync(id);
            if (notificationItem == null)
            {
                return NotFound();
            }

            _context.NotificationItems.Remove(notificationItem);
            await _context.SaveChangesAsync();

            return notificationItem;
        }

        private bool NotificationItemExists(int id)
        {
            return _context.NotificationItems.Any(e => e.NotificationItemId == id);
        }
    }
}
