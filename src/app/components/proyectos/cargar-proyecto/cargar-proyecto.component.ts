import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyectos } from 'src/app/models/proyectos';
import { ProyectosService } from 'src/app/service/proyectos.service';

@Component({
  selector: 'app-cargar-proyecto',
  templateUrl: './cargar-proyecto.component.html',
  styleUrls: ['./cargar-proyecto.component.css']
})
export class CargarProyectoComponent implements OnInit {

  nombreProyecto: string;
  fechaRealizacion: string;
  linkProyecto: string;
  imagenProyecto: string;
  descripcionProyecto: string;

  constructor(
    private proyectosService: ProyectosService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const proyecto = new Proyectos(this.nombreProyecto, this.fechaRealizacion, this.linkProyecto, this.imagenProyecto, this.descripcionProyecto);
    this.proyectosService.save(proyecto).subscribe(
      data => {this.router.navigate(['/porfolio/proyectos'])},
      err => {this.router.navigate(['/porfolio/proyectos'])}
    )
}

cancelar() {
  this.router.navigate(['/porfolio/proyectos'])
}

}
