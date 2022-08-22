import { Component, Input, OnInit } from '@angular/core';

//Model
import { Skill } from 'src/app/models/skill';

//Service
import { SkillsService } from 'src/app/service/skills.service';
import { TokenService } from 'src/app/service/token.service';


//Angular Material
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { CargarSkillComponent } from './cargar-skill/cargar-skill.component';
import { Router } from '@angular/router';
import { EditarSkillComponent } from './editar-skill/editar-skill.component';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';



@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills: Skill[] = [];
  nombreSkill: string = '';
  valorPorcentaje: number = null;
  isLogged = false;
  nombreUsuario = '';
  @Input() personaCargadaId: number;
  bsModalRef: BsModalRef;
  bsDelModalRef: BsModalRef;

  constructor(
    private skillsService: SkillsService, 
    private _snackBar: MatSnackBar,
    private tokenService: TokenService,
    private modalService: BsModalService,
    private delModalService: BsModalService
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

  openModalWithComponent(skillToEdit: Skill) {
    console.log("Se va a modificar:", skillToEdit, this.personaCargadaId)

  // Setup initial state for modal
  const initialState = {
    personaCargadaId: this.personaCargadaId,
    skill: skillToEdit,
    listaSkills: this.skills
  };

  // Open up the modal
  this.bsModalRef = this.modalService.show(EditarSkillComponent, { initialState });
  this.bsModalRef.content.closeBtnName = 'Close';

  // Subscribe to modal's response
  this.bsModalRef.content.refreshEvent.subscribe(() => {
    this.verSkill()
  })
}

    
  verSkill(): void {
    this.skillsService.list().subscribe(
      data => {
        this.skills = data;
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