import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//Model
import { Proyectos } from 'src/app/models/proyectos';
//Service
import { ProyectosService } from 'src/app/service/proyectos.service';
//Angular Material
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-cargar-proyecto',
  templateUrl: './cargar-proyecto.component.html',
  styleUrls: ['./cargar-proyecto.component.css']
})
export class CargarProyectoComponent implements OnInit {

  nombreProyecto: string;
  fechaRealizacion: string;
  linkProyecto: string;
  imagenProyecto: string;
  descripcionProyecto: string;

  constructor(
    private proyectosService: ProyectosService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const proyecto = new Proyectos(this.nombreProyecto, this.fechaRealizacion, this.linkProyecto, this.imagenProyecto, this.descripcionProyecto);
    this.proyectosService.save(proyecto).subscribe(
      data => {
              this.exito(),
              this.router.navigate(['/porfolio/proyectos'])},
      err => {
              this.error(),
              this.router.navigate(['/porfolio/proyectos'])}
    )
}
//Método para cerrar el formulario sin guardar cambios
cancelar() {
  this.router.navigate(['/porfolio/proyectos'])
}
//Método para emitir un mensaje de que los datos no se cargaron
error() {
  this._snackBar.open('Error de carga de proyecto', 'Fail',  {
    duration: 5000,
    horizontalPosition: 'center',
    verticalPosition: 'top'
  });
}
//Método para emitir un mensaje de que los datos se cargaron
exito() {
  this._snackBar.open('El proyecto se cargó correctamente', 'OK',  {
    duration: 5000,
    horizontalPosition: 'center',
    verticalPosition: 'top'
  });
}

}
