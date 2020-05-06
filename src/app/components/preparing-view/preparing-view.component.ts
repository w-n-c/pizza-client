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

  @Input() ticket:Ticket
  pizzasLeft:number;

  constructor(private api:ApiServiceService, private router:Router) { }

  onPizzaClick(event, ticket:number) {
    event.target.parentNode.disabled = true;
    this.pizzasLeft--;
    if (this.pizzasLeft === 0) {
      this.ticket.status = 'baking'
      this.api.updateTicket(this.ticket)
    }
  }

  ngOnInit(): void {
    this.pizzasLeft = this.ticket.pizzas.length;
  }

}
