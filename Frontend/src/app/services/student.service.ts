// Marks this class as injectable and available to be provided throughout the app
import { Injectable } from '@angular/core';

// Used for making HTTP requests to the backend
import { HttpClient } from '@angular/common/http';

// Used to represent asynchronous data streams from HTTP requests
import { Observable } from 'rxjs';

// Defines the structure of a Student object
export interface Student {
  id?: string;             // Optional ID (used for update/delete operations)
  name: string;            // Student name
  graduated: boolean;      // Graduation status
  gender: string;          // Gender of the student
  age: number;             // Age of the student
  courses: string[];       // Array of enrolled courses
}

// Decorator that allows this service to be injected via dependency injection in any component
@Injectable({
  providedIn: 'root' // Makes this service available globally
})
export class StudentService {
  // Base URL to the backend .NET API for student-related endpoints
  private apiUrl = 'https://localhost:7222/api/student';

  // Inject HttpClient to perform HTTP operations
  constructor(private http: HttpClient) {}

  // Fetches a list of all students from the backend
  getAll(): Observable<Student[]> {
    return this.http.get<Student[]>(this.apiUrl);
  }

  // Fetches a single student by ID
  getStudent(id: string): Observable<Student> {
    return this.http.get<Student>(`${this.apiUrl}/${id}`);
  }

  // Sends a POST request to add a new student
  createStudent(data: Student): Observable<Student> {
    return this.http.post<Student>(this.apiUrl, data);
  }

  // Sends a PUT request to update a student by ID
  updateStudent(id: string, data: Student): Observable<Student> {
    return this.http.put<Student>(`${this.apiUrl}/${id}`, data);
  }

  // Sends a DELETE request to remove a student by ID
  deleteStudent(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
