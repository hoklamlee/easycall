using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace POS.Migrations
{
    public partial class updatemessageproperty : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Messages_NotificationItemMethods_NotificationMethodId",
                table: "Messages");

            migrationBuilder.DropForeignKey(
                name: "FK_NotificationItems_Users_CreatedByUserId",
                table: "NotificationItems");

            migrationBuilder.DropIndex(
                name: "IX_Messages_NotificationMethodId",
                table: "Messages");

            migrationBuilder.RenameColumn(
                name: "CreatedByUserId",
                table: "NotificationItems",
                newName: "CreatedById");

            migrationBuilder.RenameIndex(
                name: "IX_NotificationItems_CreatedByUserId",
                table: "NotificationItems",
                newName: "IX_NotificationItems_CreatedById");

            migrationBuilder.AddColumn<string>(
                name: "Value",
                table: "NotificationItemMethods",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "NotificationItemMethodId",
                table: "Messages",
                nullable: true);

            migrationBuilder.InsertData(
                table: "NotificationItemMethods",
                columns: new[] { "NotificationItemMethodId", "MethodTypeId", "NotificationItemId", "Value" },
                values: new object[] { 1, 1, null, null });

            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "UserId", "Active", "DisplayName", "Email", "FirstName", "LastName", "Password", "Token", "TokenCreatedDate", "Username" },
                values: new object[] { 1, false, "test", "test", "test", "test", "test", null, null, "test" });

            migrationBuilder.InsertData(
                table: "NotificationItems",
                columns: new[] { "NotificationItemId", "CreatedById", "CreatedDate", "ModifiedDate", "Name", "PageContent" },
                values: new object[] { 1, 1, new DateTime(2019, 12, 9, 11, 40, 11, 887, DateTimeKind.Local).AddTicks(5829), new DateTime(2019, 12, 9, 11, 40, 11, 888, DateTimeKind.Local).AddTicks(8969), "CV1202", "" });

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
                name: "FK_NotificationItems_Users_CreatedById",
                table: "NotificationItems",
                column: "CreatedById",
                principalTable: "Users",
                principalColumn: "UserId",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Messages_NotificationItemMethods_NotificationItemMethodId",
                table: "Messages");

            migrationBuilder.DropForeignKey(
                name: "FK_NotificationItems_Users_CreatedById",
                table: "NotificationItems");

            migrationBuilder.DropIndex(
                name: "IX_Messages_NotificationItemMethodId",
                table: "Messages");

            migrationBuilder.DeleteData(
                table: "NotificationItemMethods",
                keyColumn: "NotificationItemMethodId",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "NotificationItems",
                keyColumn: "NotificationItemId",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "UserId",
                keyValue: 1);

            migrationBuilder.DropColumn(
                name: "Value",
                table: "NotificationItemMethods");

            migrationBuilder.DropColumn(
                name: "NotificationItemMethodId",
                table: "Messages");

            migrationBuilder.RenameColumn(
                name: "CreatedById",
                table: "NotificationItems",
                newName: "CreatedByUserId");

            migrationBuilder.RenameIndex(
                name: "IX_NotificationItems_CreatedById",
                table: "NotificationItems",
                newName: "IX_NotificationItems_CreatedByUserId");

            migrationBuilder.CreateIndex(
                name: "IX_Messages_NotificationMethodId",
                table: "Messages",
                column: "NotificationMethodId");

            migrationBuilder.AddForeignKey(
                name: "FK_Messages_NotificationItemMethods_NotificationMethodId",
                table: "Messages",
                column: "NotificationMethodId",
                principalTable: "NotificationItemMethods",
                principalColumn: "NotificationItemMethodId",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_NotificationItems_Users_CreatedByUserId",
                table: "NotificationItems",
                column: "CreatedByUserId",
                principalTable: "Users",
                principalColumn: "UserId",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
