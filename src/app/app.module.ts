import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { NavbarModule } from './shared/components/navbar/navbar.module';
import { FooterModule } from './shared/components/footer/footer.module';
import { COOKIES } from './shared/tokens/cookies.token';
import Cookies from 'js-cookie';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LOCAL_STORAGE } from './shared/tokens/localStorage.token';
import { AuthInceptor } from './shared/interceptors/http-interceptor';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavbarModule,
    FooterModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
  ],
  providers: [
    {
      provide: COOKIES,
      useValue: Cookies,
    },
    {
      provide: LOCAL_STORAGE,
      useValue: window.localStorage,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
