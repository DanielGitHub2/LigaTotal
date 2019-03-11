export class Pagoequipo {

    constructor(pagoequipoid = 0, equipoid = 0, pagoequipofactura = '', pagoequipofec = '', pagoequipomedio = '', 
    pagoequipototal = 0, pagoequipoobs = '', equiponom = '', UsuariosAli = '', pagoequiporef = '') {
        this.pagoequipoid = pagoequipoid;
        this.equipoid = equipoid;
        this.equiponom = equiponom;
        this.pagoequipofactura = pagoequipofactura;
        this.pagoequipofec = pagoequipofec;
        this.pagoequipomedio = pagoequipomedio;
        this.pagoequipototal = pagoequipototal;
        this.pagoequipoobs = pagoequipoobs;
        this.UsuariosAli = UsuariosAli;
        this.pagoequiporef = pagoequiporef;
    }

    pagoequipoid: number;
    equipoid: number;
    equiponom: string;
    pagoequipofactura: string;
    pagoequipofec: string;
    pagoequipomedio: string;
    pagoequipototal: number;
    pagoequipoobs: string;
    UsuariosAli: string;
    pagoequiporef: string;
}