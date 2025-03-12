// Exercise #1:
// when the user clicks the 'copy' button, copy the user input to the output area

// Fetch JavaScript objects representing specific elements in the DOM
const copyButton = document.getElementById("copy");
const userInput1 = document.getElementById("userInput1");
const output1 = document.querySelector(".output");

// Add an event listener on the target element
copyButton.addEventListener("click", handleCopyClick);

// Callback function to handle event
function handleCopyClick() {
  // Get the value from the input and set it as the text content of the output
  output1.textContent = userInput1.value;
}

// Exercise #2:
// when the user enters input text, copy the user input to the output area

// Fetch JavaScript objects representing specific elements in the DOM
const userInput2 = document.getElementById("userInput2");
const inputEventSection = document.getElementById("inputEventExample");
// Create and append an output div for the input event example
const output2 = document.createElement("div");
output2.className = "output"; // Add the same styling as the first output
inputEventSection.appendChild(output2);

// Add an event listener on the target element
userInput2.addEventListener("input", handleInputChange);

// Callback function to handle event
function handleInputChange() {
  // Get the value from the input and set it as the text content of the output
  output2.textContent = userInput2.value;
}
