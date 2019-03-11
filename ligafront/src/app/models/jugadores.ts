export class Jugador {

    constructor(jugadorid = 0, equipoid = 0, jugadornom='', jugadorci = '', equiponom = '', jugadoremail = '', 
    jugadortel = '', jugadordir  = '', jugadorfecnac  = '', jugadorfecins  = '', jugadornro  = 0, 
    jugadorpos  = '', jugadorestado = '', jugadorfot = '') {
        this.jugadorid = jugadorid;
        this.equipoid = equipoid;
        this.equiponom = equiponom;
        this.jugadornom = jugadornom;
        this.jugadorci = jugadorci;
        this.jugadoremail = jugadoremail;
        this.jugadortel = jugadortel;
        this.jugadordir  = jugadordir;
        this.jugadorfecnac  = jugadorfecnac;
        this.jugadorfecins  = jugadorfecins;
        this.jugadornro  = jugadornro;
        this.jugadorpos  = jugadorpos,
        this.jugadorestado = jugadorestado;
        this.jugadorfot = jugadorfot;
    }

    jugadorid: number;
    equipoid: number;
    jugadornom: string;
    equiponom: string;
    jugadorci:string;
    jugadoremail:string;
    jugadortel:string;
    jugadordir:string;
    jugadorfecnac:string;
    jugadorfecins:string;
    jugadornro:number;
    jugadorpos:string;
    jugadorestado:string;
    jugadorfot: string;
}