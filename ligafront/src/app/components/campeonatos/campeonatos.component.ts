import { Component, Output, Input, ViewEncapsulation,OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import {Routes, RouterModule, Router } from '@angular/router';

import { Divisional } from '../../models/divisionales';
import { Modalidad } from '../../models/modalidades';
import { Zona } from '../../models/zonas';
import { Campeonato } from '../../models/campeonatos';
import { DivisionalesService } from '../../services/divisionales.service';
import { ModalidadesService } from '../../services/modalidad.service';
import { ZonasService } from '../../services/zonas.service';
import { CampeonatosService } from 'src/app/services/Campeonatos.service';
import { Equipo } from '../../models/equipos';
import { EquiposService } from '../../services/equipos.service';

import { CamequiposComponent } from '../camequipos/camequipos.component';

declare var M: any;

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-campeonato',
  templateUrl: './campeonatos.component.html',
  styleUrls: ['./campeonatos.component.css'],
  providers: [ DivisionalesService, ModalidadesService, ZonasService, CampeonatosService, EquiposService ]
})
export class CampeonatosComponent implements OnInit {

  public CanEq: number;

  constructor(private campeonatosService: CampeonatosService,
    private divisionalesService: DivisionalesService,
    private modalidadesService: ModalidadesService, 
    private zonasService : ZonasService,
    private equiposService: EquiposService,
    private router: Router) { }

  ngOnInit() {
    this.getDivisional();
    this.getModalidad();
    this.getZona(); 
    this.getCampeonato();
    this.campeonatosService.selectedCampeonato.campeonatoestado = "Activo";
  }


  addCampeonato(form?: NgForm) {
    var zonaid=document.querySelector("#zonas option[value='"+form.value.zonanom+"']").id;
    form.value.zonaid = zonaid;

    var modalidadid=document.querySelector("#modalidades option[value='"+form.value.modalidadnom+"']").id;
    form.value.modalidadid = modalidadid;

    var divisionalid=document.querySelector("#divisionales option[value='"+form.value.divisionalnom+"']").id;
    form.value.divisionalid = divisionalid;

    form.value.campeonatoequipos = 0;

    if(parseInt(form.value.zonaid, 10) > 0 && parseInt(form.value.modalidadid, 10) > 0 && parseInt(form.value.divisionalid, 10) > 0 && form.value.campeonatonom){
      if(form.value.campeonatoid) {
        this.campeonatosService.putCampeonato(form.value)
        .subscribe(res => {
          this.resetForm(form);
          M.toast({html: 'Campeonato Editado'});
        });
      } else {
        form.value.campeonatoequipos = 0;
        this.campeonatosService.postCampeonato(form.value)
        .subscribe(res => {
        this.resetForm(form);
        M.toast({html: 'Campeonato Ingresado'});
        });
    };
  }else{
    alert('Debe ingresar Zona, Modalidad, Divisional y Nombre de Campeonato')
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

 getDivisional() {
   this.divisionalesService.getDivisional()
     .subscribe(res => {
       this.divisionalesService.divisional = res as Divisional[];
     });
 }

 getCampeonato() {
  this.campeonatosService.getCampeonato()
    .subscribe(res => {
      this.campeonatosService.campeonatos = res as Campeonato[];
    });
}

getCanEqu(campeonatoid: number){
  this.equiposService.getCanEquipo(campeonatoid)
  .subscribe(res => {
    this.CanEq = res[0].can as any;
  });

};

 editCampeonato(campeonato: Campeonato) {
   this.getCanEqu(campeonato.campeonatoid);
   this.campeonatosService.selectedCampeonato = campeonato;
 }

 deleteCampeonato(campeonatoid: number, form: NgForm) {
   if(confirm('Confirma que desea borrar el campeonato?')) {
     this.campeonatosService.deleteCampeonato(campeonatoid)
       .subscribe(res => {
         this.resetForm(form);
         M.toast({html: 'Campeonato Borrado'});
       });
   }
 }

 resetForm(form?: NgForm) {
   if (form) {
     form.reset();

      this.getDivisional();
      this.getModalidad();
      this.getZona();
      this.getCampeonato();
   }
 }

 ShowNews(mostrar: number){
  if(mostrar === 1){
    sessionStorage.setItem('noticias', '1');
  }else{
    sessionStorage.setItem('noticias', '0');
  }
}

} //CampeonatosComponent

