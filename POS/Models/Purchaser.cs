﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel;

namespace POS.Models
{
    public class Purchaser
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int PurchaserId { get; set; }
        public string Name { get; set; }
        public long? Latitude { get; set; }
        public long? Longitude { get; set; }
        public string Location { get; set; }
        public string PhoneNo { get; set; }
        public string ContactPerson { get; set; }


        [DefaultValue(true)]
        public bool Active { get; set; }

        public User CreatedBy { get; set; }
        public int? CreatedBy_UserId { get; set; }
        public DateTime CreatedDate { get; set; }

        public User ModifiedBy { get; set; }
        public int? ModifiedBy_UserId { get; set; }
        public DateTime ModifiedDate { get; set; }

        public Purchaser()
        {
            Active = true;
        }
    }

}
