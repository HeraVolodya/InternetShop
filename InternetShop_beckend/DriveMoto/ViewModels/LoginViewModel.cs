﻿using System.ComponentModel.DataAnnotations;

namespace DriveMoto.ViewModels
{
    public class LoginViewModel
    {
        [Required]
        [Display(Name = "User Name")]
        public string? UserName { get; set; }

        [Required]
        [DataType(DataType.Password)]
        [Display(Name = "Password")]
        public string? Password { get; set; }

        [Display(Name = "Remember?")]
        public bool RememberMe { get; set; }

        public string? ReturnUrl { get; set; }
    }
}
