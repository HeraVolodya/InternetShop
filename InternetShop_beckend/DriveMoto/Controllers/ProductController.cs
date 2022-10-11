using DriveMoto.DataBase;
using DriveMoto.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using AutoMapper;
using DriveMoto.Models.DTOs;
using DriveMoto.Models.AddRequest;
using DriveMoto.Models.UpdateRequests;


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

        [HttpGet]
        [Route("{id:Guid}")]
        public async Task<IActionResult> GetProductById([FromRoute] Guid id)
        {
            try
            {
                var product =
                await _dbProducts.Products.FirstOrDefaultAsync(x => x.Id == id);

                if (product == null)
                {
                    return NotFound();
                }

                return Ok(product);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }

        }
        
        [HttpPost("addProducts")]
        public async Task<IActionResult> AddProduct(AddProductRequest addProductRequest)
        {
            try
            {
                var product = new Product()
                {
                    Id = Guid.NewGuid(),
                    ImageURL = addProductRequest.ImageURL,
                    Producer = addProductRequest.Producer,
                    Model = addProductRequest.Model,
                    Diagonal = addProductRequest.Diagonal,
                    Camera = addProductRequest.Camera,
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
        
        [HttpPut]
        [Route("{id:Guid}")]
        public async Task<IActionResult> UpdateProduct([FromRoute] Guid id, UpdateProductRequest updateProductRequest)
        {
            try
            {
                var product = await _dbProducts.Products.FindAsync(id);
                if (product != null)
                {
                    product.ImageURL = updateProductRequest.ImageURL;
                    product.Producer = updateProductRequest.Producer;
                    product.Model = updateProductRequest.Model;
                    product.Diagonal = updateProductRequest.Diagonal;
                    product.Camera = updateProductRequest.Camera;
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
