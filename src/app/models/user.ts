import { Ticket } from 'src/app/models/ticket'
import { Role } from './role';

export class User{
    id:number;
    username:string;
    password:string;
    tickets:Array<Ticket>;
    role:Role;
}