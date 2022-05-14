import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyectos } from 'src/app/models/proyectos';
import { ProyectosService } from 'src/app/service/proyectos.service';

@Component({
  selector: 'app-modificar-proyecto',
  templateUrl: './modificar-proyecto.component.html',
  styleUrls: ['./modificar-proyecto.component.css']
})
export class ModificarProyectoComponent implements OnInit {

  proyecto: Proyectos = null;

  constructor(
    private proyectosService: ProyectosService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.proyectosService.detalle(id).subscribe(
      data => {
        this.proyecto = data;
      },
      err => {
        this.router.navigate(['/']);
      }
    );
  }

  modificar(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.proyectosService.modificar(id, this.proyecto).subscribe(
      data => {
        this.router.navigate(['/porfolio/proyectos']);
      },
      err => {
        alert(err);
        this.router.navigate(['/porfolio/proyectos']);
      }
    )
  }

  cancelar() {
    this.router.navigate(['/porfolio/proyectos'])
  }
}
