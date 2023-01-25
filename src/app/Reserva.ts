import { Hotel } from "./Hotel";

export class Reserva {
    hotel:Hotel;
    adultos:number;
    ninos:number;
    total:number;

    constructor(hotel:Hotel,adultos:number,ninos:number){
        this.hotel = hotel;
        this.adultos = adultos;
        this.ninos = ninos;
        this.total = hotel.precioadult * adultos + hotel.precioninos * ninos;
    }
}
