// Selecionando pelo ID do título
const title = document.getElementById("titulo");

// Selecionando o botão que exibe "Hello"
const helloBtn = document.getElementById("botao-ola");

// Selecionando o botão que altera o título
const changeTitleBtn = document.getElementById("btn-mudar-titulo");

// Botão para mudar as frases
const mudarfrases = document.getElementById("MudarAsFrases");

// Primeira mensagem
const mensagemPrim = document.getElementsByClassName("mensagem02");

// Segunda mensagem
const mensagemSec = document.getElementsByClassName("mensagem03");

// Terceira mensagem
const mensagemTerc = document.getElementsByClassName("mensagem04");

// Evento de clique para exibir uma mensagem "Olá"
helloBtn.addEventListener("click", function () {
  alert("Olá!");
});

// Evento de clique para alterar o texto do título
changeTitleBtn.addEventListener("click", function () {
  title.textContent = "O Titulo foi mudado utilizando JS!";
});

mudarfrases.addEventListener("click", function () {
    mensagemPrim[0].textContent = "Meu herói não usa capa";
    mensagemSec[0].textContent = "Que Xou da Xuxa é esse?!";
    mensagemTerc[0].textContent = "Saudades de quando eu não pagava conta.";
});

