import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormArray,FormBuilder, Validators } from '@angular/forms';
import {ApiServiceService} from 'src/app/services/api-service.service'


@Component({
  selector: 'app-pizza-order',
  templateUrl: './pizza-order.component.html',
  styleUrls: ['./pizza-order.component.css']
})
export class PizzaOrderComponent implements OnInit {

  toppingList:Array<any>;
  toppingForm: FormGroup;
  toppings:any
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

  fetchToppingList(){
    return this.toppingList = 
    [{id:1,name:"Cheese",price:0.75,selected:true},
    {id:2,name:"Pepperoni",price:0.75,selected:false},
    {id:3,name:"Bacon",price:1.00,selected:false},
    {id:4,name:"Onions",price:0.35,selected:false},
    {id:5,name:"Pepper",price:0.35,selected:false},
    {id:6,name:"Chicken",price:0.75,selected:false},
    {id:7,name:"Pineapple",price:0.50,selected:false},
    {id:8,name:"Sausage",price:0.80,selected:false},
    {id:9,name:"Anchovies",price:0.55,selected:false},
    {id:10,name:"Spinach",price:0.50,selected:false}]
  }

  submit(){
    this.pizza={};

    const selectedToppingsIds = this.toppingForm.value.toppings
    .map((v,i) => (v ? this.toppingList[i].id : null))
    .filter(v=> v !==null);

    let pizzaString ='Pizza with ';
    let pizzaPrice = 8;
    this.toppings=[];
    for(let x of selectedToppingsIds){
      this.toppings.push(this.toppingList[x-1]);
      pizzaString += `${this.toppingList[x-1].name}, `;
      pizzaPrice += this.toppingList[x-1].price;
    }
    
    this.pizza["name"] = pizzaString;
    this.pizza["price"] = pizzaPrice;
    this.pizza["toppings"]=this.toppings;

    console.log(this.pizza);
    this.pizzaList.push(this.pizza);
    console.log(this.pizzaList)
    this.calculateTotal();
  }

  calculateTotal(){
    this.totalPrice = 0;
    for(let p of this.pizzaList){
      this.totalPrice += p.price;
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
    let ticket = {
      "user":{"id":userId},
	    "pizzas": this.pizzaList
    }
    let result = await this.api.submitTicket(ticket);
    console.log(result);
  }

  ngOnInit(): void {
    this.fetchToppingList();
    this.buildForm();
    this.buildToppings();
  }

}