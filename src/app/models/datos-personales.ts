export class DatosPersonales {
    id?: number;
    nombre: string;
    apellido: string;
    fotoPerfil: string;
    fotoPortada: string;
    puestoActual: string;

    constructor(nombre: string, apellido: string, fotoPerfil: string, fotoPortada: string, puestoActual: string) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.fotoPerfil = fotoPerfil;
        this.fotoPortada = fotoPortada;
        this.puestoActual = puestoActual;
    }
}
