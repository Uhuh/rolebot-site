import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StatsComponent } from './stats.component';

@NgModule({
  declarations: [StatsComponent],
  imports: [
    RouterModule.forChild([{ path: '', component: StatsComponent }]),
    RouterModule,
    CommonModule,
  ],
})
export class StatsModule {}
