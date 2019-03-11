import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {DomSanitizer, SafeUrl, SafeResourceUrl} from "@angular/platform-browser";
import {Routes, RouterModule, Router, ActivatedRoute } from '@angular/router';

import { Jugador } from '../../models/jugadores';
import { JugadoresService } from '../../services/jugadores.service';
import { Jugpar } from '../../models/jugpar';
import { JuparsService } from 'src/app/services/jupars.service';

declare var M: any;

@Component({
  selector: 'app-jugadordatos',
  templateUrl: './jugadordatos.component.html',
  styleUrls: ['./jugadordatos.component.css'],
  providers: [ JugadoresService ]
})
export class JugadordatosComponent implements OnInit {
  public JuId:number;
  public JuNom: string;
  public JuFot: string;
  public JuEst: string;
  public JuEda: number;
  public JuFin: string;
  public JuNum: number;
  public JuPos: string;
  public segundos: number;
  public edad: number;

  public JuPar: number;
  public JuMin: number;
  public JuGol: number;
  public JuGolPar: number;
  public JuAma: number;
  public JuRoj: number;
  public JuSus: number; 
  

constructor(private jugadoresService : JugadoresService,
  private juparsService: JuparsService,
  private domSanitizer: DomSanitizer,
  private route: ActivatedRoute,
  private router: Router) { }

ngOnInit() {
  this.JuId = this.route.snapshot.params.ju;
  this.getJugadorId(); 
}

getJugadorId() {
  this.jugadoresService.getJugadorId(this.JuId)
  .subscribe(res => {
    this.jugadoresService.jugador = res as Jugador[];

    var d = new Date();//.toISOString().split('T')[0];
    var d2 = new Date(this.jugadoresService.jugador[0].jugadorfecnac);

    this.edad = Math.abs(d2.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24) ;
    this.edad = Math.round(this.edad / 365)

    this.JuNom = this.jugadoresService.jugador[0].jugadornom;
    this.JuFot = this.jugadoresService.jugador[0].jugadorfot;
    this.JuEst = this.jugadoresService.jugador[0].jugadorestado;
    this.JuEda = this.edad;
    this.JuFin = this.jugadoresService.jugador[0].jugadorfecins;
    this.JuNum = this.jugadoresService.jugador[0].jugadornro;
    this.JuPos = this.jugadoresService.jugador[0].jugadorpos;

    this.juparsService.getJugparEstadistica(this.JuId)
    .subscribe(res => {
      this.JuPar = res[0].jugadorpar;
      this.JuMin = res[0].jugadormin;
      this.JuGol = res[0].jugadorgol;
      this.JuGolPar = res[0].jugadorgol/this.JuPar;
      this.JuAma = res[0].jugadorama;
      this.JuRoj = res[0].jugadorroj;
      this.JuSus = res[0].jugadorsus;
    });

  });
};

}

