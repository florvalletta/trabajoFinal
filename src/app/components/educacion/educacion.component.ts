import { Component, OnInit } from '@angular/core';
//Model
import { Educacion } from 'src/app/models/educacion';
//Service
import { EducacionService } from 'src/app/service/educacion.service';
import { TokenService } from 'src/app/service/token.service';
//Angular Material
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  educacion: Educacion[] = [];
  isLogged = false;
  nombreUsuario = '';

  constructor(private educacionService: EducacionService,
    private _snackBar: MatSnackBar,
    private tokenService: TokenService) { }

  ngOnInit(): void {
    this.verEducacion();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.nombreUsuario = this.tokenService.getUserName();
    } else {
      this.isLogged = false;
      this.nombreUsuario = '';
    }
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
