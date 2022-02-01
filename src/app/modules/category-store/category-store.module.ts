import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CategoryStoreComponent } from './category-store.component';

@NgModule({
  declarations: [CategoryStoreComponent],
  imports: [
    RouterModule.forChild([{ path: '', component: CategoryStoreComponent }]),
    RouterModule,
    CommonModule,
  ],
})
export class CategoryStoreModule {}
