const express = require('express');
const router = express.Router();

const liga = require('../controllers/liga.controller');


//////////////////////////////////////////////////////////////////////////
//Routers Usuarios
router.get('/usuario', liga.getUsuarios);
router.get('/usuario/:id', liga.getUsuario);

router.post('/usuario', liga.createUsuario);
router.post('/usuariologin', liga.getUsuarioLogin);

router.put('/usuario/:id', liga.editUsuario);

router.delete('/usuario/:id', liga.deleteUsuario);


//////////////////////////////////////////////////////////////////////////
//Routers Zonas
router.get('/zona', liga.getZonas);
router.get('/zona/:id', liga.getZona);

router.post('/zona', liga.createZona);

router.put('/zona/:id', liga.editZona);

router.delete('/zona/:id', liga.deleteZona);


//////////////////////////////////////////////////////////////////////////
//Routers Modalidades
router.get('/modalidad', liga.getModalidades);
router.get('/modalidad/:id', liga.getModalidad);

router.post('/modalidad', liga.createModalidad);

router.put('/modalidad/:id', liga.editModalidad);

router.delete('/modalidad/:id', liga.deleteModalidad);


//////////////////////////////////////////////////////////////////////////
//Routers Divisionales
router.get('/divisional', liga.getDivisionales);
router.get('/divisional/:id', liga.getDivisional);

router.post('/divisional', liga.createDivisional);

router.put('/divisional/:id', liga.editDivisional);

router.delete('/divisional/:id', liga.deleteDivisional);


//////////////////////////////////////////////////////////////////////////
//Routers Campeonatos
router.get('/campeonato', liga.getcampeonatos);
router.get('/campeonato/:id', liga.getcampeonato);
router.get('/campeonatonom/:id', liga.getcampeonatonom);
router.get('/campeonatofec/:cam', liga.getcampeonatofec);
router.get('/campeonatodiv/:div', liga.getcampeonatodiv);

router.post('/campeonato', liga.createcampeonato);

router.put('/campeonato/:id', liga.editcampeonato);

router.delete('/campeonato/:id', liga.deletecampeonato);


//////////////////////////////////////////////////////////////////////////
//Routers Equipos
router.get('/equipoppal', liga.getequiposppal);
router.get('/equipo', liga.getequipos);
router.get('/equipo/:id', liga.getequipo);
router.get('/equiponom/:nom', liga.getequiponom); //Consulta equipos por nombre
router.get('/equipocan/:cam', liga.getcanequipos); //Consulta cantidad de equipos en un campeonato
router.get('/equipocancam/:cam', liga.getcanequiposcam);//Consulta equipos de un campeonato
router.get('/viewequipo', liga.getequiposimg);

router.post('/equipo', liga.createequipo);
router.post('/equipoimg', liga.createequipoimg);

router.put('/equipo/:id', liga.editequipo);

router.delete('/equipo/:id', liga.deleteequipo);


//////////////////////////////////////////////////////////////////////////
//Routers Campeonatos/Equipo
router.get('/camequipo/:cam', liga.getcamequipos);
router.get('/camequipo/:id', liga.getcamequipo);

router.post('/camequipo', liga.createcamequipos);

router.put('/camequipo/:id', liga.editcamequipos);

router.delete('/camequipo/:id', liga.deletecamequipos);


//////////////////////////////////////////////////////////////////////////
//Routers Jugadores
router.get('/jugador', liga.getjugadores); //Consulta todos los jugadores
router.get('/jugador/:id', liga.getjugador); //Consulta un jugador
router.get('/jugadoreq/:eq', liga.getjugadoreseq); //Consulta todos los jugadores de un equipo

router.post('/jugador', liga.createjugador);

router.put('/jugador/:id', liga.editjugador);

router.delete('/jugador/:id', liga.deletejugador);


