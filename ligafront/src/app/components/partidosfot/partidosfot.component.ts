import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Routes, RouterModule, Router, ActivatedRoute } from '@angular/router';
import {DomSanitizer, SafeUrl, SafeResourceUrl} from "@angular/platform-browser";

import { CamFecFotos } from '../../models/camfecfotos';
import { PartidosService } from 'src/app/services/partidos.service';
import { Partido } from 'src/app/models/partidos';

declare var M: any;

@Component({
  selector: 'app-partidosfot',
  templateUrl: './partidosfot.component.html',
  styleUrls: ['./partidosfot.component.css'],
  providers: [PartidosService ]
})
export class PartidosfotComponent implements OnInit {
  public camFot: CamFecFotos[];
  public CamId:number;
  public ParId:number;
  public camnom:string;
  public parfec:string;
  public file:File;
  public f2:any;

  constructor(private partidosService: PartidosService,
    private route: ActivatedRoute,
    private domSanitizer: DomSanitizer) { }

  ngOnInit() {
    this.CamId = this.route.snapshot.params.cam;
    this.ParId = this.route.snapshot.params.par;
    this.getPartido(this.ParId);
    this.getFotos(this.ParId);
  }

  addCamFot(form?: NgForm) {
    form.value.CamFecFotosFot = this.f2;
    form.value.campeonatoid = this.CamId;
    form.value.PartidosId = this.ParId;
    this.partidosService.postPartidoFot(form.value)
    .subscribe(res => {
      this.resetForm(form);
      M.toast({html: 'Fotos cargadas'});
    });
  }

  //Guardo la imagen seleccionada
  onFileChanged(event) {
    this.file = event.target.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(this.file);
    reader.onload = () => {
      this.f2 = reader.result
      this.f2 = this.f2.split(',')[1];
    };
  }

  deleteCamequipo(CamFecFotosId:number, form: NgForm){
    if(confirm('Confirma que desea borrar la foto?')) {
      this.partidosService.deletePartidoFot(CamFecFotosId)
        .subscribe(res => {
          this.resetForm(form);
          M.toast({html: 'Foto Borrada'});
        });
    }
  }

  getPartido(parid: number){
    this.partidosService.getPartidoJug(parid)
    .subscribe(res => {
      this.camnom = res[0].campeonatonom
      this.parfec = res[0].PartidosFec
    });
  }

  getFotos(parid:number){
    this.partidosService.getPartidoFot(parid)
    .subscribe(res => {
      this.camFot = res as CamFecFotos[];
    });
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.getPartido(this.ParId);
      this.getFotos(this.ParId)
    }
  }

}
