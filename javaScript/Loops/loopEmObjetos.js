let cores = [
    {nome: 'Preto', qt: 10},
    {nome: 'Azul', qt: 5},
    {nome: 'Vermelho', qt: 15},  
]


for (let cor of cores){
    console.log(`Nome: ${cor.nome} - ${cor.qt}`);
}

console.log()

for(let i in cores){
    console.log(cores[i].nome + " " + cores[i].qt);
}

console.log()

for(let i in cores){
    cores[i].nome = cores[i].nome.toUpperCase(); // mudar para maiúscula
    console.log(cores[i].nome);
}



