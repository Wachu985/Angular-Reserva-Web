import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../carrito/carrito.service';
import { Reserva } from '../Reserva';

@Component({
  selector: 'app-listacompra',
  templateUrl: './listacompra.component.html',
  styleUrls: ['./listacompra.component.css']
})
export class ListacompraComponent implements OnInit {

  listaCompra!:Reserva[]

  constructor(private compraServices:CarritoService) { }

  ngOnInit() {
    console.log(this.compraServices.listaCompra)
    this.listaCompra = this.compraServices.listaCompra
  }

}
