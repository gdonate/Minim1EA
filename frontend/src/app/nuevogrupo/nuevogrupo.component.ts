import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GrupoinvestigacionService } from '../services/grupoinvestigacion.service';

@Component({
  selector: 'app-nuevogrupo',
  templateUrl: './nuevogrupo.component.html',
  styleUrls: ['./nuevogrupo.component.css']
})
export class NuevogrupoComponent implements OnInit {

  grupoinvestigacionForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private grupoService: GrupoinvestigacionService, private router: Router) { }

  ngOnInit(): void {
    this.grupoinvestigacionForm = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.nullValidator]],
      id: ['', [Validators.required, Validators.nullValidator]],
      descripcion: ['', [Validators.required, Validators.nullValidator]],
      tecnologia: ['', [Validators.required, Validators.nullValidator]],
      fecha: ['', [Validators.required, Validators.nullValidator]],
      fiable: ['', [Validators.required, Validators.nullValidator]],
      personas: ['', [Validators.required, Validators.nullValidator]]
    });
  }

  get formControls(){
    return this.grupoinvestigacionForm.controls;
  }

  addgrupo(): void{
    if(this.grupoinvestigacionForm.invalid){
      return;
    }
    const nombre = this.grupoinvestigacionForm.value.nombre;
    const id = this.grupoinvestigacionForm.value.id;
    const descripcion = this.grupoinvestigacionForm.value.descripcion;
    const tecnologia = this.grupoinvestigacionForm.value.tecnologia;
    const fecha = this.grupoinvestigacionForm.value.fecha;
    const fiable = this.grupoinvestigacionForm.value.fiable;
    const personas = this.grupoinvestigacionForm.value.personas;


    const grupoinvestigacion = {'nombre': nombre, 'id': id, 'descripcion': descripcion, 'tecnologia': tecnologia, 'fecha': fecha, 'fiable': fiable, 'personas': personas};
    this.grupoService.addGrupo(grupoinvestigacion).subscribe(data =>{
      this.router.navigateByUrl('/principal');
    })
  }

  atras(){
    this.router.navigateByUrl('/principal');
  }

}
