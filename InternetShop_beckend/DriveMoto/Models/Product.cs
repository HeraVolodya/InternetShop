using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace DriveMoto.Models
{
    public class Product
    {
        [Required]
        public Guid Id { get; set; }
        [Required] 
        public DateTimeOffset DataTime { get; set; } = DateTimeOffset.Now;
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
        //[Required]
        //public string? Year { get; set; }
        //[Required]
        //public string? Code { get; set; }
        //[Required]
        //public string? TypeCar { get; set; }
        [Required]
        public string? Price { get; set; }
        [Required]
        public string? Discount { get; set; }

        public List<CartItem>? CartItems { get; set; }

        public List<Favorite>? Favorites { get; set; }
    }
}
