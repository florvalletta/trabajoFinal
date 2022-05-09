import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/models/experiencia';
import { ExperienciaService } from 'src/app/service/experiencia.service';

@Component({
  selector: 'app-cargar-experiencia',
  templateUrl: './cargar-experiencia.component.html',
  styleUrls: ['./cargar-experiencia.component.css']
})
export class CargarExperienciaComponent implements OnInit {

  puesto: string = '';
  lugarTrabajo: string = '';
  fechaInicio: string = '';
  fechaFin: string = '';
  logoEmpresa: string = '';
  descripcion: string = '';

  constructor(
    private experienciaService: ExperienciaService, 
    private router: Router) { }

  ngOnInit(): void {
  }
  onCreate(): void {
    const experiencia = new Experiencia(this.puesto, this.lugarTrabajo, this.fechaInicio, this.fechaFin, this.logoEmpresa, this.descripcion);
    this.experienciaService.save(experiencia).subscribe(
      data => {this.router.navigate(['/'])},
      err => {this.router.navigate(['/'])}
    )
}

}
