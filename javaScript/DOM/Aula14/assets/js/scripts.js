let html = '';

let c = 1;

while(c <= 10) {
    html += 'Numero: ' + c + '<br/>';
    c++;
}

document.getElementById('demo').innerHTML = html;