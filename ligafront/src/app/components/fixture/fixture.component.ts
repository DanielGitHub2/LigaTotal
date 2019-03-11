import { Component, Output, Input, ViewEncapsulation,OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import {Routes, RouterModule, Router, ActivatedRoute } from '@angular/router';
import {DomSanitizer, SafeUrl, SafeResourceUrl} from "@angular/platform-browser";

import { Partido } from '../../models/partidos';
import { PartidosService } from 'src/app/services/partidos.service';
import { UserLogin } from '../../models/usuariologin'
import { UserLoginService } from '../../services/usuariologin.service'
import { EquiposService } from '../../services/equipos.service';

declare var M: any;

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-fixture',
  templateUrl: './fixture.component.html',
  styleUrls: ['./fixture.component.css'],
  providers: [ PartidosService ]
})

export class FixtureComponent implements OnInit {

public CamId:number;
public Fec:number;
public par:Partido[];
private userrol: number;
private res1: number;
private res2: number;
private esc1: string;
private esc2: string;

constructor(private partidosService: PartidosService, 
  private equiposService: EquiposService,
  private route: ActivatedRoute,
  private userLoginService: UserLoginService,
  private domSanitizer: DomSanitizer,
  private router: Router) { 
  }

ngOnInit() {
  this.CamId = this.route.snapshot.params.cam;
  this.Fec = this.route.snapshot.params.fec;
  this.getpartidosCamFec();
  this.GetUsr();
}


getpartidosCamFec() {
  this.partidosService.getpartidosFec(this.CamId, this.Fec)
  .subscribe(res => {
    this.par = res as Partido[];
  });
}

addResPartido(partido: Partido, form?: NgForm){
  //if(confirm('Confirma el ingreso del resultado ' + partido.Equipo1Res + ' a ' + partido.Equipo2Res + ' ?')) {
    partido.equipoesc1 = '';
    partido.equipoesc2 = '';
     this.partidosService.putPartidoRes(partido)
    .subscribe(res => {
      this.resetForm(form);
      M.toast({html: 'Resultado Ingresado'});
    });
  //}
}

resetForm(form?: NgForm) {
  if (form) {
    form.reset();
    this.getpartidosCamFec();
    this.GetUsr();
  }
}

GetUsr(){
  var usrlog: UserLogin = this.userLoginService.getUserLoggedIn();
  if(usrlog){
    this.userrol= usrlog.rol;
  };
}

} //PartidosComponent