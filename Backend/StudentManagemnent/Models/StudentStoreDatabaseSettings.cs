namespace StudentManagemnent.Models
{
    // This class implements the IStudentStoreDatabaseSettings interface, binding the database configuration settings.
    public class StudentStoreDatabaseSettings : IStudentStoreDatabaseSettings
    {
        // This property represents the name of the collection in MongoDB where student course data is stored.
        // Initialized with an empty string.
        string StudentCoursesCollectionName { get; set; } = string.Empty;

        // This getter and setter enable access to the StudentCoursesCollectionName property.
        // Used for binding to the configuration settings.
        string IStudentStoreDatabaseSettings.StudentCoursesCollectionName
        {
            get => StudentCoursesCollectionName;
            set => StudentCoursesCollectionName = value;
        }

        // This property represents the MongoDB connection string.
        // The connection string is used to connect to the MongoDB server.
        string ConnectionString { get; set; } = string.Empty;

        // This getter and setter enable access to the ConnectionString property.
        // Used for binding to the configuration settings.
        string IStudentStoreDatabaseSettings.ConnectionString
        {
            get => ConnectionString;
            set => ConnectionString = value;
        }

        // This property represents the name of the database to be used in MongoDB.
        // Initialized with an empty string.
        string DatabaseName { get; set; } = string.Empty;

        // This getter and setter enable access to the DatabaseName property.
        // Used for binding to the configuration settings.
        string IStudentStoreDatabaseSettings.DatabaseName
        {
            get => DatabaseName;
            set => DatabaseName = value;
        }
    }
}
