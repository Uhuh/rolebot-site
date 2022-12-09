import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TermsComponent } from './terms.component';

@NgModule({
  declarations: [TermsComponent],
  imports: [
    RouterModule.forChild([{ path: '', component: TermsComponent }]),
    RouterModule,
    CommonModule,
  ],
})
export class TermsModule {}
