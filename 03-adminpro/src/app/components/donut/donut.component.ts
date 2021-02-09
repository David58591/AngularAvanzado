import { Component, Input, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';


@Component({
  selector: 'app-donut',
  templateUrl: './donut.component.html',
  styles: [
  ]
})
export class DonutComponent{

  @Input() title: string ='Sin título';
   
  // Doughnut
 @Input('labels') public doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
 @Input('data') public doughnutChartData: MultiDataSet = [
    [350, 450, 100],
  ];
  public doughnutChartType: ChartType = 'doughnut';

  public colors: Color[]=[
    {backgroundColor: ['#6857E6', '#009FEE', '#F02059']}
  ];
  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }
}
