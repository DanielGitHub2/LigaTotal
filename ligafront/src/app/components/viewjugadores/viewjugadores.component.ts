import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import {DomSanitizer, SafeUrl, SafeResourceUrl} from "@angular/platform-browser";
import {Routes, RouterModule, Router, ActivatedRoute } from '@angular/router';
import * as jsPDF from 'jspdf';

import { Equipo } from '../../models/equipos';
import { Jugador } from '../../models/jugadores';
import { Partido } from '../../models/partidos';

import { EquiposService } from '../../services/equipos.service';
import { JugadoresService } from '../../services/jugadores.service';
import { PartidosService } from 'src/app/services/partidos.service';

declare var M: any;

@Component({
  selector: 'app-viewjugadores',
  templateUrl: './viewjugadores.component.html',
  styleUrls: ['./viewjugadores.component.css'],
  providers: [ EquiposService, JugadoresService, PartidosService ]
})
export class ViewJugadoresComponent implements OnInit {
  public EqId:number;
  public EqNom:string;
  public ParId:number;
  public CamNom: string;
  public ParFec: string;

  @ViewChild('content') content:ElementRef;

  constructor(private equiposService: EquiposService,
    private partidosService: PartidosService,
    private jugadoresService: JugadoresService,
    private domSanitizer: DomSanitizer,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.EqId = this.route.snapshot.params.eq;
    this.ParId = this.route.snapshot.params.par;
    this.getEquipo();
    this.getPartido();
    this.getJugador();
  }

  getEquipo() {
    this.equiposService.getEquipoid(this.EqId)
    .subscribe(res => {
      this.equiposService.equipo = res as Equipo[];
      this.EqNom = this.equiposService.equipo[0].equiponom;
    });
  }

  getPartido() {
    this.partidosService.getPartidoJug(this.ParId)
    .subscribe(res => {
      this.partidosService.partidos = res as Partido[];
      this.CamNom = this.partidosService.partidos[0].campeonatonom;
      this.ParFec = this.partidosService.partidos[0].PartidosFec;
    });
  }

  getJugador() {
    this.jugadoresService.getJugadorEncargado(this.EqId)
    .subscribe(res => {
      this.jugadoresService.jugador = res as Jugador[];
    });
  }

  imprimir(form: NgForm){
    let doc = new jsPDF('l', 'pt', 'a4');

    let specialElementH = {
      '#editor': function(element, render){
        return true;
      }
    };

    let content2 = this.content.nativeElement;
    
    doc.fromHTML(content2 , 10, 1, {
      'width':520,
      'elementHandlers': specialElementH
    });
    
    doc.setFontSize(2);

    doc.save('PlanillaJugadores.pdf');  

  }

  resetForm(form?: NgForm) {
    if (form) {
     form.reset();
     this.getEquipo()
    }
  }

}

