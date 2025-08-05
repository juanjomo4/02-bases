import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

export const appConfig: ApplicationConfig = {
  providers: [
    // Configuración de la detección de cambios
    provideZoneChangeDetection({ eventCoalescing: true }),
    // Configuración de las rutas
    provideRouter(routes),
    // Uso de HashLocationStrategy para que las rutas no dependan de la URL
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
    },
  ],
};
