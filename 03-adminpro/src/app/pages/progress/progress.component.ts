import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls : ['./progress.component.css']
})
export class ProgressComponent {
 progreso1 = 35;
 progreso2 = 15;

 get getProgreso1() {
   return this.progreso1 + '%';
 }
 get getProgreso2() {
   return this.progreso2 + '%';
 }

 cambioValorHijo(valor: number) {
   this.progreso1 = valor;
   this.progreso2 = valor;
 }
}
