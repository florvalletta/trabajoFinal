export class Proyectos {
    id?: number;
    nombreProyecto: string;
    fechaRealizacion: string;
    linkProyecto: string;
    imagenProyecto: string;
    descripcionProyecto: string;

    constructor(nombreProyecto: string, fechaRealizacion: string, linkProyecto: string, imagenProyecto: string, descripcionProyecto: string){
        this.nombreProyecto = nombreProyecto;
        this.fechaRealizacion = fechaRealizacion;
        this.linkProyecto = linkProyecto;
        this.imagenProyecto = imagenProyecto;
        this.descripcionProyecto = descripcionProyecto;
    }
}
