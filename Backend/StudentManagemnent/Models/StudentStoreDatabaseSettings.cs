namespace StudentManagemnent.Models
{
    public class StudentStoreDatabaseSettings : IStudentStoreDatabaseSettings
    {
        string StudentCoursesCollectionName { get; set; } = string.Empty;
        string IStudentStoreDatabaseSettings.StudentCoursesCollectionName { get => StudentCoursesCollectionName; set => StudentCoursesCollectionName = value; }
        string ConnectionString { get; set; } = string.Empty;
        string IStudentStoreDatabaseSettings.ConnectionString { get => ConnectionString; set => ConnectionString = value; }
        string DatabaseName { get; set; } = string.Empty;
        string IStudentStoreDatabaseSettings.DatabaseName { get => DatabaseName; set => DatabaseName = value; }
    }
}
