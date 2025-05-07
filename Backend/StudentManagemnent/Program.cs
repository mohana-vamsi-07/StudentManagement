using Microsoft.Extensions.Options;
using MongoDB.Driver;
using StudentManagemnent.Models;
using StudentManagemnent.Services;

var builder = WebApplication.CreateBuilder(args);

// -----------------------------
// MongoDB Configuration Section
// -----------------------------

// Binds the "StudentStoreDatabaseSettings" section in appsettings.json to the StudentStoreDatabaseSettings class
builder.Services.Configure<StudentStoreDatabaseSettings>(
    builder.Configuration.GetSection(nameof(StudentStoreDatabaseSettings)));

// Registers the bound settings so they can be injected wherever IStudentStoreDatabaseSettings is needed
builder.Services.AddSingleton<IStudentStoreDatabaseSettings>(sp =>
    sp.GetRequiredService<IOptions<StudentStoreDatabaseSettings>>().Value);

// Registers MongoDB client for use throughout the app
builder.Services.AddSingleton<IMongoClient>(s =>
    new MongoClient(builder.Configuration.GetValue<string>("StudentStoreDatabaseSettings:ConnectionString")));

// Registers the custom StudentService with scoped lifetime (new instance per request)
builder.Services.AddScoped<IStudentService, StudentService>();

// -------------------------
// CORS Policy Configuration
// -------------------------

// Configures CORS to allow requests only from Angular frontend (http://localhost:4200)
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAngularApp", policy =>
    {
        policy.WithOrigins("http://localhost:4200")
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

// Adds support for API controllers
builder.Services.AddControllers();

// Adds tools for API documentation (Swagger)
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Applies the CORS policy defined above
app.UseCors("AllowAngularApp");

// Enables Swagger UI in development environment for testing APIs
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

// Redirects HTTP requests to HTTPS
app.UseHttpsRedirection();

// Enables Authorization middleware (can be extended later if needed)
app.UseAuthorization();

// Maps controller routes to endpoints
app.MapControllers();

// Starts the application
app.Run();
