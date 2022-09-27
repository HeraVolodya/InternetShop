using DriveMoto.Models;
using InternetShop_beckend.Models;
using InternetShop_beckend.Services.Interfaces;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace InternetShop_beckend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private IUserService _userService;
        private IConfiguration _configuration;

        public AuthController(IUserService userService, IConfiguration configuration)
        {
            _userService = userService;
            _configuration = configuration;
        }


        [HttpPost("register")]
        public async Task<IActionResult> RegisterAsync([FromBody] RegisterModel model)
        {
            if (ModelState.IsValid)
            {
                var result = await _userService.RegisterUserAsync(model);

                if (result.IsSuccess)
                    return Ok(result); // Status Code: 200 

                return BadRequest(result);
            }

            return BadRequest("Some properties are not valid"); // Status code: 400
        }

        // /api/auth/login
        [HttpPost("Login")]
        public async Task<IActionResult> LoginAsync([FromBody] LoginModel model)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    var result = await _userService.LoginUserAsync(model);

                    if (result.IsSuccess)
                    {
                        return Ok(result);
                    }

                    return BadRequest(result);
                }
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }


            return BadRequest("Some properties are not valid");
        }

        // /api/auth/confirmemail?userid&token
        [HttpGet("ConfirmEmail")]
        public async Task<IActionResult> ConfirmEmail(string userId, string token)
        {
            try
            {
                if (string.IsNullOrWhiteSpace(userId) || string.IsNullOrWhiteSpace(token))
                    return NotFound();

                var result = await _userService.ConfirmEmailAsync(userId, token);

                if (result.IsSuccess)
                {
                    return Redirect($"{_configuration["AppUrl"]}/ConfirmEmail.html");
                }

                return BadRequest(result);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

    }
}
