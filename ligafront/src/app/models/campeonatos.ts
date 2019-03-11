export class Campeonato {

    constructor(campeonatoid = 0, campeonatonom = '', modalidadid = 0, modalidadnom = '',
     zonaid = 0, zonanom = '', divisionalid = 0, divisionalnom = '', campeonatoprecio = 0,
     campeonatopremio = '', campeonatoequipos = 0, campeonatoestado = '', 
     campeonatofecini = '', campeonatofecfin = '') {
        this.campeonatoid = campeonatoid;
        this.campeonatonom = campeonatonom;
        this.modalidadid = modalidadid;
        this.modalidadnom = modalidadnom;
        this.zonaid = zonaid;
        this.zonanom = zonanom;
        this.divisionalid = divisionalid;
        this.divisionalnom = divisionalnom;
        this.campeonatoprecio = campeonatoprecio;
        this.campeonatopremio = campeonatopremio;
        this.campeonatoequipos = campeonatoequipos;
        this.campeonatoestado = campeonatoestado;
        this.campeonatofecini = campeonatofecini;
        this.campeonatofecfin = campeonatofecfin;
    }

    campeonatoid: number;
    campeonatonom: string;
    modalidadid: number;
    modalidadnom: string;
    zonaid: number;
    zonanom: string;
    divisionalid: number;
    divisionalnom: string;
    campeonatoprecio: number;
    campeonatopremio: string;
    campeonatoequipos: number;
    campeonatoestado: string;
    campeonatofecini: string;
    campeonatofecfin: string;
}