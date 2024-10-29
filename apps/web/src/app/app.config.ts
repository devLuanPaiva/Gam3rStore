import { routes } from './app.routes';
import { provideRouter } from '@angular/router';
import { provideServerRendering } from '@angular/platform-server';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';

export const appConfig: ApplicationConfig = {
  
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(withFetch()),
    provideServerRendering()
  ],
};