//////////////////////////////////////////////////////////////////////////
//Routers Partidos
router.get('/partidos/:cam', liga.getpartidos); // Consulta partidos de un campeonato
router.get('/partidosjug/:id', liga.getpartidosjug); //Consulta un partido
router.get('/partidosfot/:id', liga.getpartidosfot); //Consulta fotos de un partido
router.get('/partidosfotcam/:cam', liga.getpartidosfotcam); //consulta fotos de un campeonato
router.get('/partidosequipo/:id', liga.getpartidosequipo); //Consulta Partidos de equipos
router.get('/partidosfeccam/:cam', liga.getpartidosfeccam); //Consulta las fechas de un campeonato, en la tabla partidos
router.get('/partidosfec/:cam/:fec', liga.getpartidosfec); //Consulta las fechas de un partido por campeonato
router.get('/partidosjugados/:cam/:equ', liga.getpartidosjugados); //Consulta la cantidad de partidos jugados por equipo
router.get('/partidosganados/:cam/:equ', liga.getpartidosganados);
router.get('/partidosperdidos/:cam/:equ', liga.getpartidosperdidos);
router.get('/partidosempatados/:cam/:equ', liga.getpartidosempatados);
router.get('/partidosgolesf/:cam/:equ', liga.getpartidosgolesf); //Consulta la cantidad de goles a favor por equipo
router.get('/partidosgolesc/:cam/:equ', liga.getpartidosgolesc); //Consulta la cantidad de goles en contra por equipo

router.post('/partidos', liga.createpartido);
router.post('/partidosfot', liga.createpartidofot);

router.put('/partidos/:id', liga.editpartido);
router.put('/partidosres/:id', liga.editpartidores); //Actualizo resultado de partido

router.delete('/partidos/:par', liga.deletepartido); //Borrar partido
router.delete('/partidosfot/:id', liga.deletepartidofot);


//////////////////////////////////////////////////////////////////////////
//Routers Jugadores/Partidos
router.get('/jugpar/:par', liga.getjugpars);//Consulta los datos de un jugador en un partido
router.get('/jugpargol/:cam', liga.getjugparsgol);
router.get('/jugparamaroj/:eq', liga.getjugparsamaroj); //Consulta total amarillas y rojas de un jugador
router.get('/jugparestadistica/:ju', liga.getjugparestadistica); //Consulta estadisticas de un jugador total
router.get('/jugpargolpar/:par/:eq/:nro', liga.getjugpargolpar); //Consulta goles de un jugador de un equipo en un partido
router.get('/jugparamapar/:par/:eq/:nro', liga.getjugparamapar); //Consulta amarillas de un jugador de un equipo en un partido
router.get('/jugparrojpar/:par/:eq/:nro', liga.getjugparrojpar); //Consulta rojas de un jugador de un equipo en un partido
  
router.post('/jugpartot', liga.createjugpartot); //Ingreso de jugadores por defecto en partido
router.post('/jugpar', liga.createjugpar); //Ingreso un jugador en partido

router.put('/jugpar/:id', liga.editjugpar);

router.delete('/jugpar/:id', liga.deletejugpar);


//////////////////////////////////////////////////////////////////////////
//Routers Pago equipo
router.get('/pagoequipo/', liga.getpagoequipos); //Consulta pagos de todos los equipos
router.get('/pagoequipo/:eq', liga.getpagoequipo); //Consulta pagos de un  equipo

router.post('/pagoequipo', liga.createpagoequipo);

router.put('/pagoequipo/:id', liga.editpagoequipo);

router.delete('/pagoequipo/:id', liga.deletepagoequipo);


//////////////////////////////////////////////////////////////////////////
//Routers Noticias
router.get('/noticias', liga.getnoticias);
router.get('/noticiaid/:not', liga.getnoticiaid);
router.get('/noticias/:eq', liga.getnoticiaeq);

router.post('/noticias', liga.createnoticia);

router.put('/noticias/:id', liga.editnoticia);

router.delete('/noticias/:id', liga.deletenoticia);



module.exports = router;