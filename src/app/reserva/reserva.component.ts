import { Component, OnInit } from '@angular/core';
import { Reserva } from '../Reserva';
import { CarritoService } from '../carrito/carrito.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent implements OnInit {

  listaReserva!:Reserva[]
  formReserva!:FormGroup

  constructor(private compraServices:CarritoService,private formBuilder:FormBuilder,private router:Router) {
    this.formReserva = this.formBuilder.group({
      nombre: ['',[Validators.required,Validators.minLength(4)]],
      apellido: ['',[Validators.required,Validators.minLength(4)]],
      username: ['',[Validators.required,Validators.minLength(4)]],
      email: ['',[Validators.email]],
      address1: ['',[Validators.required,Validators.minLength(8)]],
      address2: ['',[Validators.minLength(8)]],
      pais: ['',[Validators.required]],
      state: ['',[Validators.required]],
      zip: ['',[Validators.required]],
      nombreTarjeta: ['',[Validators.required]],
      numberTarjeta: ['',[Validators.required]],
      fecha: ['',[Validators.required]],
      ccv: ['',[Validators.required]],
    })
  }

  ngOnInit() {
    this.listaReserva = this.compraServices.listaCompra
  }

  send():any{
    if(this.formReserva.invalid) return 
    this.compraServices.clean()
    this.router.navigate(['/dashboard'])

  }

}
