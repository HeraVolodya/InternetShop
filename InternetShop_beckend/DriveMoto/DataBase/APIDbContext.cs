using DriveMoto.Models;
using DriveMoto.Models.DTOs;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace DriveMoto.DataBase
{
    public class APIDbContext : IdentityDbContext
    {
        public APIDbContext(DbContextOptions options) : base(options)
        {

        }
        public DbSet<Product> Products { get; set; }
        public DbSet<Cart> Carts { get; set; }
        public DbSet<CartItem> CartItems { get; set; }
        public DbSet<Favorite> Favorites { get; set; }
        public DbSet<Advertisement> Advertisements { get; set; }



        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<CartItem>()
                .HasOne(t => t.User)
                .WithMany(t => t.CartItems)
                .HasForeignKey(t => t.UserId)
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<CartItem>()
                     .HasOne(t => t.Product)
                     .WithMany(t => t.CartItems)
                     .HasForeignKey(t => t.ProductId)
                     .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<Favorite>()
                    .HasOne(t => t.User)
                    .WithMany(t => t.Favorites)
                    .HasForeignKey(t => t.UserId)
                    .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<Favorite>()
                     .HasOne(t => t.Product)
                     .WithMany(t => t.Favorites)
                     .HasForeignKey(t => t.ProductId)
                     .OnDelete(DeleteBehavior.Cascade);

            base.OnModelCreating(modelBuilder);
        }




    }

}
