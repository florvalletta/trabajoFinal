import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Skill } from 'src/app/models/skill';
import { SkillsService } from 'src/app/service/skills.service';


@Component({
  selector: 'app-editar-skill',
  templateUrl: './editar-skill.component.html',
  styleUrls: ['./editar-skill.component.css']
})
export class EditarSkillComponent implements OnInit {

  skill: Skill = null;

  constructor(
    private skillsService: SkillsService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private _snackBar: MatSnackBar      
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.skillsService.detalle(id).subscribe(
      data => {
        this.skill = data;
      },
      err => {
        this.router.navigate(['/porfolio']);
      }
    );
  }

  modificar(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.skillsService.modificar(id, this.skill).subscribe(
      data => {
        this.exito(),
        this.router.navigate(['/porfolio/skill']);
      },
      err => {
        this.error(),
        this.router.navigate(['/porfolio/skill']);
      }
    )
  }

//Método para cerrar el formulario sin guardar cambios
cancelar() {
  this.router.navigate(['/porfolio/skill'])
}  

//Método para emitir un mensaje de que los datos no se cargaron
error() {
  this._snackBar.open('Error de modificación de skill', 'Fail',  {
    duration: 5000,
    horizontalPosition: 'center',
    verticalPosition: 'top'
  });
}
//Método para emitir un mensaje de que los datos se cargaron
exito() {
  this._snackBar.open('La skill se modificó correctamente', 'OK',  {
    duration: 5000,
    horizontalPosition: 'center',
    verticalPosition: 'top'
  });
}

}
