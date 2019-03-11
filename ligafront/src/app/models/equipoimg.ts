export class EquipoImg {
    constructor(equipoid= 0, equipofot: File, equiponom = '') {
        this.equipofot = equipofot;
        this.equipoid = equipoid;
        this.equiponom = equiponom;
    }
    equipoid: number;
    equipofot: File;
    equiponom: string;
}