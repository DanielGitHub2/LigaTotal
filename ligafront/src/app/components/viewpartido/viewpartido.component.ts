import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import {DomSanitizer, SafeUrl, SafeResourceUrl} from "@angular/platform-browser";
import {Routes, RouterModule, Router, ActivatedRoute } from '@angular/router';

import { Jugpar } from '../../models/jugpar';
import { Partido } from '../../models/partidos';

import { JuparsService } from 'src/app/services/jupars.service';
import { PartidosService } from 'src/app/services/partidos.service';
import { EquiposService } from '../../services/equipos.service';

@Component({
  selector: 'app-viewpartido',
  templateUrl: './viewpartido.component.html',
  styleUrls: ['./viewpartido.component.css'],
  providers: [JuparsService, PartidosService]
})
export class ViewpartidoComponent implements OnInit {
  public ParId:number;
  public ParFec:string;
  public EqId1:number;
  public EqId2:number;
    
  //Encabezado
  public EqNom1: string;
  public EqNom2: string;
  public Res1:number;
  public Res2:number;
  public Esc1: string;
  public Esc2: string;

  //Goles y tarjetas
  public CanGol:number;
  public CanAma:number;
  public CanRoj:number;
  public ResGol:any[];
  public ResGol2:any[];
  public ResAma:any[];
  public ResAma2:any[];
  public ResRoj:any[];
  public ResRoj2:any[];

  //Lugar
  public Com:string;
  public Can:string;
  public Fec:string;
  public Hor:string;
  public Obs:string;

  constructor(private domSanitizer: DomSanitizer,
    private juparsService: JuparsService,
    private partidosService: PartidosService,
    private equiposService: EquiposService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.ParId = this.route.snapshot.params.par;
    this.getPartido();
  }

  getPartido() {
  this.partidosService.getPartidoJug(this.ParId)
  .subscribe(res => {
    this.partidosService.partidos = res as Partido[];
    this.ParFec = res[0].PartidosFec
    this.Res1 = res[0].Equipo1Res
    this.Res2 = res[0].Equipo2Res
    this.Com = res[0].PartidosComplejo
    this.Can= res[0].PartidosCan
    this.Fec = res[0].PartidosFec
    this.Hor = res[0].PartidosHor
    this.Obs = res[0].PartidosObs
      
    //DATOS GRALES EQUIPO 1  
    this.equiposService.getEquipoid(res[0].equipoid1)
    .subscribe(rese1 => {
      this.EqNom1 = rese1[0].equiponom
      this.EqId1 = rese1[0].equipoid
      this.Esc1 = rese1[0].equipoesc

    //DATOS GRALES EQUIPO 2
    this.equiposService.getEquipoid(res[0].equipoid2)
    .subscribe(rese2 => {
      this.EqNom2 = rese2[0].equiponom
      this.EqId2 = rese2[0].equipoid
      this.Esc2 = rese2[0].equipoesc

      //GOLES EQUIPO 1  
      this.juparsService.getJugparGolPar(this.ParId, this.EqId1, 1)
      .subscribe(resg => {
        this.ResGol = resg as any;
        if(this.ResGol != null){
          this.CanGol = this.ResGol.length
        }
      
      //GOLES EQUIPO 2 
      this.juparsService.getJugparGolPar(this.ParId, this.EqId2, 2)
      .subscribe(resg2 => {
        this.ResGol2 = resg2 as any;
        if(this.ResGol2 != null){
          this.CanGol = this.CanGol + this.ResGol2.length
        }
      
      //AMARILLAS EQUIPO 1    
      this.juparsService.getJugparAmaPar(this.ParId, this.EqId1, 1)
      .subscribe(resa => {
        this.ResAma = resa as any;
        if(this.ResAma != null){
          this.CanAma = this.ResAma.length
        }

      //AMARILLAS EQUIPO 2 
      this.juparsService.getJugparAmaPar(this.ParId, this.EqId2, 2)
      .subscribe(resa2 => {
        this.ResAma2 = resa2 as any;
        if(this.ResAma2 != null){
          this.CanAma = this.CanAma + this.ResAma2.length
        }

      //ROJAS EQUIPO 1    
      this.juparsService.getJugparRojPar(this.ParId, this.EqId1, 1)
      .subscribe(resr => {
        this.ResRoj = resr as any;
        if(this.ResRoj != null){
          this.CanRoj = this.ResRoj.length
        }
    
      //ROJAS EQUIPO 2 
      this.juparsService.getJugparRojPar(this.ParId, this.EqId2, 2)
      .subscribe(resr2 => {
        this.ResRoj2 = resr2 as any;
        if(this.ResRoj2 != null){
          this.CanAma = this.CanRoj + this.ResRoj2.length
        } 

      });
      })
      })
      });
      });
      });

    });
    });

  });
  }

};//class ViewpartidoComponent
