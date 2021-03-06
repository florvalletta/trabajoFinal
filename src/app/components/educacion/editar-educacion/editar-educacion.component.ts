import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
//Model
import { Educacion } from 'src/app/models/educacion';
//Service
import { EducacionService } from 'src/app/service/educacion.service';
//Angular Material
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-editar-educacion',
  templateUrl: './editar-educacion.component.html',
  styleUrls: ['./editar-educacion.component.css']
})
export class EditarEducacionComponent implements OnInit {

  educacion: Educacion = null;

  constructor(
    private educacionService: EducacionService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.educacionService.detalle(id).subscribe(
      data => {
        this.educacion = data;
      },
      err => {
        this.router.navigate(['/']);
      }
    );
  }

  modificar(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.educacionService.modificar(id, this.educacion).subscribe(
      data => {
        this.exito(),
        this.router.navigate(['/porfolio/educacion']);
      },
      err => {
        this.error(),
        this.router.navigate(['/porfolio/educacion']);
      }
    )
  }

  //Método para cerrar el formulario sin guardar cambios
  cancelar() {
    this.router.navigate(['/porfolio/educacion']);
  }

  //Método para emitir un mensaje de que los datos no se modificaron
  error() {
    this._snackBar.open('Error de modificación de educación', 'Fail',  {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'top'
    });
  }
  
  //Método para emitir un mensaje de que los datos se modificaron
  exito() {
    this._snackBar.open('Los datos de educación se modificaron correctamente', 'OK',  {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'top'
    });
  }

}
