import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncrementadorComponent } from './incrementador/incrementador.component';
import { FormsModule } from '@angular/forms';
import { DonutComponent } from './donut/donut.component';



@NgModule({
  declarations: [IncrementadorComponent, DonutComponent],
  exports: [IncrementadorComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ComponentsModule { }
