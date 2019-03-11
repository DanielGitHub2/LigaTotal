const connection = require('../database');
const fs = require('fs');

const ligaCtrl = {};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//USUARIOS
//Consulta Usuarios para Login
ligaCtrl.getUsuarioLogin = async (req, res, next) => {
    var usuariosali= req.body.username;
    var usuariospas= req.body.password;
    connection.query("SELECT * FROM usuarios where usuariosali = '" + usuariosali + "' and usuariospas = '" + usuariospas + "'", (err, result) => {    
        res.send(result);
})
};

ligaCtrl.getUsuarios = async (req, res, next) => {
    connection.query('SELECT * FROM usuarios', (err, result) => {
    res.send(result);
    
})
};

//Inserto usuario
ligaCtrl.createUsuario = async (req, res, next) => {
    var usuariosnom = req.body.usuarionom;
    var usuariospas = req.body.usuariopas;
    var usuariosper = req.body.usuarioper;
    var usuariosmai = req.body.usuariomai;
    var usuariosali = req.body.usuarioali;
    var usuariostel = req.body.usuariotel;

    connection.query('INSERT INTO usuarios (UsuariosNom, UsuariosPas, UsuariosPer,UsuariosMai, UsuariosAli, UsuariosTel, equipoid) values("' + 
    usuariosnom + '","' + usuariospas + '",' + usuariosper + ',"' + usuariosmai + '","' + usuariosali + 
    '","' + usuariostel + '",' + req.body.equipoid + ')', (err, result) => {
        console.log(err); 
        
        res.json({status: 'Usuario Ingresado'});
    });
    connection.commit;
    
};

//Consulta un usuario
ligaCtrl.getUsuario = async (req, res, next) => {
    connection.query('SELECT * FROM usuarios where usuariosid = '+ req.params.id, (err, result) => {
    res.send(result);
    
})
};

//Editar usuario
ligaCtrl.editUsuario = async (req, res, next) => {
    connection.query("UPDATE usuarios SET UsuariosNom = '" + req.body.usuarionom + "', UsuariosPas = '" + req.body.usuariopas + "', UsuariosPer = " + req.body.usuarioper + ",UsuariosMai = '" + req.body.usuariomai +"',UsuariosAli = '" + req.body.usuarioali + "', UsuariosTel = '" + req.body.usuariotel + "' WHERE usuariosid = " + req.body.usuarioid, (err, result) => {
    res.send(result);
    connection.commit;
    
})
};

//Borrar usuario
ligaCtrl.deleteUsuario = async (req, res, next) => {
    connection.query("DELETE FROM usuarios where usuariosid = " + req.params.id, (err, result) => {
    res.send(result);
    connection.commit;
    
})
};


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//ZONAS
//Consulta todas las zonas
ligaCtrl.getZonas = async (req, res, next) => {
    connection.query('SELECT * FROM zona', (err, result) => {
    res.send(result);
    
})
};

//Inserto zona
ligaCtrl.createZona = async (req, res, next) => {
    var zonanom= req.body.zonanom;
    connection.query('INSERT INTO zona (zonanom) values("' + zonanom + '")', (err, result) => {
        console.log(err); 
        res.json({status: 'Zona Ingresada'});
    });
    connection.commit;
    
};

//Consulta una zona
ligaCtrl.getZona = async (req, res, next) => {
    /*connection.query('SELECT * FROM zona where zonaid = '+ req.params.id, (err, result) => {
    res.send(result);
    
})*/
};

//Editar zona
ligaCtrl.editZona = async (req, res, next) => {
    connection.query("UPDATE zona SET zonanom = '" + req.body.zonanom + "' WHERE zonaid = " + req.body.zonaid, (err, result) => {
    res.send(result);
    connection.commit;
    
})
};

//Borrar zona
ligaCtrl.deleteZona = async (req, res, next) => {
    connection.query("DELETE FROM zona where zonaid = " + req.params.id, (err, result) => {
    res.send(result);
    connection.commit;
    
})
};


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//MODALIDADES
//Consulta todas las modalidades
ligaCtrl.getModalidades = async (req, res, next) => {
    connection.query('SELECT modalidad.*, zona.zonanom FROM modalidad, zona where modalidad.zonaid = zona.zonaid order by zonaid', (err, result) => {
    res.send(result);
    
})
};
//Ingreso modalidad
ligaCtrl.createModalidad = async (req, res, next) => {
    connection.query('INSERT INTO modalidad (zonaid, modalidadnom) values(' + req.body.zonaid + ', "' + req.body.modalidadnom + '")', (err, result) => {
        console.log(err); 
        res.json({status: 'Modalidad Ingresada'});
    });
    connection.commit;
};

//Consulta una modalidad
ligaCtrl.getModalidad = async (req, res, next) => {
    /*connection.query('SELECT * FROM modalidad m, zona z where m.zonaid = z.zonaid and modalidadid = '+ req.params.id, (err, result) => {
    console.log(err);
    res.send(result);
    
})*/
};

//Editar modalidad
ligaCtrl.editModalidad = async (req, res, next) => {
    connection.query("UPDATE modalidad SET modalidadnom = '" + req.body.modalidadnom + "' WHERE modalidadid = " + req.body.modalidadid, (err, result) => {
    res.send(result);
    connection.commit;
    
})
};

//Borrar modalidad
ligaCtrl.deleteModalidad = async (req, res, next) => {
    connection.query("DELETE FROM modalidad where modalidadid = " + req.params.id, (err, result) => {
    res.send(result);
    connection.commit;
    
})
};


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//DIVISIONALES
//Consulta todas las divisionales
ligaCtrl.getDivisionales = async (req, res, next) => {
    connection.query('SELECT divisional.*,modalidad.modalidadnom, zona.zonanom FROM divisional,modalidad, zona where divisional.zonaid = zona.zonaid and divisional.modalidadid = modalidad.modalidadid order by divisionalid', (err, result) => {
    res.send(result);
    
})
};

//Ingreso divisional
ligaCtrl.createDivisional = async (req, res, next) => {
    console.log(req.body.divisionalnom + ' ' + req.body.zonaid + ' ' + req.body.modalidadid);
    connection.query('INSERT INTO divisional (divisionalnom, zonaid, modalidadid) values("' + req.body.divisionalnom + '",' + req.body.zonaid + ',' + req.body.modalidadid + ')', (err, result) => {
        if (err){
            console.log(err);
        }else{
            console.log(connection.query); 
            res.json({status: 'Divisional Ingresada'});
        };
    });
    connection.commit;
};

//Consulta una divisional
ligaCtrl.getDivisional = async (req, res, next) => {
    /*connection.query('Select zonaid from zona where zonanom = "' + zonanom + '"', function (err, recordset) {
    if (err){
        console.log(err);
    }else{
        const arr = JSON.parse(JSON.stringify(recordset))
        zonaid = arr[0].zonaid; 
        modalidadnom = req.body.modalidadnom; 

        connection.query('Select modalidadid from modalidad where modalidadnom = "' + modalidadnom + '"', function (err, recordset) {
        if (err){
            console.log(err);
        }else{
            const arr = JSON.parse(JSON.stringify(recordset))
            modalidadid = arr[0].modalidadid;

            connection.query('SELECT * FROM divisional d, modalidad m, zona z where d.modalidadid = m.modalidadid and d.zonaid = z.zonaid and divisionalId = '+ req.params.id, (err, result) => {
            console.log(err);
            res.send(result);
    
        })}
    })}
})*/ };

