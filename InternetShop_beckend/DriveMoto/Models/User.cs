using Microsoft.AspNetCore.Identity;

namespace DriveMoto.Models
{
    public class User : IdentityUser
    {
        public List<CartItem>? CartItems { get; set; }

        public List<Favorite>? Favorites { get; set; }
    }
}
