  import { Component, Output, Input, ViewEncapsulation,OnInit} from '@angular/core';
  import { NgForm } from '@angular/forms';
  import {Routes, RouterModule, Router, ActivatedRoute } from '@angular/router';
  
  import { Equipo } from '../../models/equipos';
  import { Campeonato } from '../../models/campeonatos';
  import { Partido } from '../../models/partidos';
  import { Jugador } from '../../models/jugadores';
  
  import { EquiposService } from '../../services/equipos.service';
  import { CampeonatosService } from 'src/app/services/campeonatos.service';
  import { PartidosService } from 'src/app/services/partidos.service';
  import { JuparsService } from 'src/app/services/jupars.service';
  import { JugadoresService } from '../../services/jugadores.service';
import { error } from 'util';
import { Jugpar } from 'src/app/models/jugpar';

 
  declare var M: any;
  
  @Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'app-partido',
    templateUrl: './partidos.component.html',
    styleUrls: ['./partidos.component.css'],
    providers: [ EquiposService, CampeonatosService, JugadoresService, PartidosService ]
  })
  export class PartidosComponent implements OnInit {

  public CamId:number;
  public j:number;
  public enom1:string;
  public enom2:string;
  
  constructor(private campeonatosService: CampeonatosService,
    private equiposService: EquiposService,
    private partidosService: PartidosService, 
    private jugadoresService : JugadoresService,
    private jugparsService: JuparsService, 
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.CamId = this.route.snapshot.params.id;
    this.getCanEquipocam();
    this.getCampeonato();
    this.getPartido();
  }
  
  
  addPartido(form?: NgForm) {
    //Validaciones
    if(document.querySelector("#equipos1 option[value='" + form.value.equiponom1 + "']") == null){
      alert('Debe ingresar un Equipo valido');
    }else{
    if(document.querySelector("#equipos2 option[value='" + form.value.equiponom2 + "']") == null){
      alert('Debe ingresar un Equipo valido');
    }else{
      var equipoid1 = document.querySelector("#equipos1 option[value='" + form.value.equiponom1 + "']").id;
      form.value.equipoid1 = equipoid1;
      var equipoid2 = document.querySelector("#equipos2 option[value='" + form.value.equiponom2 + "']").id;
      form.value.equipoid2 = equipoid2;
    if(equipoid1 === equipoid2){
      alert('Los equipos del partido deben ser diferentes');
    }else{
      form.value.campeonatoid = this.CamId;

      if(form.value.PartidosFecJug && form.value.PartidosFec && form.value.PartidosHor && form.value.PartidosComplejo && form.value.PartidosCan){
    /////////////////////////////////////////////// 
        if(form.value.Partidosid) {
            this.partidosService.putPartido(form.value)
            .subscribe(res => {
              this.resetForm(form);
              M.toast({html: 'Partido Editado'});
            });
        } else {
          this.partidosService.postPartido(form.value)
          .subscribe(res => {
            //Obtengo el id que se le ingreso al partido
            var obj = JSON.parse(JSON.stringify(res));
            var ParId = obj['id'];

            //Se cargan por defecto todos los jugadores habilitados
            //Equipo 1
            this.jugadoresService.getJugadorEncargado(form.value.equipoid1)
            .subscribe(res => {
              this.jugadoresService.jugador = res as Jugador[];
              for(var i=0; i< this.jugadoresService.jugador.length; i++){
                //Ingreso jugadores del equipo 1
                var JugPar: Jugpar;
                form.value.PartidosId = ParId;
                form.value.jugadorid = this.jugadoresService.jugador[i].jugadorid;
                this.jugparsService.postJugparTot(form.value)
                .subscribe(res => {
                  if(error){
                    M.toast({html: 'Error en ingreso de jugadores'});  
                  }
                })
              }
            })

            //Equipo 2
            this.jugadoresService.getJugadorEncargado(form.value.equipoid2)
            .subscribe(res => {
             this.jugadoresService.jugador = res as Jugador[];
             for(var i=0; i< this.jugadoresService.jugador.length; i++){
               //Ingreso jugadores del equipo 2
               var JugPar: Jugpar;
               form.value.PartidosId = ParId;
               form.value.jugadorid = this.jugadoresService.jugador[i].jugadorid;
               this.jugparsService.postJugparTot(form.value)
               .subscribe(res => {
                  if(error){
                    M.toast({html: 'Error en ingreso de jugadores'});  
                  }
               })
             }
            })

            this.resetForm(form);
            M.toast({html: 'Partido Ingresado'});

          });
        };
      }else{
        alert('Debe ingresar Nro de Fecha, Fecha del partido, Hora, Complejo y Cancha')
      } //If
    
    }}}//IFs
  }

  getCanEquipocam() {
  this.equiposService.getCanEquipocam(this.CamId)
  .subscribe(res => {
    this.equiposService.equipo = res as Equipo[];
  });
  }
  
  getCampeonato() {
  this.campeonatosService.getCampeonato()
    .subscribe(res => {
      this.campeonatosService.campeonatos = res as Campeonato[];
      this.campeonatosService.getCampeonatonom(this.CamId)
      .subscribe(res => {
        var camnom = res as Campeonato;   
        this.campeonatosService.selectedCampeonato.campeonatonom = camnom[0].campeonatonom;
      });
    });
  }

  getPartido() {
    this.partidosService.getPartido(this.CamId)
    .subscribe(res => {
      this.partidosService.partidos = res as Partido[];
      // this.j = 0;
      // for(var i=0; i<this.partidosService.partidos.length; i++){
        
      //   //Nombre del equipo 1
      //   this.equiposService.getEquipoid(this.partidosService.partidos[i].equipoid1)
      //   .subscribe(res => {
      //     var eqnom1 = res as Equipo; 
      //     this.enom1 = eqnom1[0].equiponom;
      //     console.log(i);
      //   })
      //   //Nombre del equipo 2
      //   this.equiposService.getEquipoid(this.partidosService.partidos[i].equipoid2)
      //   .subscribe(res => {
      //     var eqnom2 = res as Equipo; 
      //     this.enom2 = eqnom2[0].equiponom;
      //     console.log(i);
      //   }) 

      //   this.partidosService.partidos[this.j].equiponom1 = this.enom1;
      //   this.partidosService.partidos[this.j].equiponom2 = this.enom2;
      //   this.j += 1;
      // }
    });
  }
  
   editPartido(partido: Partido) {
     this.partidosService.selectedPartido = partido;
   }
  
   deletePartido(Partidosid: number, form: NgForm) {
     if(confirm('Confirma que desea borrar el partido?')) {
       this.partidosService.deletePartido(Partidosid)
         .subscribe(res => {
           this.resetForm(form);
           M.toast({html: 'Partido Borrado'});
         });
     }
   }

   Buscar(){
    // Declare variables 
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("BPar");
    filter = input.value.toUpperCase();
    table = document.getElementById("TPar");
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
  
       this.getCanEquipocam();
       this.getCampeonato();
       this.getPartido();
     }
   }

  } //PartidosComponent