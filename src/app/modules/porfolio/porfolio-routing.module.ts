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

const routes: Routes = [
  {path: '', component: PorfolioComponent, children:
   [{path: '', component:PortadaComponent},
    {path: 'datosPersonales', component: PortadaComponent},
    {path: 'datosPersonales/nueva', component: CargarPortadaComponent},
    {path: 'datosPersonales/modificar/:id', component: EditarPortadaComponent},
    {path: 'acercaDe', component: AcercaDeComponent},
    {path: 'acercaDe/nueva', component: CargarAcercaDeComponent },
    {path: 'acercaDe/modificar/:id', component: EditarAcercaDeComponent },
    {path: 'educacion', component: EducacionComponent},
    {path: 'educacion/nueva', component: CargarEducacionComponent},
    {path: 'educacion/modificar/:id', component: EditarEducacionComponent},
    {path: 'experiencia', component: ExperienciaComponent},
    {path: 'experiencia/nueva', component: CargarExperienciaComponent},
    {path: 'experiencia/modificar/:id', component: EditarExperienciaComponent},
    {path: 'proyectos', component: ProyectosComponent},
    {path: 'proyectos/nueva', component: CargarProyectoComponent},
    {path: 'proyectos/modificar/:id', component: ModificarProyectoComponent},
    {path: 'skill', component: SkillsComponent},
    {path: 'skill/nueva', component: CargarSkillComponent},
    {path: 'skill/modificar/:id', component: EditarSkillComponent}
  ]},
    {path: '**', redirectTo:'porfolio', pathMatch:'full'}

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PorfolioRoutingModule { }