//Editar divisional
ligaCtrl.editDivisional = async (req, res, next) => {
    connection.query('UPDATE divisional SET divisionalnom = "' + req.body.divisionalnom + 
    '", zonaid = ' + req.body.zonaid + ', modalidadid = ' + req.body.modalidadid + ' WHERE divisionalid = ' + req.body.divisionalid, (err, result) => {
    res.send(result);
    connection.commit;
    
})
};

//Borrar divisional
ligaCtrl.deleteDivisional = async (req, res, next) => {
    connection.query("DELETE FROM divisional where divisionalId = " + req.params.id, (err, result) => {
    res.send(result);
    connection.commit;
    
})
};


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//EQUIPOS
//Consulta todos los equipos
ligaCtrl.getequipos = async (req, res, next) => {
    connection.query('SELECT equipo.*, zona.zonanom , divisional.divisionalnom FROM equipo, camequ, campeonato, zona, divisional where equipo.equipoid = camequ.equipoid and camequ.campeonatoid = campeonato.campeonatoid and campeonato.zonaid = zona.zonaid and zona.zonaid = divisional.zonaid order by divisional.divisionalid, equipo.equipoid;', (err, result) => {
    res.send(result);
    
})
};

//Consulta datos de un equipo
ligaCtrl.getequipo = async (req, res, next) => {
    connection.query('SELECT * FROM equipo where equipoid = '+ req.params.id, (err, result) => {
    console.log(err);
    res.send(result);
})
};

//Consulta imagenes de equipos
ligaCtrl.getequiposimg = async (req, res, next) => {
    connection.query('SELECT equipoimg.*, equipo.equiponom FROM equipoimg, equipo WHERE equipoimg.equipoid = equipo.equipoid', (err, result) => {
    console.log(err);
    res.send(result);
})
};

//Consulta equipos EN PAGINA EQUIPOS
ligaCtrl.getequiposppal = async (req, res, next) => {
    connection.query('SELECT * FROM equipo order by equiponom', (err, result) => {
    res.send(result);
    
})
};

//Consulta equipos por nombre
ligaCtrl.getequiponom = async (req, res, next) => {
    connection.query('SELECT * FROM equipo where equiponom like "%' + req.params.nom + '%" order by equipoid', (err, result) => {
    res.send(result);
})
};

//Consulta cantidad de equipos en un campeonato
ligaCtrl.getcanequipos = async (req, res, next) => {
    connection.query('SELECT count(*) as can FROM camequ where campeonatoid =' + req.params.cam, (err, result) => {
    res.send(result);
})
};

//Consulta equipos de un campeonato
ligaCtrl.getcanequiposcam = async (req, res, next) => {
    connection.query('SELECT equipo.*, camequ.camequpto FROM equipo, camequ where camequ.equipoid = equipo.equipoid and camequ.campeonatoid =' + req.params.cam + ' order by camequpto desc', (err, result) => {
        res.send(result);
})
};

//Ingreso equipo
ligaCtrl.createequipo = async (req, res, next) => {
    connection.query('INSERT INTO equipo (equiponom, equipoobs, equipofot, equipocanjug, equipotelcon, equipomailcon, equipofecins, equipoest, equipoesc) values("' + 
    req.body.equiponom + '","'  + req.body.equipoobs + '","' + req.body.equipofot + '",' + req.body.equipocanjug + ',"' + 
    req.body.equipotelcon + '","' + req.body.equipomailcon + '","' + req.body.equipofecins + '","Activo","' + 
    req.body.equipoesc + '")', (err, result) => {
        console.log(err); 
        res.send(result);
    });
    connection.commit;
}

//Ingreso imagen de equipo
ligaCtrl.createequipoimg = async (req, res, next) => {

    connection.query('INSERT INTO equipoimg (equipoid, equipofot) values(' + req.body.equipoid + ',"'  + req.body.equipofot + '")', (err, result) => {
        console.log(err); 
        res.send(result);
        //res.json({status: 'Equipo Ingresado'}); 
    });
    connection.commit;
}

//Editar equipo
ligaCtrl.editequipo = async (req, res, next) => {
    if(req.body.equipofot === '' && req.body.equipoesc === ''){
        connection.query('UPDATE equipo SET equiponom = "' + req.body.equiponom + 
        '", equipoobs = "' + req.body.equipoobs + '", equipocanjug = ' + req.body.equipocanjug + ', equipotelcon = "' + req.body.equipotelcon + 
        '", equipomailcon = "' + req.body.equipomailcon + '", equipofecins = "' + req.body.equipofecins + 
        '", equipoest = "Activo" WHERE equipoid = ' + req.body.equipoid, (err, result) => {
        res.send(result);
        connection.commit;
    })
    }else{
        connection.query('UPDATE equipo SET equiponom = "' + req.body.equiponom + 
        '", equipoobs = "' + req.body.equipoobs + '", equipofot = "' + req.body.equipofot + 
        '", equipocanjug = ' + req.body.equipocanjug + ', equipotelcon = "' + req.body.equipotelcon + 
        '", equipomailcon = "' + req.body.equipomailcon + '", equipofecins = "' + req.body.equipofecins + 
        '", equipoesc = "' + req.body.equipoesc + '", equipoest = "Activo" WHERE equipoid = ' + req.body.equipoid, (err, result) => {
        res.send(result);
        connection.commit;
    })
    }
};

//Borrar equipo
ligaCtrl.deleteequipo = async (req, res, next) => {
    connection.query("DELETE FROM equipo where equipoid = " + req.params.id, (err, result) => {
    res.send(result);
    connection.commit;
    
})
};


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//CAMPEONATOS
//Consulta todas los campeonatos
ligaCtrl.getcampeonatos = async (req, res, next) => {
    connection.query('SELECT campeonato.*, zona.zonanom, modalidad.modalidadnom, divisional.divisionalnom FROM campeonato, zona, modalidad, divisional WHERE campeonato.zonaid = zona.zonaid and campeonato.modalidadid = modalidad.modalidadid and campeonato.divisionalid = divisional.divisionalid', (err, result) => {
    res.send(result);
})
};

//Inserto campeonato
ligaCtrl.createcampeonato = async (req, res, next) => {
    connection.query('INSERT INTO campeonato (campeonatonom, modalidadid, zonaid, divisionalid, campeonatoprecio, campeonatopremio, campeonatoequipos, campeonatoestado, campeonatofecini ,campeonatofecfin) values("' + 
    req.body.campeonatonom + '",' + req.body.modalidadid + ',' + req.body.zonaid + ',' + 
    req.body.divisionalid + ',' + req.body.campeonatoprecio + ',"' + req.body.campeonatopremio + '",' + 
    req.body.campeonatoequipos + ',"' + req.body.campeonatoestado + '","' + req.body.campeonatofecini + '","' + 
    req.body.campeonatofecfin + '")', (err, result) => {
        console.log(err); 
        res.json({status: 'campeonato Ingresada'});
    });
    connection.commit;
};

