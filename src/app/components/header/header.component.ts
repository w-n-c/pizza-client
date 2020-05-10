import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router) { }


  async signup(){
    this.router.navigate(['/signup'])
  }

  async orderNow(){
    this.router.navigate(['/order'])
  }


  async landing(){
    this.router.navigate(['/landing'])
  }

  ngOnInit(): void {
  }

}
