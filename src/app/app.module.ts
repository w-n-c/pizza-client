import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';

import { RegisteredCustomerComponent } from './components/registered-customer/registered-customer.component';
import { LoginComponent } from './components/login/login.component';
import { PizzaOrderComponent } from './components/pizza-order/pizza-order.component';
import { FormatNamePipe } from './pipes/format-name.pipe';
import { RegisterComponent } from './components/register/register.component';
import { EmployeeViewComponent } from './components/employee-view/employee-view.component';
import { PendingViewComponent } from './components/pending-view/pending-view.component';
import { PreparingViewComponent } from './components/preparing-view/preparing-view.component';
import { BakingViewComponent } from './components/baking-view/baking-view.component';
import { DoneViewComponent } from './components/done-view/done-view.component';
import { HeaderComponent } from './components/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    PizzaOrderComponent,
    RegisteredCustomerComponent,
    LoginComponent,
    FormatNamePipe,
    RegisterComponent,
    EmployeeViewComponent,
    PendingViewComponent,
    PreparingViewComponent,
    BakingViewComponent,
    DoneViewComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
