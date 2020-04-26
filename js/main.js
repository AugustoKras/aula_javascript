
function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar");
}

function redirecionar(){
    window.open("https://github.com/");
        //Abre na mesma janela //window.location.href = "https://github.com/";
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    //alert("trocar texto");
    elemento.innerHTML = "Obrigado por passar o mouse";
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("pagina carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value)
}

/*
function soma(n1, n2){
    return n1 + n2;
}
*/


/*
//function setReplace(frase, nome, novo_nome){
    //return frase.replace(nome, novo_nome)

var validar = 0;

function validaIdade(idade){
    validar;
    if(idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}

var idade = prompt("Qual a sua idade: ");
validaIdade(idade)
console.log(validar);
*/



//alert(soma(5, 10));
//alert(setReplace("Vai Japão", "Japão", "Brasil"));



/*
var d = new Date();
alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes());
*/


/*
var count;
for(count=1; count <= 5; count++){
    alert(count);
};
*/

/*
var count = 0;
while (count <= 5){
    console.log(count);
    alert(count);
    count++;
};
*/

/*
var idade = prompt("Qual é a sua idade? ")
var idade = 18
if(idade >= 18){
    alert("maior de idade");
}else{
    alert("menor de idade");
};
*/


/*
var frutas = [{nome: "maça", cor:"vermelha"}, {nome: "uva", cor:"roxa"}]
console.log(frutas);
alert(frutas[1].nome);
*/

/*
var fruta = {nome: "maça", cor:"vermelha"}
console.log(fruta.nome);
alert(fruta.cor);
*/

//var lista = ["maça", "pêra", "laranja"];

//lista.pop();
//lista.push("uva");

//console.log(lista);
//console.log(lista.toString());
//console.log(lista.join(" - "));
//alert(lista[1]);

//var nome = "Augusto Kraszczuk";
//var n1 = 5
//var n2 = 3;
//var frase = "japão é o melhor time do mundo";
//alert(nome + " tem " + idade +  " anos");
//alert(idade + idade2);
//console.log(nome);
//console.log(n1 + n2);
//console.log(frase.toUpperCase());
//alert(frase.replace("Japão", "Brasil"));