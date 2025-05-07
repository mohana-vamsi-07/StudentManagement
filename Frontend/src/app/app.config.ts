// Import necessary modules from Angular core and router
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

// Import the application's routing configuration
import { routes } from './app.routes';

// Define the application-level configuration
export const appConfig: ApplicationConfig = {
  providers: [
    // Improves performance by coalescing multiple change detection events into one
    provideZoneChangeDetection({ eventCoalescing: true }),

    // Registers the routes defined in app.routes.ts
    provideRouter(routes)
  ]
};
