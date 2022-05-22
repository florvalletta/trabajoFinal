import { Component, OnInit } from '@angular/core';
//Model
import { DatosPersonales } from 'src/app/models/datos-personales';
//Service
import { DatosPersonalesService } from 'src/app/service/datos-personales.service';
//Angular Material
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-portada',
  templateUrl: './portada.component.html',
  styleUrls: ['./portada.component.css']
})
export class PortadaComponent implements OnInit {

  datosPersonales: DatosPersonales[] = [];

  constructor(private datosPersonalesService: DatosPersonalesService,
              private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.verDatosPersonales();
  }

  verDatosPersonales(): void {
    this.datosPersonalesService.list().subscribe(
      data => {
        this.datosPersonales = data;
      },
      err => {
        
      })
  }

  //Método que no se utiliza en esta sección pero se implementa en función de ser incluído de que se desee incorporarlo
  borrar(id: number) {
    this.datosPersonalesService.eliminar(id).subscribe(
      data => {
        this.eliminacion(),
        this.verDatosPersonales();
      },
    err => {
        alert(err);
    }
    );
  }
//Método para emitir un mensaje de que los datos se eliminaron correctamente
  eliminacion() {
    this._snackBar.open('Se eliminaron correctamente los datos personales', 'OK',  {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'top'
    });
  }

}
