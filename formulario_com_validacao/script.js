const form = document.querySelector("form")
const nome = document.querySelector("#nome")
const email = document.querySelector("#email")
const assunto = document.querySelector("#assunto")
const mensagem = document.querySelector("#mensagem")
const errorMenssages = document.querySelectorAll(".error-message")

form.addEventListener("submit", (event) => {
    event.preventDefault();

    resertErrors();
    validateInputs();
});

function resertErrors() {
    errorMenssages.forEach((msg) => {
        msg.textContent= "";
    });
    nome.parentElement.classList.remove("error")
    email.parentElement.classList.remove("error")
    assunto.parentElement.classList.remove("error")
    mensagem.parentElement.classList.remove("error")
}


function setError(input, errorMessage) {
    const errorMenssagesElement = input.nextElementSibling;
    errorMenssagesElement.textContent = errorMessage

}

function validateInputs() {
    const nomeValue = nome.value.trim()
    const emailValue = nome.value.trim()
    const assuntoValue = nome.value.trim()
    const mensagemValue = nome.value.trim()

    if(nomeValue === "") {
            setError(nome, "Nome não pode ficar em branco");
            
    }
    if(emailValue === "") {
            setError(email, "E-mail não pode ficar em branco");  
    } else if (lisValidEmail(email)) {
        setError(email, "E-mail invalido");
    }
    if(assuntoValue === "") {
            setError(assunto, "Assunto não pode ficar em branco");
            
    }
    if(mensagemValue === "") {
            setError(mensagem, "Mensagem não pode ficar em branco");
            
    }
} 


function isValidEmail(emial){
   return /^[^\s@]+@[^\s@]+\.[^\s@]+$/
}


