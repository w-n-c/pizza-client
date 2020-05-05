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

  // TODO: sort by date and create Models
  pendStatus:string = 'pending'
  prepStatus:string = 'preparing'
  doneStatus:string = 'done'
  bakeStatus:string = 'baking'
  pending:Array<Ticket> = [];
  preparing:Array<Ticket> = [];
  done:Array<Ticket> = [];
  baking:Array<Ticket> = [];

  async getTickets() {
    const input = await this.api.getTickets();
    input.forEach(el => {
      switch (el.status) {
        case "pending": this.pending.push(el); break;
        case "preparing":this.preparing.push(el); break;
        case "baking":this.baking.push(el); break;
        case "done":this.done.push(el); break;
        default: console.error("Invalid status for " + el);
      }
    })
  }
  

  ngOnInit(): void {
    this.getTickets()
  }


}
