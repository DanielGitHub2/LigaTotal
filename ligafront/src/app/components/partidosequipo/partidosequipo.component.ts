import { Component, Output, Input, ViewEncapsulation,OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import {Routes, RouterModule, Router, ActivatedRoute } from '@angular/router';

import { Partido } from '../../models/partidos';

import { PartidosService } from 'src/app/services/partidos.service';

declare var M: any;

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-partidosequipo',
  templateUrl: './partidosequipo.component.html',
  styleUrls: ['./partidosequipo.component.css'],
  providers: [ PartidosService ]
})
export class PartidosequipoComponent implements OnInit {

public EqId:number;
public ParId:number;

constructor(private partidosService: PartidosService, 
  private route: ActivatedRoute,
  private router: Router) { }

ngOnInit() {
  this.EqId = this.route.snapshot.params.eq;
  this.getpartidosequipo();
}


getpartidosequipo() {
  this.partidosService.getpartidosequipo(this.EqId)
  .subscribe(res => {
    this.partidosService.partidos = res as Partido[];
  });
}

resetForm(form?: NgForm) {
  if (form) {
    form.reset();

    this.getpartidosequipo();
  }
}

} //PartidosComponent
