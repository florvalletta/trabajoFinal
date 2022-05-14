import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatosPersonales } from 'src/app/models/datos-personales';
import { DatosPersonalesService } from 'src/app/service/datos-personales.service';

@Component({
  selector: 'app-editar-portada',
  templateUrl: './editar-portada.component.html',
  styleUrls: ['./editar-portada.component.css']
})
export class EditarPortadaComponent implements OnInit {

  datos: DatosPersonales = null;

  constructor(
    private datosService: DatosPersonalesService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.datosService.detalle(id).subscribe(
      data => {
        this.datos = data;
      },
      err => {
        this.router.navigate(['/']);
      }
    );
  }

  modificar(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.datosService.modificar(id, this.datos).subscribe(
      data => {
        this.router.navigate(['/porfolio/datosPersonales']);
      },
      err => {
        alert(err);
        this.router.navigate(['/porfolio/datosPersonales']);
      }
    )
  }

  cancelar() {
    this.router.navigate(['/porfolio/datosPersonales'])
  }
}
