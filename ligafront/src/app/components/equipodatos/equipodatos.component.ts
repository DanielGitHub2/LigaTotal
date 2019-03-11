import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import {DomSanitizer, SafeUrl, SafeResourceUrl} from "@angular/platform-browser";
import {Routes, RouterModule, Router, ActivatedRoute } from '@angular/router';

import { Equipo } from '../../models/equipos';
import { Noticia } from '../../models/noticias';
import { Jugador } from '../../models/jugadores';
import { Jugpar } from '../../models/jugpar';

import { JugadoresService } from '../../services/jugadores.service';
import { NoticiasService } from '../../services/noticias.service';
import { EquiposService } from '../../services/equipos.service';
import { JuparsService } from 'src/app/services/jupars.service';
import { PartidosService } from 'src/app/services/partidos.service';

declare var M: any;

@Component({
  selector: 'app-equipodatos',
  templateUrl: './equipodatos.component.html',
  styleUrls: ['./equipodatos.component.css'],
  providers: [ EquiposService, NoticiasService, JugadoresService, JuparsService, PartidosService ]
})

export class EquipodatosComponent implements OnInit {
  public EqId:number;
  public EqNom:string;
  public EqFot: string;
  public EqEsc: string;
  public EqCanJug: number;
  public EqFecIns: string;
  public EqObs: string;
  public CanJug: number;
  public CanAma: number;
  public CanRoj: number;
  public CanPar: any[];
  public CanPar2: number;

  constructor(private equiposService: EquiposService,
    private noticiasService: NoticiasService,
    private jugadoresService: JugadoresService,
    private juparsService: JuparsService,
    private partidosService: PartidosService, 
    private domSanitizer: DomSanitizer,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.EqId = this.route.snapshot.params.eq;
    this.getEquipo();
    this.getJugador();
    this.getNoticia();
    this.getCanJug(this.EqId);
    this.getRojAma(this.EqId)
  }

  getEquipo() {
    this.equiposService.getEquipoid(this.EqId)
    .subscribe(res => {
      this.equiposService.equipo = res as Equipo[];
      this.EqNom = this.equiposService.equipo[0].equiponom;
      this.EqFot = this.equiposService.equipo[0].equipofot;
      this.EqEsc = this.equiposService.equipo[0].equipoesc;
      this.EqCanJug = this.equiposService.equipo[0].equipocanjug;
      this.EqFecIns = this.equiposService.equipo[0].equipofecins;
      this.EqObs = this.equiposService.equipo[0].equipoobs;

      this.partidosService.getpartidosequipo(this.EqId)
      .subscribe(resp => {
        this.CanPar = resp as any[];
        if(this.CanPar != null){
          this.CanPar2 = this.CanPar.length;
        }
      })


    });
  }

  getJugador(){
  this.jugadoresService.getJugadorEncargado(this.EqId) //consulto solo los jugadores de ese equipo
  .subscribe(res => {
    this.jugadoresService.jugador = res as Jugador[];
  });
  }

  getCanJug(equipoid: number){
    this.jugadoresService.getJugadorEncargado(equipoid)
    .subscribe(res => {
      this.jugadoresService.jugador = res as Jugador[];
      this.CanJug = 0;
      for(var jug in this.jugadoresService.jugador)
       this.CanJug = this.CanJug + 1;
    });
   };

   getRojAma(eq:number){
      this.juparsService.getJugAmaRoj(eq)
      .subscribe(res => {
        this.CanAma = res[0].jugadorama;
        if(isNaN(parseInt(res[0].jugadorroj))){
          this.CanRoj = 0
        }else{
          this.CanRoj = res[0].jugadorroj;
        }
      });
   }

    getNoticia() {
    this.noticiasService.getNoticiaEq(this.EqId)
      .subscribe(res => {
        this.noticiasService.noticias = res as Noticia[];
      });
  }

};
