using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace POS.Migrations
{
    public partial class notificationItemMedia : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "NotificationItemMedias",
                columns: table => new
                {
                    NotificationItemMediaId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Type = table.Column<string>(nullable: true),
                    Content = table.Column<byte[]>(nullable: true),
                    NotificationItemId = table.Column<int>(nullable: true),
                    CreatedDate = table.Column<DateTime>(nullable: false),
                    CreatedById = table.Column<int>(nullable: true),
                    ModifiedDate = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_NotificationItemMedias", x => x.NotificationItemMediaId);
                    table.ForeignKey(
                        name: "FK_NotificationItemMedias_Users_CreatedById",
                        column: x => x.CreatedById,
                        principalTable: "Users",
                        principalColumn: "UserId",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_NotificationItemMedias_NotificationItems_NotificationItemId",
                        column: x => x.NotificationItemId,
                        principalTable: "NotificationItems",
                        principalColumn: "NotificationItemId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.UpdateData(
                table: "NotificationItemMethods",
                keyColumn: "NotificationItemMethodId",
                keyValue: 1,
                columns: new[] { "Method", "NotificationItemId", "Value" },
                values: new object[] { "SMS", 1, "64974312" });

            migrationBuilder.UpdateData(
                table: "NotificationItems",
                keyColumn: "NotificationItemId",
                keyValue: 1,
                columns: new[] { "CreatedDate", "ModifiedDate" },
                values: new object[] { new DateTime(2019, 12, 19, 23, 30, 4, 212, DateTimeKind.Local).AddTicks(3405), new DateTime(2019, 12, 19, 23, 30, 4, 213, DateTimeKind.Local).AddTicks(639) });

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "UserId",
                keyValue: 1,
                column: "Active",
                value: true);

            migrationBuilder.CreateIndex(
                name: "IX_NotificationItemMedias_CreatedById",
                table: "NotificationItemMedias",
                column: "CreatedById");

            migrationBuilder.CreateIndex(
                name: "IX_NotificationItemMedias_NotificationItemId",
                table: "NotificationItemMedias",
                column: "NotificationItemId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "NotificationItemMedias");

            migrationBuilder.UpdateData(
                table: "NotificationItemMethods",
                keyColumn: "NotificationItemMethodId",
                keyValue: 1,
                columns: new[] { "Method", "NotificationItemId", "Value" },
                values: new object[] { null, null, null });

            migrationBuilder.UpdateData(
                table: "NotificationItems",
                keyColumn: "NotificationItemId",
                keyValue: 1,
                columns: new[] { "CreatedDate", "ModifiedDate" },
                values: new object[] { new DateTime(2019, 12, 9, 11, 46, 56, 968, DateTimeKind.Local).AddTicks(7149), new DateTime(2019, 12, 9, 11, 46, 56, 969, DateTimeKind.Local).AddTicks(4027) });

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "UserId",
                keyValue: 1,
                column: "Active",
                value: false);
        }
    }
}
