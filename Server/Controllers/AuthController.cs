using Server.Data;
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
        public IActionResult Register() 
        {
            return Ok("Success");
        }
    }
}