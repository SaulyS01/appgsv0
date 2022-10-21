import { Component, NgZone, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProyectoService } from 'src/app/services/proyecto.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  listarProyectos: any = [];
  updateProyectoForm: FormGroup | any;
  proyectoU: any = {};


  constructor(
    private actRoute: ActivatedRoute,
    public proyectoService: ProyectoService,
    public fb: FormBuilder,
    private ngZone: NgZone,
    private router: Router
  ) {
    var id = this.actRoute.snapshot.paramMap.get('id');
    this.proyectoService.GetProyecto(id).subscribe((data) => {

      this.proyectoU = data;

      this.updateProyectoForm = this.fb.group({
        proyecto: [this.proyectoU.data.proyecto],
        costo: [this.proyectoU.data.costo],
        fe_inicio: [this.proyectoU.data.fe_inicio],
        fe_fin: [this.proyectoU.data.fe_fin],
        estado: [this.proyectoU.data.estado],
      })
    })
  }

  ngOnInit(): void {
    this.updateForm()
  }

  updateForm() {
    this.updateProyectoForm = this.fb.group({
      proyecto: [''],
      costo: [''],
      fe_inicio: [''],
      fe_fin: [''],
      estado: [''],
    })
  }

  submitForm() {
    var id = this.actRoute.snapshot.paramMap.get('id');
    this.proyectoService.UpdateProyecto(id, this.updateProyectoForm.value).subscribe(res => {
      this.ngZone.run(() => this.router.navigateByUrl('/admin/proyectos/listar'))
    })
  }
}
