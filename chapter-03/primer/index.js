let precoChapeu = 100;
console.log(`Preço do Chapéu: R$ ${precoChapeu},00`);
let precoBotas = "100";
console.log(`Preço das Botas: R$ ${precoBotas},00`);
console.log('*********************');

let valorTaxa; // não foi definido valor da taxa
console.log(`Valor da taxa antes: ${ valorTaxa ?? 10}%`);
valorTaxa = 0; // valor zero para a taxa
console.log(`Valor da taxa depois: ${ valorTaxa ?? 10 }%`);

function somaPrecos(primeiro, segundo, terceiro) {
    return primeiro + segundo + terceiro;
}

if (precoBotas == precoChapeu) {
    console.log('Os preços são iguais');
} else {
    console.log('Os Preços são diferentes');
}

console.log('*********************');
let precoTotal = somaPrecos(precoBotas, precoChapeu);
// let precoTotal = Number(precoBotas) + Number(precoChapeu);
console.log(`Função - Preço total: ${precoTotal}`);

let nome = "Fabio";
console.log(`Tipo: ${typeof nome}`);
nome = 150;
console.log(`Tipo: ${typeof nome}`);

let primeiraCidade;
console.log(`Variável primeiraCidade é do tipo: ${ typeof primeiraCidade }`);
let segundaCidade = primeiraCidade || "São Paulo";
console.log(`Cidade: ${ segundaCidade }`);