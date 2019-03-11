import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Jugpar } from '../models/jugpar';

@Injectable({
  providedIn: 'root'
})
export class JuparsService {

  selectedJugpar: Jugpar;
  jugpar: Jugpar[];
  
  readonly URL_Base = 'http://localhost:3000/'
  readonly URL_API = this.URL_Base + 'liga/jugpar';

  constructor(private http: HttpClient) { 
    this.selectedJugpar = new Jugpar();
  }

  //Inserto por defectos todos los jugadores de los equipos al partido
  postJugparTot(jugpar: Jugpar) {
    return this.http.post(this.URL_Base + 'liga/jugpartot', jugpar);
  }

  //Inserto un jugador a un partido
  postJugpar(jugpar: Jugpar) {
    return this.http.post(this.URL_API, jugpar);
  }

  getJugpar(Parid: number) {
    return this.http.get(this.URL_API + `/` + Parid);
  }

  getJugparEstadistica(jugid: number) {
    return this.http.get(this.URL_Base + 'liga/jugparestadistica' + `/` + jugid);
  }

  getJugparGolPar(Parid: number, eq:number, nro:number) {
    return this.http.get(this.URL_Base + 'liga/jugpargolpar' + `/` + Parid  + `/` + eq + `/` + nro);
  }

  getJugparAmaPar(Parid: number, eq:number, nro:number) {
    return this.http.get(this.URL_Base + 'liga/jugparamapar' + `/` + Parid  + `/` + eq + `/` + nro);
  }

  getJugparRojPar(Parid: number, eq:number, nro:number) {
    return this.http.get(this.URL_Base + 'liga/jugparrojpar' + `/` + Parid  + `/` + eq + `/` + nro);
  }

  getJugGol(cam: number) {
    return this.http.get(this.URL_Base + 'liga/jugpargol' + `/` + cam);
  }

  getJugAmaRoj(eq: number) {
    return this.http.get(this.URL_Base + 'liga/jugparamaroj' + `/` + eq);
  }

  putJugpar(jugpar: Jugpar) {
    return this.http.put(this.URL_API + `/${jugpar.jugparid}`, jugpar);
  }

  deleteJugpar(jugparid: number) {
    return this.http.delete(this.URL_API + `/` + jugparid);
  }
}
