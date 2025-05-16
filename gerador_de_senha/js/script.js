// Seleção de Enventos

const generatePasswordButton =  document.querySelector("#generate-password");
const generatePasswordElement = document.querySelector("#generated-password");

// Novas Funcionalidade
const openCloseGeneratorButton = document.querySelector("#open-generate-password");


const generatePasswordContainer = document.querySelector("#generate-options");
const lengthInput = document.querySelector("#length");
const lettersInput = document.querySelector("#letters");
const numbersInputs = document.querySelector("#numbers");
const symbolsInputs = document.querySelector("#symbols");
const copyPasswordButton = document.querySelector("#copy-password");

// Funções 

const getLetterLowerCase = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};

const getLetterUpperCase = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};

const getNumber = () => {
    return Math.floor(Math.random() * 10).toString();
};

const getSymbol = () => {
    const symbols = "(){}[]=<>/,\.@#$%¨&-_+";
    return symbols[Math.floor(Math.random() * symbols.length)];
};

const generatePassword = (getLetterLowerCase, getLetterUpperCase, getNumber, getSymbol) => {

    let passaword = "";

    // Segunda Versão

    const passawordLength = +lengthInput.value;

    const generators = [];

    if(lettersInput.checked) {
        generators.push(getLetterLowerCase, getLetterUpperCase)
    }
    if(numbersInputs.checked) {
        generators.push(getNumber)
    }
    if(symbolsInputs.checked) {
        generators.push(getSymbol)
    }
 
    if(generators.length === 0) {
        return;
    }

    console.log(generators.length);


    for (i = 0; i < passawordLength; i = i + generators.length) {
        generators.forEach(() => {
            const randomValue =
                generators[Math.floor(Math.random() * generators.length)]();
        
            passaword += randomValue;
        });
    }
    
    passaword = passaword.slice(0, passawordLength);

    generatePasswordElement.style.display = "block"
    generatePasswordElement.querySelector("h4").innerText = passaword;
};


// Eventos 
generatePasswordButton.addEventListener("click", () => {
    generatePassword(
        getLetterLowerCase,
        getLetterUpperCase,
        getNumber,
        getSymbol
    );
});



openCloseGeneratorButton.addEventListener("click", () => {
    generatePasswordContainer.classList.toggle("hide");
});

copyPasswordButton.addEventListener("click", (e) => {
    e.preventDefault()
    
    const passaword = generatePasswordElement.querySelector("h4").innerText

    navigator.clipboard.writeText(passaword).then(() => {
        copyPasswordButton.innerText = "Senha Copiada com Sucesso";

        setTimeout(() => {
            copyPasswordButton.innerText = "Copiar";
        }, 1000);
    });
});