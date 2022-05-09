import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CargarPortadaComponent } from 'src/app/components/portada/cargar-portada/cargar-portada.component';
import { EditarPortadaComponent } from 'src/app/components/portada/editar-portada/editar-portada.component';
import { PortadaComponent } from 'src/app/components/portada/portada.component';

const routes: Routes = [
  {path: '', component: PortadaComponent, 
  children:[
    {path: 'nueva', component: CargarPortadaComponent},
    {path: 'modificar/:id', component: EditarPortadaComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HijosPorfolioRoutingModule { }
