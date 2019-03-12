-- MySQL dump 10.13  Distrib 8.0.11, for Win64 (x86_64)
--
-- Host: localhost    Database: ligadb
-- ------------------------------------------------------
-- Server version	8.0.11

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `camequ`
--

DROP TABLE IF EXISTS `camequ`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `camequ` (
  `camequid` int(11) NOT NULL AUTO_INCREMENT,
  `campeonatoid` int(11) NOT NULL,
  `equipoid` int(11) NOT NULL,
  `equpag` int(11) DEFAULT NULL COMMENT 'Pago el Equipo',
  `equcancuo` int(2) DEFAULT NULL COMMENT 'Cantidad de cuotas del pago',
  `equmetpag` varchar(100) DEFAULT NULL COMMENT 'Metodo de pago',
  `equdeuda` int(9) DEFAULT NULL COMMENT 'Deuda con que cuenta',
  `equvendeu` varchar(10) DEFAULT NULL COMMENT 'Fecha vencimiento de deuda',
  `equsus` int(11) DEFAULT NULL COMMENT 'Equipo Suspendido cuantos partidos',
  `camequobs` varchar(500) DEFAULT NULL COMMENT 'Observaciones',
  `camequpto` int(11) DEFAULT NULL COMMENT 'Puntos del equipo en el campeonato',
  PRIMARY KEY (`camequid`),
  KEY `ICamEqu_idx` (`campeonatoid`),
  KEY `Equipo_idx` (`equipoid`),
  CONSTRAINT `FCampeonato` FOREIGN KEY (`campeonatoid`) REFERENCES `campeonato` (`campeonatoid`),
  CONSTRAINT `FEquipo` FOREIGN KEY (`equipoid`) REFERENCES `equipo` (`equipoid`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='Equipos de los Campeonatos';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `camequ`
--

LOCK TABLES `camequ` WRITE;
/*!40000 ALTER TABLE `camequ` DISABLE KEYS */;
/*!40000 ALTER TABLE `camequ` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `camfecfotos`
--

DROP TABLE IF EXISTS `camfecfotos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `camfecfotos` (
  `CamFecFotosId` int(11) NOT NULL AUTO_INCREMENT,
  `campeonatoid` int(11) DEFAULT NULL COMMENT 'Cmapeonato de las fotos',
  `PartidosId` int(11) DEFAULT NULL COMMENT 'Partido y fecha de las fotos',
  `CamFecFotosFot` mediumtext COMMENT 'Foto del campeonato/partido',
  PRIMARY KEY (`CamFecFotosId`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `camfecfotos`
--

LOCK TABLES `camfecfotos` WRITE;
/*!40000 ALTER TABLE `camfecfotos` DISABLE KEYS */;
/*!40000 ALTER TABLE `camfecfotos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `campeonato`
--

DROP TABLE IF EXISTS `campeonato`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `campeonato` (
  `campeonatoid` int(11) NOT NULL AUTO_INCREMENT,
  `modalidadid` int(11) NOT NULL,
  `zonaid` int(11) NOT NULL,
  `divisionalid` int(11) NOT NULL,
  `campeonatonom` varchar(100) NOT NULL,
  `campeonatoprecio` int(7) DEFAULT NULL,
  `campeonatopremio` varchar(200) DEFAULT NULL,
  `campeonatoequipos` int(11) DEFAULT NULL,
  `campeonatoestado` varchar(15) DEFAULT NULL,
  `campeonatofecini` varchar(10) DEFAULT NULL,
  `campeonatofecfin` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`campeonatoid`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='Campeonatos de la Liga';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `campeonato`
--

LOCK TABLES `campeonato` WRITE;
/*!40000 ALTER TABLE `campeonato` DISABLE KEYS */;
/*!40000 ALTER TABLE `campeonato` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `divisional`
--

DROP TABLE IF EXISTS `divisional`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `divisional` (
  `divisionalid` int(11) NOT NULL AUTO_INCREMENT,
  `divisionalnom` varchar(100) NOT NULL,
  `modalidadId` int(11) NOT NULL,
  `zonaId` int(11) NOT NULL,
  `divisionalimp` int(11) DEFAULT NULL COMMENT 'Posicion de la Divisional, ej: de la 3 se sube a las 2, etc.',
  PRIMARY KEY (`divisionalid`),
  KEY `ModalidadId_idx` (`modalidadId`,`zonaId`) /*!80000 INVISIBLE */
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `divisional`
--

LOCK TABLES `divisional` WRITE;
/*!40000 ALTER TABLE `divisional` DISABLE KEYS */;
/*!40000 ALTER TABLE `divisional` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `equipo`
--

DROP TABLE IF EXISTS `equipo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `equipo` (
  `equipoid` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Id',
  `equiponom` varchar(100) NOT NULL COMMENT 'Nombre',
  `equipoobs` varchar(500) DEFAULT NULL COMMENT 'Observaciones',
  `equipofot` mediumtext COMMENT 'Foto',
  `equipocanjug` int(3) DEFAULT NULL COMMENT 'Cantidad de jugadores',
  `equipotelcon` varchar(45) DEFAULT NULL COMMENT 'Telefono de contacto',
  `equipomailcon` varchar(100) NOT NULL COMMENT 'Mail de contacto',
  `equipofecins` varchar(10) DEFAULT NULL COMMENT 'Fecha de inscripcion',
  `equipoest` varchar(45) DEFAULT NULL COMMENT 'Estado (Activo, suspendido, dado de baja, etc)',
  `equipoesc` mediumtext COMMENT 'Escudo',
  PRIMARY KEY (`equipoid`)
) ENGINE=InnoDB AUTO_INCREMENT=45 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `equipo`
--

LOCK TABLES `equipo` WRITE;
/*!40000 ALTER TABLE `equipo` DISABLE KEYS */;
/*!40000 ALTER TABLE `equipo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `equipoimg`
--

DROP TABLE IF EXISTS `equipoimg`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `equipoimg` (
  `equipoimgid` int(11) NOT NULL AUTO_INCREMENT,
  `equipoid` int(11) NOT NULL,
  `equipofot` longblob NOT NULL,
  PRIMARY KEY (`equipoimgid`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `equipoimg`
--

LOCK TABLES `equipoimg` WRITE;
/*!40000 ALTER TABLE `equipoimg` DISABLE KEYS */;
/*!40000 ALTER TABLE `equipoimg` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `jugador`
--

DROP TABLE IF EXISTS `jugador`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `jugador` (
  `jugadorid` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Id',
  `jugadornom` varchar(100) NOT NULL COMMENT 'Nombre',
  `equipoid` int(11) NOT NULL COMMENT 'Equipo',
  `jugadoremail` varchar(100) DEFAULT NULL COMMENT 'eMail',
  `jugadortel` varchar(20) DEFAULT NULL COMMENT 'Telefono',
  `jugadordir` varchar(100) DEFAULT NULL COMMENT 'Direccion',
  `jugadorfecnac` varchar(10) DEFAULT NULL COMMENT 'Fecha de nacimiento',
  `jugadorfecins` varchar(10) DEFAULT NULL COMMENT 'Fecha de inscripcion',
  `jugadornro` int(11) DEFAULT NULL COMMENT 'Nro',
  `jugadorpos` varchar(45) DEFAULT NULL COMMENT 'Posicion',
  `jugadorestado` varchar(15) DEFAULT NULL COMMENT 'Estado',
  `jugadorci` varchar(15) DEFAULT NULL COMMENT 'Cedula',
  `jugadorfot` mediumtext COMMENT 'Foto',
  PRIMARY KEY (`jugadorid`),
  KEY `IEquipo01_idx` (`equipoid`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='Jugadores de los Equipos';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `jugador`
--

LOCK TABLES `jugador` WRITE;
/*!40000 ALTER TABLE `jugador` DISABLE KEYS */;
/*!40000 ALTER TABLE `jugador` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `jugpar`
--

DROP TABLE IF EXISTS `jugpar`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `jugpar` (
  `jugparid` int(11) NOT NULL AUTO_INCREMENT,
  `PartidosId` int(11) NOT NULL,
  `jugadorid` int(11) NOT NULL,
  `jugadormin` int(11) DEFAULT NULL,
  `jugadorama` int(11) DEFAULT NULL,
  `jugadorroj` int(11) DEFAULT NULL,
  `jugadorgol` int(11) DEFAULT NULL,
  `jugadorobs` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`jugparid`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `jugpar`
--

LOCK TABLES `jugpar` WRITE;
/*!40000 ALTER TABLE `jugpar` DISABLE KEYS */;
/*!40000 ALTER TABLE `jugpar` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `modalidad`
--

DROP TABLE IF EXISTS `modalidad`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `modalidad` (
  `modalidadid` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Id Modalidad',
  `zonaid` int(11) NOT NULL COMMENT 'Id Zona',
  `modalidadnom` varchar(100) NOT NULL COMMENT 'Nombre Modalidad',
  PRIMARY KEY (`modalidadid`,`zonaid`),
  KEY `zonaid_idx` (`zonaid`),
  CONSTRAINT `zonaid` FOREIGN KEY (`zonaid`) REFERENCES `zona` (`zonaid`)
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `modalidad`
--

LOCK TABLES `modalidad` WRITE;
/*!40000 ALTER TABLE `modalidad` DISABLE KEYS */;
/*!40000 ALTER TABLE `modalidad` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `noticias`
--

DROP TABLE IF EXISTS `noticias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `noticias` (
  `noticiasid` int(11) NOT NULL AUTO_INCREMENT,
  `noticiasfec` varchar(10) DEFAULT NULL COMMENT 'Fecha',
  `UsuariosAli` int(11) DEFAULT NULL COMMENT 'Usuario que ingresa la noticia',
  `equipoid` int(11) DEFAULT NULL COMMENT 'Equipo de la noticia',
  `noticiasdet` varchar(300) NOT NULL COMMENT 'Detalle de la Noticia',
  `noticiascab` varchar(30) DEFAULT NULL COMMENT 'Cabezal noticia',
  `noticiasfot` mediumtext COMMENT 'Foto',
  `noticiastex` varchar(2000) DEFAULT NULL,
  PRIMARY KEY (`noticiasid`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `noticias`
--

LOCK TABLES `noticias` WRITE;
/*!40000 ALTER TABLE `noticias` DISABLE KEYS */;
/*!40000 ALTER TABLE `noticias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pagoequipo`
--

DROP TABLE IF EXISTS `pagoequipo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `pagoequipo` (
  `pagoequipoid` int(11) NOT NULL AUTO_INCREMENT,
  `equipoid` varchar(45) DEFAULT NULL COMMENT 'Equipo que paga',
  `pagoequipofactura` mediumtext COMMENT 'Foto de factura',
  `pagoequipofec` varchar(10) DEFAULT NULL COMMENT 'Fecha de pago',
  `pagoequipomedio` varchar(100) DEFAULT NULL COMMENT 'Medio de pago',
  `pagoequipototal` int(11) DEFAULT NULL COMMENT 'Total abonado',
  `pagoequipoobs` varchar(200) DEFAULT NULL COMMENT 'Observaciones',
  `UsuariosId` int(11) DEFAULT NULL COMMENT 'Usuario que ingresÃ³ el pago',
  `pagoequiporef` varchar(100) DEFAULT NULL COMMENT 'Referencia del talon de pago que se pueda vincular en BROU',
  PRIMARY KEY (`pagoequipoid`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pagoequipo`
--

LOCK TABLES `pagoequipo` WRITE;
/*!40000 ALTER TABLE `pagoequipo` DISABLE KEYS */;
/*!40000 ALTER TABLE `pagoequipo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `parametros`
--

DROP TABLE IF EXISTS `parametros`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `parametros` (
  `parametrosid` int(11) NOT NULL AUTO_INCREMENT,
  `mailadm` varchar(100) DEFAULT NULL COMMENT 'eMail administrador',
  PRIMARY KEY (`parametrosid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `parametros`
--

LOCK TABLES `parametros` WRITE;
/*!40000 ALTER TABLE `parametros` DISABLE KEYS */;
/*!40000 ALTER TABLE `parametros` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `partidos`
--

DROP TABLE IF EXISTS `partidos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `partidos` (
  `PartidosId` int(11) NOT NULL AUTO_INCREMENT,
  `campeonatoid` int(11) NOT NULL,
  `equipoid1` int(11) NOT NULL,
  `equipoid2` int(11) NOT NULL,
  `PartidosFec` varchar(10) NOT NULL COMMENT 'Fecha del partido',
  `PartidosHor` varchar(5) NOT NULL COMMENT 'Hora del partido',
  `PartidosCan` varchar(100) NOT NULL COMMENT 'Cancha del partido',
  `Equipo1Res` int(2) DEFAULT NULL COMMENT 'Resultado equipo 1',
  `Equipo2Res` int(2) DEFAULT NULL COMMENT 'Resultado equipo 2',
  `PartidosObs` varchar(200) DEFAULT NULL COMMENT 'Observaciones del partido',
  `PartidosFecJug` int(11) DEFAULT NULL COMMENT 'Fecha en que se juega, 1ra, 2da, etc.',
  `PartidosComplejo` varchar(100) DEFAULT NULL COMMENT 'Complejo en que se juega',
  `Equipo1Pun` int(11) DEFAULT NULL,
  `Equipo2Pun` int(11) DEFAULT NULL,
  `PartidosIng` int(1) DEFAULT NULL COMMENT 'Si el resultado del partido ya se ingreso',
  PRIMARY KEY (`PartidosId`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `partidos`
--

LOCK TABLES `partidos` WRITE;
/*!40000 ALTER TABLE `partidos` DISABLE KEYS */;
/*!40000 ALTER TABLE `partidos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `usuarios` (
  `UsuariosId` int(11) NOT NULL AUTO_INCREMENT,
  `UsuariosNom` varchar(100) NOT NULL,
  `UsuariosPas` varchar(8) NOT NULL COMMENT 'Password',
  `UsuariosPer` int(2) NOT NULL COMMENT 'Perfil',
  `UsuariosMai` varchar(100) DEFAULT NULL COMMENT 'eMail',
  `UsuariosAli` varchar(20) NOT NULL COMMENT 'Alias',
  `UsuariosTel` varchar(25) DEFAULT NULL COMMENT 'Telefono',
  `equipoid` int(11) DEFAULT NULL,
  PRIMARY KEY (`UsuariosId`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='Usuarios del Sistema LigaTotal';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'Administrador','Liga01',1,'','Admin','',0);
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `zona`
--

DROP TABLE IF EXISTS `zona`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `zona` (
  `zonaid` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Id Zona',
  `zonanom` varchar(100) NOT NULL COMMENT 'Nombre Zona',
  PRIMARY KEY (`zonaid`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `zona`
--

LOCK TABLES `zona` WRITE;
/*!40000 ALTER TABLE `zona` DISABLE KEYS */;
/*!40000 ALTER TABLE `zona` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-03-11 20:22:48
