import { Personagem } from "./modules/personagem.js"

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

const personagemAna = new Personagem()
personagemAna.nome = 'Ana'
personagemAna.mana = 12
personagemAna.vida = 7
personagemAna.tipo = 'Mago'
personagemAna.level = 8

const personagemJose = new Personagem()
personagemJose.nome = 'José'
personagemJose.mana = 3
personagemJose.vida = 2
personagemJose.tipo = 'Arqueiro'
personagemJose.level = 2

console.log(personagemAna.obterInsignia(),)
console.log(personagemJose.obterInsignia())
