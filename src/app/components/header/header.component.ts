import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router) { }

  user = window.localStorage.getItem("user");

  signup(){
    this.router.navigate(['/signup'])
  }

  orderNow(){
    this.router.navigate(['/order'])
  }

  logout(){
    window.localStorage.clear();
    this.router.navigate(['']);
  }

  landing(){
    this.router.navigate(['/landing'])
  }

  getUser(){
    this.user=window.localStorage.getItem("user");
  }

  ngOnInit(): void {
    setInterval(this.getUser.bind(this), 600)
  }

}
