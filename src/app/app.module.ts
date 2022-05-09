import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Componentes
import { HeaderComponent } from './components/header/header.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { PortadaComponent } from './components/portada/portada.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { LoginComponent } from './components/login/login.component';
import { CargarAcercaDeComponent } from './components/acerca-de/cargar-acerca-de/cargar-acerca-de.component';
import { EditarAcercaDeComponent } from './components/acerca-de/editar-acerca-de/editar-acerca-de.component';
import { EliminarAcercaDeComponent } from './components/acerca-de/eliminar-acerca-de/eliminar-acerca-de.component';
import { DetalleAcercaDeComponent } from './components/acerca-de/detalle-acerca-de/detalle-acerca-de.component';
import { CargarPortadaComponent } from './components/portada/cargar-portada/cargar-portada.component';
import { EditarPortadaComponent } from './components/portada/editar-portada/editar-portada.component';
import { EliminarPortadaComponent } from './components/portada/eliminar-portada/eliminar-portada.component';
import { EditarEducacionComponent } from './components/educacion/editar-educacion/editar-educacion.component';
import { CargarEducacionComponent } from './components/educacion/cargar-educacion/cargar-educacion.component';
import { DetalleEducacionComponent } from './components/educacion/detalle-educacion/detalle-educacion.component';
import { CargarExperienciaComponent } from './components/experiencia/cargar-experiencia/cargar-experiencia.component';
import { EditarExperienciaComponent } from './components/experiencia/editar-experiencia/editar-experiencia.component';
import { CargarProyectoComponent } from './components/proyectos/cargar-proyecto/cargar-proyecto.component';
import { ModificarProyectoComponent } from './components/proyectos/modificar-proyecto/modificar-proyecto.component';
import { CargarSkillComponent } from './components/skills/cargar-skill/cargar-skill.component';
import { EditarSkillComponent } from './components/skills/editar-skill/editar-skill.component';
import { PorfolioComponent } from './components/porfolio/porfolio.component';
import { CompartidoModule } from './modules/compartido/compartido.module';
import { NavbarComponent } from './components/navbar/navbar.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AcercaDeComponent,
    PortadaComponent,
    ExperienciaComponent,
    EducacionComponent,
    SkillsComponent,
    ProyectosComponent,
    LoginComponent,
    CargarAcercaDeComponent,
    EditarAcercaDeComponent,
    EliminarAcercaDeComponent,
    DetalleAcercaDeComponent,
    CargarPortadaComponent,
    EditarPortadaComponent,
    EliminarPortadaComponent,
    EditarEducacionComponent,
    CargarEducacionComponent,
    DetalleEducacionComponent,
    CargarExperienciaComponent,
    EditarExperienciaComponent,
    CargarProyectoComponent,
    ModificarProyectoComponent,
    CargarSkillComponent,
    EditarSkillComponent,
    PorfolioComponent,
    NavbarComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CompartidoModule
  ],
  providers: [],
  bootstrap: [AppComponent, HeaderComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [EditarSkillComponent]
})
export class AppModule { }
