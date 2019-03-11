export class Partido {

    constructor(Partidosid = 0, campeonatoid = 0, campeonatonom = '',  equipoid1 = 0, equiponom1 = '', equipoid2 = 0, equiponom2 = '', 
    PartidosFec = '', PartidosHor = '', PartidosCan = '', Equipo1Res = 0, Equipo2Res = 0, PartidosObs = '', PartidosComplejo = '',
    PartidosFecJug = 0, Equipo1Pun = 0, Equipo2Pun = 0, equipoesc1 = '', equipoesc2 = '') {
        this.Partidosid = Partidosid;
        this.campeonatoid = campeonatoid;
        this.campeonatonom = campeonatonom;
        this.equipoid1 = equipoid1;
        this.equiponom1 = equiponom1;
        this.equipoid2 = equipoid2;
        this.equiponom2 = equiponom2;
        this.PartidosFec = PartidosFec;
        this.PartidosHor = PartidosHor;
        this.PartidosCan = PartidosCan;
        this.Equipo1Res = Equipo1Res;
        this.Equipo2Res = Equipo2Res;
        this.PartidosObs = PartidosObs;
        this.PartidosComplejo = PartidosComplejo;
        this.PartidosFecJug = PartidosFecJug;
        this.Equipo1Pun = Equipo1Pun;
        this.Equipo2Pun = Equipo2Pun;
        this.equipoesc1 = equipoesc1;
        this.equipoesc2 = equipoesc2;
    }

    Partidosid: number;
    campeonatoid: number;
    campeonatonom: string;
    equipoid1: number;
    equiponom1:string;
    equipoid2: number;
    equiponom2:string;
    PartidosFec: string;
    PartidosHor: string;
    PartidosCan: string;
    Equipo1Res: number;
    Equipo2Res: number;
    PartidosObs: string;
    PartidosComplejo: string;
    PartidosFecJug: number;
    Equipo1Pun:number;
    Equipo2Pun: number; 
    equipoesc1:string;
    equipoesc2:string;
}