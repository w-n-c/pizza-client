import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';
import {ApiServiceService} from 'src/app/services/api-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  loginForm=this.fb.group({
    username: [''],
    password: ['']
  });
  user:any

  constructor(private fb: FormBuilder, private userSearch:ApiServiceService) { }

  signup(){
    let link = location.protocol + '//' + location.host + location.pathname +'/signup';
    window.location.replace(link);
  }

  orderNow(){
    let link = location.protocol + '//' + location.host + location.pathname +'/order';
    window.location.replace(link); 
  }

  async login():Promise<any>{
    let loginUser = this.loginForm.value
    let result = await this.userSearch.getUser(loginUser.username,loginUser.password);
    this.user = result;
    window.localStorage.setItem("user",''+this.user.id);
    window.localStorage.setItem("role",''+this.user.role.title);
    if(this.user.role.title == "customer"){
      window.location.replace(location.protocol + '//' + location.host +'/registeredcustomer')
    }else if(this.user.role.title == "employee"){

    }else{
      
    }
    console.log(this.user);
  }

  ngOnInit(): void {
  }



}
