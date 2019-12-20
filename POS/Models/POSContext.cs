using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using POS.Models;

namespace POS.Models
{
    public class POSContext : DbContext
    {
        public POSContext(DbContextOptions options)
            : base(options)
        {
        }

        //public DbSet<Employee> Employees { get; set; }
        //public DbSet<Company> Companys { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<FavouriteOrder> FavouriteOrders { get; set; }
        public DbSet<Inventory> Inventorys { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<OrderItem> OrderItems { get; set; }
        public DbSet<Purchaser> Purchasers { get; set; }
        public DbSet<Status> Statuses { get; set; }


        public DbSet<NotificationItem> NotificationItems { get; set; }

        public DbSet<NotificationItemMethod> NotificationItemMethods { get; set; }

        public DbSet<Message> Messages { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            

            //modelBuilder.Entity<Order>().HasOne(o => o.DeliverBy).WithMany(o=>o.DeliverOrders).HasForeignKey(o => o.DeliverById);
            //modelBuilder.Entity<Order>().HasOne(o => o.CreatedBy).WithMany(o => o.CreatedOrders).HasForeignKey(o => o.CreatedBy_UserId);
            //modelBuilder.Entity<Order>().HasOne(o => o.ModifiedBy).WithMany(o => o.ModifiedOrders).HasForeignKey(o => o.ModifiedBy_UserId);

            //modelBuilder.Entity<Order>().HasOne(o => o.Status).WithMany().HasForeignKey(o=>o.StatusId);
            //modelBuilder.Entity<Order>().HasOne(o => o.Purchaser).WithMany().HasForeignKey(o => o.PurchaserId);

            //modelBuilder.Entity<Order>().HasMany(o => o.OrderItems).WithOne(o => o.Order).HasForeignKey(o=>o.OrderId);

            //modelBuilder.Entity<FavouriteOrder>().HasOne(o => o.User).WithMany(o => o.FavouriteOrders).HasForeignKey(o => o.UserId);

            //modelBuilder.Entity<Purchaser>().HasMany(o => o.Orders).WithOne(o => o.Purchaser).HasForeignKey(o => o.PurchaserId);


            modelBuilder.Entity<NotificationItem>().HasMany(o => o.Messages).WithOne(o=>o.NotificationItem).HasForeignKey(o=>o.NotificationItemId);
            modelBuilder.Entity<NotificationItem>().HasMany(o => o.NotificationItemMethods).WithOne(o=>o.NotificationItem).HasForeignKey(o=>o.NotificationItemId);
            modelBuilder.Entity<NotificationItem>().HasOne(o => o.CreatedBy).WithMany(o => o.NotificationItems).HasForeignKey(o => o.CreatedById);



            modelBuilder.Entity<User>().HasData(new User() { UserId = 1, Username = "test",Password = "test", FirstName="test",LastName="test",Email = "test",DisplayName="test" ,Active=true});


            modelBuilder.Entity<MethodType>().HasData( new MethodType() { MethodTypeId = 1, Method = "SMS"});
            modelBuilder.Entity<MethodType>().HasData(new MethodType() { MethodTypeId = 2, Method = "Whatsapp" });
            modelBuilder.Entity<MethodType>().HasData(new MethodType() { MethodTypeId = 3, Method = "Phone" });

            modelBuilder.Entity<NotificationItem>().HasData(new NotificationItem()
            {
                NotificationItemId = 1,
                Name = "CV1202",
                PageContent = "",
                CreatedDate = DateTime.Now,
                ModifiedDate = DateTime.Now,
                CreatedById = 1
            });

            modelBuilder.Entity<NotificationItemMethod>().HasData(new NotificationItemMethod()
            {
                NotificationItemMethodId = 1,
                Method = "SMS",
                Value = "64974312",
                NotificationItemId = 1
            });


            //modelBuilder.Entity<Order>().HasOne(o => o.DeliverBy).WithMany(o=>o.DeliverOrders).HasForeignKey(o => o.DeliverById); ;


            //modelBuilder.Entity<OrderItem>().HasOne(o => o.Order).WithMany(o => o.OrderItems);
            //modelBuilder.Entity<OrderItem>().HasOne(o => o.Inventory).WithMany();



            //modelBuilder.Entity<Purchaser>().HasMany(o => o.Orders).WithOne(o => o.Purchaser);


            //modelBuilder.Entity<User>().HasMany<Order>(g => g.FavouriteOrder).WithOne();

            //modelBuilder.Entity<User>().HasMany<Inventory>(g => g.CreatedInventories).WithOne(o => o.CreatedBy).HasForeignKey(o => o.CreatedBy_UserId);
            //modelBuilder.Entity<User>().HasMany<Inventory>(g => g.ModifiedInventories).WithOne(o => o.ModifiedBy).HasForeignKey(o => o.ModifiedBy_UserId);


        }



        public DbSet<POS.Models.SystemParam> SystemParam { get; set; }
    }
}
