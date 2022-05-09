export class Experiencia {
    id?: number;
    puesto: string;
    lugarTrabajo: string;
    fechaInicio: string;
    fechaFin: string;
    logoEmpresa: string;
    descripcion: string;

    constructor(puesto: string, lugarTrabajo: string, fechaInicio: string, fechaFin: string, logoEmpresa: string, descripcion: string){
        this.puesto = puesto;
        this.lugarTrabajo = lugarTrabajo;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
        this.logoEmpresa = logoEmpresa;
        this.descripcion = descripcion;
    }
}
