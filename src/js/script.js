//Declarações e variáveis
// var nome ="fiap";
// console.log(nome)

// let idade =18;
// console.log(idade)

// const sobrenome="Cardoso";
// console.log(sobrenome)

//undefined
// let aula;
// console.log(aula)

//null
// let valor = null;
// console.log(valor)

// let exemplo1={};

// let exemplo2=[];

//Tipos de variáveis
// let exemplo3 = 10;
// console.log(typeof exemplo3)

// let exemplo4 = "aula";
// console.log(typeof exemplo4)

// let exemplo5 = true;
// console.log(typeof exemplo5)

// let exemplo6 =["huguinho", "zezinho", "luizinho"]
// console.log(typeof exemplo6)


//Conversões

//float => inteiro
// let numFloat =123.456;
// console.log(parseInt(numFloat));

//string => float
// let numString = "547.98";
// console.log(parseFloat(numString))

//float => string
// let numFloat1 = 554.665;
// console.log(numFloat1.toString());

// let numInt=100;
// console.log(numInt.toString());

//Metodos - parte 1

//Length - verifica o tamanho da string

// let frase = "O mundo da tecnologia";
// console.log(frase.length)

//indexOf  - retorna um trecho de um texto

// let texto = "Programação sustentável";
// console.log(texto.indexOf("ão")) //primeiro

//slice - retorna parte de um texto apontando o inicio e o final

// let info = "Processamento de ponta";
// console.log(info.slice(0,18))

//Operadores aritméticos

// const num1=10;
// const num2=20;

// console.log(num1 + num2);
// console.log(num1 - num2);
// console.log(num1 * num2);
// console.log(num1 / num2);

//Operadores lógicos
// const num3 = 20;
// const num4 = 30;

// console.log(num3 < num4);
// console.log(num3 > num4 && num4 < 50);
// console.log(num3 > num4 || num4 > num3);
// console.log(num4 == num3 || num4 > num3);

//Operadores de comparação
// const num5 = 25;
// const num6 = 35;

// console.log(num5 == num6); //compara
// console.log(num5 === num6); //compara e verifica o tipo da variável
// console.log(num5 != num6); //diferente

// const newLocal = 100;
//Estrutura condicional

//IF

// let valor2 = 100;


// if(valor2 == 100){
//     console.log("é verdadeiro");
// }

// IF e ELSE

// let valor3 = 120;

// if(valor3 == 100)
// {
//     console.log("Valor correto")
// }else {
//     console.log("Valor errado")
// }

//IF e ELSE - encadeado ou aninhado

// let idade = 14;

// if(idade < 14){
//     console.log("Não pode entrar na balada");
// }
// else if(idade >= 14 && idade < 18){
//     console.log("Pode entrar e curtir");
// }
// else if(idade > 50 && idade < 70){
//     console.log("Você não tem idade para isso")
// }
// else{
//     console.log("Fica em casa assistindo tv");
//}

// Condição ternaria
//  let valor = 301;

//  let resultado = valor == 300 ? "Certo" : "Errado"
//  console.log(resultado)

 //Switch case 

//  let time = "Corinthians";

//  switch(time){
//     case "Corinthians":
//         console.log("Melhor Time")
//         break;
//     case "São Paulo":
//         console.log("Não é um time")
//         break;
//     case "Palmeiras":
//         console.log("Não tem mundial")
//         break;      
//     default:
//         console.log("Nenhuma das opções")      
//  }

//Estrutura de laço de repetição

// for(let i=0; i <= 10; i++){
//     console.log("O valor de I é: ", i)
// }

//While

let w=0;

while(w <= 10){
    console.log("O valor de w é", w);
    w++;
}

// do while

let z= 10;

do{
    console.log("do while é", z)
    z++;
    
}while(z<= 100)






























