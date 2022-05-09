import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/models/educacion';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  educacion: Educacion[] = [];

  constructor(private educacionService: EducacionService) { }

  ngOnInit(): void {
    this.verEducacion();
  }

  verEducacion(): void {
    this.educacionService.list().subscribe(
      data => {
        this.educacion = data;
      },
      err => {
        alert(err);
      })
  }

  borrar(id: number) {
    this.educacionService.eliminar(id).subscribe(
      data => {
        this.verEducacion();
      },
    err => {
        alert(err);
    }
    );
  }
}
