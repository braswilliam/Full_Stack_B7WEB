
let carros = ['Ferrari', 'Fusca', 'Palio', 'Corolla' , 'Lamborghini'];

let html = '<ul>'

for (let i = 0; i < carros.length; i++) {
    html += '<li>' + carros[i] + '</li>';
}

html += '</ul>';
document.getElementById('demo').innerHTML = html;

