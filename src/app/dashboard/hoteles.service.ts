import { Injectable } from '@angular/core';
import { HOTELES } from "./hoteles.json";
import { Hotel } from '../Hotel';

@Injectable({
  providedIn: 'root'
})
export class HotelesService {

constructor() { }

  gethoteles():Hotel[]{
    return HOTELES;
  }

  getHotel(id:number):Hotel{
    return HOTELES[id];
  }

}
