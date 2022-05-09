import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DatosPersonales } from 'src/app/models/datos-personales';
import { DatosPersonalesService } from 'src/app/service/datos-personales.service';

@Component({
  selector: 'app-portada',
  templateUrl: './portada.component.html',
  styleUrls: ['./portada.component.css']
})
export class PortadaComponent implements OnInit {

  datosPersonales: DatosPersonales[] = [];

  constructor(private datosPersonalesService: DatosPersonalesService) { }

  ngOnInit(): void {
    this.verDatosPersonales();
  }

  verDatosPersonales(): void {
    this.datosPersonalesService.list().subscribe(
      data => {
        this.datosPersonales = data;
      },
      err => {
        alert(err);
      })
  }

  borrar(id: number) {
    this.datosPersonalesService.eliminar(id).subscribe(
      data => {
        this.verDatosPersonales();
      },
    err => {
        alert(err);
    }
    );
  }

}
