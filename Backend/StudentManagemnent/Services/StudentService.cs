using StudentManagemnent.Models;
using MongoDB.Driver;

namespace StudentManagemnent.Services
{
    public class StudentService : IStudentService
    {
        private readonly IMongoCollection<Student> _students;

        public StudentService(IStudentStoreDatabaseSettings settings, IMongoClient mongoClient) 
        {
            var database = mongoClient.GetDatabase(settings.DatabaseName);
            _students = database.GetCollection<Student>(settings.StudentCoursesCollectionName);
        }
        public Student Create(Student student)
        {
            // Inserts the student object into the _students collection of the database
            _students.InsertOne(student);
            return student;
        }

        // Get() method is used to return list of all the students
        public List<Student> Get()
        {
            return _students.Find(student => true).ToList(); // Lambda Expression always returns true for the student to get the list of all the students
        }

        // Get(string id) returns a single student by id
        public Student Get(string id)
        {
            return _students.Find(student => student.Id == id).FirstOrDefault();
        }

        // Remove(string id) removes or deletes student by id
        public void Remove(string id)
        {
            _students.DeleteOne(student => student.Id == id);
        }

        // Update() methods updates the student with id with the updated value of student(2)
        public void Update(string id, Student student)
        {
            student.Id = id;
            _students.ReplaceOne(s => s.Id == id, student);
        }
    }
}
