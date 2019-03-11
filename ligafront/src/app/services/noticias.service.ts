  import { Injectable } from '@angular/core';
  import { HttpClient } from '@angular/common/http';
  
  import { Noticia } from '../models/noticias';
  
  @Injectable({
    providedIn: 'root'
  })
  export class NoticiasService {
  
    selectedNoticia: Noticia;
    noticias: Noticia[];
    
    readonly URL_Base = 'http://localhost:3000/'
    readonly URL_API = this.URL_Base + 'liga/noticias';
  
    constructor(private http: HttpClient) { 
      this.selectedNoticia = new Noticia();
    }
  
    postNoticia(noticia: Noticia) {
      return this.http.post(this.URL_API, noticia);
    }
  
    getNoticia() {
      return this.http.get(this.URL_API);
    }

    getNoticiaId(not:number) {
      return this.http.get(this.URL_Base + 'liga/noticiaid' + `/` + not);
    }

    getNoticiaEq(Eq:number) {
      return this.http.get(this.URL_API + `/` + Eq);
    }
  
    putNoticia(noticia: Noticia) {
      return this.http.put(this.URL_API + `/${noticia.noticiasid}`, noticia);
    }
  
    deleteNoticia(noticiasid: number) {
      return this.http.delete(this.URL_API + `/` + noticiasid);
    }
  }