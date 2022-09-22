export class Animal {
   nome: string;
   idade: number;
   som: string;
   
    constructor (nome: string, idade: number, som: string) {
        this.nome = nome;
        this.idade = idade
        this.som = som;
}

    mostrarAnimal(){
        console.log(`nome: ${this.nome}\nidade: ${this.idade}\nsom: ${this.som}\n`)
    }
    mostrarAnimal2(){
        console.log(`nome: ${this.nome}\nidade: ${this.idade}\nsom: ${this.som}\n`)
    }
    mostrarAnimal3(){
        console.log(`nome: ${this.nome}\nidade: ${this.idade}\nsom: ${this.som}\n`)
    }
}
