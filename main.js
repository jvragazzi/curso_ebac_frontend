function Animal(nome) {
    this.nome = nome;
    this.emitirSom = function() {
        console.log(this.nome + " faz um som");
    }
}


function Cachorro(nome, raca) {
    Animal.call(this, nome); 

    this.raca = raca;

    this.emitirSom = function() {
        console.log(this.nome + " late");
    }
}

function Gato(nome, cor) {
    Animal.call(this, nome);

    this.cor = cor;

    this.emitirSom = function() {
        console.log(this.nome + " mia");
    }
}

const animalGenerico = new Animal("Animal Genérico");
const meuCachorro = new Cachorro("Buddy", "Golden Retriever");
const meuGato = new Gato("Whiskers", "Cinza");

animalGenerico.emitirSom();  
meuCachorro.emitirSom();     
meuGato.emitirSom();        

