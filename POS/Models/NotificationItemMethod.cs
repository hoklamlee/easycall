﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel;

namespace POS.Models
{
    public class NotificationItemMethod
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int NotificationItemMethodId { get; set; }
        public int? MethodTypeId { get; set; }
        public MethodType MethodType { get; set; }

        public int? NotificationItemId { get; set; }

        public NotificationItem NotificationItem { get; set; }
    }
}
