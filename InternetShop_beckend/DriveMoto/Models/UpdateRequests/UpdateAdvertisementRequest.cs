using System.ComponentModel.DataAnnotations;

namespace DriveMoto.Models.UpdateRequests
{
    public class UpdateAdvertisementRequest
    {
        [Required]
        public string? Text { get; set; }

        public string? ImageURL { get; set; }
    }
}
