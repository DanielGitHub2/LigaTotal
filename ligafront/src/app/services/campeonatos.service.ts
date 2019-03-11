import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Campeonato } from '../models/campeonatos';

@Injectable({
  providedIn: 'root'
})
export class CampeonatosService {

  selectedCampeonato: Campeonato;
  campeonatos: Campeonato[];
  
  readonly URL_Base = 'http://localhost:3000/'
  readonly URL_API = this.URL_Base + 'liga/campeonato';

  constructor(private http: HttpClient) { 
    this.selectedCampeonato = new Campeonato();
  }

  postCampeonato(campeonato: Campeonato) {
    return this.http.post(this.URL_API, campeonato);
  }

  getCampeonato() {
    return this.http.get(this.URL_API);
  }

  getCampeonatonom(campeonatoid: number) {
    return this.http.get(this.URL_API + `/` + campeonatoid);
  }

  getCampeonatonompar(partidoid: number) {
    return this.http.get(this.URL_Base + 'liga/campeonatonom' + `/` + partidoid);
  }

  getCampeonatoDiv(div: number) {
    return this.http.get(this.URL_Base + 'liga/campeonatodiv' + `/` + div);
  }

  putCampeonato(campeonato: Campeonato) {
    return this.http.put(this.URL_API + `/${campeonato.campeonatoid}`, campeonato);
  }

  deleteCampeonato(campeonatoid: number) {
    return this.http.delete(this.URL_API + `/` + campeonatoid);
  }

  getFechasCam(campeonatoid: number) {
    return this.http.get(this.URL_Base + 'liga/campeonatofec' + `/` + campeonatoid);
  }

}