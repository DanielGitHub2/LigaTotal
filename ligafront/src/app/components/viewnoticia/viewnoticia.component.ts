import { Component, Output, Input, ViewEncapsulation,OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import {Routes, RouterModule, Router, ActivatedRoute } from '@angular/router';
import {DomSanitizer, SafeUrl, SafeResourceUrl} from "@angular/platform-browser";

import { Noticia } from '../../models/noticias';
import { NoticiasService } from '../../services/noticias.service';

@Component({
  selector: 'app-viewnoticia',
  templateUrl: './viewnoticia.component.html',
  styleUrls: ['./viewnoticia.component.css']
})
export class ViewnoticiaComponent implements OnInit {
  public NotId:number;
  public Not:Noticia[];

  constructor(private router: Router,
    private domSanitizer: DomSanitizer,
    private noticiasService: NoticiasService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.NotId = this.route.snapshot.params.not;
    this.getNoticia(this.NotId);
  }

  getNoticia(not:number) {
    this.noticiasService.getNoticiaId(this.NotId)
      .subscribe(resn => {
        this.Not = resn as Noticia[];
      });
  }
}