//Consulto un campeonato
ligaCtrl.getcampeonato = async (req, res, next) => {
    connection.query('SELECT * FROM campeonato where campeonatoid = '+ req.params.id, (err, result) => {
    res.send(result);
})
};

//Consulto datos del campeonato de un partido
ligaCtrl.getcampeonatonom = async (req, res, next) => {
    connection.query('SELECT campeonato.* FROM campeonato, partidos where partidos.campeonatoid = campeonato.campeonatoid and partidos.PartidosId = '+ req.params.id, (err, result) => {
    res.send(result);
})
};

//Consulto datos del campeonato de un partido
ligaCtrl.getcampeonatodiv = async (req, res, next) => {
    connection.query('SELECT campeonato.* FROM campeonato where campeonato.campeonatoestado = "Activo" and campeonato.divisionalid = '+ req.params.div, (err, result) => {
    res.send(result);
})
};

//Editar campeonato
ligaCtrl.editcampeonato = async (req, res, next) => {
    connection.query('UPDATE campeonato SET campeonatonom = "' + req.body.campeonatonom + '", modalidadid = ' +  req.body.modalidadid + ', zonaid = ' + req.body.zonaid +
    ', divisionalid = ' + req.body.divisionalid + ', campeonatoprecio = ' + req.body.campeonatoprecio + ', campeonatopremio = "' + req.body.campeonatopremio +
    '", campeonatoequipos = ' + req.body.campeonatoequipos + ', campeonatoestado = "' + req.body.campeonatoestado + '", campeonatofecini = "' + req.body.campeonatofecini +
    '", campeonatofecfin = "' + req.body.campeonatofecfin + '" WHERE campeonatoid = ' + req.body.campeonatoid, (err, result) => {
    res.send(result);
    connection.commit;
    
})
};

//Borrar campeonato
ligaCtrl.deletecampeonato = async (req, res, next) => {
    connection.query("DELETE FROM campeonato where campeonatoid = " + req.params.id, (err, result) => {
    res.send(result);
    connection.commit;
    
})
};

//Consulto datos del campeonato de un partido
ligaCtrl.getcampeonatofec = async (req, res, next) => {
    connection.query('SELECT count(*) as canfec FROM partidos where partidos.campeonatoid = ' + req.params.cam, (err, result) => {
    res.send(result);
})
};


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//CAMPEONATOS/EQUIPOS
//Consulta todas las campeonatos con los equipos
ligaCtrl.getcamequipos = async (req, res, next) => {
    connection.query('SELECT camequ.*, equipo.equiponom, equipo.equipofecins FROM camequ, equipo WHERE camequ.equipoid = equipo.equipoid and camequ.campeonatoid = ' + req.params.cam, (err, result) => {
    res.send(result);
})
};

//Consulta un campeonato y sus equipos
ligaCtrl.getcamequipo = async (req, res, next) => {
    connection.query('SELECT camequ.*, equipo.equiponom, equipo.equipofecins FROM camequ, equipo where camequ.equipoid = equipo.equipoid and camequ.camequid = ' + req.params.id, (err, result) => {
    res.send(result);
})
};

//Inserto campeonato/equipo
ligaCtrl.createcamequipos = async (req, res, next) => {
    connection.query('INSERT INTO camequ (campeonatoid, equipoid, equcancuo, equmetpag, equvendeu, equsus, camequobs, camequpto) values(' + 
    req.body.campeonatoid + ',' + req.body.equipoid + ',' + req.body.equcancuo + ',"' + req.body.equmetpag + '","' + req.body.equvendeu + 
    '",' + req.body.equsus + ',"' + req.body.camequobs + '", 0)', (err, result) => {
        console.log(err); 
        res.json({status: 'Equipo agregado a campeonato'});
    });
    connection.commit;
};

//Editar campeonato/equipo
ligaCtrl.editcamequipos = async (req, res, next) => {
    console.log(req.body);
    connection.query('UPDATE camequ SET campeonatoid = ' + req.body.campeonatoid + ', equipoid = ' +  req.body.equipoid + ', equcancuo = ' + req.body.equcancuo +
    ', equmetpag = "' + req.body.equmetpag + '", equvendeu = "' + req.body.equvendeu + '", equsus = ' + req.body.equsus + ', equpag = ' + req.body.equpag +
    ', equdeuda = ' + req.body.equdeuda + ', camequobs = "' + req.body.camequobs + '" WHERE camequid = ' + req.body.camequid, (err, result) => {
    console.log(err);
        res.send(result);
    connection.commit;
})
};

//Borrar campeonato/equipo
ligaCtrl.deletecamequipos = async (req, res, next) => {
    connection.query("DELETE FROM camequ where camequid = " + req.params.id, (err, result) => {
    res.send(result);
    connection.commit;
})
};


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//JUGADORES
//Consulta todos los jugadores
ligaCtrl.getjugadores = async (req, res, next) => {
    connection.query('SELECT jugador.*, equipo.equiponom FROM jugador, equipo where jugador.equipoid = equipo.equipoid', (err, result) => {
    res.send(result);
})
};

//Consulta un jugador
ligaCtrl.getjugador = async (req, res, next) => {
    connection.query('SELECT * FROM jugador where jugadorid = '+ req.params.id, (err, result) => {
    res.send(result);
})
};

//Consulta todos los jugadores de un equipo
ligaCtrl.getjugadoreseq = async (req, res, next) => {
    connection.query('SELECT jugador.*, equipo.equiponom FROM jugador, equipo where jugador.equipoid = equipo.equipoid and jugador.equipoid = '+ req.params.eq, (err, result) => {
    res.send(result);
})
};

//Inserto jugador
ligaCtrl.createjugador = async (req, res, next) => {
    var fecnac='';
    var fecins='';
    
    if(req.body.jugadorfecnac===null){
        fecnac = ''
    }else{
        fecnac = req.body.jugadorfecnac;
    }
    if(req.body.jugadorfecins===null){
        fecins = ''
    }else{
        fecins = req.body.jugadorfecins;
    }

    console.log('INSERT INTO jugador (jugadornom, equipoid, jugadorci, jugadoremail,jugadortel,jugadordir,jugadorfecnac,jugadorfecins,jugadornro,jugadorpos,jugadorestado, jugadorfot) values("' + 
    req.body.jugadornom + '", ' +  req.body.equipoid + ',' +  req.body.jugadorci + ', "' + req.body.jugadoremail + '","' + req.body.jugadortel + '", "' + 
    req.body.jugadordir + '", "' + fecnac + '", "' + fecins + '", ' + req.body.jugadornro + ', "' + 
    req.body.jugadorpos + '", "Activo", "' + req.body.jugadorfot + '" )');

    connection.query('INSERT INTO jugador (jugadornom, equipoid, jugadorci, jugadoremail,jugadortel,jugadordir,jugadorfecnac,jugadorfecins,jugadornro,jugadorpos,jugadorestado, jugadorfot) values("' + 
    req.body.jugadornom + '", ' +  req.body.equipoid + ',' +  req.body.jugadorci + ', "' + req.body.jugadoremail + '","' + req.body.jugadortel + '", "' + 
    req.body.jugadordir + '", "' + fecnac + '", "' + fecins + '", ' + req.body.jugadornro + ', "' + 
    req.body.jugadorpos + '", "Activo", "' + req.body.jugadorfot + '" )', (err, result) => {
        console.log(err); 
        res.json({status: 'Jugador Ingresado'});
    });
    connection.commit;
    
};


