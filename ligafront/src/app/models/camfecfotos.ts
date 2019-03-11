export class CamFecFotos {

    constructor(campeonatoid = 0, campeonatonom = '', PartidosId = 0, PartidosFec = '',
     CamFecFotosFot = '') {
        this.campeonatoid = campeonatoid;
        this.campeonatonom = campeonatonom;
        this.PartidosId = PartidosId;
        this.PartidosFec = PartidosFec;
        this.CamFecFotosFot = CamFecFotosFot;
    }
    campeonatoid: number;
    campeonatonom: string;
    PartidosId: number;
    PartidosFec: string;
    CamFecFotosFot: string;
}