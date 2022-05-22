import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

//Angular Material
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar';

//Servicios
import { DatosPersonalesService } from 'src/app/service/datos-personales.service';
import { InterceptorService } from 'src/app/service/interceptor.service';
import { AcercaDeService } from 'src/app/components/acerca-de/service/acerca-de.service';
import { EducacionService } from 'src/app/service/educacion.service';
import { ExperienciaService } from 'src/app/service/experiencia.service';
import { ProyectosService } from 'src/app/service/proyectos.service';
import { SkillsService } from 'src/app/service/skills.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatToolbarModule,
    MatIconModule,
    MatSnackBarModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatToolbarModule,
    MatIconModule,
    MatSnackBarModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    DatosPersonalesService,
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
  ]
})
export class CompartidoModule { }
