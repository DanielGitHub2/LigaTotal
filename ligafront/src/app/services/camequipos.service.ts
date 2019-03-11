import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { CamEquipo } from '../models/camequipos';

@Injectable({
  providedIn: 'root'
})
export class CamequiposService {

  selectedCamEquipo: CamEquipo;
  camequipos: CamEquipo[];

  readonly URL_Base = 'http://localhost:3000/'
  readonly URL_API = this.URL_Base + 'liga/camequipo';

  constructor(private http: HttpClient) { 
    this.selectedCamEquipo = new CamEquipo();
  }

  postCamequipo(CamEquipo: CamEquipo) {
    return this.http.post(this.URL_API, CamEquipo);
  }

  getCamequipo(cam: number) {
    return this.http.get(this.URL_API  + `/` + cam);
  }

  putCamequipo(CamEquipo: CamEquipo) {
    return this.http.put(this.URL_API + `/${CamEquipo.camequid}`, CamEquipo);
  }

  deleteCamequipo(camequid: number) {
    return this.http.delete(this.URL_API + `/` + camequid);
  }
}

