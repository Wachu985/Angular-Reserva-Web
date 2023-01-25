import { Component, OnInit } from '@angular/core';
import { Reserva } from '../Reserva';
import { CarritoService } from '../carrito/carrito.service';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent implements OnInit {

  listaReserva!:Reserva[]

  constructor(private compraServices:CarritoService) { }

  ngOnInit() {
    this.listaReserva = this.compraServices.listaCompra
  }

}
