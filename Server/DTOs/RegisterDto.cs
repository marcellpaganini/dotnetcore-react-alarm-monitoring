using System.ComponentModel.DataAnnotations;

namespace Server.DTOs 
{
    public class RegisterDto 
    {
        [MinLength(2)]
        public string? UserName { get; set; }    

        [RegularExpression("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*.,?]).+$", ErrorMessage = "Invalid credentials.")]
        [MinLength(7)]
        public string? Password { get; set; }
    }
}