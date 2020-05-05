import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiServiceService } from 'src/app/services/api-service.service';

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

  constructor(private fb: FormBuilder, private api:ApiServiceService, private router:Router) { }

  async enroll():Promise<any>{
    const { username, password } = this.signupForm.value;
    let user = await this.api.createUser(username, password);
    if (user.id) {
      this.router.navigate(['/'])
    }
  }

  ngOnInit(): void {
  }

}
