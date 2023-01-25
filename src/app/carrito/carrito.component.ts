import { Component, OnInit } from '@angular/core';
import { Reserva } from '../Reserva';
import { HotelesService } from '../dashboard/hoteles.service';
import { Hotel } from '../Hotel';

import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CarritoService } from './carrito.service';



@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  hotel:Hotel;
  formCarrito!:FormGroup

  constructor(
    private route: ActivatedRoute,
    private hotelServices: HotelesService,
    private carritoService: CarritoService,
    private router: Router,
    private formBuilder:FormBuilder
    ) {
      this.hotel = this.getHotel();
    }

  ngOnInit() {
    this.formCarrito = this.formBuilder.group({
      adultos: [1,[Validators.required]],
      habitaciones: [1,[Validators.required]],
      ninos: [1,[Validators.required]]
    })
  }



  getHotel():Hotel{
    const id = +this.route.snapshot.paramMap.get('id')!
    return this.hotel = this.hotelServices.getHotel(id)
  }

  send():any{
    const {adultos,ninos,habitaciones}= this.formCarrito.value;
    if(this.formCarrito.valid) {
      const reserva = new Reserva(this.hotel,adultos,ninos)
      this.carritoService.add(reserva)
      this.router.navigate(['/dashboard'])
    }
    // console.log(email,password)
    // if(this.loginServices.login(email,password)) this.router.navigate(['/dashboard'])
  }
}
