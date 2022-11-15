function clicou(){
    const teste = document.querySelector('#teste');
    const ul = teste.querySelector('ul');

    //ul.children[0].append("alterar");
    //ul.children[0].append("1");
    //ul.children[0].innerHTML += "(alterado)";
    //ul.innerHTML += "<li>Item Adicionado<li/>";

    let newLi = document.createElement("li");
    newLi.innerText = "Item adicionado";

    ul.appendChild(newLi);
    ul.prepend(newLi); //no começo

    



}