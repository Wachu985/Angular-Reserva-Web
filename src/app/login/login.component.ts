import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public formLogin!:FormGroup

  constructor(private formBuilder:FormBuilder,private loginServices:LoginService,private router: Router) { 

  }

  ngOnInit() {
    this.formLogin = this.formBuilder.group({
      email: ['',[Validators.email,Validators.required]],
      password: ['',[Validators.required,Validators.minLength(4)]]
    })
  }

  send():any{
    if(this.formLogin.invalid) return 
    const {email,password}= this.formLogin.value;
    console.log(email,password)
    
    if(this.loginServices.login(email,password)) this.router.navigate(['/dashboard'])
  }

}
