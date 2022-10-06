using System.ComponentModel.DataAnnotations;

namespace DriveMoto.Models.DTOs
{
    public class ProductDTO
    {
        [Required]
        public string? ImageURL { get; set; }
        [Required]
        public string? NameAuto { get; set; }
        [Required]
        public string? Model { get; set; }
        [Required]
        public string? EngineCapacity { get; set; }
        [Required]
        public string? CarMileage { get; set; }
        [Required]
        public int СodeProduct { get; set; }
        [Required]
        public string? Сategory { get; set; }
        [Required]
        public double Price { get; set; }
        [Required]
        public double Discount { get; set; }
    }
}
