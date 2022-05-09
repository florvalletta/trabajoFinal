import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { CargarAcercaDeComponent } from './components/acerca-de/cargar-acerca-de/cargar-acerca-de.component';
import { DetalleAcercaDeComponent } from './components/acerca-de/detalle-acerca-de/detalle-acerca-de.component';
import { EditarAcercaDeComponent } from './components/acerca-de/editar-acerca-de/editar-acerca-de.component';
import { EliminarAcercaDeComponent } from './components/acerca-de/eliminar-acerca-de/eliminar-acerca-de.component';
import { CargarEducacionComponent } from './components/educacion/cargar-educacion/cargar-educacion.component';
import { EditarEducacionComponent } from './components/educacion/editar-educacion/editar-educacion.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { CargarExperienciaComponent } from './components/experiencia/cargar-experiencia/cargar-experiencia.component';
import { EditarExperienciaComponent } from './components/experiencia/editar-experiencia/editar-experiencia.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { LoginComponent } from './components/login/login.component';
import { PorfolioComponent } from './components/porfolio/porfolio.component';
import { CargarPortadaComponent } from './components/portada/cargar-portada/cargar-portada.component';
import { EditarPortadaComponent } from './components/portada/editar-portada/editar-portada.component';
import { PortadaComponent } from './components/portada/portada.component';
import { CargarProyectoComponent } from './components/proyectos/cargar-proyecto/cargar-proyecto.component';
import { ModificarProyectoComponent } from './components/proyectos/modificar-proyecto/modificar-proyecto.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { CargarSkillComponent } from './components/skills/cargar-skill/cargar-skill.component';
import { EditarSkillComponent } from './components/skills/editar-skill/editar-skill.component';
import { SkillsComponent } from './components/skills/skills.component';

const routes: Routes = [
  {path: '', redirectTo: 'porfolio', pathMatch: 'full'}, 
  { path: 'porfolio', loadChildren: () => import('./modules/porfolio/porfolio.module').then(x => x.PorfolioModule)},
{path: 'login', component: LoginComponent},
{path: '**', redirectTo:'porfolio', pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
