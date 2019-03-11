export class Noticia {

    constructor(noticiasid = 0, noticiasfec = '', UsuariosAli = '', equipoid = 0, equiponom = '',
    noticiasdet = '', noticiascab = '', noticiasfot = '', noticiastex = '') {
        this.noticiasid = noticiasid;
        this.noticiasfec = noticiasfec;
        this.UsuariosAli = UsuariosAli;
        this.equipoid = equipoid;
        this.equiponom = equiponom;
        this.noticiasdet = noticiasdet;
        this.noticiascab = noticiascab;
        this.noticiasfot = noticiasfot;
        this.noticiastex = noticiastex;
    }

    noticiasid: number;
    noticiasfec: string;
    UsuariosAli: string;
    equipoid: number;
    equiponom: string;
    noticiasdet: string;
    noticiascab: string;
    noticiasfot: string;
    noticiastex: string;
}