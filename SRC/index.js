class Hero {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque = "";
        switch (this.tipo) {
            case "mago":
                ataque = "magia";
                break;
            case "guerreiro":
                ataque = "espada";
                break;
            case "monge":
                ataque = "artes marciais";
                break;
            case "ninja":
                ataque = "shuriken";
                break;
            default:
                ataque = "atacou";
        }
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

const heroi1 = new Hero("Gandalf", 1000, "mago");
heroi1.atacar();  // Saída: O mago atacou usando magia

const heroi2 = new Hero("Conan", 35, "guerreiro");
heroi2.atacar();  // Saída: O guerreiro atacou usando espada

const heroi3 = new Hero("Half", 70, "monge");
heroi3.atacar();  // Saída: O monge atacou usando artes marciais

const heroi4 = new Hero("Jack", 50, "ninja");
heroi4.atacar();  // Saída: O ninja atacou usando shuriken
