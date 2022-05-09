export class Skill {
    id?: number;
    nombreSkill: string;
    valorPorcentaje: number;

    constructor(nombreSkill: string, valorPorcentaje: number){
        this.nombreSkill = nombreSkill;
        this.valorPorcentaje = valorPorcentaje;
    }
}
