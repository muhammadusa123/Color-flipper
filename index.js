const colors = ["green", "red", "blue", "purple"];

const btn = document.getElementById("btn");
const colorDisplay = document.querySelector(".color");

btn.addEventListener("click", function() {
    const randomNumber = getRandomNumber();
    const newColor = colors[randomNumber]; // Get the color based on the random number
    document.body.style.backgroundColor = newColor; // Change the background color
    colorDisplay.textContent = newColor; // Update the displayed color
});

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}
