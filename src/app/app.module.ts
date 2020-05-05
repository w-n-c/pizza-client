import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { RegisteredCustomerComponent } from './components/registered-customer/registered-customer.component';
import { LoginComponent } from './components/login/login.component';
import { PizzaOrderComponent } from './components/pizza-order/pizza-order.component';
import { FormatNamePipe } from './pipes/format-name.pipe';
import { RegisterComponent } from './components/register/register.component';
import { EmployeeViewComponent } from './components/employee-view/employee-view.component';
import { TicketViewComponent } from './components/ticket-view/ticket-view.component';

@NgModule({
  declarations: [
    AppComponent,
    PizzaOrderComponent,
    RegisteredCustomerComponent,
    LoginComponent,
    FormatNamePipe,
    RegisterComponent,
    EmployeeViewComponent,
    TicketViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
