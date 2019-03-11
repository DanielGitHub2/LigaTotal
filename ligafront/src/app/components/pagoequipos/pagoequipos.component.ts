import { Component, Output, Input, ViewEncapsulation,OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import {Routes, RouterModule, Router, ActivatedRoute } from '@angular/router';

import { Equipo } from '../../models/equipos';
import { Usuario } from '../../models/usuarios';
import { Pagoequipo } from '../../models/pagoequipos';
import { UserLogin } from '../../models/usuariologin'

import { UserLoginService } from '../../services/usuariologin.service'
import { EquiposService } from '../../services/equipos.service';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { PagoequiposService } from 'src/app/services/pagoequipos.service';

declare var M: any;

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-pagoequipo',
  templateUrl: './pagoequipos.component.html',
  styleUrls: ['./pagoequipos.component.css'],
  providers: [ EquiposService, UsuariosService, PagoequiposService, UserLoginService ]
})
export class PagoequiposComponent implements OnInit {

public CamId:number;
public file:File;
public f2:any;
private userrol: number;
private userid: number;

constructor(private usuariosService: UsuariosService,
  private equiposService: EquiposService,
  private pagoequiposService: PagoequiposService, 
  private userLoginService: UserLoginService) { }

ngOnInit() {
  this.getUsuarioLogeado();
  this.getEquipo();
  this.fecins();
}


//Cargo fecha de hoy al ingresar a la pagina en fecha de pago
fecins(){
  var d = new Date().toISOString().split('T')[0];
  this.pagoequiposService.selectedPagoequipo.pagoequipofec = d;
}


addPagoequipo(form?: NgForm) {
  form.value.equipoid = this.pagoequiposService.selectedPagoequipo.equipoid;
  form.value.UsuariosId = this.userid
  form.value.pagoequipofactura = this.f2;

  if(form.value.pagoequipoid) {
      this.pagoequiposService.putPagoequipo(form.value)
      .subscribe(res => {
        this.resetForm(form);
        M.toast({html: 'Pago del equipo Editado'});
      });
  } else {
    this.pagoequiposService.postPagoequipo(form.value)
    .subscribe(res => {
      this.resetForm(form);
      M.toast({html: 'Pago del equipo Ingresado'});
    });
  };
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

getUsuarioLogeado() {
var usrlog: UserLogin = this.userLoginService.getUserLoggedIn();
 if(usrlog){
  this.userrol= usrlog.rol;
  this.userid = usrlog.id;
  this.equiposService.getEquipoid(usrlog.equipo)
    .subscribe(res => { //Cargo el nombre del equipo del usuario
      var equipojug = res as Equipo;   
      this.pagoequiposService.selectedPagoequipo.equiponom = equipojug[0].equiponom;
      this.pagoequiposService.selectedPagoequipo.equipoid = equipojug[0].equipoid;

        this.pagoequiposService.getPagoequipo(this.pagoequiposService.selectedPagoequipo.equipoid)
        .subscribe(res => {
          this.pagoequiposService.pagoequipos = res as Pagoequipo[];
        });
    });           
 }
}

getEquipo() {
  this.equiposService.getEquipo()
    .subscribe(res => {
      this.equiposService.equipo = res as Equipo[];
    });
 }

 editPagoequipo(pagoequipo: Pagoequipo) {
   this.pagoequiposService.selectedPagoequipo = pagoequipo;
   this.getUsuarioLogeado();
 }

 deletePagoequipo(Pagoequiposid: number, form: NgForm) {
   if(confirm('Confirma que desea borrar el pago del equipo?')) {
     this.pagoequiposService.deletePagoequipo(Pagoequiposid)
       .subscribe(res => {
         this.resetForm(form);
         M.toast({html: 'Pago del equipo Borrado'});
       });
   }
 }

 resetForm(form?: NgForm) {
   if (form) {
     form.reset();

     this.getUsuarioLogeado();
     this.getEquipo();
   }
 }

} //PagoequiposComponent
