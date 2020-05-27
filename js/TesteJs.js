/*
let numeroA = 3;
let numeroB = 2;
let resultadoSoma = (numeroA + numeroB);
let resultadoSubtracao = (numeroA - numeroB);
let resultadoMultiplicacao = (numeroA * numeroB);
let resultadoDivisao = (numeroA / numeroB);
console.log(resultadoSoma)
console.log(resultadoSubtracao)
console.log(resultadoMultiplicacao)
console.log(resultadoDivisao)

var meuPlaneta = "Terra";
console.log(meuPlaneta) //Isto irá imprimir na tela “Terra"

var nome = "Ronaldo";
var nacionalidade = "Brasileiro";
console.log(nome + " é " + nacionalidade) 

var nome = "Silas";
var sobreNome = "Dias";
var nomeCompleto = (nome + " " + sobreNome);
console.log(nomeCompleto)

var rua = "Av Paulista";
var numero = 1578;
console.log (rua + " " + numero)
// O resultado seria: "Av Paulista 1578" 

var nome = "Silas";
var sobrenome = "Dias";
var idade = 32;
var resultado = (nome + " " + sobrenome + " " + "terá" + " " + idade + " " + "anos");
console.log(resultado) 

vencedor = "Pelé";
vencedor = "Marta";
console.log (vencedor);
//  resultado seria: "Marta"

var numeroA = 30;
var numeroB = 45;
var numeroC;

numeroC = numeroA;
numeroA = numeroB;
numeroB = numeroC;
console.log(numeroA,numeroB) 

var valorVerdadeiro = true;
console.log (valorVerdadeiro) // Isso irá imprimir "true" na tela 

var gostoDeSorvete = true;
console.log(gostoDeSorvete)

console.log(2 > 1) // Isso imprimirá "true" na tela 

var valorVerdade  = 2 > 1; 
// Como vimos 2> 1, ele retorna um valor de verdade e o atribuímos a uma variável
console.log (valorVerdade) // Isso imprimirá "true" na tela

console.log(2 < 1) // Isso imprimirá "false" na tela 

var umNumeroPequeno = 1;
var umNumeroGrande = 5;
var eMenor = (umNumeroPequeno < umNumeroGrande);
var eMaior = (umNumeroPequeno > umNumeroGrande);
console.log(eMenor)
console.log(eMaior) 

function soma (numeroA, numeroB){
    var resultado = numeroA + numeroB;
    return resultado;
}

soma(1,2);
console.log(soma()) 

function saudacao(nome, sobrenome) {
    return 'Olá' + nome + ' ' + sobrenome;
}
saudacao('Rafael', 'Silva');

function saudacao(nome, sobrenome) {
    return 'Olá' + nome + ' ' + sobrenome;
}
saudacao(); //retorna 'Olá undefined undefined'

function saudacao(nome = 'visitante', sobrenome = 'anônimo') {
    return 'Olá' + nome + ' ' + sobrenome;
}
saudacao(); // retorna 'Olá visitante anônimo' 

function somar(numero1, numero2){
    return numero1 + numero2;
}

function triploDaSoma(numero3, numero4){
    var resultadoDaSoma = somar(numero3,numero4);
    return resultadoDaSoma * 3;
} 

function triploDaSoma(numero1,numero2){
    return numero1 + numero2;
}

triplo(2,3);
function triplo(numero3,numero4){
    var resultadoDaSoma = triploDaSoma(numero3,numero4);
    return resultadoDaSoma * 3;
}
console.log(triplo(2,3)) 


function tamanhoNomeCompleto(nome,sobrenome){
    var nomeCompleto = nome + " " + sobrenome;
    return nomeCompleto.length;
}
console.log(tamanhoNomeCompleto("Enzo", "Silva")) 

function escreverCartao(titulo,nome,sobrenome){
    return titulo + " " + nome + " " + sobrenome;
}
console.log(escreverCartao("Dra.", "Ana", "Pérez")) 

console.log(Math.round(4.6))

Math.abs (4) //retorna 4
Math.abs (0) //retorna 0
Math.abs (-123) //retorna 123

Math.round (4.6) //retorna 5
Math.round (4.3) //retorna 4
Math.floor (4.6) //retorna 4
Math.floor (4.3) //retorna 4

Math.max (4, 7) //retorna 7
Math.min (4, 7) //retorna 4

console.log(Math.random())

function gerarProbabilidade(){
    return Math.random() * 100;
}
console.log(gerarProbabilidade())

var numero  = 6;
if (numero > 3){
    console.log("Sim");
}
else{
    console.log("Não");
} 

let idade = 19;
let acesso = '';

if (idade < 16){
    acesso = 'Proíbido';
} else if (idade >= 16 && idade <= 18){
    acesso = 'Permitido somente quando acompanhado por um maior de idade';
} else {
    acesso = 'Permitido';
}
console.log(acesso) 

var diaDeSemana = "domingo";

if (diaDeSemana == "domingo"){
    console.log("Hoje é dia de futebol! ! !")
}

var numero = 5;
function eMaior(umNumero) {
    if (umNumero > 5) {
     return true;
    } else {
     return false;
    }
 }
 console.log(eMaior(numero)) 


function hojeSeJoga(dia){
    var diaDomingo = "domingo";
    var diaTerca = "terça";

    if (dia === "domingo"){
        return diaDaSemana = "Hoje é dia de futebol! ! !";
    }else {
        return diaDaSemana =  "Hoje não é dia de futebol :(";
    }
} 

function eMaiorDeIdade(idade) {
    return idade >= 18;
  }
  console.log(eMaiorDeIdade(16)) 

  function eNumeroDaSorte(num){
    return num % 2 === 0 || num % 3 === 0 && num != 15;
}
console.log(eNumeroDaSorte(3)) 

function possoIrAoBanco(diaDaSemana, horaAtual){
    return (!(diaDaSemana == "Sábado" || diaDaSemana == "Domingo") && (horaAtual >= 9 && horaAtual <= 15));
} 

function pagarComCartao
(temJuros, taxasDoCartao, dinheiroDisponivel) {
  return !temJuros && taxasDoCartao >= 3 || dinheiroDisponivel < 100;
}
console.log(pagarComCartao(true, 6, 320)) // false
console.log(pagarComCartao(false, 8, 80)) // true
console.log(pagarComCartao(true, 2, 215)) // false
console.log(pagarComCartao(true, 1, 32)) // true 

function podeSeAposentar(idade,sexo,anoPrev){
    if (sexo == "F"){
        return idade >= 62 && anoPrev >= 30;
    }
    else {
        return idade >= 65 && anoPrev >= 30;
    }
}
console.log(podeSeAposentar(62, "F", 34))

function podeSeAposentar(idade,sexo,anoPrev){
    return  (sexo == "F" && idade >= 62 && anoPrev >= 30) || (sexo == "M" && idade >= 65 && anoPrev >= 30);  
}

function podeSubir(alturaPessoa,vemComCompania,temProblemaCardiaco){
    if (temProblemaCardiaco){
        return false;
    }
    else if (alturaPessoa >= 1.5 ) {
        return true;
    }
    else if (alturaPessoa == 1.2 && vemComCompania) {
        return true;
    }
    else {
        return false;
    }
}
console.log(podeSubir(1.2, false, false))

function podeSubir(alturaPessoa,vemComCompania,temProblemaCardiaco){
return (alturaPessoa >= 1.5 || alturaPessoa >= 1.2 && vemComCompania) && !temProblemaCardiaco;
} 

function medalhaDeAcordoComPosto(num){
    if (num == 1){
        return "Ouro";
    } else if (num == 2){
        return "Prata";
    } else if (num == 3){
        return "Bronze";
    }
    else {
        return "Continue participando";
    }
}
console.log(0,medalhaDeAcordoComPosto(0));
console.log(1,medalhaDeAcordoComPosto(1));
console.log(2,medalhaDeAcordoComPosto(2));
console.log(3,medalhaDeAcordoComPosto(3));
console.log(4,medalhaDeAcordoComPosto(4));
console.log(5,medalhaDeAcordoComPosto(5));
console.log(15,medalhaDeAcordoComPosto(15)); 

function imprimirAzul4(){
    for(var i=0; i < 4; i++){
    console.log("Azul")
    }
}
console.log(imprimirAzul4()) 

function imprimir5vezes5(){
    for(var i=0; i < 5; i++){
    console.log(5)
    }
}
console.log(imprimir5vezes5()) 

function passoAPasso(){
    for(var i=0; i<5; i++){
        console.log(i)
    }
}
console.log(passoAPasso()) 

function passandoPor(){
    for(var i=0; i<4; i++){
        console.log("aqui eu tenho o valor de " + i)
    }
}
console.log(passandoPor()) 


function passandoPelosPares(){
    for(var i=0; i<=6; i++){
        if (i % 2 == 0){
            console.log("aqui eu tenho o valor de " + i)
            }
        }
}
console.log(passandoPelosPares()) 

function imprimirAzul(vezes){
    for(var i=0; i<vezes; i++){
        console.log("Azul")
    }
}
console.log(imprimirAzul(3)) 

var totalCalorias = 0; 
//Aqui eu aproveito e inicializo em 0 a variável totalCalorias.

for(var i = 0; i < 5; i++) {
  totalCalorias = totalCalorias + 0.25; 
  //aqui a variável, como já está declarada fora do for, pode ser modificada durante as iterações e não irá "reiniciar"
}

console.log(totalCalorias) 
//a variável totalCalorias já existe e retorna o valor total que estávamos procurando. 

function somar5MoedasDe25Centavos(){
    var totalMoedas = 0;
    for(var i=0; i<5; i++){
        totalMoedas = totalMoedas + 0.25;
    }
    return totalMoedas;
}
console.log(somar5MoedasDe25Centavos()) 

var totalCalorias = 0;  

for(var i = 0; i < 3; i++) {
  totalCalorias = totalCalorias + 300;
}
console.log(totalCalorias) 

function somarMoedasDe25(quantidadeDeMoedas){
    var totalMoedas = 0;
    for(var i=0; i<quantidadeDeMoedas; i++){
        totalMoedas = totalMoedas + 0.25;
    }
    return totalMoedas;
}
console.log(somarMoedasDe25(7)) 

function somaDosPares(x){
    var totalPares = 0;
    for(var i=0; i<=x; i+=2){
        totalPares += i;
    }
    return totalPares;
}
console.log(somaDosPares(6)) 

function somatoria(num){
    var totalNum = 0;
    for(var i=num-1; i>=0; i--){
        totalNum += i;        
    }
    return totalNum;
}
console.log(somatoria(4)) 

function caloriasDeTrote(num){
    var totalCalorias = 0;
    for(var i=1; i<=num; i++){
        totalCalorias = totalCalorias  + (5 * i);
    }
    return totalCalorias;
}
console.log(caloriasDeTrote(2)) 

// ARRAYS

var secret_id = [
    "Bruce Banner",
    "Peter Parker",
    "Barry Allen",
]
console.log(secret_id[0]) 

var seriesFavoritasDaAna = ["Game of Thrones", "Breaking Bad", "House of Cards"];
var seriesFavoritasDoHeitor = ["Blindspot", "Blacklist"];
var olaMundo = ["olá","mundo!"];
var ola = ["olá","olá"];

console.log(seriesFavoritasDaAna)
console.log(seriesFavoritasDoHeitor)
console.log(olaMundo)
console.log(ola) 

arraysIguais(["olá", "mundo"], ["mundo", "olá"])
arraysIguais(["olá", "mundo"], ["olá", "mundo"])
arraysIguais(["olá", "mundo"], ["olá", "todo", "o", "mundo"])
arraysIguais(["olá"], ["olá", "mundo"])
["olá", "mundo"] === ["mundo", "olá"]
pessoas
["mara", "juliana"] === pessoas
pessoas === pessoas 

var numerosDeLoteria = [2, 11, 17, 32, 36, 39];
var girosDeDado = [1, 6, 6, 2, 2, 4];
var saiuCara = [false, false, true, false];
var listaDeNumeros = [[1, 2, 3], [4, 5, 6]];

console.log(numerosDeLoteria)
console.log(girosDeDado)
console.log(saiuCara)
console.log(listaDeNumeros) 

var numerosDeLoteria = [22,40,12]
console.log(numerosDeLoteria.length) 

//ARRAY PUSH

var pertences = ["espada", "escudo", "tocha"];
//pertences.length aqui vale 3;

pertences.push ("amuleto mágico");
//agora pertences.length vale 4

console.log(pertences) 

var pertences = ["espada","escudo","crossbow"];
console.log(pertences)
pertences.push("cross",);
console.log(pertences) 

var umArray = [1, 2, 3];
var outroArray = [4, 5];

mover(umArray, outroArray);

function mover(umArray, outroArray){
    var valor = umArray.pop();
    outroArray.push(valor);
    console.log(umArray)
    console.log(outroArray)
} 

//ARRAY INDEXOF

var meuArray = ["a", "la", "grande", "le", "puse", "cuca"]
var posicao = meuArray.indexOf("grande"); //devolve 2
console.log(posicao)

var diasDeTrabalho = ["segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira"]
var umDia = diasDeTrabalho.indexOf ("segunda-feira"); // retorna 0
console.log(umDia) */


contem([1, 6, 7, 6], 7);
function contem(array, numero){
    var vetor = array;
    var busca = vetor.indexOf(numero);
    return busca >= 0;
}
console.log(contem)
