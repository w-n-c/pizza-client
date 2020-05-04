import {Topping} from 'src/app/models/topping'
import {Ticket} from 'src/app/models/ticket'
export class Pizza{
    id:number;
    ticket: Ticket;
    toppings: Array<Topping>;

    constructor(id,ticket,toppings){
        this.id = id;
        this.ticket = ticket;
        this.toppings = toppings;
    }
}