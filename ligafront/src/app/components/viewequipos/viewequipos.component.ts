import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {DomSanitizer, SafeUrl, SafeResourceUrl} from "@angular/platform-browser";
import { saveAs } from 'file-saver';
import { Equipo } from '../../models/equipos';
import { EquipoImg } from '../../models/equipoimg';
import { ViewEquiposService } from '../../services/viewequipos.service';
import { EquiposService } from '../../services/equipos.service';

declare var M: any;

@Component({
  selector: 'app-viewequipo',
  templateUrl: './viewequipos.component.html',
  styleUrls: ['./viewequipos.component.css'],
  providers: [ ViewEquiposService ]
})
export class ViewEquipoComponent implements OnInit {
  public count:number;

  constructor(private viewequiposService: ViewEquiposService, 
    private equiposService: EquiposService,
    private domSanitizer: DomSanitizer) { }

  ngOnInit() {
    this.getViewEquipo();
  }

  getViewEquipo() {
    this.equiposService.getEquipo()
    .subscribe(res => {
      this.equiposService.equipo = res as Equipo[];
    });
  }

  mouseEnter(a:string){
    this.count = 8;
  }

  mouseLeave(a:string){
    this.count = null;
  }

  resetForm(form?: NgForm) {
    if (form) {
     form.reset();
     this.getViewEquipo()
    }
  }

}
