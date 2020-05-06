import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from 'src/app/models/user';
import {Ticket} from 'src/app/models/ticket';
import {Topping} from 'src/app/models/topping'

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http:HttpClient) { }

  getUser(username:string, password:string):Promise<User>{
    return this.http.post<User>(`http://localhost:8080/users/login`, {username, password}).toPromise();
  }

  createUser(username:string, password:string):Promise<User>{
    let user = {
      username,
      password,
      role: { "id":2 } // 2 === user role
    };
    return this.http.post<User>(`http://localhost:8080/users/`,user).toPromise();
  }

  submitTicket(ticket:Ticket):Promise<Ticket>{
    return this.http.post<Ticket>('http://localhost:8080/tickets', ticket).toPromise();
  }

  getTickets():Promise<Ticket[]> {
    return this.http.get<Ticket[]>('http://localhost:8080/tickets/').toPromise();
  }

  getToppings():Promise<Topping[]>{
    return this.http.get<Topping[]>('http://localhost:8080/toppings').toPromise();
  }

  updateTicket(ticket:Ticket):Promise<Ticket> {
    return this.http.post<Ticket>(`http://localhost:8080/tickets/${ticket.id}`, ticket).toPromise();
  }
}
