import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/models/experiencia';
import { ExperienciaService } from 'src/app/service/experiencia.service';

@Component({
  selector: 'app-editar-experiencia',
  templateUrl: './editar-experiencia.component.html',
  styleUrls: ['./editar-experiencia.component.css']
})
export class EditarExperienciaComponent implements OnInit {

  experiencia: Experiencia = null;

  constructor(
    private experienciaService:ExperienciaService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.experienciaService.detalle(id).subscribe(
      data => {
        this.experiencia = data;
      },
      err => {
        this.router.navigate(['/']);
      }
    );
  }

  modificar(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.experienciaService.modificar(id, this.experiencia).subscribe(
      data => {
        this.router.navigate(['/porfolio/experiencia']);
      },
      err => {
        
        this.router.navigate(['/porfolio/experiencia']);
      }
    )
  }

  cancelar() {
    this.router.navigate(['/porfolio/experiencia']);
  }
}
