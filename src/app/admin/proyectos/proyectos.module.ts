import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProyectosRoutingModule } from './proyectos-routing.module';
import { ListarComponent } from './pages/listar/listar.component';
import { CrearComponent } from './pages/crear/crear.component';
import { EditarComponent } from './pages/editar/editar.component';
import { ProyectoComponent } from './pages/proyecto/proyecto.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ListarComponent,
    CrearComponent,
    EditarComponent,
    ProyectoComponent
  ],
  imports: [
    CommonModule,
    ProyectosRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProyectosModule { }
