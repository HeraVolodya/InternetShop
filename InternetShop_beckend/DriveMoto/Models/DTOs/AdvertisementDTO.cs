using System.ComponentModel.DataAnnotations;

namespace DriveMoto.Models.DTOs
{
    public class AdvertisementDTO
    {
        [Required]
        public string? Text { get; set; }

        public string? ImageURL { get; set; }
    }
}
