  import { Component, OnInit } from '@angular/core';
  import { NgForm } from '@angular/forms';
  import { ActivatedRoute, Router } from '@angular/router';

  import { Equipo } from '../../models/equipos';
  import { Campeonato } from '../../models/campeonatos';
  import { CamEquipo } from '../../models/camequipos';
  import { EquiposService } from '../../services/equipos.service';
  import { CampeonatosService } from 'src/app/services/Campeonatos.service';
  import { CamequiposService } from 'src/app/services/Camequipos.service';
  
  declare var M: any;
  
  @Component({
    selector: 'app-camequipo',
    templateUrl: './camequipos.component.html',
    styleUrls: ['./camequipos.component.css'],
    providers: [ EquiposService, CampeonatosService, CamequiposService ]
  })

export class CamequiposComponent implements OnInit {
  
  public CamId:number;
  public EqEdi:number;
  public EqSus:string;
  
  constructor(private campeonatosService: CampeonatosService,
    private equiposService: EquiposService, 
    private camequiposService: CamequiposService,
    private route: ActivatedRoute,
    private router: Router) { }
  
  ngOnInit() {
    this.CamId = this.route.snapshot.params.id;
    this.getCampeonato();
    this.getEquipo();
    this.getCamequipo();
    this.EqEdi = 0; 
  }
  
  addCamequipo(form?: NgForm) {
    if(document.querySelector("#equipos option[value='"+form.value.equiponom+"']") == null){
      alert('Debe ingresar un Equipo valido');
    }else{
      var equipoid=document.querySelector("#equipos option[value='"+form.value.equiponom+"']").id;
      form.value.equipoid = equipoid;
      form.value.campeonatoid = this.CamId;

      form.value.equpag = 0;
      form.value.equcancuo = 0;
      form.value.equmetpag = '';
      form.value.equdeuda = 0;
      form.value.equvendeu = '';

      if(parseInt(form.value.equipoid, 10) > 0){
        if(form.value.camequid) {
          var sus=document.querySelector("#sus option[value='"+form.value.equiposus+"']").id;
          form.value.equsus = sus;
          this.camequiposService.putCamequipo(form.value)
          .subscribe(res => {
            this.resetForm(form);
            M.toast({html: 'Datos del equipo en el campeonato editados'});
          });
        } else {
          this.camequiposService.postCamequipo(form.value)
          .subscribe(res => {
            this.resetForm(form);
            M.toast({html: 'Equipo agregado al campeonato'});
          });
        };
      }else{
        alert('Debe ingresar un Equipo')
      }
    };
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

  getEquipo() {
    this.equiposService.getEquipoPpal()
    .subscribe(res => {
        this.equiposService.equipo = res as Equipo[];
    });
  }

  getCamequipo() {
    this.camequiposService.getCamequipo(this.CamId)
    .subscribe(res => {
      this.camequiposService.camequipos = res as CamEquipo[];
    });
  }
  
  editCamequipo(camequipo: CamEquipo) {
    this.EqEdi = 1
    this.camequiposService.selectedCamEquipo = camequipo;
    if(this.camequiposService.selectedCamEquipo.equsus === 0){
      this.EqSus = 'NO'
    }else{
      this.EqSus = 'SI'
    }
  }

  deleteCamequipo(camequid: number, form: NgForm) {
    if(confirm('Confirma que desea borrar el equipo del campeonato?')) {
      this.camequiposService.deleteCamequipo(camequid)
        .subscribe(res => {
          this.resetForm(form);
          M.toast({html: 'Equipo borrado del campeonato'});
        });
    }
  }

  resetForm(form?: NgForm) {
    if (form) {
      this.EqEdi = 0;
      form.reset();

      this.getEquipo();
      this.getCampeonato();
      this.getCamequipo();
    }
  }

} //CamequiposComponent
