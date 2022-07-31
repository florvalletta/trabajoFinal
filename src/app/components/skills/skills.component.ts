import { Component, OnInit } from '@angular/core';

//Model
import { Skill } from 'src/app/models/skill';

//Service
import { SkillsService } from 'src/app/service/skills.service';
import { TokenService } from 'src/app/service/token.service';


//Angular Material
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  
  skill: Skill[] = [];
  nombreSkill: string = '';
  valorPorcentaje: number = null;
  isLogged = false;
  nombreUsuario = '';

  constructor(
    private skillsService: SkillsService, 
    private _snackBar: MatSnackBar,
    private tokenService: TokenService
    ) { }

  ngOnInit(): void {
    this.verSkill();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.nombreUsuario = this.tokenService.getUserName();
    } else {
      this.isLogged = false;
      this.nombreUsuario = '';
    }
  }

    
  verSkill(): void {
    this.skillsService.list().subscribe(
      data => {
        this.skill = data;
      },
      err => {
        alert(err);
      })

  }

  borrar(id: number) {
    this.skillsService.eliminar(id).subscribe(
      data => {
        this.eliminacion(),
        this.verSkill();
      },
    err => {
        alert(err);
    }
    );
  }

//Método para emitir un mensaje de que los datos fueron eliminados correctamente
  eliminacion() {
    this._snackBar.open('La skill se eliminó correctamente', 'OK',  {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'top'
    });
  }
  
  }