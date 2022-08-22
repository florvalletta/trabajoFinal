import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DatosPersonales } from 'src/app/models/datos-personales';
import { DatosPersonalesService } from 'src/app/service/datos-personales.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-porfolio',
  templateUrl: './porfolio.component.html',
  styleUrls: ['./porfolio.component.css']
})
export class PorfolioComponent implements OnInit {

  isLogged = false;
  nombreUsuario = '';

  datosPersonales: DatosPersonales[] = [];
  

  constructor(private datosPersonalesService: DatosPersonalesService,
              private _snackBar: MatSnackBar,
              private tokenService: TokenService) { }

  ngOnInit(): void {
    this.verDatosPersonales();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.nombreUsuario = this.tokenService.getUserName();
    } else {
      this.isLogged = false;
      this.nombreUsuario = '';
    }
  }

  verDatosPersonales(): void {
    this.datosPersonalesService.list().subscribe(
      data => {
        this.datosPersonales = data;
      },
      err => {
        
      })
  }

  salir(){
    this.tokenService.logOut();
  }

}
