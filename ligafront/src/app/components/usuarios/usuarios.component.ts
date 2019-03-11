import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Usuario } from '../../models/usuarios';
import { UsuariosService } from '../../services/usuarios.service';
import { Equipo } from '../../models/equipos';
import { EquiposService } from '../../services/equipos.service';

declare var M: any;

@Component({
  selector: 'app-usuario',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css'],
  providers: [ UsuariosService, EquiposService ]
})
export class UsuariosComponent implements OnInit {
  private MuestroEquipo: number;

  constructor(private usuariosService: UsuariosService,private equiposService: EquiposService) { }
  
  ngOnInit() {
    this.getUsuario();
    this.getEquipo();
  }

  addUsuario(form?: NgForm) {
    var permiso=document.querySelector("#permisos option[value='"+form.value.usuarioper+"']").id;
    form.value.usuarioper = permiso;

    var equipoid=document.querySelector("#equipos option[value='"+form.value.equiponom+"']").id;
    form.value.equipoid = equipoid;

    if(form.value.usuarionom && form.value.usuariomai && form.value.usuarioper && form.value.usuarioali && form.value.usuariopas){
      if(form.value.usuarioid) {
          this.usuariosService.putUsuario(form.value)
          .subscribe(res => {
            this.resetForm(form);
            this.getUsuario();
            M.toast({html: 'Usuario Editado'});
          });
      } else {
        this.usuariosService.postUsuario(form.value)
        .subscribe(res => {
          this.getUsuario();
          this.resetForm(form);
          M.toast({html: 'Usuario Ingresado'});
        });
      };
    }else{
      alert('Debe ingresar Nombre, eMail, Permisos, Alias y Password')
    }
  }
  
  getUsuario() {
    this.usuariosService.getUsuario()
      .subscribe(res => {
        this.usuariosService.usuarios = res as Usuario[];
      });
  }

  getEquipo() {
    this.equiposService.getEquipo()
      .subscribe(res => {
        this.equiposService.equipo = res as Equipo[];
      });
  }

  editUsuario(usuario: Usuario) {
    this.usuariosService.selectedUsuario = usuario;
  }

  deleteUsuario(usuarioid: number, form: NgForm) {
    if(confirm('Confirma que desea borrar el Usuario?')) {
      this.usuariosService.deleteUsuario(usuarioid)
        .subscribe(res => {
          this.getUsuario();
          this.resetForm(form);
          M.toast({html: 'Usuario Borrado'});
        });
    }
  }

  Buscar(){
    // Declare variables 
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("BUsu");
    filter = input.value.toUpperCase();
    table = document.getElementById("TUsu");
    tr = table.getElementsByTagName("tr");

    // Loop through all table rows, and hide those who don't match the search query
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
      this.usuariosService.selectedUsuario = new Usuario();
    }
  }

  ShowEquipo(per:string){
    if(per == "Encargado"){
      this.MuestroEquipo = 1;
    }else{
      this.MuestroEquipo = 0;
    }
  }

}
