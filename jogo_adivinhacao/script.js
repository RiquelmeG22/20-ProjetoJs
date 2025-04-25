const guessSection = document.querySelector("#guess-section");
const guessInput = document.querySelector("#guess");
const guessButton = document.querySelector("#guess-btn");
const resultParagraph = document.querySelector("#result");
const difficultySelect = document.querySelector("#difficulty");
const difficultySection = document.querySelector("#difficulty-section");
const gameSection = document.querySelector("#game-section");
const trisetleftSpan = document.querySelector("#tries-left");
const resetButton = document.querySelector("#reset-btn");


let maxTries;
let randomNumber;
let triesLeft;

difficultySelect.addEventListener("change", function() {

    const difficulty = parseInt(difficultySelect.value);
    
    switch (difficulty)  {
        
        case 1: 
            maxTries = 10;
            break;
        case 2:
            maxTries = 7;
            break;
        case 3:
            maxTries = 5;
            break;
        default:
            maxTries = 10;
            break;
    }

    triesLeft = maxTries
    trisetleftSpan.textContent = maxTries;

    randomNumber = Math.floor(Math.random() * 100) +1;

    difficultySection.style.display = "none";
    gameSection.style.display = "block";
    guessSection.style.display = "flex";

    // console.log(randomNumber);
});

guessButton.addEventListener("click", function() {

    const guess = parseInt(guessInput.value);

    if(isNaN(guess) || guess < 1 || guess > 100) {
        resultParagraph.textContent = "Por favor, insira um número de 1 a 100";
    } else {

        if(guess === randomNumber) {
            resultParagraph.textContent = `Parabens ${maxTries - triesLeft + 1} tentativas`
            resetButton.style.display = "block";
            guessSection.style.display = "none";
            }  else if(guess > randomNumber) {

                resultParagraph.textContent = "Muito alto.Tente Novamente"
                triesLeft--;
                
            }  else {
                    resultParagraph.textContent = "Muito baixo. Tente Novamente"
                    triesLeft--;
            }

            if(triesLeft === 0) {
                resultParagraph.textContent = `Suas tentativas acabaram.
                O número certo era ${randomNumber}`
                resetButton.style.display = "block";
                guessSection.style.display = "none";
            }
            trisetleftSpan.textContent = triesLeft;
            guessInput.value = "";

    }
});

function resetGame () {
    difficultySelect.value = "";
    resultParagraph.textContent = "";

    difficultySection.style.display = "flex";
    gameSection.style.display = "none";
    guessSection.style.display = "none";
    resetButton.style.display = "none";
}

resetButton.addEventListener("click", resetGame);