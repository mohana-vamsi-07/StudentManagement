using Microsoft.AspNetCore.Mvc;
using StudentManagemnent.Models;
using StudentManagemnent.Services;

namespace StudentManagemnent.Controllers
{
    // Define the route for the StudentController API
    [Route("api/[controller]")]
    [ApiController]
    public class StudentController : ControllerBase
    {
        // Declare a private readonly service for student operations
        private readonly IStudentService studentService;

        // Constructor to inject the IStudentService into the controller
        public StudentController(IStudentService studentService)
        {
            this.studentService = studentService;
        }

        // GET: api/<StudentController>
        // This action method handles HTTP GET requests to retrieve all students
        [HttpGet]
        public ActionResult<List<Student>> Get()
        {
            // Calls the student service to retrieve all students and returns the list
            return studentService.Get();
        }

        // GET api/<StudentController>/5
        // This action method handles HTTP GET requests to retrieve a single student by ID
        [HttpGet("{id}")]
        public ActionResult<Student> Get(string id)
        {
            // Fetch the student from the service using the provided ID
            var student = studentService.Get(id);

            // If student is not found, return a 404 Not Found response
            if (student == null)
            {
                return NotFound($"Student with id = {id} not found");
            }

            // If student is found, return the student data
            return student;
        }

        // POST api/<StudentController>
        // This action method handles HTTP POST requests to create a new student
        [HttpPost]
        public ActionResult<Student> Post([FromBody] Student student)
        {
            // Calls the service to create a new student record
            studentService.Create(student);

            // Returns a 201 Created response with the student's URI location
            return CreatedAtAction(nameof(Get), new { id = student.Id }, student);
        }

        // PUT api/<StudentController>/5
        // This action method handles HTTP PUT requests to update an existing student by ID
        [HttpPut("{id}")]
        public ActionResult Put(string id, [FromBody] Student student)
        {
            // Check if the student exists in the database
            var existingStudent = studentService.Get(id);

            // If student is not found, return a 404 Not Found response
            if (existingStudent == null)
            {
                return NotFound($"Student with id = {id} is not found");
            }

            // Calls the service to update the student details
            studentService.Update(id, student);

            // Return a 204 No Content response indicating successful update
            return NoContent();
        }

        // DELETE api/<StudentController>/5
        // This action method handles HTTP DELETE requests to remove a student by ID
        [HttpDelete("{id}")]
        public ActionResult Delete(string id)
        {
            // Check if the student exists in the database
            var student = studentService.Get(id);

            // If student is not found, return a 404 Not Found response
            if (student == null)
            {
                return NotFound($"Student with Id = {id} is not found");
            }

            // Calls the service to remove the student record
            studentService.Remove(student.Id);

            // Return a 200 OK response with a success message
            return Ok($"Student with Id = {id} is deleted");
        }
    }
}
