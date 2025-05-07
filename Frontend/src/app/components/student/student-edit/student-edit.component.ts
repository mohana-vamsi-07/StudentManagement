import { Component, OnInit } from '@angular/core';                          // Importing Component and OnInit lifecycle hook
import { ActivatedRoute, Router, RouterModule } from '@angular/router';      // Importing ActivatedRoute for accessing route params and Router for navigation
import { CommonModule } from '@angular/common';                              // Importing CommonModule for *ngIf directive
import { FormsModule } from '@angular/forms';                                // Importing FormsModule for two-way data binding
import { StudentService, Student } from '../../../services/student.service';  // Importing StudentService and Student interface

@Component({
  selector: 'app-student-edit',                                             // The selector for the component
  standalone: true,                                                          // Marks this as a standalone component (no NgModule required)
  imports: [CommonModule, FormsModule, RouterModule],                        // Importing CommonModule, FormsModule, and RouterModule
  template: `
    <h2>Edit Student</h2>                                                   <!-- Title for the edit student page -->
    
    <!-- The form is shown only if 'student' data is available -->
    <form *ngIf="student" (ngSubmit)="updateStudent()">
      <label>Name: <input [(ngModel)]="student.name" name="name" /></label><br />
      <label>Gender: <input [(ngModel)]="student.gender" name="gender" /></label><br />
      <label>Age: <input type="number" [(ngModel)]="student.age" name="age" /></label><br />
      <label>Graduated:
        <select [(ngModel)]="student.graduated" name="graduated">
          <option [value]="true">Yes</option>
          <option [value]="false">No</option>
        </select>
      </label><br />
      <label>Courses: <input [(ngModel)]="coursesInput" name="courses" /></label><br />
      <button type="submit">Update</button>                                   <!-- Submit button for updating the student data -->
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
export class StudentEditComponent implements OnInit {
  student!: Student;               // A student object to hold student data
  coursesInput = '';               // A temporary string to hold course input before saving

  constructor(
    private route: ActivatedRoute,  // ActivatedRoute to get route parameters
    private router: Router,         // Router for navigation after submitting the form
    private studentService: StudentService  // StudentService to interact with the backend
  ) {}

  ngOnInit(): void {
    // Extracting student ID from the route parameters
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      // Fetching the student data using the ID
      this.studentService.getStudent(id).subscribe(data => {
        this.student = data;                  // Assigning the fetched student data to 'student' object
        this.coursesInput = data.courses.join(', ');  // Converting the courses array to a comma-separated string for easier input
      });
    }
  }

  // Method to handle form submission and update the student
  updateStudent() {
    // Converting the comma-separated string back into an array of courses
    this.student.courses = this.coursesInput.split(',').map(c => c.trim());
    
    // Updating the student data via the service and navigating to the home page after successful update
    this.studentService.updateStudent(this.student.id!, this.student).subscribe(() => {
      this.router.navigate(['/']);  // Navigating to the home page (list of students) after the update
    });
  }
}
