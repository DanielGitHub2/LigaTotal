import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule, _firebaseAppFactory } from 'angularfire2';

// Components
//import { EmployeesComponent } from './components/employees/employees.component';
import { AppComponent } from './app.component';
import { APP_ROUTING } from './app.routes';
import { ZonasComponent } from './components/zonas/zonas.component';
import { ModalidadComponent } from './components/modalidades/modalidad.component';
import { ImgppalComponent } from './components/imgppal/imgppal.component';
import { ModalComponent } from './popup/modal.component';
import { ModalService } from './popup/modal.service';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { DivisionalesComponent } from './components/divisionales/divisionales.component';
import { UserLoginService } from './services/usuariologin.service';
import { EquipoComponent } from './components/equipos/equipos.component';
import { ViewEquipoComponent } from './components/viewequipos/viewequipos.component';
import { CampeonatosComponent } from './components/campeonatos/campeonatos.component';
import { JugadoresComponent } from './components/jugadores/jugadores.component';
import { CamequiposComponent } from './components/camequipos/camequipos.component';
import { PartidosComponent } from './components/partidos/partidos.component';
import { JugparsComponent } from './components/jugpars/jugpars.component';
import { NoticiasComponent } from './components/noticias/noticias.component';
import { PagoequiposComponent } from './components/pagoequipos/pagoequipos.component';
import { PartidosequipoComponent } from './components/partidosequipo/partidosequipo.component';
import { ViewJugadoresComponent } from './components/viewjugadores/viewjugadores.component';
import { EquipodatosComponent } from './components/equipodatos/equipodatos.component';
import { JugadordatosComponent } from './components/jugadordatos/jugadordatos.component';
import { JugcarnetComponent } from './components/jugcarnet/jugcarnet.component';
import { ViewpagoequiposComponent } from './components/viewpagoequipos/viewpagoequipos.component';
import { FixtureComponent } from './components/fixture/fixture.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FixtureopciComponent } from './components/fixtureopci/fixtureopci.component';
import { ViewnoticiaComponent } from './components/viewnoticia/viewnoticia.component';
import { ClasificacionopcComponent } from './components/clasificacionopc/clasificacionopc.component';
import { GoleadoresopcComponent } from './components/goleadoresopc/goleadoresopc.component';
import { GaleriafotcamComponent } from './components/galeriafotcam/galeriafotcam.component';
import { PartidosfotComponent } from './components/partidosfot/partidosfot.component';
import { ViewpartidoComponent } from './components/viewpartido/viewpartido.component';

@NgModule({
  declarations: [
    AppComponent,
    ZonasComponent,
    ModalidadComponent,
    ImgppalComponent,
    ModalComponent,
    UsuariosComponent,
    DivisionalesComponent,
    EquipoComponent,
    ViewEquipoComponent,
    CampeonatosComponent,
    JugadoresComponent,
    CamequiposComponent,
    PartidosComponent,
    JugparsComponent,
    NoticiasComponent,
    PagoequiposComponent,
    PartidosequipoComponent,
    ViewJugadoresComponent,
    EquipodatosComponent,
    JugadordatosComponent,
    JugcarnetComponent,
    ViewpagoequiposComponent,
    FixtureComponent,
     FixtureopciComponent,
     ViewnoticiaComponent,
     ClasificacionopcComponent,
     GoleadoresopcComponent,
     GaleriafotcamComponent,
     PartidosfotComponent,
     ViewpartidoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    APP_ROUTING,
    AngularFireModule,
    BrowserAnimationsModule
  ],
  providers: [ModalService, UserLoginService],
  bootstrap: [AppComponent]
})
export class AppModule {
  
}
