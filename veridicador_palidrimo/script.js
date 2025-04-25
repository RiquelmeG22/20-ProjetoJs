const botaoVerificar = document.querySelector("#botao-verificar")
const palavraInput = document.querySelector("#palavra")
const resultado =  document.querySelector("#resultado")

function verficarPalidrimno () {
    const palavra = palavraInput.value
    const palavraInvertida = palavra.split("").reverse().join("")

    if(palavra.toLowerCase() === palavraInvertida.toLowerCase()) {
        resultado.textContent = `${palavra} é um palidrimo`
    } else {
         resultado.textContent = `A palavra ${palavra} não é um palidrimo`
    }
}


botaoVerificar.addEventListener("click", verficarPalidrimno);

palavraInput.addEventListener("keyup", (e) => {

    if(e.key === "Enter") {
        e.preventDefault();
        verficarPalidrimno();
    }
})

