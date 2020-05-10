import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { Ticket } from 'src/app/models/ticket';

@Component({
  selector: 'app-baking-view',
  templateUrl: './baking-view.component.html',
  styleUrls: ['./baking-view.component.css']
})
export class BakingViewComponent {

  constructor(private api:ApiServiceService, private router:Router) { }

  @Input() ticket:Ticket;


  onComplete(event) {
    event.target.disabled = true;
    this.ticket.status = 'done';
    this.api.updateTicket(this.ticket);
  }
}
