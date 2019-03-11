import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {DomSanitizer, SafeUrl, SafeResourceUrl} from "@angular/platform-browser";
import {Routes, RouterModule, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-jugcarnet',
  templateUrl: './jugcarnet.component.html',
  styleUrls: ['./jugcarnet.component.css']
})
export class JugcarnetComponent implements OnInit {
  public JuId:number;

  constructor( private domSanitizer: DomSanitizer,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.JuId = this.route.snapshot.params.jug;
  }

  imprimir(){
    var ficha=document.getElementById('ee');
    window.document.write(ficha.innerText);
    window.print();
   }

  /*Imprimir tabla o cualquier cosa dentro de un div llamado muestra.-
<input type="button" value="Imprimir" onclick="javascript:window.print()" />

  <script type="text/javascript">
function imprSelec(muestra)
{var ficha=document.getElementById(muestra);var ventimp=window.open(' ','popimpr');ventimp.document.write(ficha.innerHTML);ventimp.document.close();ventimp.print();ventimp.close();}
</script>*/

}
