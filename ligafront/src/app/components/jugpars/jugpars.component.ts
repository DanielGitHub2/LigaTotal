import { Component, Output, Input, ViewEncapsulation,OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import {Routes, RouterModule, Router, ActivatedRoute } from '@angular/router';

import { Campeonato } from '../../models/campeonatos';
import { Partido } from '../../models/partidos';
import { Jugador } from '../../models/jugadores';
import { Jugpar } from '../../models/jugpar';
import { Equipo } from '../../models/equipos';

import { EquiposService } from '../../services/equipos.service';
import { CampeonatosService } from 'src/app/services/campeonatos.service';
import { PartidosService } from 'src/app/services/partidos.service';
import { JugadoresService } from 'src/app/services/jugadores.service';
import { JuparsService } from 'src/app/services/jupars.service';

declare var M: any;

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-jugpar',
  templateUrl: './jugpars.component.html',
  styleUrls: ['./jugpars.component.css'],
  providers: [ CampeonatosService, PartidosService, JugadoresService, JuparsService, EquiposService ]
})
export class JugparsComponent implements OnInit {

public ParId:number;
public EqId:number;

constructor(private campeonatosService: CampeonatosService,
  private partidosService: PartidosService, 
  private jugadoresService: JugadoresService, 
  private jugparsService: JuparsService, 
  private equiposService: EquiposService,
  private route: ActivatedRoute,
  private router: Router) { }

ngOnInit() {
  this.ParId = this.route.snapshot.params.par;
  this.EqId = this.route.snapshot.params.eq;
  this.getJugador();
  this.getEquipo();
  this.getCampeonato();
  this.getPartido();
  this.getJugpar();
}


addJugpar(form?: NgForm) {
  if(document.querySelector("#jugadores option[value='" + form.value.jugadornom + "']") == null){
    alert('Debe ingresar un Jugador válido');
  }else{
    var jugadorid = document.querySelector("#jugadores option[value='" + form.value.jugadornom + "']").id;
    form.value.jugadorid = jugadorid;
    form.value.PartidosId = this.ParId;
    if(form.value.jugparid) {
        this.jugparsService.putJugpar(form.value)
        .subscribe(res => {
          this.resetForm(form);
          M.toast({html: 'Datos de Jugador Editados'});
        });
    } else {
      this.jugparsService.postJugpar(form.value)
      .subscribe(res => {
        this.resetForm(form);
        M.toast({html: 'Datos de Jugador Agregados al Partido'});
      });
    };
  }
}

getJugador() {
this.jugadoresService.getJugadorEncargado(this.EqId)
  .subscribe(res => {
    this.jugadoresService.jugador = res as Jugador[];
  });
}

getEquipo() {
  this.equiposService.getEquipoid(this.EqId)
    .subscribe(res => {
      this.jugparsService.selectedJugpar.equiponom = res[0].equiponom;
    });
}

getCampeonato() {
this.campeonatosService.getCampeonato()
.subscribe(res => {
  this.campeonatosService.campeonatos = res as Campeonato[];

  this.campeonatosService.getCampeonatonompar(this.ParId)
  .subscribe(res => {
    var camnom = res as Campeonato;   
    this.campeonatosService.selectedCampeonato.campeonatonom = camnom[0].campeonatonom;
  });
});
}

getPartido() {
  this.partidosService.getPartidoJug(this.ParId)
  .subscribe(res => {
    this.partidosService.partidos = res as Partido[];
    this.partidosService.selectedPartido.PartidosFec = this.partidosService.partidos[0].PartidosFec;
  });
}

getJugpar() {
  this.jugparsService.getJugpar(this.ParId)
  .subscribe(res => {
    this.jugparsService.jugpar = res as Jugpar[];
  });
}

editJugpar(jugpar: Jugpar) {
  this.jugparsService.selectedJugpar = jugpar;
}

deleteJugpar(jugparid: number, form: NgForm) {
if(confirm('Confirma que desea borrar el jugador del partido?')) {
  this.jugparsService.deleteJugpar(jugparid)
    .subscribe(res => {
      this.resetForm(form);
      M.toast({html: 'Jugador Borrado del Partido'});
    });
}
}

Buscar(){
  // Declare variables 
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("BJPa");
  filter = input.value.toUpperCase();
  table = document.getElementById("TJPa");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query #F5A9A9
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    } 
  }
}

resetForm(form?: NgForm) {
  if (form) {
    form.reset();

    this.getJugador();
    this.getEquipo();
    this.getCampeonato();
    this.getPartido();
    this.getJugpar();
  }
}

} //JugparComponent