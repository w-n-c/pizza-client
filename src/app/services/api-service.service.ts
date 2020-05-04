import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http:HttpClient) { }

  getUser(username, password):Promise<any>{
    let user = { password, username };
    let userPromise:Promise<any> = this.http.post(`http://localhost:8080/users/`,user).toPromise();

    return userPromise;
  }

  createUser(username, password):Promise<any>{
    let user = {"username":username,
       "password":password,
       "role":{
         "id":2,
         "title":"customer"
       }
      };
      console.log(user)
    let userPromise:Promise<any> = this.http.post(`http://localhost:8080/users`,user).toPromise();
    return userPromise;
  }

  submitTicket(ticket):Promise<any>{
    let userPromise:Promise<any> = this.http.post('http://localhost:8080/tickets',ticket).toPromise();
    return userPromise
  }
}
