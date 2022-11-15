function clicou(){
    const teste = document.querySelector('#teste');
    const ul = teste.querySelector('ul');

    //ul.innerHTML = "<li>Item alterado com sucesso<li>";

    //ul.innerHTML +=  "<li>Item alterado<li>";

   //ul.children[0].innerHTML = "Item <strong>alterado!</strong>"


    ul.outerHTML = "<strong>Aleterado!</strong>" ;

}
