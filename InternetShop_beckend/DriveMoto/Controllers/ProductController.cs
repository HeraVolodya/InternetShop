using DriveMoto.DataBase;
using DriveMoto.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using AutoMapper;
using DriveMoto.Models.DTOs;
using DriveMoto.Models.AddRequest;
using DriveMoto.Models.UpdateRequests;
using System.ComponentModel.DataAnnotations;

namespace DriveMoto.Controllers
{
    [ApiController]
    [Route("/api/[controller]")] 

    public class ProductController : Controller
    {
        private readonly APIDbContext _dbProducts;
        private readonly IMapper _mapper;

        public ProductController(APIDbContext dbProducts, IMapper mapper)
        {
            _dbProducts = dbProducts;
            _mapper = mapper;
        }

         
        [HttpGet("getProducts")]
        public async Task<IActionResult> GetProducts() => Ok(await _dbProducts.Products.ToListAsync());
        
        [HttpPost("addProducts")]
        public async Task<IActionResult> AddProduct(AddProductRequest addProductRequest)
        {
            try
            {
                var product = new Product()
                {
                    Id = Guid.NewGuid(),
                    ImageURL = addProductRequest.ImageURL,
                    NameAuto = addProductRequest.NameAuto,
                    Model = addProductRequest.Model,
                    EngineCapacity = addProductRequest.EngineCapacity,
                    CarMileage = addProductRequest.CarMileage,
                    //Year = addProductRequest.Year,
                    //Code = addProductRequest.Code,
                    //TypeCar = addProductRequest.TypeCar,
                    Price = addProductRequest.Price,
                    Discount = addProductRequest.Discount

                };
                await _dbProducts.Products.AddAsync(product);
                await _dbProducts.SaveChangesAsync();

                return Ok(_mapper.Map<ProductDTO>(product));
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
        
        [HttpPut("updateProducts")]
        public async Task<IActionResult> UpdateProduct([FromRoute] Guid id, UpdateProductRequest updateProductRequest)
        {
            try
            {
                var product = await _dbProducts.Products.FindAsync(id);
                if (product != null)
                {
                    product.ImageURL = updateProductRequest.ImageURL;
                    product.NameAuto = updateProductRequest.NameAuto;
                    product.Model = updateProductRequest.Model;
                    product.EngineCapacity = updateProductRequest.EngineCapacity;
                    product.CarMileage = updateProductRequest.CarMileage;
                    //product.Year = updateProductRequest.Year;
                    //product.Code = updateProductRequest.Code;
                    //product.TypeCar = updateProductRequest.TypeCar;
                    product.Price = updateProductRequest.Price;
                    product.Discount = updateProductRequest.Discount;

                    await _dbProducts.SaveChangesAsync();

                    return Ok(_mapper.Map<ProductDTO>(product));

                }
                return NotFound();
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
        
        [HttpDelete]
        [Route("{id:guid}")]
        public async Task<IActionResult> DeleteProduct([FromRoute] Guid id)
        {
            try
            {
                var product = await _dbProducts.Products.FindAsync(id);

                if (product != null)
                {
                    _dbProducts.Remove(product);
                    await _dbProducts.SaveChangesAsync();
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
