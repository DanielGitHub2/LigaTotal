import { Component, OnInit } from '@angular/core';
import {Routes, RouterModule, Router, ActivatedRoute } from '@angular/router';
import {DomSanitizer, SafeUrl, SafeResourceUrl} from "@angular/platform-browser";
import { CamFecFotos } from '../../models/camfecfotos';
import { PartidosService } from 'src/app/services/partidos.service';

@Component({
  selector: 'app-galeriafotcam',
  templateUrl: './galeriafotcam.component.html',
  styleUrls: ['./galeriafotcam.component.css']
})
export class GaleriafotcamComponent implements OnInit {
  public CamId:number;
  public camFot: CamFecFotos[];
  public CamNom: string;

  constructor(private partidosService: PartidosService,
    private route: ActivatedRoute,
    private domSanitizer: DomSanitizer) { }

  ngOnInit() {
    this.CamId = this.route.snapshot.params.cam;
    this.getFotos(this.CamId);
  }

  getFotos(camid:number){
    this.partidosService.getPartidoFotCam(camid)
    .subscribe(res => {
      this.camFot = res as CamFecFotos[];
      this.CamNom = res[0].campeonatonom;
    });
  }


}
