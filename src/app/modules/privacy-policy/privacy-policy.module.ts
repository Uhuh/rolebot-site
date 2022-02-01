import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PrivacyPolicyComponent } from './privacy-policy.component';

@NgModule({
  declarations: [PrivacyPolicyComponent],
  imports: [
    RouterModule.forChild([{ path: '', component: PrivacyPolicyComponent }]),
    RouterModule,
    CommonModule,
  ],
})
export class PrivacyPolicyModule {}
