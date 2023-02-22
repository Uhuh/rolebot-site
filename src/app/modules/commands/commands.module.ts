import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AccordionModule } from 'src/app/shared/components/accordion/accordion.module';
import { CommandsComponent } from './commands.component';

@NgModule({
  declarations: [CommandsComponent],
  imports: [
    AccordionModule,
    RouterModule.forChild([{ path: '', component: CommandsComponent }]),
    RouterModule,
    CommonModule,
  ],
})
export class CommandsModule {}
