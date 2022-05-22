import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Componentes
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { PortadaComponent } from './components/portada/portada.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { LoginComponent } from './components/login/login.component';
import { CargarAcercaDeComponent } from './components/acerca-de/cargar-acerca-de/cargar-acerca-de.component';
import { EditarAcercaDeComponent } from './components/acerca-de/editar-acerca-de/editar-acerca-de.component';
import { CargarPortadaComponent } from './components/portada/cargar-portada/cargar-portada.component';
import { EditarPortadaComponent } from './components/portada/editar-portada/editar-portada.component';
import { EditarEducacionComponent } from './components/educacion/editar-educacion/editar-educacion.component';
import { CargarEducacionComponent } from './components/educacion/cargar-educacion/cargar-educacion.component';
import { CargarExperienciaComponent } from './components/experiencia/cargar-experiencia/cargar-experiencia.component';
import { EditarExperienciaComponent } from './components/experiencia/editar-experiencia/editar-experiencia.component';
import { CargarProyectoComponent } from './components/proyectos/cargar-proyecto/cargar-proyecto.component';
import { ModificarProyectoComponent } from './components/proyectos/modificar-proyecto/modificar-proyecto.component';
import { CargarSkillComponent } from './components/skills/cargar-skill/cargar-skill.component';
import { EditarSkillComponent } from './components/skills/editar-skill/editar-skill.component';
import { PorfolioComponent } from './components/porfolio/porfolio.component';
import { CompartidoModule } from './modules/compartido/compartido.module';
import { NavbarComponent } from './components/navbar/navbar.component';

//Servicios
import { DatosPersonalesService } from './service/datos-personales.service';
import { InterceptorService } from './service/interceptor.service';
import { AcercaDeService } from './components/acerca-de/service/acerca-de.service';
import { EducacionService } from './service/educacion.service';
import { ExperienciaService } from './service/experiencia.service';
import { ProyectosService } from './service/proyectos.service';
import { SkillsService } from './service/skills.service';





@NgModule({
  declarations: [
    AppComponent,
    AcercaDeComponent,
    PortadaComponent,
    ExperienciaComponent,
    EducacionComponent,
    SkillsComponent,
    ProyectosComponent,
    LoginComponent,
    CargarAcercaDeComponent,
    EditarAcercaDeComponent,
    CargarPortadaComponent,
    EditarPortadaComponent,
    EditarEducacionComponent,
    CargarEducacionComponent,
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
    CompartidoModule,
    ReactiveFormsModule
  ],
  providers: [DatosPersonalesService,
  { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true},
  AcercaDeService,
  { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true},
  EducacionService,
  { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true},
  ExperienciaService,
  { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true},
  ProyectosService,
  { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true},
  SkillsService,
  { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true}  
],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
