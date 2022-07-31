import { Component, OnInit } from '@angular/core';
//Model
import { Experiencia } from 'src/app/models/experiencia';
//Service
import { ExperienciaService } from 'src/app/service/experiencia.service';
import { TokenService } from 'src/app/service/token.service';
//Angular Material
import { MatSnackBar } from '@angular/material/snack-bar';



@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  experiencia: Experiencia[] = [];
  isLogged = false;
  nombreUsuario = '';

  constructor(private experienciaService: ExperienciaService,
              private _snackBar: MatSnackBar,
              private tokenService: TokenService) { }

  ngOnInit(): void {
    this.verExperiencia();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.nombreUsuario = this.tokenService.getUserName();
    } else {
      this.isLogged = false;
      this.nombreUsuario = '';
    }
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
