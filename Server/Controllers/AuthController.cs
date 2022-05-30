using Server.Data;
using Microsoft.AspNetCore.Mvc;

namespace Server.Controllers
{
    [Route("")]
    [ApiController]
    public class AuthController: Controller
    {
        private readonly IUserRepository _repository;

        public AuthController(IUserRepository repository) 
        {
            _repository = repository;
        }

        [HttpGet]
        public IActionResult Hello() 
        {
            return Ok("Success");
        }
    }
}