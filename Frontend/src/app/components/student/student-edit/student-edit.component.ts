import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StudentService, Student } from '../../../services/student.service';

@Component({
  selector: 'app-student-edit',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  template: `
    <h2>Edit Student</h2>
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
      <button type="submit">Update</button>
    </form>
  `
})
export class StudentEditComponent implements OnInit {
  student!: Student;
  coursesInput = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private studentService: StudentService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.studentService.getStudent(id).subscribe(data => {
        this.student = data;
        this.coursesInput = data.courses.join(', ');
      });
    }
  }

  updateStudent() {
    this.student.courses = this.coursesInput.split(',').map(c => c.trim());
    this.studentService.updateStudent(this.student.id!, this.student).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
