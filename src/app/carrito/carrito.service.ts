import { Injectable } from '@angular/core';
import { Reserva } from '../Reserva';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  listaCompra:Reserva[] = []

  constructor() { }

  add(reserva:Reserva){
    this.listaCompra.push(reserva);
  }

  clean(){
    this.listaCompra = []
  }

}
