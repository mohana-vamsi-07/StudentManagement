import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { StudentService, Student } from '../../../services/student.service';

@Component({
  selector: 'app-student-add',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  template: `
    <h2>Add Student</h2>
    <form (ngSubmit)="addStudent()">
      <label>Name: <input [(ngModel)]="student.name" name="name" required /></label><br />
      <label>Gender: <input [(ngModel)]="student.gender" name="gender" required /></label><br />
      <label>Age: <input type="number" [(ngModel)]="student.age" name="age" required /></label><br />
      <label>Graduated:
        <select [(ngModel)]="student.graduated" name="graduated">
          <option [value]="true">Yes</option>
          <option [value]="false">No</option>
        </select>
      </label><br />
      <label>Courses: <input [(ngModel)]="coursesInput" name="courses" /></label><br />
      <button type="submit">Add</button>
    </form>
  `
})
export class StudentAddComponent {
  student: Student = {
    name: '',
    gender: '',
    age: 0,
    graduated: false,
    courses: []
  };
  coursesInput = '';

  constructor(private studentService: StudentService, private router: Router) {}

  addStudent() {
    this.student.courses = this.coursesInput.split(',').map(c => c.trim());
    this.studentService.createStudent(this.student).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
