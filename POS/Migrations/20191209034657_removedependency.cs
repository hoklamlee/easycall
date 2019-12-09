using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace POS.Migrations
{
    public partial class removedependency : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Messages_NotificationItemMethods_NotificationItemMethodId",
                table: "Messages");

            migrationBuilder.DropForeignKey(
                name: "FK_NotificationItemMethods_MethodType_MethodTypeId",
                table: "NotificationItemMethods");

            migrationBuilder.DropIndex(
                name: "IX_NotificationItemMethods_MethodTypeId",
                table: "NotificationItemMethods");

            migrationBuilder.DropIndex(
                name: "IX_Messages_NotificationItemMethodId",
                table: "Messages");

            migrationBuilder.DropColumn(
                name: "MethodTypeId",
                table: "NotificationItemMethods");

            migrationBuilder.DropColumn(
                name: "NotificationItemMethodId",
                table: "Messages");

            migrationBuilder.DropColumn(
                name: "NotificationMethodId",
                table: "Messages");

            migrationBuilder.AddColumn<string>(
                name: "Method",
                table: "NotificationItemMethods",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Method",
                table: "Messages",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Value",
                table: "Messages",
                nullable: true);

            migrationBuilder.UpdateData(
                table: "NotificationItems",
                keyColumn: "NotificationItemId",
                keyValue: 1,
                columns: new[] { "CreatedDate", "ModifiedDate" },
                values: new object[] { new DateTime(2019, 12, 9, 11, 46, 56, 968, DateTimeKind.Local).AddTicks(7149), new DateTime(2019, 12, 9, 11, 46, 56, 969, DateTimeKind.Local).AddTicks(4027) });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Method",
                table: "NotificationItemMethods");

            migrationBuilder.DropColumn(
                name: "Method",
                table: "Messages");

            migrationBuilder.DropColumn(
                name: "Value",
                table: "Messages");

            migrationBuilder.AddColumn<int>(
                name: "MethodTypeId",
                table: "NotificationItemMethods",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "NotificationItemMethodId",
                table: "Messages",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "NotificationMethodId",
                table: "Messages",
                nullable: true);

            migrationBuilder.UpdateData(
                table: "NotificationItemMethods",
                keyColumn: "NotificationItemMethodId",
                keyValue: 1,
                column: "MethodTypeId",
                value: 1);

            migrationBuilder.UpdateData(
                table: "NotificationItems",
                keyColumn: "NotificationItemId",
                keyValue: 1,
                columns: new[] { "CreatedDate", "ModifiedDate" },
                values: new object[] { new DateTime(2019, 12, 9, 11, 40, 11, 887, DateTimeKind.Local).AddTicks(5829), new DateTime(2019, 12, 9, 11, 40, 11, 888, DateTimeKind.Local).AddTicks(8969) });

            migrationBuilder.CreateIndex(
                name: "IX_NotificationItemMethods_MethodTypeId",
                table: "NotificationItemMethods",
                column: "MethodTypeId");

            migrationBuilder.CreateIndex(
                name: "IX_Messages_NotificationItemMethodId",
                table: "Messages",
                column: "NotificationItemMethodId");

            migrationBuilder.AddForeignKey(
                name: "FK_Messages_NotificationItemMethods_NotificationItemMethodId",
                table: "Messages",
                column: "NotificationItemMethodId",
                principalTable: "NotificationItemMethods",
                principalColumn: "NotificationItemMethodId",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_NotificationItemMethods_MethodType_MethodTypeId",
                table: "NotificationItemMethods",
                column: "MethodTypeId",
                principalTable: "MethodType",
                principalColumn: "MethodTypeId",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
