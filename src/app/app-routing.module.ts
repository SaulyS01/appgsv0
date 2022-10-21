import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './theme/main/main.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'admin',
    component: MainComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'usuarios',
        loadChildren: () =>
          import('./admin/usuarios/usuarios.module').then((m) => m.UsuariosModule)
      },
      {
        path: 'planes',
        loadChildren: () =>
          import('./admin/planes/planes.module').then((m) => m.PlanesModule)
      },
      {
        path: 'proyectos',
        loadChildren: () =>
          import('./admin/proyectos/proyectos.module').then((m) => m.ProyectosModule)
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      }
    ],
  },
  {
    path: '',
    redirectTo: 'admin',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
