import { Component, OnInit, Input } from '@angular/core';
import { Ticket } from 'src/app/models/ticket';

@Component({
  selector: 'app-pending-view',
  templateUrl: './pending-view.component.html',
  styleUrls: ['./pending-view.component.css']
})
export class PendingViewComponent implements OnInit {

  constructor() { }

  @Input() tickets:Ticket[]
  
  ngOnInit(): void {
  }
}
