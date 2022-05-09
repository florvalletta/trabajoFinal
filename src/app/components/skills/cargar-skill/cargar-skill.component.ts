import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from 'src/app/models/skill';
import { SkillsService } from 'src/app/service/skills.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { SwitchService } from 'src/app/service/switch.service';

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
    private modal: SwitchService
    ) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const skill = new Skill(this.nombreSkill, this.valorPorcentaje);
    this.skillsService.save(skill).subscribe(
      data => {this.router.navigate(['/'])},
      err => {this.router.navigate(['/'])}
    )
}

  cerrar(){
    this.modal.$modal.emit(false);
  }
}
