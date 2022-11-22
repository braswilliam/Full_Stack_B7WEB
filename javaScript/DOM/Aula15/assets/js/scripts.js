function verde() {
    remover();
    document.querySelector('#exemplo').classList.add('verde'); 
}
function vermelho() {
    remover();
    document.querySelector('#exemplo').classList.add('vermelho');
}
function azul() {
    remover();
    document.querySelector('#exemplo').classList.add('azul');
}

function remover() {
    document.querySelector('#exemplo').classList.remove('verde');
    document.querySelector('#exemplo').classList.remove('vermelho');
    document.querySelector('#exemplo').classList.remove('azul');
}