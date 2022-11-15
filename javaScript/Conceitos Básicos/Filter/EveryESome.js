let fruits = ['Maçã', 'Laranja', 'Banana', 'Pêra', 'Uva'];

//a função filtro gera um novo array.

let ok = fruits.every((value) => value.length > 3); //verificando se cada item é maior que 3.

if (ok) {
    console.log('Todos são maiores que 3');
}else{
    console.log('Todos não são menores que 3');
}

console.log();

let ok2 = fruits.some((value) => value.length > 3); //verificando se cada item é maior que 3.

if (ok2) {
    console.log('Alguns ou apenas um são maiores que 3');
}


