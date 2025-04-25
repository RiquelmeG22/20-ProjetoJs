const calculeteBtn = document.querySelector("#calcleteBtn")


function calculateTip() {
    
    const billAmount = document.querySelector("#billAmount").value
    const serviceQuality = document.querySelector("#serviceQality").value

    if(billAmount ==="") {
        alert("Por favor, preencha os dados");
        return;
    }
    
    const tipAmount = billAmount * serviceQuality; 
    const totalAmount = billAmount + tipAmount;

    const tipAmountInput = (document.querySelector(
        "tipAmount"
    ));
    const totalAmountInput = document.querySelector(
        "totalAmount"
    ).value = `R$ ${totalAmount}`

    tipAmountInput.value = `R$ ${tipAmount}`
    tipAmountInput
}


calculeteBtn.addEventListener("clicar", calculateTip);