//Editar jugador
ligaCtrl.editjugador = async (req, res, next) => {
    if(req.body.jugadorfot === ''){
        connection.query('UPDATE jugador SET jugadornom = "' + req.body.jugadornom + '", equipoid = ' + req.body.equipoid + 
        ', jugadoremail = "' + req.body.jugadoremail + '", jugadortel = "' + req.body.jugadortel + 
        '", jugadordir = "' + req.body.jugadordir + '", jugadorfecnac = "' + req.body.jugadorfecnac + 
        '", jugadorfecins = "' + req.body.jugadorfecins + '", jugadornro = ' + req.body.jugadornro + 
        ', jugadorpos = "' + req.body.jugadorpos + '", jugadorci = ' + req.body.jugadorci  + 
        ' WHERE jugadorid = ' + req.body.jugadorid, (err, result) => {
        res.send(result);
        connection.commit;
    })
    }else{
        connection.query('UPDATE jugador SET jugadornom = "' + req.body.jugadornom + '", equipoid = ' + req.body.equipoid + 
        ', jugadoremail = "' + req.body.jugadoremail + '", jugadortel = "' + req.body.jugadortel + 
        '", jugadordir = "' + req.body.jugadordir + '", jugadorfecnac = "' + req.body.jugadorfecnac + 
        '", jugadorfecins = "' + req.body.jugadorfecins + '", jugadornro = ' + req.body.jugadornro + 
        ', jugadorpos = "' + req.body.jugadorpos + '", jugadorci = ' + req.body.jugadorci  + ', jugadorfot = "' + req.body.jugadorfot + 
        '" WHERE jugadorid = ' + req.body.jugadorid, (err, result) => {
        res.send(result);
        connection.commit;
    })
    }
};

//Borrar jugador
ligaCtrl.deletejugador = async (req, res, next) => {
    connection.query("DELETE FROM jugador where jugadorid = " + req.params.id, (err, result) => {
    res.send(result);
    connection.commit;
})
};


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//PARTIDOS
//Consulta todos los partidos de un campeonato
ligaCtrl.getpartidos = async (req, res, next) => {
    connection.query('select par.*, (select equipo.equiponom from equipo where equipo.equipoid = par.equipoid1) equiponom1, (select equipo.equiponom from equipo where equipo.equipoid = par.equipoid2) equiponom2 from partidos as par where par.campeonatoid =' + req.params.cam + ' order by par.PartidosFec desc', (err, result) => {
    res.send(result);
})
};

//Consulta un partido 
ligaCtrl.getpartidosjug = async (req, res, next) => {
    connection.query('SELECT partidos.*, campeonato.campeonatonom FROM ligadb.partidos, ligadb.campeonato where partidos.campeonatoid = campeonato.campeonatoid and PartidosId = '+ req.params.id, (err, result) => {
         res.send(result);
})
};

//Consulta fotos de un partido 
ligaCtrl.getpartidosfot = async (req, res, next) => {
    connection.query('SELECT camfecfotos.*, campeonato.campeonatonom, partidos.PartidosFec FROM camfecfotos, partidos, campeonato where camfecfotos.campeonatoid = campeonato.campeonatoid and camfecfotos.PartidosId = partidos.PartidosId and camfecfotos.PartidosId = '+ req.params.id + ' order by camfecfotos.CamFecFotosId desc limit 50', (err, result) => {
    res.send(result);
})
};

//Consulta fotos de un campeonato
ligaCtrl.getpartidosfotcam = async (req, res, next) => {
    connection.query('SELECT camfecfotos.*, campeonato.campeonatonom, partidos.PartidosFec FROM camfecfotos, partidos, campeonato where camfecfotos.campeonatoid = campeonato.campeonatoid and camfecfotos.PartidosId = partidos.PartidosId and camfecfotos.campeonatoid = '+ req.params.cam + ' order by camfecfotos.CamFecFotosId desc limit 50', (err, result) => {
    res.send(result);
})
};

//Consulta Partidos de equipos con campeonato y nombre equipos
ligaCtrl.getpartidosequipo = async (req, res, next) => {
    connection.query("select p.*, campeonato.campeonatonom, e1.equiponom as equiponom1, e2.equiponom as equiponom2 " +
    "FROM ligadb.campeonato , ligadb.partidos as p " +
    "join ligadb.equipo as e1 on(p.equipoid1 = e1.equipoid) " +
    "join ligadb.equipo as e2 on(p.equipoid2 = e2.equipoid) " +
    "where p.campeonatoid = campeonato.campeonatoid and (p.equipoid1 = " + req.params.id + " or p.equipoid2 = " + req.params.id + ")", (err, result) => {
    res.send(result);
    connection.commit;
})
};

//Consulta las fechas de un partido por campeonato
ligaCtrl.getpartidosfeccam = async (req, res, next) => {
    connection.query('select * from partidos where campeonatoid =' + req.params.cam + ' group by partidosfecjug  order by partidosfecjug', (err, result) => {
    res.send(result);
})
};

//Consulta las fechas de un partido por campeonato
ligaCtrl.getpartidosfec = async (req, res, next) => {
    connection.query('select par.*, (select equipo.equiponom from equipo where equipo.equipoid = par.equipoid1) equiponom1, ' +
    '(select equipo.equiponom from equipo where equipo.equipoid = par.equipoid2) equiponom2, ' + 
    '(select equipo.equipoesc from equipo where equipo.equipoid = par.equipoid1) equipoesc1, ' +
    '(select equipo.equipoesc from equipo where equipo.equipoid = par.equipoid2) equipoesc2 ' +
    ' from partidos as par where par.campeonatoid =' + 
    req.params.cam + ' and PartidosFecJug = ' +  req.params.fec + ' order by PartidosFec', (err, result) => {
        res.send(result);
})
};

//Consulta la cantidad de partidos jugados por equipo
ligaCtrl.getpartidosjugados= async (req, res, next) => {
    connection.query('select count(*) totpar from partidos where campeonatoid =' + req.params.cam + ' and (equipoid1 = ' +  req.params.equ + ' or equipoid2 = ' +  req.params.equ + ') and partidos.PartidosIng = 1', (err, result) => {
    res.send(result);
})
};

//Consulta la cantidad de partidos ganados por equipo
ligaCtrl.getpartidosganados= async (req, res, next) => {
    connection.query('select count(*) totgan from partidos where campeonatoid =' + 
    req.params.cam + ' and ((equipoid1 = ' +  req.params.equ + ' and Equipo1Res > Equipo2Res) or  (equipoid2 = ' +  
    req.params.equ + ' and Equipo2Res > Equipo1Res ))', (err, result) => {
    res.send(result);
})
};

