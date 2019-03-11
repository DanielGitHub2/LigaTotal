import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Equipo } from '../../models/equipos';
import { Noticia } from '../../models/noticias';

import { EquiposService } from '../../services/equipos.service';
import { NoticiasService } from '../../services/noticias.service';

import { UserLogin } from '../../models/usuariologin'
import { UserLoginService } from '../../services/usuariologin.service'

declare var M: any;

@Component({
  selector: 'app-noticia',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css'],
  providers: [ EquiposService, NoticiasService ]
})
export class NoticiasComponent implements OnInit {
  private userlog: string;
  public file:File;
  public f2:any;

constructor(private equiposService: EquiposService, 
  private noticiasService : NoticiasService,
  private userLoginService: UserLoginService) { }

ngOnInit() {
  this.getEquipo();
  this.getNoticia(); 
}

addNoticia(form?: NgForm) {
  if(document.querySelector("#equipos option[value='"+form.value.equiponom+"']") == null){
    form.value.equipoid = 0;
  }else{
    var equipoid=document.querySelector("#equipos option[value='"+form.value.equiponom+"']").id;
    form.value.equipoid = equipoid;
  }

  console.log(form.value)
  if(form.value.noticiasid) {
    form.value.noticiasfot = this.f2;
    this.noticiasService.putNoticia(form.value)
    .subscribe(res => {
      this.resetForm(form);
      M.toast({html: 'Noticia Editada'});
    });
  } else {
    form.value.noticiasfot = this.f2;
    this.GetUsr()
    form.value.UsuariosAli = this.userlog;
    this.noticiasService.postNoticia(form.value)
    .subscribe(res => {
      this.resetForm(form);
      M.toast({html: 'Noticia Ingresada'});
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

getEquipo() {
this.equiposService.getEquipo()
  .subscribe(res => {
    this.equiposService.equipo = res as Equipo[];
  });
}

getNoticia() {
  this.noticiasService.getNoticia() 
    .subscribe(res => {
      this.noticiasService.noticias = res as Noticia[];
    });
};

Buscar(){
  // Declare variables 
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("BNot");
  filter = input.value.toUpperCase();
  table = document.getElementById("TNot");
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

editNoticia(noticia: Noticia) {
  this.noticiasService.selectedNoticia = noticia;
  this.equiposService.selectedEquipo.equiponom = this.noticiasService.selectedNoticia.equiponom;
}

deleteNoticia(noticiaid: number, form: NgForm) {
  if(confirm('Confirma que desea borrar la Noticia?')) {
    this.noticiasService.deleteNoticia(noticiaid)
      .subscribe(res => {
        this.resetForm(form);
        M.toast({html: 'Noticia Borrada'});
      });
  }
}

resetForm(form?: NgForm) {
  if (form) {
    form.reset();
    
    this.getEquipo()
    this.getNoticia();
  }
}

GetUsr(){
var usrlog: UserLogin = this.userLoginService.getUserLoggedIn();
if(usrlog){
  this.userlog = usrlog.username;
};
}

}


