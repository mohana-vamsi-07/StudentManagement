// Import necessary Angular core and router modules
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

// Define the component metadata
@Component({
  selector: 'app-home', // The HTML tag used to reference this component
  standalone: true,     // This is a standalone component (no need for AppModule)
  imports: [RouterModule], // Enables use of routing features like routerLink
  template: `
    <h1>Student Management</h1>         <!-- Heading shown on the home page -->
    <a routerLink="/students">View Students</a> <!-- Navigates to student list -->
  `
})

// Component class definition
export default class HomeComponent {}
