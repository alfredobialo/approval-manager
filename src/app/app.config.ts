import {ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {providePrimeNG} from 'primeng/config';
import Aura from "@primeuix/themes/aura";
import {DEFAULT_ANIMATION_DURATION} from '../shared/Custom-Injection-Tokens';
export const appConfig: ApplicationConfig = {
  providers: [
    {provide : DEFAULT_ANIMATION_DURATION, useValue: 1200},
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    providePrimeNG({
      theme : {
        preset : Aura,
        options : {
          darkModeSelector : ".app-theme"
        }
      }
    })
  ]
};
