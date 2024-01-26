let Num1 = prompt("Digite o primeiro numero");
let Num2 = prompt("Digite o segundo numero");
let opera = prompt("Digite 1 para somar, 2 para subtrair, 3 para dividir e 4 para multiplicar")

Num1 = Number(Num1);
Num2 = Number(Num2);
opera = Number(opera);

if (opera == 1){
    alert(Num1 + Num2)
}else if (opera == 2) {
    alert (Num1 - Num2)
} else if (opera == 3){
    alert (Num1 / Num2)
} else if (opera == 4 ){
    alert (Num1 * Num2)
} else {
    "Numero digitado invalido"
}



// math.floor arredonda meu numero para baixo
// math. ceil arrendonda meu numero para cima
// math.round arrendonda automaticamente de acordo com o que esta mais perto 
//math.max(numeros aqui) vai falar o maior numero entre os digitados
//math.min(numeros aqui) vai falar o menor numero entre os digitados
//math.random() vai gerar um numero aleatorio 
//math.PI mostra o numero de pi
//math.pow(2,10) faz a potenciação de 2 a 10 potencia 
