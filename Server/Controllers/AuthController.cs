using Server.Data;
using Server.DTOs;
using Server.Models;
using Microsoft.AspNetCore.Mvc;

namespace Server.Controllers
{
    [Route("api")]
    [ApiController]
    public class AuthController: Controller
    {
        private readonly IUserRepository _repository;

        public AuthController(IUserRepository repository) 
        {
            _repository = repository;
        }

        [HttpPost("register")]
        public IActionResult Register(RegisterDto dto) 
        {
            var user = new User 
            {
                UserName = dto.UserName ?? "",
                Password = BCrypt.Net.BCrypt.HashPassword(dto.Password)
            };

            return Created("success", _repository.Create(user));
        }
    }
}