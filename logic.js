const display = document.querySelector("#display");

function appendToDisplay(input) {
    display.value += input; // Append the clicked button value to the display
}

function clearDisplay() {
    display.value = ""; // Clear the display
}

function calculate() {
    try {
        // Use eval to calculate the expression in the display
        display.value = eval(display.value);
    } catch (error) {
        // If there's an error (e.g., invalid expression), display "Error"
        display.value = "Error";
    }
}
