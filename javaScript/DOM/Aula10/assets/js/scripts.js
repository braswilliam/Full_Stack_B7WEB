//pegando elementos
let input = document.querySelector('input');
let list = document.querySelector('ul');

//functions
function handleKeyUp(e) {
    if(e.key === 'Enter'){
        //Add o elemento LI na lista
        const newLi = document.createElement('li');
        newLi.innerHTML = input.value;
        list.appendChild(newLi);
        
        //limpar o input
        input.value = '';
    }
}


//eventos
input.addEventListener('keyup', handleKeyUp)