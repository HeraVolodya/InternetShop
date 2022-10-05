
using InternetShop_beckend.Models;
using InternetShop_beckend.Response;
using Microsoft.AspNetCore.Mvc;

namespace InternetShop_beckend.Services.Interfaces
{
    public interface IUserService
    {
        Task<UserManagerResponse> RegisterUserAsync(RegisterModel model);

        Task<UserManagerResponse> LoginUserAsync(LoginModel model);

        Task<UserManagerResponse> ConfirmEmailAsync(string userId, string token);
    }
}
