// Import the Component decorator from Angular core
import { Component } from '@angular/core';

// Import the RouterModule to enable routing in this component
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root', // The root selector used in index.html <app-root></app-root>
  standalone: true,     // This is a standalone component (introduced in Angular 14+)
  imports: [RouterModule], // Import RouterModule to use <router-outlet>
  template: `<router-outlet></router-outlet>` // Acts as a placeholder to render routed components
})
export class AppComponent {}
