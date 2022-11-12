//ex1 cal porcentagem de desconto de um produto.

function calcPorcentagem(x,desconto){
    let calc = (x * desconto) / 100;
    return `${desconto}% de ${x} é ${calc}.`;
}

console.log(calcPorcentagem(40, 25));


//calc calor a pagar de um imóvel.
function calcImovel(metragem, quartos){
    const m2 = 3000.0;
    
    switch (quartos) {
        
        case 1:
        return m2 * (metragem * 1.0);
        break;

        case 2:
        return m2 * (metragem * 1.2);
        break;

        case 3:
        return m2 * (metragem * 1.5);
        break;
    
        default:
            return "Nosso limite é de 3 quartos.";
    }
}

console.log(`A casa custa: R$${calcImovel(123, 3)}.`);

//validação de senha

function validar(usuario, senha){
    if (senha === 123) {
        return "Acesso concedido.";
    }else{
        return "Acesso negado";
    }
}

let usuario = "William";
let senha = 321;

console.log(validar(usuario, senha));




