using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace POS.Migrations
{
    public partial class notificationItemAddType : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Type",
                table: "NotificationItems",
                nullable: true);

            migrationBuilder.UpdateData(
                table: "NotificationItems",
                keyColumn: "NotificationItemId",
                keyValue: 1,
                columns: new[] { "CreatedDate", "ModifiedDate" },
                values: new object[] { new DateTime(2019, 12, 19, 23, 48, 54, 561, DateTimeKind.Local).AddTicks(2294), new DateTime(2019, 12, 19, 23, 48, 54, 561, DateTimeKind.Local).AddTicks(9560) });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Type",
                table: "NotificationItems");

            migrationBuilder.UpdateData(
                table: "NotificationItems",
                keyColumn: "NotificationItemId",
                keyValue: 1,
                columns: new[] { "CreatedDate", "ModifiedDate" },
                values: new object[] { new DateTime(2019, 12, 19, 23, 30, 4, 212, DateTimeKind.Local).AddTicks(3405), new DateTime(2019, 12, 19, 23, 30, 4, 213, DateTimeKind.Local).AddTicks(639) });
        }
    }
}
