import {Routes, RouterModule } from '@angular/router';
import { ZonasComponent} from './components/zonas/zonas.component';
import { ModalidadComponent } from './components/modalidades/modalidad.component';
import { ImgppalComponent } from './components/imgppal/imgppal.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { DivisionalesComponent } from './components/divisionales/divisionales.component';
import { EquipoComponent } from './components/equipos/equipos.component';
import { ViewEquipoComponent } from './components/viewequipos/viewequipos.component';
import { CampeonatosComponent } from './components/campeonatos/campeonatos.component';
import { JugadoresComponent } from './components/jugadores/jugadores.component';
import { PartidosComponent } from './components/partidos/partidos.component';
import { CamequiposComponent } from './components/camequipos/camequipos.component';
import { JugparsComponent } from './components/jugpars/jugpars.component';
import { NoticiasComponent } from './components/noticias/noticias.component';
import { PagoequiposComponent } from './components/pagoequipos/pagoequipos.component';
import { PartidosequipoComponent } from './components/partidosequipo/partidosequipo.component';
import { ViewJugadoresComponent } from './components/viewjugadores/viewjugadores.component';
import { EquipodatosComponent } from './components/equipodatos/equipodatos.component';
import { JugadordatosComponent } from './components/jugadordatos/jugadordatos.component';
import { FixtureComponent } from './components/fixture/fixture.component';
import { FixtureopciComponent } from './components/fixtureopci/fixtureopci.component';
import { ViewnoticiaComponent } from './components/viewnoticia/viewnoticia.component';
import { ClasificacionopcComponent } from './components/clasificacionopc/clasificacionopc.component';
import { GoleadoresopcComponent } from './components/goleadoresopc/goleadoresopc.component';
import { PartidosfotComponent } from './components/partidosfot/partidosfot.component';
import { GaleriafotcamComponent } from './components/galeriafotcam/galeriafotcam.component';
import { ViewpartidoComponent } from './components/viewpartido/viewpartido.component';
import { JugcarnetComponent } from './components/jugcarnet/jugcarnet.component';
import { ViewpagoequiposComponent } from './components/viewpagoequipos/viewpagoequipos.component';

const ROUTES: Routes = [
    {path: 'zonas', component: ZonasComponent},
    {path: 'modalidades', component: ModalidadComponent},
    {path: 'usuarios', component: UsuariosComponent},
    {path: 'divisionales', component: DivisionalesComponent},
    {path: 'equipos', component: EquipoComponent},
    {path: 'viewequipos', component: ViewEquipoComponent},
    {path: 'campeonatos', component: CampeonatosComponent},
    {path: 'jugadores', component: JugadoresComponent},
    {path: 'camequipos/:id', component: CamequiposComponent},
    {path: 'partidos/:id', component: PartidosComponent},
    {path: 'jugpar/:par/:eq', component: JugparsComponent},
    {path: 'noticias', component: NoticiasComponent},
    {path: 'pagoequipos', component: PagoequiposComponent},
    {path: 'partidosequipo/:eq', component: PartidosequipoComponent},
    {path: 'viewjugadores/:eq/:par', component: ViewJugadoresComponent},
    {path: 'equipodatos/:eq', component: EquipodatosComponent},
    {path: 'jugadordatos/:ju', component: JugadordatosComponent},
    {path: 'fixture/:cam/:fec', component: FixtureComponent},
    {path: 'fixtureopci', component: FixtureopciComponent},
    {path: 'viewnoticia/:not', component: ViewnoticiaComponent},
    {path: 'clasificacionopc', component: ClasificacionopcComponent},
    {path: 'goleadoresopc', component: GoleadoresopcComponent},
    {path: 'partidosfot/:cam/:par', component: PartidosfotComponent},
    {path: 'galeriafotcam/:cam', component: GaleriafotcamComponent},
    {path: 'viewpartido/:par', component: ViewpartidoComponent},
    {path: 'viewpagoequipos', component: ViewpagoequiposComponent},
    {path: 'jugcarnet/:jug', component: JugcarnetComponent},
    {path: 'imgppal', component: ImgppalComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'imgppal'}
];

export const APP_ROUTING = RouterModule.forRoot(ROUTES);