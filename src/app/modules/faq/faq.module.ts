import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FaqComponent } from './faq.component';

@NgModule({
  declarations: [FaqComponent],
  imports: [
    RouterModule.forChild([{ path: '', component: FaqComponent }]),
    RouterModule,
    CommonModule,
  ],
})
export class FaqModule {}
