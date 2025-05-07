// Class used to map and store MongoDB configuration settings from appsettings.json
public class StudentStoreDatabaseSettings : IStudentStoreDatabaseSettings
{
    // Name of the MongoDB collection that stores student course data
    public string StudentCoursesCollectionName { get; set; } = null!;

    // MongoDB connection string used to connect to the database
    public string ConnectionString { get; set; } = null!;

    // Name of the MongoDB database
    public string DatabaseName { get; set; } = null!;
}

// Interface that defines the contract for accessing MongoDB configuration settings
public interface IStudentStoreDatabaseSettings
{
    string StudentCoursesCollectionName { get; set; }
    string ConnectionString { get; set; }
    string DatabaseName { get; set; }
}
