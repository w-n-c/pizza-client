import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { Ticket } from 'src/app/models/ticket';

@Component({
  selector: 'app-registered-customer',
  templateUrl: './registered-customer.component.html',
  styleUrls: ['./registered-customer.component.css']
})
export class RegisteredCustomerComponent implements OnInit {

  constructor(private router:Router, private api:ApiServiceService) { }
  ticketlist:Array<Ticket> = [];

  logout() {
    window.localStorage.clear();
    this.router.navigate(["/landing"]);
  };

  orderPage() {
    this.router.navigate(["/order"]);
  };

  async getUserOrders() {
    //let username = window.localStorage.getItem("username");
    const tickets = await this.api.getTickets();
    tickets.sort((first, second) => new Date(first.placementTime).getTime() - new Date(second.placementTime).getTime());
    tickets.forEach(ticket => this.ticketlist.push(ticket));
  }

  ngOnInit(): void {
    this.getUserOrders();
  }

}
