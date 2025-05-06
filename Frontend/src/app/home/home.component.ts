import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  template: `
    <h1>Student Management</h1>
    <a routerLink="/students">View Students</a>
  `
})
export default class HomeComponent {}
