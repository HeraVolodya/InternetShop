using AutoMapper;
using DriveMoto.DataBase;
using DriveMoto.Models.AddRequest;
using DriveMoto.Models.DTOs;
using DriveMoto.Models.UpdateRequests;
using DriveMoto.Models;
using Microsoft.AspNetCore.Mvc;
using DriveMoto.Models.AddRequests;
using Microsoft.EntityFrameworkCore;

namespace DriveMoto.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdvertisementControler : ControllerBase
    {
        private readonly APIDbContext _dbAdvertisement;
        private readonly IMapper _mapper;
        public AdvertisementControler(APIDbContext dbAdvertisement, IMapper mapper)
        {
            _dbAdvertisement = dbAdvertisement;
            _mapper = mapper;
        }
        [HttpGet("getAdvertisements")]
        public async Task<IActionResult> GetAdvertisements() => Ok(await _dbAdvertisement.Advertisements.ToListAsync());

        [HttpGet]
        [Route("{id:Guid}")]
        public async Task<IActionResult> GetAdvertisementById([FromRoute] Guid id)
        {
            try
            {
                var advertisement =
                await _dbAdvertisement.Advertisements.FirstOrDefaultAsync(x => x.Id == id);

                if (advertisement == null)
                {
                    return NotFound();
                }

                return Ok(advertisement);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }

        }

        [HttpPost("addAdvertisements")]
        public async Task<IActionResult> AddAdvertisement(AddAdvertisementRequest addAdvertisementRequest)
        {
            try
            {
                var advertisement = new Advertisement()
                {
                    Id = Guid.NewGuid(),
                    ImageURL = addAdvertisementRequest.ImageURL,
                    Text = addAdvertisementRequest.Text,
                };
                await _dbAdvertisement.Advertisements.AddAsync(advertisement);
                await _dbAdvertisement.SaveChangesAsync();

                return Ok(_mapper.Map<AdvertisementDTO>(advertisement));
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpPut]
        [Route("{id:Guid}")]
        public async Task<IActionResult> UpdateAdvertisement([FromRoute] Guid id, UpdateAdvertisementRequest updateAdvertisementRequest)
        {
            try
            {
                var advertisement = await _dbAdvertisement.Advertisements.FindAsync(id);
                if (advertisement != null)
                {
                    advertisement.ImageURL = updateAdvertisementRequest.ImageURL;
                    advertisement.Text = updateAdvertisementRequest.Text;

                    await _dbAdvertisement.SaveChangesAsync();

                    return Ok(_mapper.Map<AdvertisementDTO>(advertisement));

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
        public async Task<IActionResult> DeleteAdvertisement([FromRoute] Guid id)
        {
            try
            {
                var advertisement = await _dbAdvertisement.Advertisements.FindAsync(id);

                if (advertisement != null)
                {
                    _dbAdvertisement.Remove(advertisement);
                    await _dbAdvertisement.SaveChangesAsync();
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
