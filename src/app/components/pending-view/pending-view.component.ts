import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { Ticket } from 'src/app/models/ticket';

@Component({
  selector: 'app-pending-view',
  templateUrl: './pending-view.component.html',
  styleUrls: ['./pending-view.component.css']
})
export class PendingViewComponent implements OnInit {

  constructor(private api:ApiServiceService, private router:Router) { }

  @Input() ticket:Ticket
  
  onOrderClick(event) {
    event.target.disabled = true;
    this.ticket.status = 'preparing'
    this.api.updateTicket(this.ticket)
  }
   
  ngOnInit(): void {
  }
}
