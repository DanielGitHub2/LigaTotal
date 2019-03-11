export class Jugpar {

    constructor(jugparid = 0, PartidosId = 0, equipoid = 0, equiponom = '', jugadorid = 0, jugadornom = '', 
    jugadormin = 0, jugadorama = 0, jugadorroj = 0, jugadorgol = 0, jugadorobs = '', campeonatonom = '', 
    PartidosFec = '', campeonatoid = 0) {
        this.jugparid = jugparid;
        this.PartidosId = PartidosId;
        this.campeonatoid = campeonatoid;
        this.campeonatonom = campeonatonom;
        this.PartidosFec = PartidosFec;
        this.equipoid = equipoid;
        this.equiponom = equiponom;
        this.jugadorid = jugadorid;
        this.jugadornom = jugadornom;
        this.jugadormin = jugadormin;
        this.jugadorama = jugadorama;
        this.jugadorroj = jugadorroj;
        this.jugadorgol = jugadorgol;
        this.jugadorobs = jugadorobs;
    }

    jugparid: number;
    PartidosId: number;
    equipoid: number;
    equiponom:string;
    jugadorid: number;
    jugadornom: string;
    jugadormin:number;
    jugadorama: number;
    jugadorroj: number;
    jugadorgol: number;
    jugadorobs: string;
    campeonatoid: number;
    campeonatonom: string;
    PartidosFec: string;
}