import { enableProdMode } from '@angular/core';
import { defineCustomElements } from '@skyra/discord-components-core/loader';

import { environment } from './environments/environment';
import { AppComponent } from './app/app.component';
import { provideAnimations } from '@angular/platform-browser/animations';
import {
  withInterceptorsFromDi,
  provideHttpClient,
} from '@angular/common/http';

import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { APP_ROUTES } from './app/app-routing.module';
import {
  NgxGoogleAnalyticsModule,
  NgxGoogleAnalyticsRouterModule,
} from 'ngx-google-analytics';

if (environment.production) {
  enableProdMode();
}

defineCustomElements();

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(APP_ROUTES),
    //NgxGoogleAnalyticsModule.forRoot('G-J9V0P4S4H7'),
    NgxGoogleAnalyticsRouterModule,
    provideHttpClient(withInterceptorsFromDi()),
    provideAnimations(),
  ],
}).catch((err) => console.error(err));
