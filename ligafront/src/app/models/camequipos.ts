export class CamEquipo {

    constructor(camequid = 0, compeonatoId = 0, equipoid = 0, equiponom = '', equipofecins = '', 
    equsus = 0, equpag = 0, camequobs = '', equdeuda = 0, equvendeu = '', equmetpag = '', 
    equcancuo = 0, camequpto = 0) {
        this.camequid = camequid;
        this.compeonatoId = compeonatoId;
        this.equipoid = equipoid;
        this.equiponom = equiponom;
        this.equipofecins = equipofecins;
        this.equpag = equpag;
        this.equcancuo = equcancuo
        this.equmetpag = equmetpag;
        this.equdeuda = equdeuda;
        this.equvendeu = equvendeu;
        this.equsus = equsus;
        this.camequobs = camequobs;
        this.camequpto = camequpto;
    }
    camequid:number;
    compeonatoId:number;
    equipoid:number;
    equiponom:string;
    equipofecins: string;
    equsus:number;
    equpag:number;
    equcancuo: number;
    camequobs:string;    
    equdeuda:number;
    equvendeu:string;  
    equmetpag:string;   
    camequpto:number;
}