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
    [Migration("20191107161044_pucrchaserupdate")]
    partial class pucrchaserupdate
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.2.6-servicing-10079")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("POS.Models.Inventory", b =>
                {
                    b.Property<int>("InventoryId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<bool>("Active");

                    b.Property<string>("Category");

                    b.Property<int?>("CreatedBy_UserId");

                    b.Property<DateTime>("CreatedDate");

                    b.Property<string>("Description");

                    b.Property<int?>("ModifiedBy_UserId");

                    b.Property<DateTime>("ModifiedDate");

                    b.Property<string>("Name");

                    b.Property<long>("Price");

                    b.Property<long>("Quatity");

                    b.Property<string>("Unit");

                    b.HasKey("InventoryId");

                    b.HasIndex("CreatedBy_UserId");

                    b.HasIndex("ModifiedBy_UserId");

                    b.ToTable("Inventorys");
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
                });

            modelBuilder.Entity("POS.Models.Inventory", b =>
                {
                    b.HasOne("POS.Models.User", "CreatedBy")
                        .WithMany("CreatedInventories")
                        .HasForeignKey("CreatedBy_UserId");

                    b.HasOne("POS.Models.User", "ModifiedBy")
                        .WithMany("ModifiedInventories")
                        .HasForeignKey("ModifiedBy_UserId");
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
#pragma warning restore 612, 618
        }
    }
}
