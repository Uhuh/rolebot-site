import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CategoryCardModule } from 'src/app/shared/components/category-card/category-card.module';
import { CategoryStoreComponent } from './category-store.component';

@NgModule({
  declarations: [CategoryStoreComponent],
  imports: [
    RouterModule.forChild([{ path: '', component: CategoryStoreComponent }]),
    RouterModule,
    CommonModule,
    CategoryCardModule,
  ],
})
export class CategoryStoreModule {}
