export class Educacion {
    id?: number;
    titulo: string;
    institucion: string;
    fechaInicio: string;
    fechaFin: string;
    logoEducacion: string;

    constructor(titulo: string, institucion: string, fechaInicio: string, fechaFin: string, logoEducacion: string) {
        this.titulo = titulo;
        this.institucion = institucion;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
        this.logoEducacion = logoEducacion;
    }
}
