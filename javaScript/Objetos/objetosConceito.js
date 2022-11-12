let personagem = {
    nome: 'William', 
    idade: 36,
    pais: 'Brasil',
    olhos: ['pretos', 'azuis'],
    caracteristicas: {
        forca: 20, 
        magia: 5, 
        stamina: 15
    }

} 

console.log(`Nome: ${personagem.nome} \nIdade: ${personagem.idade} \nMagia: ${personagem.caracteristicas.magia}`);
console.log(`Cor dos olhos: ${personagem.olhos[0]}.`);


