import { Component, OnInit } from '@angular/core';
//Model
import { Educacion } from 'src/app/models/educacion';
//Service
import { EducacionService } from 'src/app/service/educacion.service';
//Angular Material
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  educacion: Educacion[] = [];

  constructor(private educacionService: EducacionService,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.verEducacion();
  }

  verEducacion(): void {
    this.educacionService.list().subscribe(
      data => {
        this.educacion = data;
      },
      err => {
        alert(err);
      })
  }

  borrar(id: number) {
    this.educacionService.eliminar(id).subscribe(
      data => {
        this.eliminacion(),
        this.verEducacion();
      },
    err => {
        alert(err);
    }
    );
  }

  //Método para emitir un mensaje de que los datos se eliminaron correctamente
  eliminacion() {
    this._snackBar.open('Se eliminaron correctamente los datos de experiencia', 'OK',  {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'top'
    });
  }
}
