let currentInput = "";
let isResultDisplayed = false;

function appendToScreen(value) {
    if (isResultDisplayed) {
        clearScreen();
        isResultDisplayed = false;
    }
    currentInput += value;
    document.getElementById("output").innerText = currentInput;
}

function clearScreen() {
    currentInput = "";
    document.getElementById("output").innerText = "0";
}

function calculateResult() {
    try {
        const result = eval(currentInput);
        document.getElementById("output").innerText = result;
        currentInput = result.toString();
        isResultDisplayed = true;
    } catch (error) {
        document.getElementById("output").innerText = "Error";
        currentInput = "";
        isResultDisplayed = true;
    }
}
