// Entry point of the Angular application
import { bootstrapApplication } from '@angular/platform-browser'; // Bootstraps a standalone Angular component
import { AppComponent } from './app/app.component'; // Root component of the application
import { provideHttpClient } from '@angular/common/http'; // Provides HTTP client support
import { provideRouter } from '@angular/router'; // Enables routing functionality
import { routes } from './app/app.routes'; // Imports application routes

// Bootstraps the AppComponent with required providers like HttpClient and Router
bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(), // Registers HttpClient for making HTTP requests
    provideRouter(routes) // Sets up routing using the routes defined in app.routes.ts
  ]
});
