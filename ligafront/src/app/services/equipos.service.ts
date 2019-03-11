import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GalleryImage } from '../models/galleryimage';
import { Equipo } from '../models/equipos';
import { EquipoImg } from '../models/equipoimg';

@Injectable({
  providedIn: 'root'
})
export class EquiposService {
 
  selectedEquipo: Equipo;
  equipo: Equipo[];
  
  private basepath = '../assets';
  readonly URL_API = 'http://localhost:3000/liga/equipo';

  constructor(private http: HttpClient) { 
    this.selectedEquipo = new Equipo();
  }

  postEquipo(equipo: Equipo) {
    return this.http.post(this.URL_API, equipo);
  }

  postEquipoImg(eqimg: EquipoImg) {
    return this.http.post('http://localhost:3000/liga/equipoimg', eqimg);
  }
 
  getEquipo() {
    return this.http.get(this.URL_API);
  }
  
  getEquipoPpal() {
    return this.http.get('http://localhost:3000/liga/equipoppal');
  }

  getEquipoid(equipoid: number) {
    return this.http.get(this.URL_API + `/` + equipoid);
  }

  getEquiponom(nom: string) {
    return this.http.get('http://localhost:3000/liga/equiponom' + `/` + nom);
  }

  getCanEquipo(cam: number) {
    return this.http.get('http://localhost:3000/liga/equipocan' + `/` + cam);
  }

  getCanEquipocam(cam: number) {
    return this.http.get('http://localhost:3000/liga/equipocancam' + `/` + cam);
  }

  putEquipo(equipo: Equipo) {
    console.log(equipo);
    return this.http.put(this.URL_API + `/${equipo.equipoid}`, equipo);
  }

  deleteEquipo(equipoid: number) {
    return this.http.delete(this.URL_API + `/` + equipoid);
  }

}
