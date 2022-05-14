import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatosPersonales } from 'src/app/models/datos-personales';
import { DatosPersonalesService } from 'src/app/service/datos-personales.service';

@Component({
  selector: 'app-cargar-portada',
  templateUrl: './cargar-portada.component.html',
  styleUrls: ['./cargar-portada.component.css']
})
export class CargarPortadaComponent implements OnInit {

  nombre: string = '';
  apellido: string = '';
  fotoPerfil: string = '';
  fotoPortada: string = '';
  puestoActual: string = '';
  ubicacion: string = '';

  constructor(
    private datosService: DatosPersonalesService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const datos = new DatosPersonales(this.nombre, this.apellido,this.fotoPerfil, this.fotoPortada, this.puestoActual, this.ubicacion);
    this.datosService.save(datos).subscribe(
      data => {this.router.navigate(['/porfolio/datosPersonales'])},
      err => {this.router.navigate(['/porfolio/datosPersonales'])}
    )
}

cancelar() {
  this.router.navigate(['/porfolio/datosPersonales'])
}

}
