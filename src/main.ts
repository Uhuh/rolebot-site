import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideAnimations(),
  ],
})
  .catch((err) => console.error(err));


export const INVITE_URL = 'https://discord.com/oauth2/authorize?client_id=741682757486510081&scope=bot%20applications.commands&permissions=2416035904&response_type=code&redirect_uri=https://rolebot.gg/';
