using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
namespace StudentManagemnent.Models
{
    // When data is retrieved from mongodb database the student json data is mapped to this student class in .net
    [BsonIgnoreExtraElements]
    public class Student
    {
        // Within this student class we need few properties
        [BsonId]
        // BsonRepresentation attribute automatically converts json data type into .net data type
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; } = string.Empty;
        [BsonElement("name")]
        public string Name { get; set; } = string.Empty;
        [BsonElement("graduated")]
        public bool IsGraduated { get; set; }
        [BsonElement("courses")]
        public string[]? Courses { get; set; }
        [BsonElement("gender")]
        public string Gender { get; set; } = string.Empty;
        [BsonElement("age")]
        public int Age { get; set; }
    }
}
