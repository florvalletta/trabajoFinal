import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//Model
import { Skill } from 'src/app/models/skill';
//Service
import { SkillsService } from 'src/app/service/skills.service';
//Angular Material
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { EditarSkillComponent } from '../editar-skill/editar-skill.component';

@Component({
  selector: 'app-cargar-skill',
  templateUrl: './cargar-skill.component.html',
  styleUrls: ['./cargar-skill.component.css']
})
export class CargarSkillComponent implements OnInit {

  nombreSkill: string = '';
  valorPorcentaje: number = null;

  constructor(
    private skillsService: SkillsService,
    private router: Router,
    private _snackBar: MatSnackBar
    ) { }

  ngOnInit(): void {
   
  }

  onCreate(): void {
    const skill = new Skill(this.nombreSkill, this.valorPorcentaje);
    this.skillsService.save(skill).subscribe(
      data => {
              this.exito(),
              this.router.navigate(['/porfolio'])},
      err => {
              this.error(),
              this.router.navigate(['/porfolio'])}
    );
}

//Método para cerrar el formulario sin guardar cambios
cancelar() {
  this.router.navigate(['/porfolio/skill'])
}

//Método para emitir un mensaje de que los datos no se cargaron
error() {
  this._snackBar.open('Error de carga de skill', 'Fail',  {
    duration: 5000,
    horizontalPosition: 'center',
    verticalPosition: 'top'
  });
}

//Método para emitir un mensaje de que los datos se cargaron
exito() {
  this._snackBar.open('La skill se cargó correctamente', 'OK',  {
    duration: 5000,
    horizontalPosition: 'center',
    verticalPosition: 'top'
  });
}


}
