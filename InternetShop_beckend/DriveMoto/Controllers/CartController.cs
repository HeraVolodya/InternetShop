using AutoMapper;
using DriveMoto.DataBase;
using DriveMoto.Models.AddRequest;
using DriveMoto.Models.DTOs;
using DriveMoto.Models.UpdateRequests;
using DriveMoto.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using DriveMoto.Models.AddRequests;
using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations;

namespace DriveMoto.Controllers
{
    [ApiController]
    [Route("/api/[controller]")]

    public class CartController : Controller
    {
        private readonly APIDbContext _dbCarts;
        private readonly IMapper _mapper;

        public CartController(APIDbContext dbCarts, IMapper mapper)
        {
            _dbCarts = dbCarts;
            _mapper = mapper;
        }


        [HttpGet("getCarts")]
        public async Task<IActionResult> GetCarts() => Ok(await _dbCarts.Carts.ToListAsync());

        [HttpGet]
        [Route("{id:Guid}")]
        public async Task<IActionResult> GetCartById([FromRoute] Guid id)
        {
            try
            {
                var cart =
                await _dbCarts.Carts.FirstOrDefaultAsync(x => x.Id == id);

                if (cart == null)
                {
                    return NotFound();
                }

                return Ok(cart);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }

        }

        [HttpPost("addCart")]
        public async Task<IActionResult> AddCart(AddCartRequest addCartRequest)
        {
            try
            {
                var cart = new Cart()
                {
                    Id = Guid.NewGuid(),
                    ImageURL = addCartRequest.ImageURL,
                    Producer = addCartRequest.Producer,
                    Model = addCartRequest.Model,
                    TotalPrice = addCartRequest.TotalPrice,
                    Discount = addCartRequest.Discount,
                    Phone = addCartRequest.Phone,
                    Address = addCartRequest.Address

                
                };
                await _dbCarts.Carts.AddAsync(cart);
                await _dbCarts.SaveChangesAsync();

                return Ok(_mapper.Map<CartDTO>(cart));
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpDelete]
        [Route("{id:guid}")]
        public async Task<IActionResult> DeleteCart([FromRoute] Guid id)
        {
            try
            {
                var cart = await _dbCarts.Carts.FindAsync(id);

                if (cart != null)
                {
                    _dbCarts.Remove(cart);
                    await _dbCarts.SaveChangesAsync();
                    return Ok();
                }

                return NotFound();
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
    }
}
