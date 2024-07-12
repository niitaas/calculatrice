let display = document.getElementById("display");
let calculation = "";

function appendValue(value){
    calculation += value;
    display.value = calculation;
}

function clearDisplay(){
    calculation = "";
    display.value = calculation;
}

function deleteLastCharacter() {
    calculation = calculation.slice(0, -1);
    display.value = calculation;
}

function calculate() {
    try {
        let result = eval(calculation);
        display.value = result;
        calculation = result.toString();
    }   catch (error) {
        display.value = "Error";
        calculation = "";
    }
}