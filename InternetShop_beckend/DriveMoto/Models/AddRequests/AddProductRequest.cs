using System.ComponentModel.DataAnnotations;

namespace DriveMoto.Models.AddRequest
{
    public class AddProductRequest
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
        public string? Year { get; set; }
        [Required]
        public string? Category { get; set; }
        [Required]
        public string? Price { get; set; }
        [Required]
        public string? Discount { get; set; }
    }
}
