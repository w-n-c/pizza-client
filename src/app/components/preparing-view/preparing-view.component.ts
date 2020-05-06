import { Component, OnInit, Input } from '@angular/core';
import { Ticket } from 'src/app/models/ticket';
import { Pizza } from 'src/app/models/pizza';

@Component({
  selector: 'app-preparing-view',
  templateUrl: './preparing-view.component.html',
  styleUrls: ['./preparing-view.component.css']
})
export class PreparingViewComponent implements OnInit {

  @Input() tickets:Array<Ticket>
  pizzasLeft:number[] = [];

  constructor() { }

  onPizzaClick(event, ticket:number) {
    event.target.parentNode.disabled = true;
    this.pizzasLeft[ticket]--;
    if (this.pizzasLeft[ticket] === 0) {
      //update status to baking
    }
  }

  ngOnInit(): void {
    for(let i = 0; i < this.tickets.length; i++) {
      this.pizzasLeft[i] = this.tickets[i].pizzas.length;
    }
  }

}
