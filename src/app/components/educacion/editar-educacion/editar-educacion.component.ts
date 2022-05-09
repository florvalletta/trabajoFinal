import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/models/educacion';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-editar-educacion',
  templateUrl: './editar-educacion.component.html',
  styleUrls: ['./editar-educacion.component.css']
})
export class EditarEducacionComponent implements OnInit {

  educacion: Educacion = null;

  constructor(
    private educacionService: EducacionService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.educacionService.detalle(id).subscribe(
      data => {
        this.educacion = data;
      },
      err => {
        this.router.navigate(['/']);
      }
    );
  }

  modificar(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.educacionService.modificar(id, this.educacion).subscribe(
      data => {
        this.router.navigate(['/']);
      },
      err => {
        alert(err);
        this.router.navigate(['/']);
      }
    )
  }

}
