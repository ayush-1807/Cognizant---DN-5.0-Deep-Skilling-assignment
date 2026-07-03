using Microsoft.AspNetCore.Mvc;

namespace WebApi_Handson1.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ValuesController : ControllerBase
    {
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(new string[] { "Value1", "Value2" });
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            return Ok($"Value = {id}");
        }

        [HttpPost]
        public IActionResult Post([FromBody] string value)
        {
            return Ok("POST Success");
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] string value)
        {
            return Ok("PUT Success");
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            return Ok("DELETE Success");
        }
    }
}