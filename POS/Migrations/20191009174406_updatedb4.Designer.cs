﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using POS.Models;

namespace POS.Migrations
{
    [DbContext(typeof(POSContext))]
    [Migration("20191009174406_updatedb4")]
    partial class updatedb4
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.2.6-servicing-10079")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("POS.Models.Company", b =>
                {
                    b.Property<int>("CompanyId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("ContactPerson");

                    b.Property<string>("DisplayName_Chi");

                    b.Property<string>("DisplayName_Eng");

                    b.Property<string>("Location");

                    b.Property<long>("Longitude");

                    b.Property<string>("PhoneNo");

                    b.HasKey("CompanyId");

                    b.ToTable("Companys");
                });

            modelBuilder.Entity("POS.Models.Employee", b =>
                {
                    b.Property<long>("EmployeeId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<DateTime>("DateOfBirth");

                    b.Property<string>("Email");

                    b.Property<string>("FirstName");

                    b.Property<string>("LastName");

                    b.Property<string>("PhoneNumber");

                    b.HasKey("EmployeeId");

                    b.ToTable("Employees");

                    b.HasData(
                        new
                        {
                            EmployeeId = 1L,
                            DateOfBirth = new DateTime(1979, 4, 25, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Email = "uncle.bob@gmail.com",
                            FirstName = "Uncle",
                            LastName = "Bob",
                            PhoneNumber = "999-888-7777"
                        },
                        new
                        {
                            EmployeeId = 2L,
                            DateOfBirth = new DateTime(1981, 7, 13, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Email = "jan.kirsten@gmail.com",
                            FirstName = "Jan",
                            LastName = "Kirsten",
                            PhoneNumber = "111-222-3333"
                        });
                });

            modelBuilder.Entity("POS.Models.Inventory", b =>
                {
                    b.Property<int>("InventoryId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("CompanyId");

                    b.Property<string>("Description");

                    b.Property<string>("Name");

                    b.Property<long>("Price");

                    b.Property<long>("Quatity");

                    b.Property<string>("Unit");

                    b.HasKey("InventoryId");

                    b.HasIndex("CompanyId");

                    b.ToTable("Inventorys");
                });

            modelBuilder.Entity("POS.Models.Order", b =>
                {
                    b.Property<int>("OrderId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int?>("CompanyId");

                    b.Property<int?>("DeliverById");

                    b.Property<DateTime?>("DeliverDate");

                    b.Property<DateTime?>("OrderDate");

                    b.Property<int?>("PurchaserId");

                    b.Property<string>("Remark");

                    b.Property<int>("StatusId");

                    b.Property<int?>("UserId");

                    b.HasKey("OrderId");

                    b.HasIndex("CompanyId");

                    b.HasIndex("DeliverById");

                    b.HasIndex("PurchaserId");

                    b.HasIndex("StatusId");

                    b.HasIndex("UserId");

                    b.ToTable("Orders");
                });

            modelBuilder.Entity("POS.Models.OrderItem", b =>
                {
                    b.Property<int>("OrderItemId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int?>("CompanyId");

                    b.Property<int?>("InventoryId");

                    b.Property<int?>("OrderId");

                    b.Property<long>("Price");

                    b.Property<long>("Quatity");

                    b.Property<string>("Remark");

                    b.HasKey("OrderItemId");

                    b.HasIndex("CompanyId");

                    b.HasIndex("InventoryId");

                    b.HasIndex("OrderId");

                    b.ToTable("OrderItems");
                });

            modelBuilder.Entity("POS.Models.Purchaser", b =>
                {
                    b.Property<int>("PurchaserId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int?>("CompanyId");

                    b.Property<string>("ContactPerson");

                    b.Property<long>("Latitude");

                    b.Property<string>("Location");

                    b.Property<long>("Longitude");

                    b.Property<string>("Name");

                    b.Property<string>("PhoneNo");

                    b.HasKey("PurchaserId");

                    b.HasIndex("CompanyId");

                    b.ToTable("Purchasers");
                });

            modelBuilder.Entity("POS.Models.Status", b =>
                {
                    b.Property<int>("StatusId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Code");

                    b.Property<int?>("CompanyId");

                    b.Property<string>("Description");

                    b.HasKey("StatusId");

                    b.HasIndex("CompanyId");

                    b.ToTable("Statuses");
                });

            modelBuilder.Entity("POS.Models.User", b =>
                {
                    b.Property<int>("UserId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int?>("CompanyId");

                    b.Property<string>("DisplayName");

                    b.Property<string>("Email");

                    b.Property<string>("Password");

                    b.HasKey("UserId");

                    b.HasIndex("CompanyId");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("POS.Models.Inventory", b =>
                {
                    b.HasOne("POS.Models.Company", "Company")
                        .WithMany()
                        .HasForeignKey("CompanyId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("POS.Models.Order", b =>
                {
                    b.HasOne("POS.Models.Company", "Company")
                        .WithMany()
                        .HasForeignKey("CompanyId");

                    b.HasOne("POS.Models.User", "DeliverBy")
                        .WithMany("DeliverOrders")
                        .HasForeignKey("DeliverById");

                    b.HasOne("POS.Models.Purchaser", "Purchaser")
                        .WithMany("Orders")
                        .HasForeignKey("PurchaserId");

                    b.HasOne("POS.Models.Status", "Status")
                        .WithMany()
                        .HasForeignKey("StatusId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("POS.Models.User")
                        .WithMany("FavouriteOrder")
                        .HasForeignKey("UserId");
                });

            modelBuilder.Entity("POS.Models.OrderItem", b =>
                {
                    b.HasOne("POS.Models.Company", "Company")
                        .WithMany()
                        .HasForeignKey("CompanyId");

                    b.HasOne("POS.Models.Inventory", "Inventory")
                        .WithMany()
                        .HasForeignKey("InventoryId");

                    b.HasOne("POS.Models.Order", "Order")
                        .WithMany("OrderItems")
                        .HasForeignKey("OrderId");
                });

            modelBuilder.Entity("POS.Models.Purchaser", b =>
                {
                    b.HasOne("POS.Models.Company", "Company")
                        .WithMany()
                        .HasForeignKey("CompanyId");
                });

            modelBuilder.Entity("POS.Models.Status", b =>
                {
                    b.HasOne("POS.Models.Company", "Company")
                        .WithMany()
                        .HasForeignKey("CompanyId");
                });

            modelBuilder.Entity("POS.Models.User", b =>
                {
                    b.HasOne("POS.Models.Company", "Company")
                        .WithMany("Users")
                        .HasForeignKey("CompanyId");
                });
#pragma warning restore 612, 618
        }
    }
}