//Consulta la cantidad de partidos perdidos por equipo
ligaCtrl.getpartidosperdidos= async (req, res, next) => {
    connection.query('select count(*) totper from partidos where campeonatoid =' + 
    req.params.cam + ' and ((equipoid1 = ' +  req.params.equ + ' and Equipo1Res < Equipo2Res) or  (equipoid2 = ' +  
    req.params.equ + ' and Equipo2Res < Equipo1Res ))', (err, result) => {
    res.send(result);
})
};

//Consulta la cantidad de partidos empatados por equipo
ligaCtrl.getpartidosempatados= async (req, res, next) => {
    connection.query('select count(*) totper from partidos where campeonatoid =' + 
    req.params.cam + ' and ((equipoid1 = ' +  req.params.equ + ' and Equipo1Res = Equipo2Res) or  (equipoid2 = ' +  
    req.params.equ + ' and Equipo2Res = Equipo1Res ))', (err, result) => {
    res.send(result);
})
};

//Consulta la cantidad de goles a favor por equipo
ligaCtrl.getpartidosgolesf= async (req, res, next) => {
    connection.query('select sum(Equipo1Res) golf1 from partidos where campeonatoid =' + 
    req.params.cam + ' and equipoid1 = ' +  req.params.equ, (err, result) => {
        if(isNaN(parseInt(result[0].golf1))){
            var golf1 = 0;
        }else{
            var golf1 = parseInt(result[0].golf1); 
        }
        connection.query('select sum(Equipo2Res) golf2, ' + golf1 + ' golf1 from partidos where campeonatoid =' + 
        req.params.cam + ' and equipoid2 = ' +  req.params.equ, (err, result) => {
            console.log(err); 
            res.send(result);
        })
    })
};

//Consulta la cantidad de goles en contra por equipo
ligaCtrl.getpartidosgolesc= async (req, res, next) => {
    connection.query('select sum(Equipo2Res) golc1 from partidos where campeonatoid =' + 
    req.params.cam + ' and equipoid1 = ' +  req.params.equ, (err, result) => {
        if(isNaN(parseInt(result[0].golc1))){
            var golc1 = 0;
        }else{
            var golc1 = parseInt(result[0].golc1); 
        }
        connection.query('select sum(Equipo1Res) golc2, ' + golc1 + ' golc1 from partidos where campeonatoid =' + 
        req.params.cam + ' and equipoid2 = ' +  req.params.equ, (err, result) => {
            console.log(err); 
            res.send(result);
        })
    })
};

//Inserto partidos
ligaCtrl.createpartido = async (req, res, next) => {
    connection.query('INSERT INTO partidos (campeonatoid, equipoid1, equipoid2, PartidosFec, PartidosHor, PartidosCan, Equipo1Res, Equipo2Res, PartidosObs, PartidosFecJug, PartidosComplejo, Equipo1Pun, Equipo2Pun, PartidosIng) values(' + 
    req.body.campeonatoid + ', ' +  req.body.equipoid1 + ',' + req.body.equipoid2 + ',"' + req.body.PartidosFec + '", "' + 
    req.body.PartidosHor + '", "' + req.body.PartidosCan + '", ' + req.body.Equipo1Res + ',' + req.body.Equipo2Res + ', "' + 
    req.body.PartidosObs + '", ' +  req.body.PartidosFecJug + ', "' + req.body.PartidosComplejo 
    + '",0,0,0)', (err, result) => {
        res.json({id: result.insertId});
    });
    connection.commit;
};

//Inserto fotos del partido
ligaCtrl.createpartidofot = async (req, res, next) => {
    connection.query('INSERT INTO camfecfotos (campeonatoid, PartidosId, CamFecFotosFot) values(' + 
    req.body.campeonatoid + ', ' +  req.body.PartidosId + ',"' + req.body.CamFecFotosFot + '")', (err, result) => {
        console.log(err); 
        res.json({status: 'Fotos del partido ingresadas'});
    });
    connection.commit;
};

//Editar partido
ligaCtrl.editpartido = async (req, res, next) => {
    connection.query('UPDATE partidos SET campeonatoid = "' + req.body.campeonatoid + '", equipoid1 = ' + req.body.equipoid1 + 
    + ', equipoid2 = "' + req.body.equipoid2 + '", PartidosFec = "' + req.body.PartidosFec + 
    '", PartidosHor = "' + req.body.PartidosHor + '", PartidosCan = "' + req.body.PartidosCan + 
    '", Equipo1Res = "' + req.body.Equipo1Res + '", Equipo2Res = ' + req.body.Equipo2Res + 
    ', PartidosObs = "' + req.body.PartidosObs + '", PartidosFecJug = ' + req.body.PartidosFecJug + 
    ', PartidosComplejo = "' + req.body.PartidosComplejo + '" WHERE Partidosid = ' + req.body.PartidosId, (err, result) => {
    res.send(result);
    connection.commit;
})
};

