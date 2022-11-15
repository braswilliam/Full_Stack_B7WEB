
function teste(){
    console.log('teste');
}


function sayMyName(name){
    console.log('your names is ' + name);
}

function calcAreaCirculo(raio){
    const pi = 3.14;
    return pi * Math.pow(raio, 2);
}

function gravidade(){
    console.log("A gravidade do planeta é:");    
    console.log(9.8);
}

function maiorDeIdade(idade){
    if (idade >= 18) {
        return true;
    }else {
        return false
    }
}


teste();
sayMyName('William B. pereira');
console.log(calcAreaCirculo(2));
gravidade();
console.log(maiorDeIdade(19));

let verificacao = maiorDeIdade(16);
console.log(verificacao);









