import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';

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

  constructor(private fb: FormBuilder) { }

  onSubmit(){
    console.log(this.loginForm.value)
  }

  signup(){
    let link = location.protocol + '//' + location.host + location.pathname +'/signup';
    window.location.replace(link);
  }

  orderNow(){
    let link = location.protocol + '//' + location.host + location.pathname +'/order';
    window.location.replace(link); 
  }


  ngOnInit(): void {
  }



}
