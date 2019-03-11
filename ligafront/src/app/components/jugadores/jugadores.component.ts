import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Equipo } from '../../models/equipos';
import { EquiposService } from '../../services/equipos.service';
import { Jugador } from '../../models/jugadores';
import { JugadoresService } from '../../services/jugadores.service';
import { UserLogin } from '../../models/usuariologin';
import { UserLoginService } from '../../services/usuariologin.service';
import { Usuario } from '../../models/usuarios';
import { UsuariosService } from '../../services/usuarios.service';

declare var M: any;

@Component({
  selector: 'app-jugador',
  templateUrl: './jugadores.component.html',
  styleUrls: ['./jugadores.component.css'],
  providers: [ EquiposService, JugadoresService, UsuariosService ]
})
export class JugadoresComponent implements OnInit {
  private userlog: string;
  private userrol: number;
  private eq: number;
  public file:File;
  public f2:any;

constructor(private equiposService: EquiposService, 
  private jugadoresService : JugadoresService,
  private userLoginService: UserLoginService,
  private usuariosService: UsuariosService) { }

ngOnInit() {
  this.getEquipo();
  this.getJugador(); 
}

addJugador(form?: NgForm) {
  if(document.querySelector("#equipos option[value='"+form.value.equiponom+"']") == null && this.userrol != 2) {
    alert('Debe ingresar un Equipo valido');
  }else{
    if(this.userrol != 2){
      var equipoid=document.querySelector("#equipos option[value='"+form.value.equiponom+"']").id;
      form.value.equipoid = equipoid;
    }else{
      form.value.equipoid = this.jugadoresService.selectedJugador.equipoid
    }
    if(parseInt(form.value.equipoid, 10) > 0 &&  form.value.jugadornom && form.value.jugadorci){
      if(form.value.jugadorid) {
        form.value.jugadorfot = this.f2;
        this.jugadoresService.putJugador(form.value)
        .subscribe(res => {
          this.resetForm(form);
          M.toast({html: 'Jugador Editado'});
        });
      } else {
        form.value.jugadorfot = this.f2;
        this.jugadoresService.postJugador(form.value)
        .subscribe(res => {
        this.resetForm(form);
        M.toast({html: 'Jugador Ingresado'});
        });
      };
    }else{
      alert('Debe ingresar Equipo, Nombre y CI del jugador')
    }
  }
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

getEquipo() {
this.equiposService.getEquipo()
.subscribe(res => {
  this.equiposService.equipo = res as Equipo[];
  var usrlog: UserLogin = this.userLoginService.getUserLoggedIn(); //Si el usuario logeado es Encargado
  if(usrlog){
    this.userrol= usrlog.rol;
    if(usrlog.rol == 2){ //Si el usuario logeado es Encargado
      this.equiposService.getEquipoid(usrlog.equipo)
      .subscribe(res => { //Cargo el nombre del equipo del usuario
        var equipojug = res as Equipo;   
        this.jugadoresService.selectedJugador.equiponom = equipojug[0].equiponom;
        this.jugadoresService.selectedJugador.equipoid =  equipojug[0].equipoid;
        this.eq = equipojug[0].equiponom;
      });           
    };
  };
  });
}

getJugador() {
  var usrlog: UserLogin = this.userLoginService.getUserLoggedIn(); //Agarro usuario logeado
  this.userrol= usrlog.rol;
  if(usrlog){
    this.userrol= usrlog.rol;
    if(this.userrol == 2){ //Si el usuario logeado es Encargado
      this.jugadoresService.getJugadorEncargado(usrlog.equipo) //consulto solo los jugadores de ese equipo
        .subscribe(res => {
          this.jugadoresService.jugador = res as Jugador[];
        });
    }else{
      this.jugadoresService.getJugador()
        .subscribe(res => {
          this.jugadoresService.jugador = res as Jugador[];
        });
    };
  }else{
    this.jugadoresService.getJugador()
    .subscribe(res => {
      this.jugadoresService.jugador = res as Jugador[];
    });
  }
};

Buscar(){
  // Declare variables 
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("BJug");
  filter = input.value.toUpperCase();
  table = document.getElementById("TJug");
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

editJugador(jugador: Jugador) {
  this.jugadoresService.selectedJugador = jugador;
}

deleteJugador(jugadorid: number, form: NgForm) {
  if(confirm('Confirma que desea borrar el Jugador?')) {
    this.jugadoresService.deleteJugador(jugadorid)
      .subscribe(res => {
        this.resetForm(form);
        M.toast({html: 'Jugador Borrado'});
      });
  }
}

resetForm(form?: NgForm) {
  if (form) {
    form.reset();
    this.getEquipo()
    this.getJugador();
  }
}

GetUsr(){
var usrlog: UserLogin = this.userLoginService.getUserLoggedIn();
if(usrlog){
  this.userrol= usrlog.rol;
  this.userlog = usrlog.username;
};
}

}

