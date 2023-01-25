import { Injectable } from '@angular/core';
import { User } from './User';
import { USER } from '../login.json';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isloged:boolean;
  users:User[];
  user:User;


  constructor() { 
    this.isloged = false
    this.users = USER;
    this.user = new User('','');
  }

  getIsLoged(){
    console.log(this.isloged)
    return this.isloged;
  }

  login(username:string,password:string){
    for (const user of this.users) {
      if(username == user.username && password == user.password){
        this.isloged = true;
        this.user = user;
        return this.isloged;
      }
    }
    return this.isloged
  }

  logout(){
    this.isloged = false;
  }

}
