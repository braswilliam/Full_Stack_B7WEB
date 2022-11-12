let personagem = {
    nome: 'William',
    idade: 36,
    carros: [
        {modelo: 'Fiat', cor: 'preto'},
        {modelo: 'Ferrari', cor:'vermelho'}
    ]
}

console.log(personagem.carros[1].modelo); //pegando cor do carro na posição 0;