import { Component, OnInit } from '@angular/core';                          // Importing Component and OnInit lifecycle hook
import { ActivatedRoute, RouterModule } from '@angular/router';              // Importing ActivatedRoute for accessing route params
import { CommonModule } from '@angular/common';                              // Importing CommonModule for *ngIf directive
import { StudentService, Student } from '../../../services/student.service';  // Importing StudentService and Student interface

@Component({
  selector: 'app-student-detail',                                           // The selector for the component
  standalone: true,                                                          // Marks this as a standalone component (no NgModule required)
  imports: [CommonModule, RouterModule],                                    // Importing CommonModule and RouterModule
  template: `
    <h2>Student Details</h2>                                                <!-- Title for the student details page -->
    
    <!-- The student data will be displayed only if 'student' data is available -->
    <div *ngIf="student">
      <p><strong>Name:</strong> {{ student.name }}</p>                        <!-- Displaying the student's name -->
      <p><strong>Gender:</strong> {{ student.gender }}</p>                    <!-- Displaying the student's gender -->
      <p><strong>Age:</strong> {{ student.age }}</p>                          <!-- Displaying the student's age -->
      <p><strong>Graduated:</strong> {{ student.graduated ? 'Yes' : 'No' }}</p> <!-- Displaying if the student graduated -->
      <p><strong>Courses:</strong> {{ student.courses.join(', ') }}</p>        <!-- Displaying the student's courses as a comma-separated list -->
    </div>
  `,
  styles: [`
    h2 {
      color: #2C3E50;
      text-align: center;
    }

    div {
      background-color: #fff;
      padding: 20px;
      border-radius: 5px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      max-width: 600px;
      margin: 20px auto;
    }

    p {
      font-size: 16px;
      line-height: 1.5;
    }

    strong {
      color: #2C3E50;
    }
  `]
})
export class StudentDetailComponent implements OnInit {
  student!: Student;  // Declaring a student object to hold student data

  constructor(private route: ActivatedRoute, private studentService: StudentService) {} // Injecting ActivatedRoute to get route params and StudentService for backend communication

  ngOnInit(): void {
    // Extracting student ID from the route parameters
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      // Fetching the student data using the ID
      this.studentService.getStudent(id).subscribe(data => {
        this.student = data; // Assigning the fetched student data to 'student' object
      });
    }
  }
}
