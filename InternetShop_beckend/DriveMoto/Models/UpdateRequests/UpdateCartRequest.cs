using System.ComponentModel.DataAnnotations;

namespace DriveMoto.Models.UpdateRequests
{
    public class UpdateCartRequest
    {
        [Required]
        public string? ImageURL { get; set; }
        [Required]
        public string? Producer { get; set; }
        [Required]
        public string? Model { get; set; }
        [Required]
        public string? TotalPrice { get; set; }
        [Required]
        public string? Discount { get; set; }
        [Required]
        public string? Phone { get; set; }
        [Required]
        public string? Address { get; set; }
    }
}
