using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace POS.Migrations
{
    public partial class notificationPage : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "MethodType",
                columns: table => new
                {
                    MethodTypeId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Method = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MethodType", x => x.MethodTypeId);
                });

            migrationBuilder.CreateTable(
                name: "NotificationItems",
                columns: table => new
                {
                    NotificationItemId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Name = table.Column<string>(nullable: true),
                    PageContent = table.Column<string>(nullable: true),
                    CreatedDate = table.Column<DateTime>(nullable: false),
                    ModifiedDate = table.Column<DateTime>(nullable: false),
                    CreatedByUserId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_NotificationItems", x => x.NotificationItemId);
                    table.ForeignKey(
                        name: "FK_NotificationItems_Users_CreatedByUserId",
                        column: x => x.CreatedByUserId,
                        principalTable: "Users",
                        principalColumn: "UserId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "NotificationItemMethods",
                columns: table => new
                {
                    NotificationItemMethodId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    MethodTypeId = table.Column<int>(nullable: true),
                    NotificationItemId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_NotificationItemMethods", x => x.NotificationItemMethodId);
                    table.ForeignKey(
                        name: "FK_NotificationItemMethods_MethodType_MethodTypeId",
                        column: x => x.MethodTypeId,
                        principalTable: "MethodType",
                        principalColumn: "MethodTypeId",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_NotificationItemMethods_NotificationItems_NotificationItemId",
                        column: x => x.NotificationItemId,
                        principalTable: "NotificationItems",
                        principalColumn: "NotificationItemId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Messages",
                columns: table => new
                {
                    MessageId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Content = table.Column<string>(nullable: true),
                    Sender = table.Column<string>(nullable: true),
                    NotificationMethodId = table.Column<int>(nullable: true),
                    NotificationItemId = table.Column<int>(nullable: true),
                    CreatedDate = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Messages", x => x.MessageId);
                    table.ForeignKey(
                        name: "FK_Messages_NotificationItems_NotificationItemId",
                        column: x => x.NotificationItemId,
                        principalTable: "NotificationItems",
                        principalColumn: "NotificationItemId",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Messages_NotificationItemMethods_NotificationMethodId",
                        column: x => x.NotificationMethodId,
                        principalTable: "NotificationItemMethods",
                        principalColumn: "NotificationItemMethodId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.InsertData(
                table: "MethodType",
                columns: new[] { "MethodTypeId", "Method" },
                values: new object[] { 1, "SMS" });

            migrationBuilder.InsertData(
                table: "MethodType",
                columns: new[] { "MethodTypeId", "Method" },
                values: new object[] { 2, "Whatsapp" });

            migrationBuilder.InsertData(
                table: "MethodType",
                columns: new[] { "MethodTypeId", "Method" },
                values: new object[] { 3, "Phone" });

            migrationBuilder.CreateIndex(
                name: "IX_Messages_NotificationItemId",
                table: "Messages",
                column: "NotificationItemId");

            migrationBuilder.CreateIndex(
                name: "IX_Messages_NotificationMethodId",
                table: "Messages",
                column: "NotificationMethodId");

            migrationBuilder.CreateIndex(
                name: "IX_NotificationItemMethods_MethodTypeId",
                table: "NotificationItemMethods",
                column: "MethodTypeId");

            migrationBuilder.CreateIndex(
                name: "IX_NotificationItemMethods_NotificationItemId",
                table: "NotificationItemMethods",
                column: "NotificationItemId");

            migrationBuilder.CreateIndex(
                name: "IX_NotificationItems_CreatedByUserId",
                table: "NotificationItems",
                column: "CreatedByUserId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Messages");

            migrationBuilder.DropTable(
                name: "NotificationItemMethods");

            migrationBuilder.DropTable(
                name: "MethodType");

            migrationBuilder.DropTable(
                name: "NotificationItems");
        }
    }
}
