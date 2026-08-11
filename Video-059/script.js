let expression = "";

function press(value) {
    expression += value;                 // Add the pressed button
    document.getElementById("display").value = expression;
}

function calculate() {
    try {
        expression = eval(expression).toString();
        // Update the display
        document.getElementById("display").value = expression;
    } catch {
        document.getElementById("display").value = "Error";
        expression = "";
    }
}

function clearDisplay() {
    expression = "";
    document.getElementById("display").value = "";
}