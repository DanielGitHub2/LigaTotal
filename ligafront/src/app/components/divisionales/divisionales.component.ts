import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Divisional } from '../../models/divisionales';
import { Modalidad } from '../../models/modalidades';
import { Zona } from '../../models/zonas';
import { DivisionalesService } from '../../services/divisionales.service';
import { ModalidadesService } from '../../services/modalidad.service';
import { ZonasService } from '../../services/zonas.service';

declare var M: any;

@Component({
  selector: 'app-divisional',
  templateUrl: './divisionales.component.html',
  styleUrls: ['./divisionales.component.css'],
  providers: [ DivisionalesService, ModalidadesService, ZonasService ]
})
export class DivisionalesComponent implements OnInit {

  constructor(private divisionalesService: DivisionalesService,
    private modalidadesService: ModalidadesService, 
    private zonasService : ZonasService) { }

  ngOnInit() {
    this.getDivisional();
    this.getModalidad();
    this.getZona(); 
  }


  addDivisional(form?: NgForm) {
    var zonaid=document.querySelector("#zonas option[value='"+form.value.zonanom+"']").id;
    form.value.zonaid = zonaid;

    var modalidadid=document.querySelector("#modalidades option[value='"+form.value.modalidadnom+"']").id;
    form.value.modalidadid = modalidadid;

    if(form.value.divisionalid) {
       this.divisionalesService.putDivisional(form.value)
       .subscribe(res => {
         this.resetForm(form);
         M.toast({html: 'Divisional Editada'});
       });
    } else {
      this.divisionalesService.postDivisional(form.value)
      .subscribe(res => {
       this.resetForm(form);
       M.toast({html: 'Divisional Ingresada'});
      });
   };
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

 getDivisional() {
   this.divisionalesService.getDivisional()
     .subscribe(res => {
       this.divisionalesService.divisional = res as Divisional[];
     });
 }

 editDivisional(divisional: Divisional) {
   this.divisionalesService.selectedDivisional = divisional;
 }

 deleteDivisional(divisionalid: number, form: NgForm) {
   if(confirm('Confirma que desea borrar la Divisional?')) {
     this.divisionalesService.deleteDivisional(divisionalid)
       .subscribe(res => {
         this.resetForm(form);

         M.toast({html: 'Divisional Borrada'});
       });
   }
 }

 resetForm(form?: NgForm) {
   if (form) {
     form.reset();

      this.getDivisional();
      this.getModalidad();
      this.getZona();
   }
 }

}
