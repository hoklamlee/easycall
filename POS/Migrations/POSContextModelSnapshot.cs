﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using POS.Models;

namespace POS.Migrations
{
    [DbContext(typeof(POSContext))]
    partial class POSContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.2.6-servicing-10079")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("POS.Models.FavouriteOrder", b =>
                {
                    b.Property<int>("FavouriteOrderId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("OrderId");

                    b.Property<int>("UserId");

                    b.Property<string>("name");

                    b.HasKey("FavouriteOrderId");

                    b.HasIndex("OrderId");

                    b.HasIndex("UserId");

                    b.ToTable("FavouriteOrders");
                });

            modelBuilder.Entity("POS.Models.Inventory", b =>
                {
                    b.Property<int>("InventoryId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<bool>("Active");

                    b.Property<string>("Category");

                    b.Property<int?>("CreatedByUserId");

                    b.Property<int?>("CreatedBy_UserId");

                    b.Property<DateTime>("CreatedDate");

                    b.Property<string>("Description");

                    b.Property<int?>("ModifiedByUserId");

                    b.Property<int?>("ModifiedBy_UserId");

                    b.Property<DateTime>("ModifiedDate");

                    b.Property<string>("Name");

                    b.Property<long>("Price");

                    b.Property<long>("Quatity");

                    b.Property<string>("Unit");

                    b.HasKey("InventoryId");

                    b.HasIndex("CreatedByUserId");

                    b.HasIndex("ModifiedByUserId");

                    b.ToTable("Inventorys");
                });

            modelBuilder.Entity("POS.Models.Message", b =>
                {
                    b.Property<int>("MessageId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Content");

                    b.Property<DateTime>("CreatedDate");

                    b.Property<string>("Method");

                    b.Property<int?>("NotificationItemId");

                    b.Property<string>("Sender");

                    b.Property<string>("Value");

                    b.HasKey("MessageId");

                    b.HasIndex("NotificationItemId");

                    b.ToTable("Messages");
                });

            modelBuilder.Entity("POS.Models.MethodType", b =>
                {
                    b.Property<int>("MethodTypeId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Method");

                    b.HasKey("MethodTypeId");

                    b.ToTable("MethodType");

                    b.HasData(
                        new
                        {
                            MethodTypeId = 1,
                            Method = "SMS"
                        },
                        new
                        {
                            MethodTypeId = 2,
                            Method = "Whatsapp"
                        },
                        new
                        {
                            MethodTypeId = 3,
                            Method = "Phone"
                        });
                });

            modelBuilder.Entity("POS.Models.NotificationItem", b =>
                {
                    b.Property<int>("NotificationItemId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int?>("CreatedById");

                    b.Property<DateTime>("CreatedDate");

                    b.Property<DateTime>("ModifiedDate");

                    b.Property<string>("Name");

                    b.Property<string>("PageContent");

                    b.HasKey("NotificationItemId");

                    b.HasIndex("CreatedById");

                    b.ToTable("NotificationItems");

                    b.HasData(
                        new
                        {
                            NotificationItemId = 1,
                            CreatedById = 1,
                            CreatedDate = new DateTime(2019, 12, 9, 11, 46, 56, 968, DateTimeKind.Local).AddTicks(7149),
                            ModifiedDate = new DateTime(2019, 12, 9, 11, 46, 56, 969, DateTimeKind.Local).AddTicks(4027),
                            Name = "CV1202",
                            PageContent = ""
                        });
                });

            modelBuilder.Entity("POS.Models.NotificationItemMethod", b =>
                {
                    b.Property<int>("NotificationItemMethodId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Method");

                    b.Property<int?>("NotificationItemId");

                    b.Property<string>("Value");

                    b.HasKey("NotificationItemMethodId");

                    b.HasIndex("NotificationItemId");

                    b.ToTable("NotificationItemMethods");

                    b.HasData(
                        new
                        {
                            NotificationItemMethodId = 1
                        });
                });

            modelBuilder.Entity("POS.Models.Order", b =>
                {
                    b.Property<int>("OrderId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<bool>("Active");

                    b.Property<int?>("CreatedByUserId");

                    b.Property<int?>("CreatedBy_UserId");

                    b.Property<DateTime>("CreatedDate");

                    b.Property<int?>("DeliverById");

                    b.Property<DateTime?>("DeliverDate");

                    b.Property<int?>("ModifiedByUserId");

                    b.Property<int?>("ModifiedBy_UserId");

                    b.Property<DateTime>("ModifiedDate");

                    b.Property<DateTime?>("OrderDate");

                    b.Property<int?>("PurchaserId");

                    b.Property<string>("Remark");

                    b.Property<int?>("StatusId");

                    b.HasKey("OrderId");

                    b.HasIndex("CreatedByUserId");

                    b.HasIndex("DeliverById");

                    b.HasIndex("ModifiedByUserId");

                    b.HasIndex("PurchaserId");

                    b.HasIndex("StatusId");

                    b.ToTable("Orders");
                });

            modelBuilder.Entity("POS.Models.OrderItem", b =>
                {
                    b.Property<int>("OrderItemId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<bool>("Active");

                    b.Property<int?>("CreatedByUserId");

                    b.Property<int?>("CreatedBy_UserId");

                    b.Property<DateTime>("CreatedDate");

                    b.Property<int?>("InventoryId");

                    b.Property<int?>("ModifiedByUserId");

                    b.Property<int?>("ModifiedBy_UserId");

                    b.Property<DateTime>("ModifiedDate");

                    b.Property<int?>("OrderId");

                    b.Property<long?>("Price");

                    b.Property<long?>("Quatity");

                    b.Property<string>("Remark");

                    b.HasKey("OrderItemId");

                    b.HasIndex("CreatedByUserId");

                    b.HasIndex("InventoryId");

                    b.HasIndex("ModifiedByUserId");

                    b.HasIndex("OrderId");

                    b.ToTable("OrderItems");
                });

            modelBuilder.Entity("POS.Models.Purchaser", b =>
                {
                    b.Property<int>("PurchaserId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<bool>("Active");

                    b.Property<string>("ContactPerson");

                    b.Property<int?>("CreatedByUserId");

                    b.Property<int?>("CreatedBy_UserId");

                    b.Property<DateTime>("CreatedDate");

                    b.Property<long?>("Latitude");

                    b.Property<string>("Location");

                    b.Property<long?>("Longitude");

                    b.Property<int?>("ModifiedByUserId");

                    b.Property<int?>("ModifiedBy_UserId");

                    b.Property<DateTime>("ModifiedDate");

                    b.Property<string>("Name");

                    b.Property<string>("PhoneNo");

                    b.HasKey("PurchaserId");

                    b.HasIndex("CreatedByUserId");

                    b.HasIndex("ModifiedByUserId");

                    b.ToTable("Purchasers");
                });

            modelBuilder.Entity("POS.Models.Status", b =>
                {
                    b.Property<int>("StatusId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<bool>("Active");

                    b.Property<string>("Category");

                    b.Property<string>("Code");

                    b.Property<int?>("CreatedByUserId");

                    b.Property<int?>("CreatedBy_UserId");

                    b.Property<DateTime>("CreatedDate");

                    b.Property<string>("Description");

                    b.Property<int?>("ModifiedByUserId");

                    b.Property<int?>("ModifiedBy_UserId");

                    b.Property<DateTime>("ModifiedDate");

                    b.HasKey("StatusId");

                    b.HasIndex("CreatedByUserId");

                    b.HasIndex("ModifiedByUserId");

                    b.ToTable("Statuses");
                });

            modelBuilder.Entity("POS.Models.SystemParam", b =>
                {
                    b.Property<int>("SystemParamId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<bool>("Active");

                    b.Property<int?>("CreatedByUserId");

                    b.Property<int?>("CreatedBy_UserId");

                    b.Property<DateTime>("CreatedDate");

                    b.Property<string>("Description");

                    b.Property<int?>("ModifiedByUserId");

                    b.Property<int?>("ModifiedBy_UserId");

                    b.Property<DateTime>("ModifiedDate");

                    b.Property<string>("Name");

                    b.Property<string>("Type");

                    b.Property<string>("Value");

                    b.HasKey("SystemParamId");

                    b.HasIndex("CreatedByUserId");

                    b.HasIndex("ModifiedByUserId");

                    b.ToTable("SystemParam");
                });

            modelBuilder.Entity("POS.Models.User", b =>
                {
                    b.Property<int>("UserId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<bool>("Active");

                    b.Property<string>("DisplayName");

                    b.Property<string>("Email");

                    b.Property<string>("FirstName");

                    b.Property<string>("LastName");

                    b.Property<string>("Password");

                    b.Property<string>("Token");

                    b.Property<DateTime?>("TokenCreatedDate");

                    b.Property<string>("Username");

                    b.HasKey("UserId");

                    b.ToTable("Users");

                    b.HasData(
                        new
                        {
                            UserId = 1,
                            Active = false,
                            DisplayName = "test",
                            Email = "test",
                            FirstName = "test",
                            LastName = "test",
                            Password = "test",
                            Username = "test"
                        });
                });

            modelBuilder.Entity("POS.Models.FavouriteOrder", b =>
                {
                    b.HasOne("POS.Models.Order", "Order")
                        .WithMany()
                        .HasForeignKey("OrderId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("POS.Models.User", "User")
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("POS.Models.Inventory", b =>
                {
                    b.HasOne("POS.Models.User", "CreatedBy")
                        .WithMany()
                        .HasForeignKey("CreatedByUserId");

                    b.HasOne("POS.Models.User", "ModifiedBy")
                        .WithMany()
                        .HasForeignKey("ModifiedByUserId");
                });

            modelBuilder.Entity("POS.Models.Message", b =>
                {
                    b.HasOne("POS.Models.NotificationItem", "NotificationItem")
                        .WithMany("Messages")
                        .HasForeignKey("NotificationItemId");
                });

            modelBuilder.Entity("POS.Models.NotificationItem", b =>
                {
                    b.HasOne("POS.Models.User", "CreatedBy")
                        .WithMany("NotificationItems")
                        .HasForeignKey("CreatedById");
                });

            modelBuilder.Entity("POS.Models.NotificationItemMethod", b =>
                {
                    b.HasOne("POS.Models.NotificationItem", "NotificationItem")
                        .WithMany("NotificationItemMethods")
                        .HasForeignKey("NotificationItemId");
                });

            modelBuilder.Entity("POS.Models.Order", b =>
                {
                    b.HasOne("POS.Models.User", "CreatedBy")
                        .WithMany()
                        .HasForeignKey("CreatedByUserId");

                    b.HasOne("POS.Models.User", "DeliverBy")
                        .WithMany()
                        .HasForeignKey("DeliverById");

                    b.HasOne("POS.Models.User", "ModifiedBy")
                        .WithMany()
                        .HasForeignKey("ModifiedByUserId");

                    b.HasOne("POS.Models.Purchaser", "Purchaser")
                        .WithMany("Orders")
                        .HasForeignKey("PurchaserId");

                    b.HasOne("POS.Models.Status", "Status")
                        .WithMany()
                        .HasForeignKey("StatusId");
                });

            modelBuilder.Entity("POS.Models.OrderItem", b =>
                {
                    b.HasOne("POS.Models.User", "CreatedBy")
                        .WithMany()
                        .HasForeignKey("CreatedByUserId");

                    b.HasOne("POS.Models.Inventory", "Inventory")
                        .WithMany()
                        .HasForeignKey("InventoryId");

                    b.HasOne("POS.Models.User", "ModifiedBy")
                        .WithMany()
                        .HasForeignKey("ModifiedByUserId");

                    b.HasOne("POS.Models.Order", "Order")
                        .WithMany("OrderItems")
                        .HasForeignKey("OrderId");
                });

            modelBuilder.Entity("POS.Models.Purchaser", b =>
                {
                    b.HasOne("POS.Models.User", "CreatedBy")
                        .WithMany()
                        .HasForeignKey("CreatedByUserId");

                    b.HasOne("POS.Models.User", "ModifiedBy")
                        .WithMany()
                        .HasForeignKey("ModifiedByUserId");
                });

            modelBuilder.Entity("POS.Models.Status", b =>
                {
                    b.HasOne("POS.Models.User", "CreatedBy")
                        .WithMany()
                        .HasForeignKey("CreatedByUserId");

                    b.HasOne("POS.Models.User", "ModifiedBy")
                        .WithMany()
                        .HasForeignKey("ModifiedByUserId");
                });

            modelBuilder.Entity("POS.Models.SystemParam", b =>
                {
                    b.HasOne("POS.Models.User", "CreatedBy")
                        .WithMany()
                        .HasForeignKey("CreatedByUserId");

                    b.HasOne("POS.Models.User", "ModifiedBy")
                        .WithMany()
                        .HasForeignKey("ModifiedByUserId");
                });
#pragma warning restore 612, 618
        }
    }
}
