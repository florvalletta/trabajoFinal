import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
//Model
import { DatosPersonales } from 'src/app/models/datos-personales';
//Service
import { DatosPersonalesService } from 'src/app/service/datos-personales.service';
//Angular Material
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-editar-portada',
  templateUrl: './editar-portada.component.html',
  styleUrls: ['./editar-portada.component.css']
})
export class EditarPortadaComponent implements OnInit {

  datos: DatosPersonales = null;

  constructor(
    private datosService: DatosPersonalesService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.datosService.detalle(id).subscribe(
      data => {
        this.datos = data;
      },
      err => {
        this.router.navigate(['/']);
      }
    );
  }

  modificar(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.datosService.modificar(id, this.datos).subscribe(
      data => {
        this.exito(),
        this.router.navigate(['/porfolio/datosPersonales']);
      },
      err => {
        this.error(),
        this.router.navigate(['/porfolio/datosPersonales']);
      }
    )
  }

  //Método para cerrar el formulario sin guardar cambios
  cancelar() {
    this.router.navigate(['/porfolio/datosPersonales'])
  }
//Método para emitir un mensaje de que los datos no se modificaron
  error() {
    this._snackBar.open('Error de modificación de los datos personales', 'Fail',  {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'top'
    });
  }
//Método para emitir un mensaje de que los datos se modificaron  
  exito() {
    this._snackBar.open('Se modificaron correctamente los datos personales', 'OK',  {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'top'
    });
  }
}
