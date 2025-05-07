using StudentManagemnent.Models;
using MongoDB.Driver;

namespace StudentManagemnent.Services
{
    // Implementation of IStudentService to handle student data using MongoDB
    public class StudentService : IStudentService
    {
        // MongoDB collection for Student documents
        private readonly IMongoCollection<Student> _students;

        // Constructor initializes the MongoDB collection using settings and client
        public StudentService(IStudentStoreDatabaseSettings settings, IMongoClient mongoClient)
        {
            // Get the specified database from MongoDB
            var database = mongoClient.GetDatabase(settings.DatabaseName);

            // Get the student collection from the database
            _students = database.GetCollection<Student>(settings.StudentCoursesCollectionName);
        }

        // Creates a new student record in the collection
        public Student Create(Student student)
        {
            _students.InsertOne(student); // Insert the student document into MongoDB
            return student;
        }

        // Retrieves all student records from the collection
        public List<Student> Get()
        {
            // Find all documents; 'student => true' means select all
            return _students.Find(student => true).ToList();
        }

        // Retrieves a specific student record by ID
        public Student Get(string id)
        {
            // Find the first student with matching ID
            return _students.Find(student => student.Id == id).FirstOrDefault();
        }

        // Deletes a student record by ID
        public void Remove(string id)
        {
            // Delete the student where ID matches
            _students.DeleteOne(student => student.Id == id);
        }

        // Updates an existing student record by ID
        public void Update(string id, Student student)
        {
            student.Id = id; // Ensure the ID is set correctly
            // Replace the old record with the updated student object
            _students.ReplaceOne(s => s.Id == id, student);
        }
    }
}
