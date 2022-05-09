import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AcercaDe } from 'src/app/models/acerca-de';
import { AcercaDeService } from '../service/acerca-de.service';

@Component({
  selector: 'app-cargar-acerca-de',
  templateUrl: './cargar-acerca-de.component.html',
  styleUrls: ['./cargar-acerca-de.component.css']
})
export class CargarAcercaDeComponent implements OnInit {
  
  descripcion: string = '';

  constructor(private acercaDeService: AcercaDeService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
      const acercaDe = new AcercaDe(this.descripcion);
      this.acercaDeService.save(acercaDe).subscribe(
        data => {this.router.navigate(['/'])},
        err => {this.router.navigate(['/'])}
      )
  }
}