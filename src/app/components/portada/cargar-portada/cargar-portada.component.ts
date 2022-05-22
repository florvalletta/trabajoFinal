import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//Model
import { DatosPersonales } from 'src/app/models/datos-personales';
//Service
import { DatosPersonalesService } from 'src/app/service/datos-personales.service';
//Angular Material
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-cargar-portada',
  templateUrl: './cargar-portada.component.html',
  styleUrls: ['./cargar-portada.component.css']
})
export class CargarPortadaComponent implements OnInit {

  nombre: string = '';
  apellido: string = '';
  fotoPerfil: string = '';
  fotoPortada: string = '';
  puestoActual: string = '';
  ubicacion: string = '';

  constructor(
    private datosService: DatosPersonalesService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const datos = new DatosPersonales(this.nombre, this.apellido,this.fotoPerfil, this.fotoPortada, this.puestoActual, this.ubicacion);
    this.datosService.save(datos).subscribe(
      data => {
        this.exito(),
        this.router.navigate(['/porfolio/datosPersonales'])},
      err => {
        this.error(),
        this.router.navigate(['/porfolio/datosPersonales'])}
    )
}
//Método para cerrar el formulario sin guardar cambios
cancelar() {
  this.router.navigate(['/porfolio/datosPersonales'])
}
//Método para emitir un mensaje de que los datos no se cargaron
error() {
  this._snackBar.open('Error de carga de datos personales', 'Fail',  {
    duration: 5000,
    horizontalPosition: 'center',
    verticalPosition: 'top'
  });
}
//Método para emitir un mensaje de que los datos se cargaron
exito() {
  this._snackBar.open('Se cargaron correctamente los datos personales', 'OK',  {
    duration: 5000,
    horizontalPosition: 'center',
    verticalPosition: 'top'
  });
}

}
