let pessoa = {
    nome: 'William', 
    sobrenome: 'Brasil Pereira', 
    idade: 90,
    nomeCompleto: function(){
        return `${this.nome} ${this.sobrenome}`;
    }
}

console.log(pessoa.nomeCompleto())

