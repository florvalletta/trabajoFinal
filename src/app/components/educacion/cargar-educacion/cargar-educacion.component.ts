import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//Model
import { Educacion } from 'src/app/models/educacion';
//Service
import { EducacionService } from 'src/app/service/educacion.service';
//Angular Material
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-cargar-educacion',
  templateUrl: './cargar-educacion.component.html',
  styleUrls: ['./cargar-educacion.component.css']
})
export class CargarEducacionComponent implements OnInit {
  titulo: string = '';
  institucion: string = '';
  fechaInicio: string = '';
  fechaFin: string = '';
  logoEducacion: string = '';

  constructor(private educacionService: EducacionService, 
              private router: Router,
              private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const educacion = new Educacion(this.titulo, this.institucion, this.fechaInicio, this.fechaFin, this.logoEducacion);
    this.educacionService.save(educacion).subscribe(
      data => {this.exito(), this.router.navigate(['/porfolio/educacion'])},
      err => {this.error(), this.router.navigate(['/porfolio/educacion'])}
    )
}

//Método para emitir un mensaje de que los datos no se cargaron
error() {
  this._snackBar.open('Error de carga de educación', 'Fail',  {
    duration: 5000,
    horizontalPosition: 'center',
    verticalPosition: 'top'
  });
}

//Método para emitir un mensaje de que los datos se cargaron
exito() {
  this._snackBar.open('Se cargaron correctamente los datos de educación', 'OK',  {
    duration: 5000,
    horizontalPosition: 'center',
    verticalPosition: 'top'
  });
}

//Método para cerrar el formulario sin guardar cambios
cancelar() {
  this.router.navigate(['/porfolio/educacion'])
}
}
