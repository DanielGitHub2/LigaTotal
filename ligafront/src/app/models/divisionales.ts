export class Divisional {

    constructor(modalidadid = 0, modalidadnom = '', zonaid = 0, zonanom = '', divisionalid = 0, 
    divisionalnom = '', divisionalimp = 0) {
        this.modalidadid = modalidadid;
        this.modalidadnom = modalidadnom;
        this.zonaid = zonaid;
        this.zonanom = zonanom;
        this.divisionalid = divisionalid;
        this.divisionalnom = divisionalnom;
        this.divisionalimp = divisionalimp;
    }
    modalidadid: number;
    modalidadnom: string;
    zonaid: number;
    zonanom: string;
    divisionalid: number;
    divisionalnom: string;
    divisionalimp: number;
}