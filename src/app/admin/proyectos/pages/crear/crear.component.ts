import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProyectoService } from 'src/app/services/proyecto.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {

  proyectoForm: FormGroup | any;
  IssueArr: any = [];

  constructor(
    public fb: FormBuilder,
    private ngZone: NgZone,
    private router: Router,
    public proyectoService: ProyectoService
  ) { }

  ngOnInit(): void {
    this.addProyecto();
  }

  addProyecto() {
    this.proyectoForm = this.fb.group({
      proyecto: [''],
      costo: [''],
      fe_inicio: [''],
      fe_fin: [''],
      estado: ['1'],
    });
  }

  submitForm() {
    this.proyectoService.CreateProyecto(this.proyectoForm.value).subscribe((res) => {
      console.log('Equipo agregado!');
      this.ngZone.run(() => this.router.navigateByUrl('/admin/proyectos/listar'));
    });
  }
}
