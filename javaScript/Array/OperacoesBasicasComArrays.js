let ingredientes = [
    'agua', 
    'farinha', 
    'ovo',
    'corante', 
    'sal'
];

console.log(`\nTotal de ingredientes ${ingredientes.length}.`);
ingredientes.push('cebola');



console.log(`\nIngredientes: ${ingredientes}.`);
console.log(`Total de ingredientes ${ingredientes.length}.`);

ingredientes.pop(); // remove o último.
console.log(`\nIngredientes: ${ingredientes}.`);
console.log(`Total de ingredientes ${ingredientes.length}.`);

ingredientes.shift()//remove o primeiro.
console.log(`\nIngredientes: ${ingredientes}.`);
console.log(`Total de ingredientes ${ingredientes.length}.`);








