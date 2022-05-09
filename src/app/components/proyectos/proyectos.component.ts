import { Component, OnInit } from '@angular/core';
import { Proyectos } from 'src/app/models/proyectos';
import { ProyectosService } from 'src/app/service/proyectos.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  proyectos: Proyectos[] = [];

  constructor(private proyectosService: ProyectosService) { }

  ngOnInit(): void {
    this.verProyectos();
  }

  verProyectos(): void {
    this.proyectosService.list().subscribe(
      data => {
        this.proyectos = data;
      },
      err => {
        alert(err);
      })
  }

  borrar(id: number) {
    this.proyectosService.eliminar(id).subscribe(
      data => {
        this.verProyectos();
      },
    err => {
        alert(err);
    }
    );
  }

}
