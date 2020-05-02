import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {PizzaOrderComponent} from './components/pizza-order/pizza-order.component';
import {RegisteredCustomerComponent} from './components/registered-customer/registered-customer.component';
import {RegisterComponent} from './components/register/register.component'

const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"order",component:PizzaOrderComponent},
  {path: "registeredcustomer", component:RegisteredCustomerComponent},
  {path: "signup", component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
