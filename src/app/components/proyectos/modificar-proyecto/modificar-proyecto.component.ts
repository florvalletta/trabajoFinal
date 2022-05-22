import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
//Model
import { Proyectos } from 'src/app/models/proyectos';
//Service
import { ProyectosService } from 'src/app/service/proyectos.service';
//Angular Material
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-modificar-proyecto',
  templateUrl: './modificar-proyecto.component.html',
  styleUrls: ['./modificar-proyecto.component.css']
})
export class ModificarProyectoComponent implements OnInit {

  proyecto: Proyectos = null;

  constructor(
    private proyectosService: ProyectosService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.proyectosService.detalle(id).subscribe(
      data => {
        this.proyecto = data;
      },
      err => {
        this.router.navigate(['/']);
      }
    );
  }

  modificar(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.proyectosService.modificar(id, this.proyecto).subscribe(
      data => {
        this.exito(),
        this.router.navigate(['/porfolio/proyectos']);
      },
      err => {
        this.error(),
        this.router.navigate(['/porfolio/proyectos']);
      }
    )
  }
//Método para cerrar el formulario sin guardar cambios
  cancelar() {
    this.router.navigate(['/porfolio/proyectos'])
  }
//Método para emitir un mensaje de que los datos no se cargaron
  error() {
    this._snackBar.open('Error de modificación de proyecto', 'Fail',  {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'top'
    });
  }

//Método para emitir un mensaje de que los datos se cargaron
  exito() {
    this._snackBar.open('El proyecto se modificó correctamente', 'OK',  {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'top'
    });
  }
}
