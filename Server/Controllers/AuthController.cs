using Server.Data;
using Server.DTOs;
using Server.Models;
using Server.Helpers;
using Microsoft.AspNetCore.Mvc;

namespace Server.Controllers
{
    [Route("api")]
    [ApiController]
    public class AuthController: Controller
    {
        private readonly IUserRepository _repository;
        private readonly JwtService _jwtService;

        public AuthController(IUserRepository repository,  JwtService jwtService) 
        {
            _repository = repository;
            _jwtService = jwtService;
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

        [HttpPost("login")]
        public IActionResult Login(LoginDto dto) 
        {
            var user = _repository.GetByUserName(dto.UserName);

            if (user == null) return BadRequest(new {message = "Invalid Credentials"});
             
            if (!BCrypt.Net.BCrypt.Verify(dto.Password, user.Password)) 
            {
                return BadRequest(new {message = "Invalid Credentials"});
            }           

            var jwt = _jwtService.Generate(user.Id);

            Response.Cookies.Append("jwt", jwt, new CookieOptions
            {
                HttpOnly = true
            });

            return Ok(new 
            {
                message = "success"
            });
        }
    }
}