const display = document.querySelector("#displayInput");
const botaoIgual = document.querySelector(".igual");
const botaoPonto = document.querySelector(".ponto");
const botoesNumeros = document.querySelectorAll(".num");
const botoesOperadores = document.querySelectorAll(".operador");

let operadoraAtual = "";
let operador = null;
let valorAnterior = "";
let calculando = false;

function atualizaDisplay() {
    display.value = operadoraAtual;
}

function insereNumero(evento) {
    if (calculando) {
        operadoraAtual = evento.target.textContent;
        calculando = false;
    } else {
        operadoraAtual += evento.target.textContent;
    }
    atualizaDisplay();
}

function inserePonto() {
    if (!operadoraAtual.includes(".")) {
        operadoraAtual += ".";
        atualizaDisplay();
    }
}

function insereOperador(evento) {
    if (operadoraAtual !== "") {
        if (operador !== null && valorAnterior !== "") {
            calcula();
        }
        operador = evento.target.textContent;
        valorAnterior = operadoraAtual;
        operadoraAtual = "";
    }
}

function calcula() {
    let resultado = 0;
    const operandoAnterior = parseFloat(valorAnterior);
    const operandoAtual = parseFloat(operadoraAtual);

    switch (operador) {
        case "+":
            resultado = operandoAnterior + operandoAtual;
            break;
        case "-":
            resultado = operandoAnterior - operandoAtual;
            break;
        case "*":
            resultado = operandoAnterior * operandoAtual;
            break;
        case "/":
            resultado = operandoAnterior / operandoAtual;
            break;
        default:
            return;
    }

    operadoraAtual = resultado.toString();
    valorAnterior = "";
    operador = null;
    calculando = true;
    atualizaDisplay();
}

// Eventos
botaoPonto.addEventListener("click", inserePonto);
botoesNumeros.forEach((botao) => botao.addEventListener("click", insereNumero));
botoesOperadores.forEach((botao) => botao.addEventListener("click", insereOperador));
botaoIgual.addEventListener("click", calcula);
