import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { Ticket } from 'src/app/models/ticket';
import { Observable } from 'rxjs'
import { interval, Subscription} from 'rxjs';

@Component({
  selector: 'app-registered-customer',
  templateUrl: './registered-customer.component.html',
  styleUrls: ['./registered-customer.component.css']
})
export class RegisteredCustomerComponent implements OnInit {

  constructor(private router:Router, private api:ApiServiceService) { }
  ticketlist:Array<Ticket> = [];
 
  mySubscrption: Subscription;

  logout() {
    window.localStorage.clear();
    this.router.navigate(["/landing"]);
  };

  orderPage() {
    this.router.navigate(["/order"]);
  };

  async getUserOrders() {

    let currentorder: Array<Ticket> = [];
    let username = window.localStorage.getItem('username');
    console.log(username);
    console.log(window.localStorage.getItem('username'))
    const tickets = await this.api.getTicketsbyusername(username);
    tickets.sort((first, second) => new Date(first.placementTime).getTime() - new Date(second.placementTime).getTime());
    tickets.forEach(ticket => currentorder.push(ticket));

    if(this.ticketlist.length !== currentorder.length) {
        this.ticketlist.splice(0, this.ticketlist.length);
        this.ticketlist = currentorder;
    }

  }

  ngOnInit(): void {
    this.mySubscrption= interval(1000).subscribe((x => {this.getUserOrders()}));
    //this.getUserOrders();
  }

}