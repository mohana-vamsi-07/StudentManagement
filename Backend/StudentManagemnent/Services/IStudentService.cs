using StudentManagemnent.Models;

namespace StudentManagemnent.Services
{
    // Interface for student-related operations to be implemented by StudentService
    public interface IStudentService
    {
        // Retrieve the list of all students
        List<Student> Get();

        // Retrieve a specific student by their unique ID
        Student Get(string id);

        // Add a new student record to the database
        Student Create(Student student);

        // Update an existing student's record by their ID
        void Update(string id, Student student);

        // Remove a student record by their ID
        void Remove(string id);
    }
}
