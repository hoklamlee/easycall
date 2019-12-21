using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel;

namespace POS.Models
{
    public class NotificationItem
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int NotificationItemId { get; set; }
        public string Name { get; set; }
        public string Type { get; set; }
        public string PageContent { get; set; }
        public ICollection<NotificationItemMedia> NotificationItemMedias { get; set; }
        public ICollection<NotificationItemMethod> NotificationItemMethods { get; set; }
        public ICollection<Message> Messages { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime ModifiedDate { get; set; }

        public int? CreatedById { get; set; }
        public User CreatedBy { get; set; }
    }
}
