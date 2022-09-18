const button = document.querySelector(".btn");
const adviceId = document.querySelector(".advice-id");
const advice = document.querySelector(".advice");

button.addEventListener("click", giveadvice);

function giveadvice(){
    fetch("https://api.adviceslip.com/advice")
    .then(response => response.json())
    .then (data => {
        adviceId.textContent = data.slip.id;
        advice.textContent = data.slip.advice;
    })
}