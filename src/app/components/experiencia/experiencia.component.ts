import { Component, OnInit } from '@angular/core';
//Model
import { Experiencia } from 'src/app/models/experiencia';
//Service
import { ExperienciaService } from 'src/app/service/experiencia.service';
//Angular Material
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  experiencia: Experiencia[] = [];

  constructor(private experienciaService: ExperienciaService,
              private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.verExperiencia();
  }

  verExperiencia(): void {
    this.experienciaService.list().subscribe(
      data => {
        this.experiencia = data;
      },
      err => {
        
      })
  }

  borrar(id: number) {
    this.experienciaService.eliminar(id).subscribe(
      data => {
        this.eliminacion(),
        this.verExperiencia();
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
