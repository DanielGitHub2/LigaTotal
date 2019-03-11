export class Modalidad {

    constructor(modalidadid = 0, zonaid = 0, modalidadnom = '', zonanom='') {
        this.modalidadid = modalidadid;
        this.zonaid = zonaid;
        this.zonanom = zonanom;
        this.modalidadnom = modalidadnom;
    }
    modalidadid: number;
    zonaid: number;
    modalidadnom: string;
    zonanom: string;
}