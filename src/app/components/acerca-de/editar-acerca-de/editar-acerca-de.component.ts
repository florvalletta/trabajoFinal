import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AcercaDe } from 'src/app/models/acerca-de';
import { AcercaDeService } from '../service/acerca-de.service';

@Component({
  selector: 'app-editar-acerca-de',
  templateUrl: './editar-acerca-de.component.html',
  styleUrls: ['./editar-acerca-de.component.css']
})
export class EditarAcercaDeComponent implements OnInit {
  
  acerca: AcercaDe = null;

  constructor(
    private acercaDeService: AcercaDeService, 
    private activatedRoute: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params['id'];
    this.acercaDeService.detalle(id).subscribe(
      data => {
        this.acerca = data;
      },
      err => {
        this.router.navigate(['/']);
      }
    );
  }
  
    modificar(): void {
      const id = this.activatedRoute.snapshot.params['id'];
      this.acercaDeService.modificar(id, this.acerca).subscribe(
        data => {
          this.router.navigate(['/']);
        },
        err => {
          this.router.navigate(['/']);
        }
      )
    }
  }