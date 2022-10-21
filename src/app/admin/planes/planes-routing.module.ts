import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarComponent } from './pages/listar/listar.component';
import { CrearComponent } from './pages/crear/crear.component';
import { EditarComponent } from './pages/editar/editar.component';
import { PlanComponent } from './pages/plan/plan.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'listar',
        component: ListarComponent
      },
      {
        path: 'crear',
        component: CrearComponent
      },
      {
        path: 'editar',
        component: EditarComponent
      },
      {
        path: 'plan',
        component: PlanComponent
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
export class PlanesRoutingModule { }
