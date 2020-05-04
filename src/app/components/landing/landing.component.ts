import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor() { }



  async signup(){
    let link = location.protocol + '//' + location.host + location.pathname +'/signup';
    window.location.replace(link);
  }

  async orderNow(){
    let link = location.protocol + '//' + location.host + location.pathname +'/order';
    window.location.replace(link);
  }

  ngOnInit(): void {
  }

}
