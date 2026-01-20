using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Emmory.Api.Migrations
{
    /// <inheritdoc />
    public partial class ChangedClothingColumns : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ImageUrl",
                table: "Clothings");

            migrationBuilder.DropColumn(
                name: "Size",
                table: "Clothings");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "ImageUrl",
                table: "Clothings",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Size",
                table: "Clothings",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }
    }
}
