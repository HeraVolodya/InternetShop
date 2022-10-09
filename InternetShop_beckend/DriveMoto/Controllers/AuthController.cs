using DriveMoto.DataBase;
using InternetShop_beckend.Models;
using InternetShop_beckend.Services.Interfaces;
using Microsoft.AspNet.Identity;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace InternetShop_beckend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private IUserService _userService;
        private IConfiguration _configuration;
        private Microsoft.AspNetCore.Identity.UserManager<IdentityUser> _userManager;
        private APIDbContext _context;

        public AuthController(IUserService userService, IConfiguration configuration, Microsoft.AspNetCore.Identity.UserManager<IdentityUser> userManager, APIDbContext context)
        {
            _userService = userService;
            _configuration = configuration;
            _userManager = userManager;
            _context = context;
    }

        [HttpGet("get")]
        public async Task<IActionResult> Get() => Ok(await _context.Users.ToListAsync());


        [HttpGet("get/id")]
        public async Task<IActionResult> Get(string id)
        {
            try
            {
                var user = _context.Users.FindAsync(id);
                if (user == null)
                    return BadRequest("Some properties are not valid");

                return Ok(user);
            }
            catch(Exception e)
            {
                return BadRequest(e.Message);
            }
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
        [HttpPost("login")]
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

        [HttpDelete]
        [Route("{id:guid}")]
        public async Task<IActionResult> DeleteClient([FromRoute] string id)
        {
            try
            {
                var user = await _context.Users.FindAsync(id);

                if (user != null)
                {
                    _context.Remove(user);
                    await _context.SaveChangesAsync();

                    return Ok();
                }

                return NotFound();
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }

        }

        //[HttpPost("changePassword")]
        //public async Task<IActionResult> ChangePassword([FromBody] ChangePasswordModel model)
        //{
        //    var user = await _userManager.FindByNameAsync(model.UserName);
        //    if(user == null)
        //    {
        //        return StatusCode(StatusCodes.Status404NotFound);
        //    }
        //    if(string.Compare(model.NewPassword, model.ConfirmPassword) != 0)
        //    {
        //        return StatusCode(StatusCodes.Status400BadRequest);
        //    }
        //    var result = await _userManager.ChangePasswordAsync(user, model.NewPassword, model.ConfirmPassword);
        //    if (!result.Succeeded)
        //    {
        //        var errors = new List<string>();

        //        foreach (var error in result.Errors)
        //        {
        //            errors.Add(error.Description);
        //        }

        //        return StatusCode(StatusCodes.Status500InternalServerError);
        //    }

        //    return Ok(result);
        //}

    }
}
