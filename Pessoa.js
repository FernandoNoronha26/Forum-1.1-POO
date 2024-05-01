class Pessoa {
    constructor(nome) {
      this.nome = nome;
    }
  
    exibirNome() {
      console.log("Meu nome é " + this.nome);
    }
  }
  const pessoa1 = new Pessoa("Fernando Noronha");
  pessoa1.exibirNome();
  