//Editar partido con el resultado y se agregan los puntos a los equipos
ligaCtrl.editpartidores = async (req, res, next) => {
    connection.query('UPDATE partidos SET Equipo1Res = ' + req.body.Equipo1Res + 
    ', Equipo2Res = ' + req.body.Equipo2Res + ', PartidosIng = 1 WHERE Partidosid = ' + 
    req.body.PartidosId, (err, result) => {
        connection.commit;

        //Si no hay error se ponen los puntos a los equipos en el partido
        if (err){
            console.log('Error en ingreso de resultados');
        }else{

            var r = (parseInt(req.body.Equipo1Res) - parseInt(req.body.Equipo2Res));

            ////////////////////////////////////////////////////////////////////////////////
            //SI GANA EL EQUIPO 1
            if(r > 0) { 
                //puntos del partido en el equipo ganador
                connection.query('UPDATE partidos SET Equipo1Pun = 3, Equipo2Pun = 0 WHERE Partidosid = ' + 
                req.body.PartidosId, (err, result) => {
                    connection.commit;
                })

                //Si no hay error se cargan los resultados totales de los equipos
                //TOTAL PUNTOS EQUIPO 1 EN TABLA CAMEQU
                if (err){
                    console.log('Error en ingreso de resultados 1');
                }else{
                    connection.query('select sum(Equipo1Pun) as tot1 from partidos where equipoid1 = '  + req.body.equipoid1, (err, result) => {
                        if(isNaN(parseInt(result[0].tot1))){
                            var tot1 = 0;
                        }else{
                            var tot1 = parseInt(result[0].tot1); 
                        }
                        connection.query('select sum(Equipo2Pun) as tot2 from partidos where equipoid2 = '  + req.body.equipoid1, (err, result) => {
                            if(isNaN(parseInt(result[0].tot2))){
                                var tot2 = 0;
                            }else{
                                var tot2 = parseInt(result[0].tot2); 
                            }
                            //puntos totales de cada equipo
                            var tot = tot1 + tot2;
                            connection.query('UPDATE camequ set camequpto = ' + parseInt(tot) + ' where equipoid = ' + req.body.equipoid1, (err, result) => {
                                console.log(err);
                                connection.commit;
                            })
                        })   
                    }) 
                }  

                //TOTAL PUNTOS EQUIPO 2 EN TABLA CAMEQU
                if (err){
                    console.log('Error en ingreso de resultados 2');
                }else{
                    connection.query('select sum(Equipo1Pun) as tot1 from partidos where equipoid1 = '  + req.body.equipoid2, (err, result) => {
                        if(isNaN(parseInt(result[0].tot1))){
                            var tot1 = 0;
                        }else{
                            var tot1 = parseInt(result[0].tot1); 
                        }
                        connection.query('select sum(Equipo2Pun) as tot2 from partidos where equipoid2 = '  + req.body.equipoid2, (err, result) => {
                            if(isNaN(parseInt(result[0].tot2))){
                                var tot2 = 0;
                            }else{
                                var tot2 = parseInt(result[0].tot2); 
                            }
                            //puntos totales de cada equipo
                            var tot = tot1 + tot2;
                            connection.query('UPDATE camequ set camequpto = ' + parseInt(tot) + ' where equipoid = ' + req.body.equipoid2, (err, result) => {
                                console.log(err);
                                res.send(result);
                                connection.commit;
                            })
                        })   
                    }) 
                }  
            }
            //////////////////////////////////////////////////////////////

            //SI GANA EL EQUIPO 2
            if(r < 0){
                //puntos del partido en el equipo ganador
                connection.query('UPDATE partidos SET Equipo2Pun = 3, Equipo1Pun = 0 WHERE Partidosid = ' + 
                req.body.PartidosId, (err, result) => {
                    connection.commit;
                })

                //TOTAL PUNTOS EQUIPO 1 EN TABLA CAMEQU
                if (err){
                    console.log('Error en ingreso de resultados 1');
                }else{
                    connection.query('select sum(Equipo1Pun) as tot1 from partidos where equipoid1 = '  + req.body.equipoid1, (err, result) => {
                        if(isNaN(parseInt(result[0].tot1))){
                            var tot1 = 0;
                        }else{
                            var tot1 = parseInt(result[0].tot1); 
                        }
                        connection.query('select sum(Equipo2Pun) as tot2 from partidos where equipoid2 = '  + req.body.equipoid1, (err, result) => {
                            if(isNaN(parseInt(result[0].tot2))){
                                var tot2 = 0;
                            }else{
                                var tot2 = parseInt(result[0].tot2); 
                            }
                            //puntos totales de cada equipo
                            var tot = tot1 + tot2;
                            connection.query('UPDATE camequ set camequpto = ' + parseInt(tot) + ' where equipoid = ' + req.body.equipoid1, (err, result) => {
                                console.log(err);
                                connection.commit;
                            })
                        })   
                    }) 
                }  

                //TOTAL PUNTOS EQUIPO 2 EN TABLA CAMEQU
                if (err){
                    console.log('Error en ingreso de resultados 2');
                }else{
                    connection.query('select sum(Equipo1Pun) as tot1 from partidos where equipoid1 = '  + req.body.equipoid2, (err, result) => {
                        if(isNaN(parseInt(result[0].tot1))){
                            var tot1 = 0;
                        }else{
                            var tot1 = parseInt(result[0].tot1); 
                        }
                        connection.query('select sum(Equipo2Pun) as tot2 from partidos where equipoid2 = '  + req.body.equipoid2, (err, result) => {
                            if(isNaN(parseInt(result[0].tot2))){
                                var tot2 = 0;
                            }else{
                                var tot2 = parseInt(result[0].tot2); 
                            }
                            //puntos totales de cada equipo
                            var tot = tot1 + tot2;
                            connection.query('UPDATE camequ set camequpto = ' + parseInt(tot) + ' where equipoid = ' + req.body.equipoid2, (err, result) => {
                                console.log(err);
                                res.send(result);
                                connection.commit;
                            })
                        })   
                    }) 
                } 
            }
            //////////////////////////////////////////////////////////////

            //SI EMPATAN
            if(r===0){
                //puntos del partido en cada equipo
                connection.query('UPDATE partidos SET Equipo1Pun = 1, Equipo2Pun = 1  WHERE Partidosid = ' + 
                req.body.PartidosId, (err, result) => {
                    connection.commit;
                })

                //TOTAL PUNTOS EQUIPO 1 EN TABLA CAMEQU
                if (err){
                    console.log('Error en ingreso de resultados');
                }else{
                    connection.query('select sum(Equipo1Pun) as tot1 from partidos where equipoid1 = '  + req.body.equipoid1, (err, result) => {
                        if(isNaN(parseInt(result[0].tot1))){
                            var tot1 = 0;
                        }else{
                            var tot1 = parseInt(result[0].tot1); 
                        }
                        connection.query('select sum(Equipo2Pun) as tot2 from partidos where equipoid2 = '  + req.body.equipoid1, (err, result) => {
                            if(isNaN(parseInt(result[0].tot2))){
                                var tot2 = 0;
                            }else{
                                var tot2 = parseInt(result[0].tot2); 
                            }
                            //puntos totales de cada equipo
                            var tot = tot1 + tot2;
                            connection.query('UPDATE camequ set camequpto = ' + parseInt(tot) + ' where equipoid = ' + req.body.equipoid1, (err, result) => {
                                console.log(err);
                                connection.commit;
                            })
                        })   
                    }) 
                }  

                //TOTAL PUNTOS EQUIPO 2 EN TABLA CAMEQU
                if (err){
                    console.log('Error en ingreso de resultados');
                }else{
                    connection.query('select sum(Equipo1Pun) as tot1 from partidos where equipoid1 = '  + req.body.equipoid2, (err, result) => {
                        if(isNaN(parseInt(result[0].tot1))){
                            var tot1 = 0;
                        }else{
                            var tot1 = parseInt(result[0].tot1); 
                        }
                        connection.query('select sum(Equipo2Pun) as tot2 from partidos where equipoid2 = '  + req.body.equipoid2, (err, result) => {
                            if(isNaN(parseInt(result[0].tot2))){
                                var tot2 = 0;
                            }else{
                                var tot2 = parseInt(result[0].tot2); 
                            }
                            //puntos totales de cada equipo
                            var tot = tot1 + tot2;
                            connection.query('UPDATE camequ set camequpto = ' + parseInt(tot) + ' where equipoid = ' + req.body.equipoid2, (err, result) => {
                                console.log(err);
                                res.send(result);
                                connection.commit;
                            })
                        })   
                    }) 
                }  
            }////////////////////////////////////
        }
    })
};

//Borrar partido
ligaCtrl.deletepartido = async (req, res, next) => {
    connection.query("DELETE FROM partidos where Partidosid = " + req.params.par, (err, result) => {
    res.send(result);
    connection.commit;
})
};

