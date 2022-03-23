import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar.component';
import { ManageUserComponent } from './manage-user/manage-user.component';

@NgModule({
  declarations: [NavbarComponent, ManageUserComponent],
  imports: [RouterModule, CommonModule],
  exports: [NavbarComponent],
})
export class NavbarModule {}
