import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './sidenav/sidenav.component';

@NgModule({
  declarations: [NavbarComponent, SidenavComponent],
  imports: [RouterModule, BrowserAnimationsModule, CommonModule],
  exports: [NavbarComponent],
})
export class NavbarModule {}
