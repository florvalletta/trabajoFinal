import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//Model
import { Experiencia } from 'src/app/models/experiencia';
//Service
import { ExperienciaService } from 'src/app/service/experiencia.service';
//Angular Material
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-cargar-experiencia',
  templateUrl: './cargar-experiencia.component.html',
  styleUrls: ['./cargar-experiencia.component.css']
})
export class CargarExperienciaComponent implements OnInit {

  puesto: string = '';
  lugarTrabajo: string = '';
  fechaInicio: string = '';
  fechaFin: string = '';
  logoEmpresa: string = '';
  descripcion: string = '';

  constructor(
    private experienciaService: ExperienciaService, 
    private router: Router,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }
  onCreate(): void {
    const experiencia = new Experiencia(this.puesto, this.lugarTrabajo, this.fechaInicio, this.fechaFin, this.logoEmpresa, this.descripcion);
    this.experienciaService.save(experiencia).subscribe(
      data => {this.exito(), this.router.navigate(['/porfolio/experiencia'])},
      err => {this.error(), this.router.navigate(['/porfolio/experiencia'])}
    )
}

//Método para cerrar el formulario sin guardar cambios
cancelar() {
  this.router.navigate(['/porfolio/experiencia'])
}

//Método para emitir un mensaje de que los datos no se cargaron
error() {
  this._snackBar.open('Error de carga de experiencia', 'Fail',  {
    duration: 5000,
    horizontalPosition: 'center',
    verticalPosition: 'top'
  });
}

//Método para emitir un mensaje de que los datos se cargaron
exito() {
  this._snackBar.open('Se cargaron correctamente los datos de experiencia', 'OK',  {
    duration: 5000,
    horizontalPosition: 'center',
    verticalPosition: 'top'
  });
}
}
