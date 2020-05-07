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
  @Input() baking:number = 1;
  minutes:number = 12;
  interval;
  
  onStart() {
    this.baking = 0;
    this.interval = setInterval(() => {
      if(this.minutes > 0) {
        this.minutes--;
      } else {
        this.baking = -1;
        clearInterval(this.interval);
      }
    },1000)
  }

  onFinish(event) {
    event.target.disabled = true;
    this.ticket.status = 'done';
    this.api.updateTicket(this.ticket);
  }
}
