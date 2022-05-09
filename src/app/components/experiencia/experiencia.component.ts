import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/models/experiencia';
import { ExperienciaService } from 'src/app/service/experiencia.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  experiencia: Experiencia[] = [];

  constructor(private experienciaService: ExperienciaService) { }

  ngOnInit(): void {
    this.verExperiencia();
  }

  verExperiencia(): void {
    this.experienciaService.list().subscribe(
      data => {
        this.experiencia = data;
      },
      err => {
        alert(err);
      })
  }

  borrar(id: number) {
    this.experienciaService.eliminar(id).subscribe(
      data => {
        this.verExperiencia();
      },
    err => {
        alert(err);
    }
    );
  }

}