//Borrar partido
ligaCtrl.deletepartidofot = async (req, res, next) => {
    connection.query("DELETE FROM camfecfotos where CamFecFotosId = " + req.params.id, (err, result) => {
    res.send(result);
    connection.commit;
})
};


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//JUGADORES EN PARTIDOS
//Consulta todos los jugadores de un partido
ligaCtrl.getjugpars = async (req, res, next) => {
    connection.query('SELECT jugpar.*, equipo.equiponom, campeonato.campeonatonom, jugador.jugadornom, partidos.PartidosFec FROM jugpar, partidos, equipo, campeonato, jugador where jugpar.PartidosId = partidos.PartidosId and jugador.equipoid = equipo.equipoid and partidos.campeonatoid = campeonato.campeonatoid  and jugpar.jugadorid = jugador.jugadorid and jugpar.PartidosId = ' + 
    req.params.par + ' order by equipo.equiponom', (err, result) => {
    res.send(result);
})
};

//Consulta un jugador de un partido
ligaCtrl.getjugpar = async (req, res, next) => {
    connection.query('SELECT * FROM jugpar where jugparid = ' + req.params.id, (err, result) => {
    res.send(result);
})
};

//Consulta todos los jugadores de un partido
ligaCtrl.getjugparsgol = async (req, res, next) => {
    connection.query('SELECT sum(jugpar.jugadorgol) jugadorgol, jugador.jugadornom, equipo.equiponom FROM jugpar, equipo, jugador, partidos where jugpar.jugadorid = jugador.jugadorid and jugador.equipoid = equipo.equipoid and jugpar.PartidosId = partidos.PartidosId and partidos.campeonatoid = ' + 
    req.params.cam + ' group by jugador.jugadorid order by jugadorgol desc', (err, result) => {
    res.send(result);
})
};

//Consulta estadisticas de un jugador total
ligaCtrl.getjugparestadistica = async (req, res, next) => {
    connection.query('SELECT count(jugpar.PartidosId) jugadorpar,  sum(jugpar.jugadormin) jugadormin,' + 
    'sum(jugpar.jugadorgol) jugadorgol, sum(jugpar.jugadorama) jugadorama,' +
    'sum(jugpar.jugadorroj) jugadorroj, 0 jugadorsus' +
    ' FROM ligadb.jugpar where jugadorid = ' +  req.params.ju + 
    ' group by jugpar.jugadorid ;', (err, result) => {
    res.send(result);
})
};

//Consulta goles de un jugador de un equipo en un partido
ligaCtrl.getjugpargolpar = async (req, res, next) => {
    if(req.params.nro === '1'){
        connection.query('SELECT jugador.jugadornom, jugpar.* ' +
        ' FROM jugpar, jugador, partidos' +
        ' Where jugpar.jugadorid = jugador.jugadorid and partidos.PartidosId = jugpar.PartidosId and' +
        ' partidos.equipoid1 = jugador.equipoid and jugpar.jugadorgol > 0 and jugpar.PartidosId = ' +  
        req.params.par + ' and partidos.equipoid1 = ' + req.params.eq, (err, result) => {
        res.send(result);
        })
    }else{
        connection.query('SELECT jugador.jugadornom, jugpar.* ' +
        ' FROM jugpar, jugador, partidos' +
        ' Where jugpar.jugadorid = jugador.jugadorid and partidos.PartidosId = jugpar.PartidosId and' +
        ' partidos.equipoid2 = jugador.equipoid and jugpar.jugadorgol > 0 and jugpar.PartidosId = ' +  
        req.params.par + ' and partidos.equipoid2 = ' + req.params.eq, (err, result) => {
        res.send(result);
        })
    }
};

//Consulta amarillas de un jugador de un equipo en un partido
ligaCtrl.getjugparamapar = async (req, res, next) => {
    if(req.params.nro === '1'){
        connection.query('SELECT jugador.jugadornom, jugpar.* ' +
        ' FROM jugpar, jugador, partidos' +
        ' Where jugpar.jugadorid = jugador.jugadorid and partidos.PartidosId = jugpar.PartidosId and' +
        ' partidos.equipoid1 = jugador.equipoid and jugpar.jugadorama > 0 and jugpar.PartidosId = ' +  
        req.params.par + ' and partidos.equipoid1 = ' + req.params.eq, (err, result) => {
        res.send(result);
        })
    }else{
        connection.query('SELECT jugador.jugadornom, jugpar.* ' +
        ' FROM jugpar, jugador, partidos' +
        ' Where jugpar.jugadorid = jugador.jugadorid and partidos.PartidosId = jugpar.PartidosId and' +
        ' partidos.equipoid2 = jugador.equipoid and jugpar.jugadorama > 0 and jugpar.PartidosId = ' +  
        req.params.par + ' and partidos.equipoid2 = ' + req.params.eq, (err, result) => {
        res.send(result);
        })
    }
};

//Consulta rojas de un jugador de un equipo en un partido
ligaCtrl.getjugparrojpar = async (req, res, next) => {
    if(req.params.nro === '1'){
        connection.query('SELECT jugador.jugadornom, jugpar.* ' +
        ' FROM jugpar, jugador, partidos' +
        ' Where jugpar.jugadorid = jugador.jugadorid and partidos.PartidosId = jugpar.PartidosId and' +
        ' partidos.equipoid1 = jugador.equipoid and jugpar.jugadorroj > 0 and jugpar.PartidosId = ' +  
        req.params.par + ' and partidos.equipoid1 = ' + req.params.eq, (err, result) => {
        res.send(result);
        })
    }else{
        connection.query('SELECT jugador.jugadornom, jugpar.* ' +
        ' FROM jugpar, jugador, partidos' +
        ' Where jugpar.jugadorid = jugador.jugadorid and partidos.PartidosId = jugpar.PartidosId and' +
        ' partidos.equipoid2 = jugador.equipoid and jugpar.jugadorroj > 0 and jugpar.PartidosId = ' +  
        req.params.par + ' and partidos.equipoid2 = ' + req.params.eq, (err, result) => {
        res.send(result);
        })
    }

};

//Consulta tarjetas de un jugador en un campeonato
ligaCtrl.getjugparsamaroj = async (req, res, next) => {
    connection.query('SELECT sum(jugadorama) jugadorama FROM jugpar, jugador where jugpar.jugadorid = jugador.jugadorid and jugador.equipoid = ' + req.params.eq, (err, result) => {
        if(isNaN(parseInt(result[0].jugadorama))){
            var tot1 = 0;
        }else{
            var tot1 = parseInt(result[0].jugadorama); 
        }
        connection.query('SELECT sum(jugadorroj) jugadorroj, ' + tot1 + ' jugadorama FROM jugpar, jugador where jugpar.jugadorid = jugador.jugadorid and jugador.equipoid = ' + req.params.eq, (err, result) => {
            res.send(result);
        })
    })
};

//Ingreso de todos los jugadores por defecto en partido
ligaCtrl.createjugpartot = async (req, res, next) => {
    connection.query('INSERT INTO jugpar (PartidosId, jugadorid) values(' + 
    req.body.PartidosId + ', ' +  req.body.jugadorid + ')', (err, result) => {
        console.log(err); 
        res.json({status: 'Jugador Ingresado en el Partido'});
    });
    connection.commit;
};

