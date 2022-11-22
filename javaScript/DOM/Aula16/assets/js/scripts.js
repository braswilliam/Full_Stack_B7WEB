function trocar() {
    if (document.querySelector('.padrao').classList.contains('preto')) {
        document.querySelector('.padrao').classList.remove('preto');
        document.querySelector('.padrao').classList.add('verde');
    }else{
        document.querySelector('.padrao').classList.remove('verde');
        document.querySelector('.padrao').classList.add('preto');
    }
}