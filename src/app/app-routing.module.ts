import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Componentes
import { LoginComponent } from './components/login/login.component';

//Guard
import { GuardGuard } from './service/guard.guard';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'}, 
  {path: 'login', component: LoginComponent},
  { path: 'porfolio', canActivate: [GuardGuard], loadChildren: () => import('./modules/porfolio/porfolio.module').then(x => x.PorfolioModule)},
{path: '**', redirectTo:'login', pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
