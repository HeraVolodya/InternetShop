
//using DriveMoto.Models;
//using DriveMoto.ViewModels;
//using InternetShop_beckend.Models;
//using InternetShop_beckend.Services.Interfaces;
//using Microsoft.AspNet.Identity;
//using Microsoft.AspNetCore.Identity;
//using Microsoft.AspNetCore.Mvc;


//namespace DriveMoto.Controllers
//{
//    [ApiController]
//    [Route("/api/[controller]")]

//    public class AccountController : Controller
//    {
//        private IUserService _userService;
//        private IConfiguration _configuration;
//        //private readonly UserManager _userManager;
//        private readonly SignInManager<User> _signInManager;




//        public AccountController(IUserService userService, IConfiguration configuration)
//        {
//            _userService = userService;
//            _configuration = configuration;
//        }


//        //REGISTRATION
//        [HttpPost("register")]
//        public async Task<IActionResult> RegisterAsync([FromBody] RegisterModel model)
//        {
//            try
//            {
//                if (ModelState.IsValid)
//                {
//                    var result = await _userService.RegisterUserAsync(model);

//                    if (result.IsSuccess)
//                        return Ok(result); // Status Code: 200 

//                    return BadRequest(result);
//                }

//                return BadRequest("Some properties are not valid"); // Status code: 400
//            }
//            catch (Exception e)
//            {
//                return BadRequest(e.Message);
//            }

//        }

//        [HttpGet("login")]
//        public IActionResult Login(string? returnUrl = null)
//        {
//            try
//            {
//                return Ok(new LoginViewModel { ReturnUrl = returnUrl });
//            }
//            catch (Exception e)
//            {
//                return BadRequest(e.Message);
//            }
//        }

//        [HttpPost("Login")]
//        public async Task<IActionResult> LoginAsync([FromBody] LoginModel model)
//        {
//            try
//            {
//                if (ModelState.IsValid)
//                {
//                    var result = await _userService.LoginUserAsync(model);

//                    if (result.IsSuccess)
//                    {
//                        return Ok(result);
//                    }

//                    return BadRequest(result);
//                }
//            }
//            catch (Exception e)
//            {
//                return BadRequest(e.Message);
//            }


//            return BadRequest("Some properties are not valid");
//        }

//        //[HttpPost("logout")]
//        //[ValidateAntiForgeryToken]
//        //public async Task<IActionResult> Logout()
//        //{
//        //    try
//        //    {
//        //        // delete authentication cookies
//        //        await _signInManager.SignOutAsync();
//        //        return RedirectToAction("Index", "Home");
//        //    }
//        //    catch (Exception e)
//        //    {
//        //        return BadRequest(e.Message);
//        //    }
//        //}

//        //ChangePassword:
//        //[HttpGet("changePassword")]
//        //public async Task<IActionResult> ChangePassword(string id)
//        //{
//        //    User user = await _userManager.FindByIdAsync(id);
//        //    try
//        //    {
//        //        if (user == null)
//        //        {
//        //            return NotFound();
//        //        }
//        //        ChangePasswordViewModel model = new ChangePasswordViewModel { Id = user.Id, Email = user.Email };
//        //        return Ok(model);
//        //    }
//        //    catch (Exception e)
//        //    {
//        //        return BadRequest(e.Message);
//        //    }
//        //}

//        //[HttpPost("ChangePassword")]
//        //public async Task<IActionResult> ChangePassword(ChangePasswordViewModel model)
//        //{
//        //    try
//        //    {
//        //        if (ModelState.IsValid)
//        //        {
//        //            User user = await _userManager.FindByIdAsync(model.Id);
//        //            if (user != null)
//        //            {
//        //                var _passwordValidator =
//        //                    HttpContext.RequestServices.GetService(typeof(IPasswordValidator<User>)) as IPasswordValidator<User>;
//        //                var _passwordHasher =
//        //                    HttpContext.RequestServices.GetService(typeof(IPasswordHasher<User>)) as IPasswordHasher<User>;

//        //                IdentityResult result =
//        //                    await _passwordValidator.ValidateAsync(_userManager, user, model.NewPassword);
//        //                if (result.Succeeded)
//        //                {
//        //                    user.PasswordHash = _passwordHasher.HashPassword(user, model.NewPassword);
//        //                    await _userManager.UpdateAsync(user);
//        //                    return RedirectToAction("Index");
//        //                }
//        //                else
//        //                {
//        //                    foreach (var error in result.Errors)
//        //                    {
//        //                        ModelState.AddModelError(string.Empty, error.Description);
//        //                    }
//        //                }
//        //            }
//        //            else
//        //            {
//        //                ModelState.AddModelError(string.Empty, "Пользователь не найден");
//        //            }
//        //        }
//        //        return Ok(model);
//        //    }
//        //    catch (Exception e)
//        //    {
//        //        return BadRequest(e.Message);
//        //    }
//        //}
//    }
//}

