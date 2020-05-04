import {Pizza} from 'src/app/models/pizza'
import {User} from 'src/app/models/User'

export class Ticket{
    id:number;
    pizzas:Array<Pizza>;
    user:User;
    placementTime: string;
    status: string;
    note: string;

    constructor(id,pizzas,user,placementTime,status,note){
        this.id=id;
        this.pizzas=pizzas;
        this.user = user;
        this.placementTime = placementTime;
        this.status = status;
        this.note = note;

    }
}