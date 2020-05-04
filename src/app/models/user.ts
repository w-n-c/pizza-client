import {Ticket} from 'src/app/models/ticket'

export class User{
    id:number;
    username:string;
    password:string;
    tickets:Array<Ticket>;

    constructor(id,username,password,tickets){
        this.id=id;
        this.username=username;
        this.password=password;
        this.tickets=tickets;
    }
}