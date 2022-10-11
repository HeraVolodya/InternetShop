using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DriveMoto.Migrations
{
    /// <inheritdoc />
    public partial class mobile : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CarMileage",
                table: "Products");

            migrationBuilder.DropColumn(
                name: "Category",
                table: "Products");

            migrationBuilder.RenameColumn(
                name: "Year",
                table: "Products",
                newName: "Producer");

            migrationBuilder.RenameColumn(
                name: "NameAuto",
                table: "Products",
                newName: "Diagonal");

            migrationBuilder.RenameColumn(
                name: "EngineCapacity",
                table: "Products",
                newName: "Camera");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Producer",
                table: "Products",
                newName: "Year");

            migrationBuilder.RenameColumn(
                name: "Diagonal",
                table: "Products",
                newName: "NameAuto");

            migrationBuilder.RenameColumn(
                name: "Camera",
                table: "Products",
                newName: "EngineCapacity");

            migrationBuilder.AddColumn<string>(
                name: "CarMileage",
                table: "Products",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Category",
                table: "Products",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }
    }
}
