import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Equipo } from '../models/equipos';
import { EquipoImg } from '../models/equipoimg';

@Injectable({
  providedIn: 'root'
})
export class ViewEquiposService {

  selectedEquipo: Equipo;
  equipo: Equipo[];
  equipoimg: EquipoImg[];
  
  readonly URL_API = 'http://localhost:3000/liga/viewequipo';

  constructor(private http: HttpClient) { 
    this.selectedEquipo = new Equipo();
  }

  getViewEquipoImg() {
    return this.http.get(this.URL_API);
  }
};