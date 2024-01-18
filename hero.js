class hero {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
    ataque() {

        console.log(`O ${tipo} atacou usando ${ataque}`)
    }
}


let bardo = new hero("Ali Nadir", 35, "bardo")
bardo.ataque()