import {Pizza} from 'src/app/models/pizza'
import {User} from 'src/app/models/user'

export class Ticket{
    id:number;
    pizzas:Array<Pizza>;
    user:User;
    placementTime: string;
    status: string;
    note: string;
}