//Inserto jugador en partido
ligaCtrl.createjugpar = async (req, res, next) => {
    connection.query('INSERT INTO jugpar (PartidosId, jugadorid, jugadormin, jugadorama, jugadorroj, jugadorgol, jugadorobs) values(' + 
    req.body.PartidosId + ', ' +  req.body.jugadorid + ',' + req.body.jugadormin + ',' + req.body.jugadorama + ', ' + 
    req.body.jugadorroj + ', ' + req.body.jugadorgol + ', "' + req.body.jugadorobs + '" )', (err, result) => {
        console.log(err); 
        res.json({status: 'Jugador Ingresado en el Partido'});
    });
    connection.commit;
};

//Editar jugador de un partido
ligaCtrl.editjugpar = async (req, res, next) => {
    connection.query('UPDATE jugpar SET PartidosId = "' + req.body.PartidosId + '", jugadorid = ' + req.body.jugadorid + 
    + ', jugadormin = "' + req.body.jugadormin + '", jugadorama = "' + req.body.jugadorama + 
    '", jugadorroj = "' + req.body.jugadorroj + '", jugadorgol = "' + req.body.jugadorgol + 
    '", jugadorobs = "' + req.body.jugadorobs + '" WHERE jugparid = ' + req.body.jugparid, (err, result) => {
    res.send(result);
    connection.commit;
})
};

//Borrar jugador de un partido
ligaCtrl.deletejugpar = async (req, res, next) => {
    connection.query("DELETE FROM jugpar where jugparid = " + req.params.id, (err, result) => {
    res.send(result);
    connection.commit;
})
};


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//PAGO EQUIPO
//Consulta pagos de un  equipo
ligaCtrl.getpagoequipo = async (req, res, next) => {
    connection.query('SELECT pe.*, eq.equiponom FROM pagoequipo as pe, equipo as eq Where pe.equipoid = eq.equipoid and pe.equipoid = ' +
    req.params.eq + ' order by pagoequipoid desc limit 100', (err, result) => {
    res.send(result);
})
};

//Consulta pagos de todos los equipos
ligaCtrl.getpagoequipos = async (req, res, next) => {
    connection.query('SELECT pe.*, eq.equiponom FROM pagoequipo as pe, equipo as eq Where pe.equipoid = eq.equipoid order by pe.pagoequipoid desc limit 100', (err, result) => {
    res.send(result);
})
};

//Inserto pago equipo
ligaCtrl.createpagoequipo = async (req, res, next) => {
    connection.query('INSERT INTO pagoequipo(equipoid, pagoequipofactura, pagoequipofec, pagoequipomedio, pagoequipototal, pagoequipoobs, UsuariosId, pagoequiporef) values(' + 
    req.body.equipoid + ', "' +  req.body.pagoequipofactura + '","' + req.body.pagoequipofec + '","' + req.body.pagoequipomedio + '", ' + 
    req.body.pagoequipototal + ', "' + req.body.pagoequipoobs + '", ' +  req.body.UsuariosId + ', "' +  req.body.pagoequiporef + '")', (err, result) => {
        console.log(err); 
        res.json({status: 'Pago Ingresado'});
    });
    connection.commit;
};

//Editar pago equipo
ligaCtrl.editpagoequipo = async (req, res, next) => {
    connection.query('UPDATE pagoequipo SET equipoid = ' + req.body.equipoid + ', UsuariosId = ' + 
    req.body.UsuariosId + ', pagoequipofec = "' + req.body.pagoequipofec + '", pagoequipomedio = "' + 
    req.body.pagoequipomedio + '", pagoequipototal = ' + req.body.pagoequipototal + 
    ', pagoequipoobs = ' + req.body.pagoequipoobs, (err, result) => {
    res.send(result);
    connection.commit;
})
};

//Borrar pago equipo
ligaCtrl.deletepagoequipo = async (req, res, next) => {
    connection.query("DELETE FROM pagoequipo where pagoequipoid = " + req.params.id, (err, result) => {
    res.send(result);
    connection.commit;
})
};


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//NOTICIAS
//Consulta noticias
ligaCtrl.getnoticias = async (req, res, next) => {
    connection.query('SELECT noticias.*, equipo.equiponom FROM noticias, equipo where noticias.equipoid = equipo.equipoid order by noticiasid desc Limit 10', (err, result) => {
    res.send(result);
})
};

//Consulta una noticia
ligaCtrl.getnoticiaid = async (req, res, next) => {
    connection.query('SELECT * FROM noticias where noticiasid = '+ req.params.not, (err, result) => {
    res.send(result);
})
};

//Consulta noticias de un equipo
ligaCtrl.getnoticiaeq = async (req, res, next) => {
    connection.query('SELECT * FROM noticias where equipoid = '+ req.params.eq + ' Limit 10', (err, result) => {
    res.send(result);
})
};

//Inserto noticias
ligaCtrl.createnoticia = async (req, res, next) => {
    connection.query('INSERT INTO noticias (noticiasfec, UsuariosAli, equipoid, noticiasdet, noticiascab, noticiasfot, noticiastex) values("' + 
    req.body.noticiasfec + '", "' +  req.body.UsuariosAli + '",' + req.body.equipoid + ',"' + req.body.noticiasdet + '", "' + 
    req.body.noticiascab + '", "' + req.body.noticiasfot  + '", "' + req.body.noticiastex + '")', (err, result) => {
        console.log(err); 
        res.json({status: 'Jugador Ingresado'});
    });
    connection.commit;
};

//Editar noticia
ligaCtrl.editnoticia = async (req, res, next) => {
    if(req.body.noticiasfot === ''){
        connection.query('UPDATE noticias SET noticiasfec = "' + req.body.noticiasfec + '", UsuariosAli = "' + req.body.UsuariosAli + 
        '", equipoid = ' + req.body.equipoid + ', noticiasdet = "' + req.body.noticiasdet + 
        '", noticiascab = "' + req.body.noticiascab + '", noticiastex = "' + req.body.noticiastex + 
        '" Where noticiasid = ' + req.body.noticiasid, (err, result) => {
        console.log(err);
        res.send(result);
        connection.commit;
    })
    }else{
        connection.query('UPDATE noticias SET noticiasfec = "' + req.body.noticiasfec + '", UsuariosAli = "' + req.body.UsuariosAli + 
        '", equipoid = ' + req.body.equipoid + ', noticiasdet = "' + req.body.noticiasdet + 
        '", noticiascab = "' + req.body.noticiascab + '", noticiasfot = "' + req.body.noticiasfot + 
        '", noticiastex = "' + req.body.noticiastex + '" where noticiasid = ' + req.body.noticiasid, (err, result) => {
        console.log(err);
        res.send(result);
        connection.commit;
        })
    }
};

//Borrar noticia
ligaCtrl.deletenoticia = async (req, res, next) => {
    connection.query("DELETE FROM noticias where noticiasid = " + req.params.id, (err, result) => {
    res.send(result);
    connection.commit;
})
};



module.exports = ligaCtrl;