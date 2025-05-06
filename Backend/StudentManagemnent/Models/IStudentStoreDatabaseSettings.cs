public class StudentStoreDatabaseSettings : IStudentStoreDatabaseSettings
{
    public string StudentCoursesCollectionName { get; set; } = null!;
    public string ConnectionString { get; set; } = null!;
    public string DatabaseName { get; set; } = null!;
}

public interface IStudentStoreDatabaseSettings
{
    string StudentCoursesCollectionName { get; set; }
    string ConnectionString { get; set; }
    string DatabaseName { get; set; }
}
