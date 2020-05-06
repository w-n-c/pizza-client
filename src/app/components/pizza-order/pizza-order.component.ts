import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormArray,FormBuilder, Validators } from '@angular/forms';
import {ApiServiceService} from 'src/app/services/api-service.service'
import { Pizza } from 'src/app/models/pizza'
import { Ticket } from 'src/app/models/ticket';
import { User } from 'src/app/models/user';


@Component({
  selector: 'app-pizza-order',
  templateUrl: './pizza-order.component.html',
  styleUrls: ['./pizza-order.component.css']
})
export class PizzaOrderComponent implements OnInit {

  toppingList:Array<any>;
  toppingForm: FormGroup;
  pizza = {};
  pizzaList:Array<any>=[];
  totalPrice:number=0;

  constructor(private fb: FormBuilder, private api:ApiServiceService) { }

  buildForm(){
    this.toppingForm = this.fb.group({
      toppings: new FormArray([])
    });
  }

  buildToppings(){
    this.toppingList.forEach((o,i) => {
      const control = new FormControl(i===0);
      (this.toppingForm.controls.toppings as FormArray).push(control);
    });
  }

  async fetchToppingList(){
    let result = await this.api.getToppings();
    
    for (let i=0;i<result.length;i++){
      if(i===0){
        result[i]["selected"] = true;
      }else{
        result[i]["selected"] = false;
      }
    }
  
    this.toppingList = result;
    console.log(this.toppingList)
    this.buildForm();
    this.buildToppings();
  }

  submit(){
    this.pizza={};

    const selectedToppingsIds = this.toppingForm.value.toppings
    .map((v,i) => (v ? this.toppingList[i].id : null))
    .filter(v=> v !==null);

    let pizzaString ='Pizza with ';
    let pizzaPrice = 8;
    let toppings = [];
    for(let x of selectedToppingsIds){
      toppings.push(this.toppingList[x-1]);
      pizzaString += `${this.toppingList[x-1].name}, `;
      pizzaPrice += this.toppingList[x-1].cost;
    }

    this.pizza["name"] = pizzaString;
    this.pizza["cost"] = pizzaPrice;
    this.pizza["toppings"] = toppings;

    this.pizzaList.push(this.pizza);
    this.calculateTotal();
  }

  calculateTotal(){
    this.totalPrice = 0;
    for(let p of this.pizzaList){
      this.totalPrice += p.cost;
    }
  }

  removePizza(p){
    let index = this.pizzaList.indexOf(p);
    if(index > -1){
      this.pizzaList.splice(index,1);
    }
    this.calculateTotal();
  }

  async submitOrder(){
    let userId = window.localStorage.getItem("user");
    let user = new User();
    user.id = Number(userId);
    let ticket = new Ticket();
    ticket.user = user;
    ticket.pizzas = this.pizzaList;
    const result = await this.api.submitTicket(ticket);
    if (result.id) {
      // TODO
      console.log('display success')
    } else {
      // TODO
      console.log('ask user to try again (order failed)')
    }
  }

  ngOnInit(): void {
    this.fetchToppingList();
    
  }

}
