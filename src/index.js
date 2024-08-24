import { Personagem } from "./modules/personagem.js"
import { PerersonagemView } from "./components/personagem-view.js"
import { Mago } from "./modules/mago.js"
import { Arqueiro } from "./modules/arqueiro.js"
import { ArqueiroMago } from "./modules/arqueiro-mago.js"

/*const personagemPedrinho = {
    nome: 'Pedrinho',
    vida: 7,
    mana: 12,
    level: 5,
    tipo: 'Mago',
}

const personagemJose = {
    nome: 'Jose',
    vida: 7,
    mana: 6,
    level: 3,
    tipo: 'Arqueiro',
}

const personagem = {
    nome: 'Ana',
    vida: 9,
    mana: 2,
    level: 3,
    tipo: 'flecha'
}

/*class Personagem{
    nome
    vida
    mana
    level
    tipo
    descricao
}

const personagemAna = new Personagem()
personagemAna.nome = 'Ana'
personagemAna.vida = 3
personagemAna.mana = 1
personagemAna.level= 2
personagemAna.tipo = 'Mago' */

/*const personagemJose = new Personagem()
personagemJose.nome = 'Jose'
personagemJose.vida = 12
personagemJose.mana = 7
personagemJose.tipo = 'Mago'
personagemJose.level = 8

const personagemPedro = new Personagem()
personagemPedro.nome = 'Pedro'
personagemPedro.vida = 3
personagemPedro.mana = 2
personagemPedro.tipo = 'Arqueiro'
personagemPedro.level = 2*/

//const personagemJose = new Personagem('Jose', 1, 'Mago')
//const personagemPedro = new Personagem('Pedro', 1, 'Arqueiro')

//const personagens = [personagemJose, personagemPedro]

//new PerersonagemView(personagens).render()
//console.log(personagemJose.vida)
//console.log(new Mago('gelo', 7, 9))

const magoAntonio = new Mago('Antonio', 2, 'fogo', 4, 3)
const magaJulia = new Mago('Júlia', 8, 'gelo', 7, 10)
const arqueiroBruno = new Arqueiro('Bruno', 7, 8)
const arqueiroMagoChico = new ArqueiroMago('Chico', 7, 10, 'ar', 4, 8)

const personagens = [magoAntonio, magaJulia, arqueiroBruno,arqueiroMagoChico]

new PerersonagemView(personagens).render()
console.log(Personagem.verificarVencedor(arqueiroBruno,magoAntonio))