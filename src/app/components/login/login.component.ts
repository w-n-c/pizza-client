import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { FormBuilder } from '@angular/forms';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder, private api:ApiServiceService, private router:Router) { };

  loginForm=this.fb.group({
    username: [''],
    password: ['']
  });

  signup(){
    this.router.navigate(["/signup"]);
  };

  orderNow(){
    this.router.navigate(["/order"]);
  };

  async login():Promise<any>{
    let credentials = this.loginForm.value
    let user:User = await this.api.getUser(credentials.username,credentials.password);
    window.localStorage.setItem("user",''+user.id);
    window.localStorage.setItem("username",user.username);
    window.localStorage.setItem("role",''+user.role.title);
    if (user.role.title == "customer") {
      this.router.navigate(["/registeredcustomer"]);
    } else if (user.role.title == "employee") {
      this.router.navigate(["/employee"])
    } else {
      alert("Inncorrect password or username");
    }
  };

  ngOnInit(): void {
  };

}
