import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA, Inject } from '@angular/core';
import { AcercaDe } from 'src/app/models/acerca-de';
import { AcercaDeService } from './service/acerca-de.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {

  acercaDe: AcercaDe[] = [];

  constructor(private acercaDeService: AcercaDeService
    ) {}

  ngOnInit() {
    this.verAcercaDe();
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
      },
    err => {

    }
    );
  }
}
