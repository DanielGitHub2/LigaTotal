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
  selector: 'app-viewpagoequipo',
  templateUrl: './viewpagoequipos.component.html',
  styleUrls: ['./viewpagoequipos.component.css'],
  providers: [ EquiposService, UsuariosService, PagoequiposService, UserLoginService ]
})
export class ViewpagoequiposComponent implements OnInit {

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
  this.getPagoEquipos();
  this.fecins();
}


//Cargo fecha de hoy al ingresar a la pagina en fecha de pago
fecins(){
  var d = new Date().toISOString().split('T')[0];
  this.pagoequiposService.selectedPagoequipo.pagoequipofec = d;
}


addPagoequipo(form?: NgForm) {
  form.value.equipoid = this.pagoequiposService.selectedPagoequipo.equipoid;
  if(document.querySelector("#equipos option[value='" + form.value.equiponom + "']") == null){
    alert('Debe ingresar un Equipo valido');
  }else{
    var equipoid = document.querySelector("#equipos option[value='" + form.value.equiponom + "']").id;
    form.value.equipoid = equipoid;

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
    };//If
  };//If
} //Add

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
  }
}

getPagoEquipos(){
this.pagoequiposService.getPagoequipos()
.subscribe(res => {
  this.pagoequiposService.pagoequipos = res as Pagoequipo[];
});
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

Buscar(){
  // Declare variables 
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("BPag");
  filter = input.value.toUpperCase();
  table = document.getElementById("TPag");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query #F5A9A9
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    } 
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
