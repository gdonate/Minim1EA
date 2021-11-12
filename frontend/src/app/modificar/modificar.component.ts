import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GrupoInvestigacion } from '../models/grupoinvestigacion';
import { GrupoinvestigacionService } from '../services/grupoinvestigacion.service';
//import { debug } from 'console';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit {

  grupoinvestigacionForm: FormGroup;
  grupo: GrupoInvestigacion;
  id: String;
  constructor(private formBuilder: FormBuilder, private grupoService: GrupoinvestigacionService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.grupoService.getGrupo(this.id).subscribe(data =>{
      this.grupo = data;
      this.grupoinvestigacionForm = this.formBuilder.group({
        nombre: [this.grupo.nombre, [Validators.required, Validators.nullValidator]],
        id: [this.grupo.id, [Validators.required, Validators.nullValidator]],
        descripcion: [this.grupo.descripcion, [Validators.required, Validators.nullValidator]],
        tecnologia: [this.grupo.tecnologia, [Validators.required, Validators.nullValidator]],
        fecha: [this.grupo.fecha, [Validators.required, Validators.nullValidator]],
        fiable: [this.grupo.fiable, [Validators.required, Validators.nullValidator]],
        personas: [this.grupo.personas, [Validators.required, Validators.nullValidator]]
      });
    })
  }

  get formControls(){
    return this.grupoinvestigacionForm.controls;
  }

  atras(){
    console.log("Hello");

    this.router.navigateByUrl('/principal');
  }

  modificargrupo(){
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

    const grupomodificado = {'nombre': nombre, 'id': id, 'descripcion': descripcion, 'tecnologia': tecnologia, 'fecha': fecha, 'fiable': fiable, 'personas': personas};
    this.grupoService.modificarGrupo(grupomodificado, this.route.snapshot.paramMap.get('id')).subscribe(data => {
      this.router.navigateByUrl('/principal');
    })
  }

  delete(){
    const id = this.grupoinvestigacionForm.value.id;
    console.log(id);
    this.grupoService.eliminarGrupo(id).subscribe(data =>{
      this.router.navigateByUrl('/principal');
    });
  }


}



