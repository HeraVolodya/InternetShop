using System.ComponentModel.DataAnnotations;

namespace DriveMoto.Models.UpdateRequests
{
    public class UpdateProductRequest
    {
        [Required]
        public string? ImageURL { get; set; }
        [Required]
        public string? Producer { get; set; }
        [Required]
        public string? Model { get; set; }
        [Required]
        public string? Diagonal { get; set; }
        [Required]
        public string? Camera { get; set; }
        [Required]
        public string? Price { get; set; }
        [Required]
        public string? Discount { get; set; }
    }
}
