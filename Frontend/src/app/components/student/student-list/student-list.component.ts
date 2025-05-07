import { Component, OnInit } from '@angular/core';           // Importing Component and OnInit lifecycle hook
import { CommonModule } from '@angular/common';               // Importing CommonModule for *ngFor directive
import { RouterModule } from '@angular/router';               // Importing RouterModule for routing functionality
import { StudentService, Student } from '../../../services/student.service';  // Importing StudentService and Student interface

@Component({
  selector: 'app-student-list',                             // The selector for the component
  standalone: true,                                          // Marks this as a standalone component (no NgModule required)
  imports: [CommonModule, RouterModule],                     // Importing CommonModule and RouterModule
  template: `
    <h2>All Students</h2>                                    <!-- Title for the student list page -->
    <a routerLink="/students/add">Add Student</a>              <!-- Link to the Add Student page -->

    <!-- List of students displayed here -->
    <ul>
      <li *ngFor="let student of students">                    <!-- Loop through each student -->
        {{ student.name }} — {{ student.age }} yrs             <!-- Display student name and age -->
        <a [routerLink]="['/students', student.id]">Details</a> <!-- Link to view student details -->
        <a [routerLink]="['/students/edit', student.id]">Edit</a>  <!-- Link to edit student -->
      </li>
    </ul>
  `,
  styles: [`
    h2 {
      color: #2C3E50;
      text-align: center;
    }

    a {
      color: #3498DB;
      text-decoration: none;
      font-weight: bold;
    }

    a:hover {
      text-decoration: underline;
    }

    ul {
      list-style-type: none;
      padding: 0;
      margin: 20px 0;
    }

    li {
      padding: 10px;
      border: 1px solid #ddd;
      margin-bottom: 10px;
      background-color: #f9f9f9;
      border-radius: 5px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    li a {
      margin-left: 10px;
    }

    button {
      background-color: #3498DB;
      color: white;
      padding: 8px 15px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      font-size: 14px;
    }

    button:hover {
      background-color: #2980B9;
    }
  `]
})
export class StudentListComponent implements OnInit {
  students: Student[] = [];  // Array to hold the list of students

  // Constructor to inject the StudentService
  constructor(private studentService: StudentService) {}

  // ngOnInit lifecycle hook - runs when the component is initialized
  ngOnInit(): void {
    // Fetch all students from the backend API
    this.studentService.getAll().subscribe(data => this.students = data);  // Assigning the fetched data to 'students' array
  }
}
