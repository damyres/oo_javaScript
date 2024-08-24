const tipo = 0
export class Personagem{
    nome
    vida
    mana
    level
    tipo
    descricao

    obterInsignia(){
        if(this.level >= 5){
            return `Implacavel ${tipo}`
        }
        return `${this.tipo} iniciante`
    }
}
