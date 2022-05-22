import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
//Model
import { AcercaDe } from 'src/app/models/acerca-de';
//Service
import { AcercaDeService } from '../service/acerca-de.service';
//Angular Material
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-editar-acerca-de',
  templateUrl: './editar-acerca-de.component.html',
  styleUrls: ['./editar-acerca-de.component.css']
})
export class EditarAcercaDeComponent implements OnInit {
  
  acerca: AcercaDe = null;

  constructor(
    private acercaDeService: AcercaDeService, 
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private _snackBar: MatSnackBar
    ) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params['id'];
    this.acercaDeService.detalle(id).subscribe(
      data => {
        this.acerca = data;
      },
      err => {
        this.router.navigate(['/']);
      }
    );
  }
  
    modificar(): void {
      const id = this.activatedRoute.snapshot.params['id'];
      this.acercaDeService.modificar(id, this.acerca).subscribe(
        data => {
          this.exito(),
          this.router.navigate(['/porfolio/acercaDe']);
        },
        err => {
          this.error(),
          this.router.navigate(['/porfolio/acercaDe']);
        }
      )
    }

    //Método para cerrar el formulario sin guardar cambios
    cancelar() {
      this.router.navigate(['/porfolio/acercaDe'])
    }

    //Método para emitir un mensaje de que los datos no se modificaron
    error() {
      this._snackBar.open('Error de modificación de descripción', 'Fail',  {
        duration: 5000,
        horizontalPosition: 'center',
        verticalPosition: 'top'
      });
    }
    
    //Método para emitir un mensaje de que los datos se modificaron
    exito() {
      this._snackBar.open('Se modificó correctamente la descripción', 'OK',  {
        duration: 5000,
        horizontalPosition: 'center',
        verticalPosition: 'top'
      });
    }
  }