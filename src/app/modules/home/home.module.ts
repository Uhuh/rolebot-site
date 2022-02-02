import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CategoryCardModule } from 'src/app/shared/components/category-card/category-card.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    RouterModule.forChild([{ path: '', component: HomeComponent }]),
    RouterModule,
    CategoryCardModule,
    CommonModule,
  ],
})
export class HomeModule {}
