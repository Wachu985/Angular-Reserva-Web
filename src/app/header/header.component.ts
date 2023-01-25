import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoged:boolean;

  constructor(private loginServices:LoginService,private router:Router) {
    this.isLoged = loginServices.getIsLoged()
  }

  ngOnInit() {
  }

  login(){
    this.isLoged = true;
  }

  logout(){
    console.log('locura')
    this.loginServices.logout()
    this.isLoged = false
  }

}
