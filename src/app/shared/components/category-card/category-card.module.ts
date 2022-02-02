import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CategoryCardComponent } from './category-card.component';
import { CategoryReactRoleComponent } from './category-react-role/category-react-role.component';
import { CategoryReactionComponent } from './category-reaction/category-reaction.component';

@NgModule({
  declarations: [CategoryCardComponent, CategoryReactRoleComponent, CategoryReactionComponent],
  imports: [CommonModule],
  exports: [CategoryCardComponent],
})
export class CategoryCardModule {}
