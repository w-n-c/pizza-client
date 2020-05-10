import { Component, OnInit } from '@angular/core';
import {ApiServiceService} from 'src/app/services/api-service.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  constructor(private api:ApiServiceService) { }

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public toppingList = [];
  public toppingCount = [];
  public barChartLabels = this.toppingList;
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    {data: this.toppingCount, label: 'Toppings'}
  ];

  async fetchData(){
    let result = await this.api.getToppingCount();
    for(let topping of result){
      this.toppingList.push(topping.topping.name);
      this.toppingCount.push(topping.count)
    }
  }

  
  ngOnInit(): void {
    this.fetchData();
  }

}
