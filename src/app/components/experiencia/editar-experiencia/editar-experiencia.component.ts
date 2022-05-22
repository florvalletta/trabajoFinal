import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
//Model
import { Experiencia } from 'src/app/models/experiencia';
//Service
import { ExperienciaService } from 'src/app/service/experiencia.service';
//Angular Material
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-editar-experiencia',
  templateUrl: './editar-experiencia.component.html',
  styleUrls: ['./editar-experiencia.component.css']
})
export class EditarExperienciaComponent implements OnInit {

  experiencia: Experiencia = null;

  constructor(
    private experienciaService:ExperienciaService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.experienciaService.detalle(id).subscribe(
      data => {
        this.experiencia = data;
      },
      err => {
        this.router.navigate(['/']);
      }
    );
  }

  modificar(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.experienciaService.modificar(id, this.experiencia).subscribe(
      data => {
        this.exito(),
        this.router.navigate(['/porfolio/experiencia']);
      },
      err => {
        this.error(),
        this.router.navigate(['/porfolio/experiencia']);
      }
    )
  }

//Método para emitir un mensaje de que los datos no se modificaron
  error() {
    this._snackBar.open('Error de modificación de experiencia', 'Fail',  {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'top'
    });
  }

//Método para emitir un mensaje de que los datos se modificaron
  exito() {
    this._snackBar.open('Se modificaron correctamente los datos de experiencia', 'OK',  {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'top'
    });
  }

//Método para cerrar el formulario sin guardar cambios
  cancelar() {
    this.router.navigate(['/porfolio/experiencia']);
  }
}
