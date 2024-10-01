class heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome,
            this.idade = idade,
            this.tipo = tipo
    }

    Atacar() {
        if (this.tipo == "Mago" || this.tipo == "mago") {
            console.log(`O ${this.tipo} atacou usando magia`)
        } else if (this.tipo == "Guerreiro" || this.tipo == "guerreiro") {
            console.log(`O ${this.tipo} atacou usando espada`)
        }else if (this.tipo == "Monge" || this.tipo == "monge"){
            console.log(`O ${this.tipo} atacou usando artes marciais`)
        }else if (this.tipo == "Ninja" || this.tipo == "ninja"){
            console.log(`O ${this.tipo} atacou usando artes shuriken`)
        }else{
            console.log(`Heroi desconhecido`)
        }
    }
}

h1 = new heroi("Merlin", 1000, "Mago");
h2 = new heroi("Viking", 300, "Guerreiro");
h3 = new heroi("Mongk", 4000, "monge");
h4 = new heroi("Jackie Chan", 37, "Ninja");


h1.Atacar()
h2.Atacar()
h3.Atacar()
h4.Atacar()