import { Component, OnInit, Inject } from '@angular/core';
import { Skill } from 'src/app/models/skill';
import { SkillsService } from 'src/app/service/skills.service';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CargarSkillComponent } from './cargar-skill/cargar-skill.component';
import { EditarSkillComponent } from './editar-skill/editar-skill.component';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  
  skill: Skill[] = [];
  nombreSkill: string = '';
  valorPorcentaje: number = null;

  constructor(
    private skillsService: SkillsService, 
    private router: Router, 
    private httpClient: HttpClient,
    
    ) { }

  ngOnInit(): void {
    this.verSkill();
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
        this.verSkill();
      },
    err => {
        alert(err);
    }
    );
  }

  
  }
  
  
