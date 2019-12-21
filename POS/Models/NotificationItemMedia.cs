using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel;

namespace POS.Models
{
    public class NotificationItemMedia
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int NotificationItemMediaId { get; set; }
        public string Type { get; set; }
        public byte[] Content { get; set; }
        public NotificationItem NotificationItem { get; set; }
        public int? NotificationItemId { get; set; }

        public DateTime CreatedDate { get; set; }
        public int? CreatedById { get; set; }
        public DateTime ModifiedDate { get; set; }
        public User CreatedBy { get; set; }
    }
}
