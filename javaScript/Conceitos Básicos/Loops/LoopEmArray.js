//formas de se fazer um loop: 

let cores = ['Preto', 'Branco', 'Azul', 'Vermelho'];
let count = 1;

for (let index = 0; index < cores.length; index++) {
    console.log(`${count}° cor: ${cores[index]}`);
    count++
}

console.log();

for(let i in cores){
    console.log(cores[i]);
}

console.log();

for(let cor of cores) {
    console.log(cor);
}