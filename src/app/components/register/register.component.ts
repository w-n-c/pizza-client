import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';
import {ApiServiceService} from 'src/app/services/api-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  signupForm=this.fb.group({
    username: [''],
    password: ['']
  });

  constructor(private fb: FormBuilder, private userCreate:ApiServiceService) { }

  async enroll():Promise<any>{
    let newUser = this.signupForm.value;
    let result = await this.userCreate.createUser(newUser.username,newUser.password);
    if(result.id !== 0){
      window.location.replace(location.protocol + '//' + location.host+'/registeredcustomer')
    }
  }

  ngOnInit(): void {
  }

}
