let precoChapeu = 100;
console.log(`Preço do Chapéu: R$ ${precoChapeu},00`);
let precoBotas = "100";
console.log(`Preço das Botas: R$ ${precoBotas},00`);
console.log('*********************');

console.log('*********************');
let precoTotal = somaPrecos(precoBotas, precoChapeu);
// let precoTotal = Number(precoBotas) + Number(precoChapeu);
console.log(`Preço total: ${ precoTotal }; variável é do tipo:  ${ typeof precoTotal }`);

precoTotal = somaPrecos(100, 200, 300);
console.log(`Preço total: ${ precoTotal }; variável é do tipo:  ${ typeof precoTotal }`);

precoTotal = somaPrecos(100, 200);
console.log(`Preço total: ${ precoTotal }; variável é do tipo:  ${ typeof precoTotal}`);

console.log('-----------------------');
let precoTotal2 = somaPrecos2(precoBotas, precoChapeu);
// let precoTotal = Number(precoBotas) + Number(precoChapeu);
console.log(`Preço total: ${ precoTotal2 }; variável é do tipo:  ${ typeof precoTotal2 }`);

precoTotal2 = somaPrecos2(100, 200, 300);
console.log(`Preço total: ${ precoTotal2 }; variável é do tipo:  ${ typeof precoTotal2 }`);

precoTotal2 = somaPrecos2(100, 200, undefined, false, 'olá');
console.log(`Preço total: ${ precoTotal2 }; variável é do tipo:  ${ typeof precoTotal2 }`);

let valorTaxa; // não foi definido valor da taxa
console.log(`Valor da taxa antes: ${ valorTaxa ?? 10}%`);
valorTaxa = 0; // valor zero para a taxa
console.log(`Valor da taxa depois: ${ valorTaxa ?? 10 }%`);

if (precoBotas == precoChapeu) {
    console.log('Os preços são iguais');
} else {
    console.log('Os Preços são diferentes');
}


let nome = "Fabio";
console.log(`Tipo: ${typeof nome}`);
nome = 150;
console.log(`Tipo: ${typeof nome}`);

let primeiraCidade;
console.log(`Variável primeiraCidade é do tipo: ${ typeof primeiraCidade }`);
let segundaCidade = primeiraCidade || "São Paulo";
console.log(`Cidade: ${ segundaCidade }`);


function somaPrecos(primeiro, segundo, terceiro = 0) {
    return primeiro + segundo + terceiro;
}

function somaPrecos2(...numeros) {
    return numeros.reduce(function(total, valor) {
        return total + (Number.isNaN(Number(valor)) ? 0 : Number(valor));
    }, 0);
}