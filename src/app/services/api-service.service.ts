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

  path:string = 'http://ec2-3-86-26-45.compute-1.amazonaws.com:9000'

  getUser(username:string, password:string):Promise<User>{
    return this.http.post<User>(this.path+`users/login`, {username, password}).toPromise();
  }

  createUser(username:string, password:string):Promise<User>{
    let user = {
      username,
      password,
      role: { "id":2 } // 2 === user role
    };
    return this.http.post<User>(this.path+`/users/`,user).toPromise();
  }

  submitTicket(ticket:Ticket):Promise<Ticket>{
    return this.http.post<Ticket>(this.path+'/tickets', ticket).toPromise();
  }

  getTickets():Promise<Ticket[]> {
    return this.http.get<Ticket[]>(this.path+'/tickets/').toPromise();
  }

  getTicketsbyusername(username:string):Promise<Ticket[]> {
    return this.http.post<Ticket[]>(this.path+`/tickets/user/${username}`, username).toPromise();
  }

  getToppings():Promise<Topping[]>{
    return this.http.get<Topping[]>(this.path+'/toppings').toPromise();
  }

  updateTicket(ticket:Ticket):Promise<Ticket> {
    return this.http.post<Ticket>(this.path+`/tickets/${ticket.id}`, ticket).toPromise();
  }

  getToppingCount():Promise<any> {
    return this.http.get(this.path+`/toppings/count`).toPromise();
  }
}
