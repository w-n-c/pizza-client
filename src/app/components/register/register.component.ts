import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';

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

  constructor(private fb: FormBuilder) { }

  enroll(){
    console.log(this.signupForm.value)
  }

  ngOnInit(): void {
  }

}
