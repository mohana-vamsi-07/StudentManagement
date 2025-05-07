using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace StudentManagemnent.Models
{
    // This class represents the structure of a Student document stored in the MongoDB collection
    [BsonIgnoreExtraElements] // Ignores any additional fields in the MongoDB document that are not defined in this class
    public class Student
    {
        // This property maps to the MongoDB _id field
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)] // Automatically converts between string in .NET and ObjectId in MongoDB
        public string Id { get; set; } = string.Empty;

        // Name of the student
        [BsonElement("name")]
        public string Name { get; set; } = string.Empty;

        // Indicates if the student has graduated
        [BsonElement("graduated")]
        public bool IsGraduated { get; set; }

        // List of courses the student is enrolled in
        [BsonElement("courses")]
        public string[]? Courses { get; set; }

        // Gender of the student
        [BsonElement("gender")]
        public string Gender { get; set; } = string.Empty;

        // Age of the student
        [BsonElement("age")]
        public int Age { get; set; }
    }
}
