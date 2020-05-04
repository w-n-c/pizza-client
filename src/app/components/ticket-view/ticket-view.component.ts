import { Component, OnInit, Input } from '@angular/core';
import { identifierModuleUrl } from '@angular/compiler';

@Component({
  selector: 'app-ticket-view',
  templateUrl: './ticket-view.component.html',
  styleUrls: ['./ticket-view.component.css']
})
export class TicketViewComponent implements OnInit {

  constructor() { }

  @Input() tickets:any[]
  @Input() status:string

  selected:number;

  showTicket(ticket:number) {
    this.selected = ticket;
  }
  
  ngOnInit(): void {
    this.selected = this.tickets.length ? 0 : -1
  }
}
