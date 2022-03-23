import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CategoryCardModule } from 'src/app/shared/components/category-card/category-card.module';
import { GuildDetailsComponent } from './guild-details.component';
import { DetailsFormComponent } from './details-form/details-form.component';
import { CategoryFormComponent } from './category-form/category-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    GuildDetailsComponent,
    DetailsFormComponent,
    CategoryFormComponent,
  ],
  imports: [
    RouterModule.forChild([{ path: '', component: GuildDetailsComponent }]),
    RouterModule,
    CategoryCardModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class GuildDetailsModule {}
