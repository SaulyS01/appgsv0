import { Component, NgZone, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProyectoService } from 'src/app/services/proyecto.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  listarProyectos: any = [];
  verProyecto: any = [];
  verificar: any = false;
  activeN: any = false;

  constructor(
    public proyectoService: ProyectoService,
    private actRoute: ActivatedRoute,
    public fb: FormBuilder,
    private ngZone: NgZone,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.loadEquipos();
  }

  loadEquipos() {
    return this.proyectoService.GetProyectos().subscribe((data: {}) => {
      this.listarProyectos = data;
    })
  }

  getProyecto(id: any) {
    this.proyectoService.GetProyecto(id).subscribe((data) => {
      this.verificar = true;
      this.verProyecto = data
      this.verProyecto = this.verProyecto.data
    })
  }

  deleteEquipo(id: any) {
    return this.proyectoService.DeleteProyecto(id).subscribe(res => {
      this.loadEquipos();
      console.log('Equipo eliminado!')
    })
  }
}
