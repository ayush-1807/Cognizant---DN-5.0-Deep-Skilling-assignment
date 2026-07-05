using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using WebApi_Handson1.Models;
using WebApi_Handson1.Filters;

namespace WebApi_Handson1.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Authorize]
    //[CustomAuthFilter]
    //[CustomExceptionFilter]
    public class EmployeeController : ControllerBase
    {
        private static List<Employee> GetEmployees()
        {
            return new List<Employee>
            {
                new Employee
                {
                    Id = 1,
                    Name = "Ayush",
                    Salary = 50000,
                    Permanent = true,
                    Department = new Department
                    {
                        Id = 1,
                        Name = "IT"
                    },
                    Skills = new List<Skill>
                    {
                        new Skill { Id = 1, Name = "C#" },
                        new Skill { Id = 2, Name = ".NET" }
                    },
                    DateOfBirth = new DateTime(2003, 1, 1)
                },
                new Employee
                {
                    Id = 2,
                    Name = "Rahul",
                    Salary = 60000,
                    Permanent = false,
                    Department = new Department
                    {
                        Id = 2,
                        Name = "HR"
                    },
                    Skills = new List<Skill>
                    {
                        new Skill { Id = 3, Name = "SQL" }
                    },
                    DateOfBirth = new DateTime(2002, 5, 15)
                }
            };
        }

        [HttpGet]
        public ActionResult<List<Employee>> Get()
        {
            return Ok(GetEmployees());
        }

        [HttpGet("{id}")]
        public ActionResult<Employee> Get(int id)
        {
            var emp = GetEmployees().FirstOrDefault(e => e.Id == id);

            if (emp == null)
                return NotFound();

            return Ok(emp);
        }

        [HttpPost]
        public IActionResult Post([FromBody] Employee employee)
        {
            return Ok("Employee Added Successfully");
        }

        [HttpPut("{id}")]
        public ActionResult<Employee> Put(int id, [FromBody] Employee employee)
        {
            var employees = GetEmployees();

            if (id <= 0)
                return BadRequest("Invalid employee id");

            var emp = employees.FirstOrDefault(e => e.Id == id);

            if (emp == null)
                return BadRequest("Invalid employee id");

            emp.Name = employee.Name;
            emp.Salary = employee.Salary;
            emp.Permanent = employee.Permanent;
            emp.Department = employee.Department;
            emp.Skills = employee.Skills;
            emp.DateOfBirth = employee.DateOfBirth;

            return Ok(emp);
        }
    }
}