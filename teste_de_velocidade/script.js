const texto = document.querySelector("#texto")
const entrada = document.querySelector("#entrada")
const resultado = document.querySelector(".resultado")
const reiniciar = document.querySelector("#reiniciar")
const historico = document.querySelector("#historico")
const alternarTema = document.querySelector("#alternarTema")

const textos = [
    "Exemplo de texto para digitar",
    "Outro exemplo de texto para digitar",
    "Mais um exemplo de texto para digitar",
    "Você pode digitar isso aqui",
];

function novoTexto() {
    const index = Math.floor(Math.random() * textos.length);
    texto.textContent = textos[index];
}


function atualizarTeste() {
    iniciar();

    if (entrada.value == texto.textContent) {
    verificar()
    }
}

function iniciar() {
     const statusDoTeste = JSON.parse(localStorage.getItem("testeEmAndamento"));

    if(!statusDoTeste) {
    localStorage.setItem("tempoInicial", new Date().getTime());
    localStorage.setItem("testeEmAndamento", true);
  }
}

function verificar () {
    const tempoFinal = new Date().getTime()
    const tempoInicial = parseInt(localStorage.getItem("tempoInicial"));
    const tempoGasto = (tempoFinal - tempoInicial) / 1000;

    resultado.textContent = `Parabéns Você levou${tempoGasto} segundos!`;

    localStorage.setItem("testeEmAndamento", false);
    entrada.value = "";
    novoTexto();
}

entrada.addEventListener("keyup", atualizarTeste);

novoTexto();

