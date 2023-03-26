import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistryComponent } from './pages/registry/registry.component';
import { StartComponent } from './pages/start/start.component';

const routes: Routes = [
  {
    path: '',
    title: 'Inicio',
    component: StartComponent,
  },
  {
    path: 'registro',
    title: 'Regístro',
    component: RegistryComponent,
  },
  {
    path: 'login',
    title: 'Inicio de sesion',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
