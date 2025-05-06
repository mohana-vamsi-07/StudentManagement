import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StudentService, Student } from '../../../services/student.service';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <h2>All Students</h2>
    <a routerLink="/students/add">Add Student</a>
    <ul>
      <li *ngFor="let student of students">
        {{ student.name }} — {{ student.age }} yrs
        <a [routerLink]="['/students', student.id]">Details</a>
        <a [routerLink]="['/students/edit', student.id]">Edit</a>
      </li>
    </ul>
  `
})
export class StudentListComponent implements OnInit {
  students: Student[] = [];

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.studentService.getAll().subscribe(data => this.students = data);
  }
}
