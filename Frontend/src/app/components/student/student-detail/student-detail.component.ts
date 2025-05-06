import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StudentService, Student } from '../../../services/student.service';

@Component({
  selector: 'app-student-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <h2>Student Details</h2>
    <div *ngIf="student">
      <p><strong>Name:</strong> {{ student.name }}</p>
      <p><strong>Gender:</strong> {{ student.gender }}</p>
      <p><strong>Age:</strong> {{ student.age }}</p>
      <p><strong>Graduated:</strong> {{ student.graduated ? 'Yes' : 'No' }}</p>
      <p><strong>Courses:</strong> {{ student.courses.join(', ') }}</p>
    </div>
  `
})
export class StudentDetailComponent implements OnInit {
  student!: Student;

  constructor(private route: ActivatedRoute, private studentService: StudentService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.studentService.getStudent(id).subscribe(data => {
        this.student = data;
      });
    }
  }
}
