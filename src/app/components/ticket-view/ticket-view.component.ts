import { Component, OnInit, Input } from '@angular/core';
import { Ticket } from 'src/app/models/ticket';

@Component({
  selector: 'app-ticket-view',
  templateUrl: './ticket-view.component.html',
  styleUrls: ['./ticket-view.component.css']
})
export class TicketViewComponent implements OnInit {

  constructor() { }

  @Input() tickets:Ticket[]
  @Input() status:string

  selected:number;

  showTicket(ticket:number) {
    this.selected = ticket;
  }
  
  ngOnInit(): void {
    this.selected = 0
  }
}
