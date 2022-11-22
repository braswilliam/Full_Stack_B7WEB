function subirTela() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"  //comportamento
    });
}

function decidirBotaoScroll1() {
    if (window.scrollY === 0) {
        document.querySelector('.scrollbutton').style.display = 'none';
    } else {
        document.querySelector('.scrollbutton').style.display = 'block';
    }
}

//setInterval(decidirBotaoScroll1, 1000);

//solução melhor:

//vai monitorar o botão scroll e caso ele seja mexido executa uma função:
window.addEventListener('scroll', decidirBotaoScroll1); 




