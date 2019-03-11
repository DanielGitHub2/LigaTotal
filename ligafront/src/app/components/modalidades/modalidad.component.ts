import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Modalidad } from '../../models/modalidades';
import { Zona } from '../../models/zonas';
import { ModalidadesService } from '../../services/modalidad.service';
import { ZonasService } from '../../services/zonas.service';

declare var M: any;

@Component({
  selector: 'app-modalidad',
  templateUrl: './modalidad.component.html',
  styleUrls: ['./modalidad.component.css'],
  providers: [ ModalidadesService, ZonasService ]
})
export class ModalidadComponent implements OnInit {

  constructor(private modalidadesService: ModalidadesService, 
    private zonasService : ZonasService) { }

  ngOnInit() {
    this.getModalidad();
    this.getZona(); 
  }

  addModalidad(form?: NgForm) {
    var zonaid=document.querySelector("#zonas option[value='"+form.value.zonanom+"']").id;
    form.value.zonaid = zonaid;

    if(parseInt(form.value.zonaid, 10) > 0 && form.value.modalidadnom){
      if(form.value.modalidadid) {
        this.modalidadesService.putModalidad(form.value)
        .subscribe(res => {
          this.resetForm(form);
          M.toast({html: 'Modalidad Editada'});
        });
      } else {
        this.modalidadesService.postModalidad(form.value)
        .subscribe(res => {
        this.resetForm(form);
        M.toast({html: 'Modalidad Ingresada'});
        });
      };
    }else{
      alert('Debe ingresar Zona y Modalidad')
    }
 }

 getModalidad() {
   this.modalidadesService.getModalidad()
     .subscribe(res => {
       this.modalidadesService.modalidad = res as Modalidad[];
     });
 }

 getZona() {
    this.zonasService.getZona()
      .subscribe(res => {
        this.zonasService.zonas = res as Zona[];
      });
  }


 editModalidad(modalidad: Modalidad) {
   this.modalidadesService.selectedModalidad = modalidad;
 }

 deleteModalidad(modalidadid: number, form: NgForm) {
   if(confirm('Confirma que desea borrar la Modalidad?')) {
     this.modalidadesService.deleteModalidad(modalidadid)
       .subscribe(res => {
         this.resetForm(form);
         M.toast({html: 'Modalidad Borrada'});
       });
   }
 }

 resetForm(form?: NgForm) {
   if (form) {
     form.reset();
     this.getModalidad()
     this.getZona();
   }
 }

}

