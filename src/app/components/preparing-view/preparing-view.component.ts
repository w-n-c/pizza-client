import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { Ticket } from 'src/app/models/ticket';

@Component({
  selector: 'app-preparing-view',
  templateUrl: './preparing-view.component.html',
  styleUrls: ['./preparing-view.component.css']
})
export class PreparingViewComponent implements OnInit {

  @Input() tickets:Array<Ticket>
  pizzasLeft:number[] = [];

  constructor(private api:ApiServiceService, private router:Router) { }

  onPizzaClick(event, ticket:number) {
    event.target.parentNode.disabled = true;
    this.pizzasLeft[ticket]--;
    if (this.pizzasLeft[ticket] === 0) {
      let prepared = this.tickets[ticket];
      prepared.status = 'baking'
      this.api.updateTicket(prepared)
    }
  }

  ngOnInit(): void {
    for(let i = 0; i < this.tickets.length; i++) {
      this.pizzasLeft[i] = this.tickets[i].pizzas.length;
    }
  }

}
