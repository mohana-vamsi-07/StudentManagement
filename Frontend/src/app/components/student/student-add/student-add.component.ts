import { Component } from '@angular/core';                                    // Importing Component from Angular core
import { CommonModule } from '@angular/common';                                // Importing CommonModule to use Angular directives like ngModel
import { FormsModule } from '@angular/forms';                                  // Importing FormsModule for two-way data binding (ngModel)
import { RouterModule, Router } from '@angular/router';                        // Importing RouterModule and Router for routing and navigation
import { StudentService, Student } from '../../../services/student.service';    // Importing StudentService to interact with backend and the Student interface

@Component({
  selector: 'app-student-add',                                                // The selector for the component
  standalone: true,                                                           // Marks this as a standalone component (no NgModule required)
  imports: [CommonModule, FormsModule, RouterModule],                          // Importing necessary modules for templates and routing
  template: `
    <h2>Add Student</h2>                                                      <!-- Title for adding student -->
    <form (ngSubmit)="addStudent()">                                           <!-- Form submission event -->
      <label>Name: <input [(ngModel)]="student.name" name="name" required /></label><br />
      <!-- Input field for name, bound to student.name with required validation -->
      
      <label>Gender: <input [(ngModel)]="student.gender" name="gender" required /></label><br />
      <!-- Input field for gender, bound to student.gender with required validation -->

      <label>Age: <input type="number" [(ngModel)]="student.age" name="age" required /></label><br />
      <!-- Input field for age, bound to student.age with required validation -->

      <label>Graduated:
        <select [(ngModel)]="student.graduated" name="graduated">
          <!-- Dropdown for graduation status with two options (Yes and No) -->
          <option [value]="true">Yes</option>
          <option [value]="false">No</option>
        </select>
      </label><br />

      <label>Courses: <input [(ngModel)]="coursesInput" name="courses" /></label><br />
      <!-- Input field for courses, bound to coursesInput variable -->

      <button type="submit">Add</button>                                        <!-- Submit button to add the student -->
    </form>
  `,
  styles: [`
    h2 {
      color: #2C3E50;
      text-align: center;
    }

    form {
      display: flex;
      flex-direction: column;
      max-width: 400px;
      margin: 20px auto;
      padding: 20px;
      background-color: #fff;
      border-radius: 5px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    label {
      margin: 10px 0 5px;
      font-weight: bold;
    }

    input, select {
      margin: 10px 0;
      padding: 8px;
      border-radius: 4px;
      border: 1px solid #ccc;
      font-size: 14px;
    }

    button {
      background-color: #3498DB;
      color: white;
      padding: 10px 15px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      font-size: 16px;
    }

    button:hover {
      background-color: #2980B9;
    }
  `]
})
export class StudentAddComponent {
  student: Student = {                                                        // Initialize the student object with empty values
    name: '',
    gender: '',
    age: 0,
    graduated: false,
    courses: []
  };

  coursesInput = '';  // Input field to capture courses as a comma-separated string

  constructor(private studentService: StudentService, private router: Router) {}

  // Method to handle adding a student when the form is submitted
  addStudent() {
    // Convert the comma-separated string of courses into an array
    this.student.courses = this.coursesInput.split(',').map(c => c.trim());
    
    // Call the studentService to create a new student record
    this.studentService.createStudent(this.student).subscribe(() => {
      // Navigate to the home page (or student list page) after adding the student
      this.router.navigate(['/']);
    });
  }
}
