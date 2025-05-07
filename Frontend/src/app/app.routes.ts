// Importing Angular's routing type
import { Routes } from '@angular/router';

// Importing the components that will be linked to specific routes
import { StudentListComponent } from './components/student/student-list/student-list.component';
import { StudentAddComponent } from './components/student/student-add/student-add.component';
import { StudentEditComponent } from './components/student/student-edit/student-edit.component';
import { StudentDetailComponent } from './components/student/student-detail/student-detail.component';

// Defining the routes used in the application
export const routes: Routes = [
  // Default route - shows the list of students
  { path: '', component: StudentListComponent },

  // Route to add a new student
  { path: 'students/add', component: StudentAddComponent },

  // Route to edit an existing student by ID
  { path: 'students/edit/:id', component: StudentEditComponent },

  // Route to view details of a student by ID
  { path: 'students/:id', component: StudentDetailComponent }
];
