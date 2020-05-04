import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from 'src/app/models/User';
import {Ticket} from 'src/app/models/ticket';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http:HttpClient) { }

  getUser(username, password):Promise<User>{
    let user = { password, username };
    let userPromise:Promise<User> = this.http.post<User>(`http://localhost:8080/users/`,user).toPromise();
    return userPromise;
  }

  createUser(username, password):Promise<User>{
    let user = {"username":username,
       "password":password,
       "role":{
         "id":2,
         "title":"customer"
       }
      };
    let userPromise:Promise<User> = this.http.post<User>(`http://localhost:8080/users`,user).toPromise();
    return userPromise;
  }

  submitTicket(ticket):Promise<Ticket>{
    let userPromise:Promise<Ticket> = this.http.post<Ticket>('http://localhost:8080/tickets',ticket).toPromise();
    return userPromise
  }
}
