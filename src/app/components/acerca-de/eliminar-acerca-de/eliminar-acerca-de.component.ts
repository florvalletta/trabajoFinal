import { Component, OnInit } from '@angular/core';
import { AcercaDe } from 'src/app/models/acerca-de';
import { AcercaDeService } from '../service/acerca-de.service';

@Component({
  selector: 'app-eliminar-acerca-de',
  templateUrl: './eliminar-acerca-de.component.html',
  styleUrls: ['./eliminar-acerca-de.component.css']
})
export class EliminarAcercaDeComponent implements OnInit {

  acercaDe: AcercaDe[] = [];

  constructor(private acercaDeService: AcercaDeService) { }

  ngOnInit(): void {
  }

  verAcercaDe(): void {
    this.acercaDeService.list().subscribe(
      data => {
        this.acercaDe = data;
      },
      err => {
        console.log(err);
      })
  }

  borrar(id: number) {
    this.acercaDeService.eliminar(id).subscribe(
      data => {
        this.verAcercaDe();
      }
    );
  }

}
