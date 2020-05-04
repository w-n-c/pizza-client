import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-view',
  templateUrl: './employee-view.component.html',
  styleUrls: ['./employee-view.component.css']
})

export class EmployeeViewComponent implements OnInit {

  constructor() { }

  // TODO: sort by date and create Models
  pending:Array<any> = [];
  preparing:Array<any> = [];
  done:Array<any> = [];
  baking:Array<any> = [];
  

  ngOnInit(): void {
    const input = [
      {id: 1, status: 'done', pizzas: [
        {id: 1, toppings: ['cheese', 'pepperoni', 'peppers']},
        {id: 2, toppings: ['cheese', 'peppers']}
      ]},
      {id: 2, status: 'pending', pizzas: [
        {id: 3, toppings: ['cheese', 'pepperoni', 'olives']},
        {id: 4, toppings: ['cheese', 'olives']}
      ]},
      {id: 3, status: 'preparing', pizzas: [
        {id: 5, toppings: ['cheese', 'pepperoni']},
        {id: 6, toppings: ['cheese' ]}
      ]},
      {id: 4, status: 'baking', pizzas: [
        {id: 7, toppings: ['cheese', 'sausage', 'peppers']},
        {id: 8, toppings: ['cheese', 'sausage']}
      ]},
      {id: 5, status: 'pending', pizzas: [
        {id: 9, toppings: ['cheese', 'anchovie', 'peppers']},
        {id: 10, toppings: ['cheese', 'ham']}
      ]},
      {id: 6, status: 'done', pizzas: [
        {id: 11, toppings: ['alfredo', 'artichoke', 'peppers']},
        {id: 12, toppings: ['cheese', 'bacon']}
      ]},
      {id: 7, status: 'baking', pizzas: [
        {id: 13, toppings: ['alfredo', 'artichoke', 'peppers']},
        {id: 14, toppings: ['cheese', 'bacon']}
      ]}
    ]
    input.forEach(el => {
      switch (el.status) {
        case "pending": this.pending.push(el); break;
        case "preparing":this.preparing.push(el); break;
        case "baking":this.baking.push(el); break;
        case "done":this.done.push(el); break;
        default: console.error("Invalid status for " + el);
      }
    })
  }


}
