import { Component, OnInit } from '@angular/core';
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
        this.router.navigate(['/porfolio/skill']);
      },
      err => {
        alert(err);
        this.router.navigate(['/porfolio/skill']);
      }
    )
  }

cancelar() {
  this.router.navigate(['/porfolio/skill'])
}  

}
