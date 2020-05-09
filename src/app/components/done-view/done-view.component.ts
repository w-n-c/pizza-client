import { Component, Input } from '@angular/core';
import { Ticket } from 'src/app/models/ticket';

@Component({
  selector: 'app-done-view',
  templateUrl: './done-view.component.html',
  styleUrls: ['./done-view.component.css']
})
export class DoneViewComponent {

  @Input() ticket:Ticket

}
