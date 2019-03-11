import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Partido } from '../models/partidos';
import { CamFecFotos } from '../models/camfecfotos';

@Injectable({
  providedIn: 'root'
})
export class PartidosService {

  selectedPartido: Partido;
  partidos: Partido[];
  
  readonly URL_API = 'http://localhost:3000/liga/partidos';

  constructor(private http: HttpClient) { 
    this.selectedPartido = new Partido();
  }

  //Ingreso partido
  postPartido(partido: Partido) {
    return this.http.post(this.URL_API, partido);
  }

  //Ingreso fotos de un partido
  postPartidoFot(camfec: CamFecFotos) {
    return this.http.post('http://localhost:3000/liga/partidosfot', camfec);
  }

  //Consulta partidos de un campeonato
  getPartido(CamId: number) {
    return this.http.get(this.URL_API + `/` + CamId);
  }

  //Consulta partido
  getPartidoJug(ParId: number) {
    return this.http.get('http://localhost:3000/liga/partidosjug' + `/${ParId}`);
  }

  //Consulta fotos de un partido
  getPartidoFot(ParId: number) {
    return this.http.get('http://localhost:3000/liga/partidosfot' + `/${ParId}`);
  }

  //Consulta fotos de un campeonato
  getPartidoFotCam(CamId: number) {
    return this.http.get('http://localhost:3000/liga/partidosfotcam' + `/${CamId}`);
  }

  //Consulta partidos de equipo
  getpartidosequipo(eqid: number) {
    return this.http.get('http://localhost:3000/liga/partidosequipo' + `/${eqid}`);
  }

  //Consulta partidos de un campeonato por fechas
  getpartidosFecCam(camid: number) {
    return this.http.get('http://localhost:3000/liga/partidosfeccam' + `/${camid}`);
  }

  //Consulta partidos de un Campeonato y una fecha dada
  getpartidosFec(camid: number, fec:number) {
    return this.http.get('http://localhost:3000/liga/partidosfec' + `/${camid}`  + `/${fec}`);
  }

  //Consulta cantidad de partidos de un Campeonato y un equipo
  getpartidosjugados(camid: number, equ:number) {
    return this.http.get('http://localhost:3000/liga/partidosjugados' + `/${camid}`  + `/${equ}`);
  }

  //Consulta cantidad de partidos ganados de un Campeonato y un equipo
  getpartidosganados(camid: number, equ:number) {
    return this.http.get('http://localhost:3000/liga/partidosganados' + `/${camid}`  + `/${equ}`);
  }

  //Consulta cantidad de partidos ganados de un Campeonato y un equipo
  getpartidosperdidos(camid: number, equ:number) {
    return this.http.get('http://localhost:3000/liga/partidosperdidos' + `/${camid}`  + `/${equ}`);
  }

  //Consulta cantidad de partidos ganados de un Campeonato y un equipo
  getpartidosempatados(camid: number, equ:number) {
    return this.http.get('http://localhost:3000/liga/partidosempatados' + `/${camid}`  + `/${equ}`);
  }

  //Consulta la cantidad de goles a favor por equipo
  getpartidosgolesf(camid: number, equ:number) {
    return this.http.get('http://localhost:3000/liga/partidosgolesf' + `/${camid}`  + `/${equ}`);
  }

  //Consulta la cantidad de goles en contra por equipo
  getpartidosgolesc(camid: number, equ:number) {
    return this.http.get('http://localhost:3000/liga/partidosgolesc' + `/${camid}`  + `/${equ}`);
  }

  putPartido(partido: Partido) {
    return this.http.put(this.URL_API + `/${partido.Partidosid}`, partido);
  }

  putPartidoRes(partido: Partido) {
    return this.http.put('http://localhost:3000/liga/partidosres' + `/${partido.Partidosid}`, partido);
  }

  deletePartido(PartidosId: number) {
    return this.http.delete(this.URL_API + `/` + PartidosId);
  }

  //Borrar fotos del partido
  deletePartidoFot(CamFecFotosId: number) {
    return this.http.delete('http://localhost:3000/liga/partidosfot' + `/` + CamFecFotosId);
  }

}

