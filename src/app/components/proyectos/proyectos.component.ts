import { Component, OnInit } from '@angular/core';
//Model
import { Proyectos } from 'src/app/models/proyectos';
//Service
import { ProyectosService } from 'src/app/service/proyectos.service';
//Angular Material
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  proyectos: Proyectos[] = [];

  constructor(private proyectosService: ProyectosService,
              private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.verProyectos();
  }

  verProyectos(): void {
    this.proyectosService.list().subscribe(
      data => {
        this.proyectos = data;
      },
      err => {
        alert(err);
      })
  }

  borrar(id: number) {
    this.proyectosService.eliminar(id).subscribe(
      data => {
        this.eliminacion(),
        this.verProyectos();
      },
    err => {
        alert(err);
    }
    );
  }

 //Método para emitir un mensaje de que los datos se eliminaron correctamente
  eliminacion() {
    this._snackBar.open('El proyecto se eliminó correctamente', 'OK',  {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'top'
    });
  }

}
