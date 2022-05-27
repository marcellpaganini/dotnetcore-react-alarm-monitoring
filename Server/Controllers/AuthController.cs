using Microsoft.AspNetCore.Mvc;

namespace Server.Controllers
{
    [Route("")]
    [ApiController]
    public class AuthController: Controller
    {
        [HttpGet]
        public IActionResult Hello() 
        {
            return Ok("Success");
        }
    }
}