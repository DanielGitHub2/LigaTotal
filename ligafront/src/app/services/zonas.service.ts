import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Zona } from '../models/zonas';

@Injectable({
  providedIn: 'root'
})
export class ZonasService {

  selectedZona: Zona;
  zonas: Zona[];
  
  readonly URL_API = 'http://localhost:3000/liga/zona';

  constructor(private http: HttpClient) { 
    this.selectedZona = new Zona();
  }

  postZona(zona: Zona) {
    return this.http.post(this.URL_API, zona);
  }

  getZona() {
    return this.http.get(this.URL_API);
  }

  putZona(zona: Zona) {
    return this.http.put(this.URL_API + `/${zona.zonaid}`, zona);
  }

  deleteZona(zonaid: number) {
    return this.http.delete(this.URL_API + `/` + zonaid);
  }
}
