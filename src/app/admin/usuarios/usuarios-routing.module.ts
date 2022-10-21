import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarComponent } from './listar/listar.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'listar',
        component: ListarComponent
      },
      {
        path: 'listar',
        component: ListarComponent
      },
      {
        path: 'listar',
        component: ListarComponent
      }
    ]
  },
  {
    path: '',
    redirectTo: 'listar',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
