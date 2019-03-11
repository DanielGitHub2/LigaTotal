export class Equipo {

    constructor(equipoid = 0, equiponom = '', equipoobs = '', equipofot = '', equipocanjug = 0, 
    equipotelcon = '', equipomailcon = '', equipofecins = '', equipoest = '', equipoesc = '', 
    zonanom = '', divisionalnom = '', camequpto = 0) {
        this.equipoid = equipoid;
        this.equiponom = equiponom;
        this.equipoobs = equipoobs;
        this.equipofot = equipofot;
        this.equipocanjug = equipocanjug;
        this.equipotelcon = equipotelcon;
        this.equipomailcon = equipomailcon;
        this.equipofecins = equipofecins;
        this.equipoest = equipoest;
        this.equipoesc = equipoesc;
        this.zonanom = zonanom;
        this.divisionalnom = divisionalnom;
        this.camequpto = camequpto;
    }
    equipoid: number;
    equiponom: string;
    equipoobs: string;
    equipofot: string;
    equipocanjug: number;
    equipotelcon: string;
    equipomailcon: string;
    equipofecins: string;
    equipoest: string;
    equipoesc: string;
    zonanom: string;
    divisionalnom: string;
    camequpto: number;
}