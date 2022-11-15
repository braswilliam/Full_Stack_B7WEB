/*function somar(x, y) {
    return x + y;
}*/

//com arrow function:

const somar = (x,y) => {
    return x + y;
}

console.log(somar(10,5))

//forma mais resumida:

const multiplicar = (x, y) => x * y; //A arrou já vem com retorno subentendido.

console.log(multiplicar(3,3));

//Trabalhando com variáveis e funções.
let count = 0; //escopo global

function add(){
    let count = 0;
    count++;
}           

add()
add()

console.log(count)

//funções dentro de funções


function addSquares(a, b){
    const square = (x) => x * x;

    let sqrtA = square(a);
    let sqrtB = square(b);
    return sqrtA + sqrtB;
}

console.log(addSquares(2, 3));



