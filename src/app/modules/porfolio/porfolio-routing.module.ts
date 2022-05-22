import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcercaDeComponent } from 'src/app/components/acerca-de/acerca-de.component';
import { CargarAcercaDeComponent } from 'src/app/components/acerca-de/cargar-acerca-de/cargar-acerca-de.component';
import { EditarAcercaDeComponent } from 'src/app/components/acerca-de/editar-acerca-de/editar-acerca-de.component';
import { CargarEducacionComponent } from 'src/app/components/educacion/cargar-educacion/cargar-educacion.component';
import { EditarEducacionComponent } from 'src/app/components/educacion/editar-educacion/editar-educacion.component';
import { EducacionComponent } from 'src/app/components/educacion/educacion.component';
import { CargarExperienciaComponent } from 'src/app/components/experiencia/cargar-experiencia/cargar-experiencia.component';
import { EditarExperienciaComponent } from 'src/app/components/experiencia/editar-experiencia/editar-experiencia.component';
import { ExperienciaComponent } from 'src/app/components/experiencia/experiencia.component';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
import { PorfolioComponent } from 'src/app/components/porfolio/porfolio.component';
import { CargarPortadaComponent } from 'src/app/components/portada/cargar-portada/cargar-portada.component';
import { EditarPortadaComponent } from 'src/app/components/portada/editar-portada/editar-portada.component';
import { PortadaComponent } from 'src/app/components/portada/portada.component';
import { CargarProyectoComponent } from 'src/app/components/proyectos/cargar-proyecto/cargar-proyecto.component';
import { ModificarProyectoComponent } from 'src/app/components/proyectos/modificar-proyecto/modificar-proyecto.component';
import { ProyectosComponent } from 'src/app/components/proyectos/proyectos.component';
import { CargarSkillComponent } from 'src/app/components/skills/cargar-skill/cargar-skill.component';
import { EditarSkillComponent } from 'src/app/components/skills/editar-skill/editar-skill.component';
import { SkillsComponent } from 'src/app/components/skills/skills.component';
import { GuardGuard } from 'src/app/service/guard.guard';

const routes: Routes = [
  {path: '', component: PorfolioComponent, canActivate: [GuardGuard], children:
   [{path: '', component:PortadaComponent, canActivate: [GuardGuard]},
    {path: 'datosPersonales', component: PortadaComponent, canActivate: [GuardGuard]},
    {path: 'datosPersonales/nueva', component: CargarPortadaComponent, canActivate: [GuardGuard]},
    {path: 'datosPersonales/modificar/:id', component: EditarPortadaComponent, canActivate: [GuardGuard]},
    {path: 'acercaDe', component: AcercaDeComponent, canActivate: [GuardGuard]},
    {path: 'acercaDe/nueva', component: CargarAcercaDeComponent, canActivate: [GuardGuard] },
    {path: 'acercaDe/modificar/:id', component: EditarAcercaDeComponent, canActivate: [GuardGuard] },
    {path: 'educacion', component: EducacionComponent, canActivate: [GuardGuard]},
    {path: 'educacion/nueva', component: CargarEducacionComponent, canActivate: [GuardGuard]},
    {path: 'educacion/modificar/:id', component: EditarEducacionComponent, canActivate: [GuardGuard]},
    {path: 'experiencia', component: ExperienciaComponent, canActivate: [GuardGuard]},
    {path: 'experiencia/nueva', component: CargarExperienciaComponent, canActivate: [GuardGuard]},
    {path: 'experiencia/modificar/:id', component: EditarExperienciaComponent, canActivate: [GuardGuard]},
    {path: 'proyectos', component: ProyectosComponent, canActivate: [GuardGuard]},
    {path: 'proyectos/nueva', component: CargarProyectoComponent, canActivate: [GuardGuard]},
    {path: 'proyectos/modificar/:id', component: ModificarProyectoComponent, canActivate: [GuardGuard]},
    {path: 'skill', component: SkillsComponent, canActivate: [GuardGuard]},
    {path: 'skill/nueva', component: CargarSkillComponent, canActivate: [GuardGuard]},
    {path: 'skill/modificar/:id', component: EditarSkillComponent, canActivate: [GuardGuard]}
  ]},
    {path: '**', redirectTo:'porfolio', pathMatch:'full'}

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PorfolioRoutingModule { }
