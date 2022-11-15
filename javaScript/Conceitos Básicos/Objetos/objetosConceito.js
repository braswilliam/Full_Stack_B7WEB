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

//console.log(`Nome: ${personagem.nome} \nIdade: ${personagem.idade} \nMagia: ${personagem.caracteristicas.magia}`);
//console.log(`Cor dos olhos: ${personagem.olhos[0]}.`);

personagem.nome = 'Wesley';
console.log(personagem.nome);

personagem.caracteristicas.forca += 5;
console.log(personagem.caracteristicas.forca);

personagem.olhos.push('verdes');
console.log(personagem.olhos);
console.log(`A cor dos olhos do personagem agora serão: ${personagem.olhos[2]}`);










