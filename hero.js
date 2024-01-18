class hero {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
    ataque() {
        let ataque = "";
        switch (this.tipo) {
          case "mago":
            ataque = "uma magia";
            break;
          case "guerreiro":
            ataque = "uma espada";
            break;
          case "monge":
            ataque = "suas artes marciais";
            break;
          case "bardo":
            ataque = "uma zombaria viciosa";
            break; 
          case "ninja":
            ataque = "uma shuriken";
            break;
          default:
            console.log("Sem homebrew nesta campanha");
            break;
        }
         console.log(`O ${this.tipo} atacou usando ${ataque}`);
      }
}

let bardo = new hero("Ali Nadir", 35, "bardo");
monge.ataque();

