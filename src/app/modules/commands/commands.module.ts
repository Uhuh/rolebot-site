import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AccordionComponent } from 'src/app/shared/accordion/accordion.component';
import { CommandsComponent } from './commands.component';

@NgModule({
  declarations: [CommandsComponent, AccordionComponent],
  imports: [
    RouterModule.forChild([{ path: '', component: CommandsComponent }]),
    RouterModule,
    CommonModule,
  ],
})
export class CommandsModule {}
