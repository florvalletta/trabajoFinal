import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//Model
import { AcercaDe } from 'src/app/models/acerca-de';
//Service
import { AcercaDeService } from '../service/acerca-de.service';
//Angular Material
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-cargar-acerca-de',
  templateUrl: './cargar-acerca-de.component.html',
  styleUrls: ['./cargar-acerca-de.component.css']
})
export class CargarAcercaDeComponent implements OnInit {
  
  descripcion: string = '';

  constructor(private acercaDeService: AcercaDeService, 
              private router: Router,
              private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  onCreate(): void {
      const acercaDe = new AcercaDe(this.descripcion);
      this.acercaDeService.save(acercaDe).subscribe(
        data => {
                this.exito(),
                this.router.navigate(['/porfolio/acercaDe'])},
        err => {
                this.error(),
                this.router.navigate(['/porfolio/acercaDe'])}
      )
  }

  //Método para cerrar el formulario sin guardar cambios
  cancelar() {
    this.router.navigate(['/porfolio/acercaDe'])
  }

  //Método para emitir un mensaje de que los datos no se cargaron
  error() {
    this._snackBar.open('Error de carga de descripción', 'Fail',  {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'top'
    });
  }
  
  //Método para emitir un mensaje de que los datos se cargaron
  exito() {
    this._snackBar.open('Se cargó correctamente la descripción', 'OK',  {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'top'
    });
  }
}