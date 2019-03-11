export class Usuario {

    constructor(usuariosid=0, usuariosnom='', usuariospas='', usuariosper=0, usuariosmai='', usuariosali='',usuariostel=0, equipoid = 0) {
        this.usuariosid  = usuariosid;
        this.usuariosnom = usuariosnom;
        this.usuariospas = usuariospas;
        this.usuariosper = usuariosper;
        this.usuariosmai = usuariosmai;
        this.usuariosali = usuariosali;
        this.usuariostel = usuariostel;
        this.equipoid = equipoid;
    }
    usuariosid: number;
    usuariosnom: string;
    usuariospas: string;
    usuariosper: number;
    usuariosmai: string;
    usuariosali: string;
    usuariostel: number;
    equipoid: number;
}