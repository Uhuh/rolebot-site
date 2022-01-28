import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { HomeComponent } from './modules/home/home.component';
import { StatsComponent } from './modules/stats/stats.component';
import { CommandsComponent } from './modules/commands/commands.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { FaqComponent } from './modules/faq/faq.component';
import { AboutComponent } from './modules/about/about.component';
import { AccordionComponent } from './shared/accordion/accordion.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    StatsComponent,
    CommandsComponent,
    FooterComponent,
    FaqComponent,
    AboutComponent,
    AccordionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
