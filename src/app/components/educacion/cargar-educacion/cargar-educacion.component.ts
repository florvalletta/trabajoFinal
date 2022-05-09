import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/models/educacion';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-cargar-educacion',
  templateUrl: './cargar-educacion.component.html',
  styleUrls: ['./cargar-educacion.component.css']
})
export class CargarEducacionComponent implements OnInit {
  titulo: string = '';
  institucion: string = '';
  fechaInicio: string = '';
  fechaFin: string = '';
  logoEducacion: string = '';

  constructor(private educacionService: EducacionService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const educacion = new Educacion(this.titulo, this.institucion, this.fechaInicio, this.fechaFin, this.logoEducacion);
    this.educacionService.save(educacion).subscribe(
      data => {this.router.navigate(['/'])},
      err => {this.router.navigate(['/'])}
    )
}

}
