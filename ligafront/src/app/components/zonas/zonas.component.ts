import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Zona } from '../../models/zonas';
import { ZonasService } from '../../services/zonas.service';

declare var M: any;

@Component({
  selector: 'app-zonas',
  templateUrl: './zonas.component.html',
  styleUrls: ['./zonas.component.css'],
  providers: [ ZonasService ]
})
export class ZonasComponent implements OnInit {

  constructor(private zonasService: ZonasService) { }

  ngOnInit() {
    this.getZona();
  }

  addZona(form?: NgForm) {
    if(form.value.zonanom){
     if(form.value.zonaid) {
        this.zonasService.putZona(form.value)
        .subscribe(res => {
          this.resetForm(form);
          this.getZona();
          M.toast({html: 'Zona Editada'});
        });
     } else {
       this.zonasService.postZona(form.value)
       .subscribe(res => {
        this.getZona();
        this.resetForm(form);
        M.toast({html: 'Zona Ingresada'});
       });
     };
    }else{
      alert('Debe ingresar el Nombre de la Zona');
    }
  }

  getZona() {
    this.zonasService.getZona()
      .subscribe(res => {
        this.zonasService.zonas = res as Zona[];
      });
  }

  editZona(zona: Zona) {
    this.zonasService.selectedZona = zona;
  }

  deleteZona(zonaid: number, form: NgForm) {
    if(confirm('Confirma que desea borrar la Zona?')) {
      this.zonasService.deleteZona(zonaid)
        .subscribe(res => {
          this.getZona();
          this.resetForm(form);
          M.toast({html: 'Zona Borrada'});
        });
    }
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.getZona();
    }
  }

}
