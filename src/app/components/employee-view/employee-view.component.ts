import { Component, OnInit } from '@angular/core';
import { Ticket } from 'src/app/models/ticket';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-employee-view',
  templateUrl: './employee-view.component.html',
  styleUrls: ['./employee-view.component.css']
})
export class EmployeeViewComponent implements OnInit {

  constructor(private api:ApiServiceService) { }
  stringSort(f:string, s:string) {
    return f.localeCompare(s)
  }
  pendStatus:string = 'pending'
  prepStatus:string = 'preparing'
  doneStatus:string = 'done'
  bakeStatus:string = 'baking'
  pending:Array<Ticket> = [];
  preparing:Array<Ticket> = [];
  done:Array<Ticket> = [];
  baking:Array<Ticket> = [];
  log:Array<Ticket> = [];

  view:boolean = true;

  async getTickets() {
    const input = await this.api.getTickets();
    this.pending = new Array();
    this.preparing = new Array();
    this.done = new Array();
    this.baking = new Array();
    this.log = new Array()
    input.sort((first, second) => new Date(first.placementTime).getTime() - new Date(second.placementTime).getTime())
    input.forEach(el => {
      el.pizzas.sort((f, s) => f.id - s.id)
      el.pizzas.forEach(pizza => pizza.toppings.sort((f, s) => this.stringSort(f.name, s.name)))
      switch (el.status) {
        case "pending": this.pending.push(el); break;
        case "preparing":this.preparing.push(el); break;
        case "baking":this.baking.push(el); break;
        case "done":this.done.push(el); this.log.push(el); break;
      }
    })
    this.done.reverse();
  }

  setView(view:boolean) {
    this.view = view;
  }
  

  ngOnInit(): void {
    setInterval(this.getTickets.bind(this), 1000)
  }


}
