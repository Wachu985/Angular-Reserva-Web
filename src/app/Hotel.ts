export class Hotel {
    id:number;
    nombre:string;
    stars:number;
    direccion:string;
    disponibilidad:number;
    precioadult:number;
    precioninos:number;
    fecha:string;

    constructor(id:number,nombre:string,stars:number,direccion:string,disponibilidad:number,fecha:string,precioadult:number,precioninos:number){
        this.id= id;
        this.nombre = nombre;
        this.stars = stars;
        this.direccion = direccion;
        this.precioadult = precioadult;
        this.precioninos = precioninos;
        this.disponibilidad = disponibilidad;
        this.fecha = fecha;
    }
}
