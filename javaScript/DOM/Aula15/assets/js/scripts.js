function verde() {
    limparClasses();
    document.querySelector("#titulo").classList.add('verde');   
}

function vermelho() {
    limparClasses();
    document.querySelector("#titulo").classList.add('vermelho');
}

function azul() {
    limparClasses();
    document.querySelector("#titulo").classList.add('azul');
}

function limparClasses() {
    document.querySelector("#titulo").classList.remove('verde');
    document.querySelector("#titulo").classList.remove('vermelho');
    document.querySelector("#titulo").classList.remove('azul');
}