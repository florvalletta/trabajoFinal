import { Component, OnInit } from '@angular/core';
//Model
import { AcercaDe } from 'src/app/models/acerca-de';
//Service
import { AcercaDeService } from './service/acerca-de.service';
//Angular Material
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {

  acercaDe: AcercaDe[] = [];

  constructor(private acercaDeService: AcercaDeService,
    	        private _snackBar: MatSnackBar
    ) {}

  ngOnInit() {
    this.verAcercaDe();
  }
 

  verAcercaDe(): void {
    this.acercaDeService.list().subscribe(
      data => {
        this.acercaDe = data;
      },
      err => {
        console.log(err);
      })
  }

  //Método no utilizado pero que se desarrolló por si desea incluirsela en esta sección
  borrar(id: number) {
    this.acercaDeService.eliminar(id).subscribe(
      data => {
        this.eliminacion(),
        this.verAcercaDe();
      },
    err => {

    }
    );
  }
 
  //Método para emitir un mensaje de que los datos se eliminaron
  eliminacion() {
    this._snackBar.open('La descripción se eliminó correctamente', 'OK',  {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'top'
    });
  }
}
