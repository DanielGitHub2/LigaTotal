export class EquipoClasificacion {

    constructor(equipoid= 0, equiponom = '', pj = 0, pg = 0, pe = 0, pp = 0, gf = 0, gc = 0, 
    ptos = 0, difgol = 0, equipoesc = '') {
        this.equipoid = equipoid;
        this.equiponom = equiponom;
        this.pj = pj;
        this.pg = pg;
        this.pe = pe;
        this.pp = pp;
        this.gf = gf;
        this.gc = gc;
        this.ptos = ptos;
        this.difgol = difgol;
        this.equipoesc = equipoesc;
    }

    equipoid: number;
    equiponom: string;
    pj: number;
    pg: number;
    pe: number;
    pp: number;
    gf: number;
    gc: number;
    ptos: number;
    difgol:number;
    equipoesc:string;
}