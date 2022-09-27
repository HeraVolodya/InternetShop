
using InternetShop_beckend.Models;
using InternetShop_beckend.Response;

namespace InternetShop_beckend.Services.Interfaces
{
    public interface IUserService
    {
        Task<UserManagerResponse> RegisterUserAsync(RegisterModel model);

        Task<UserManagerResponse> LoginUserAsync(LoginModel model);

        Task<UserManagerResponse> ConfirmEmailAsync(string userId, string token);

        //Task<UserManagerResponse> ForgetPasswordAsync(string email);

        //Task<UserManagerResponse> ResetPasswordAsync(ResetPasswordModel model);
    }
}
