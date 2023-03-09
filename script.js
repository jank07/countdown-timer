const input = document.querySelector("#date");
const output = document.querySelector(".output");
const button = document.querySelector("button");

function calculateDifference () {
    const ActualDate = new Date();
    const inputValue = input.valueAsDate;
    const diff = inputValue - ActualDate;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % days) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    output.innerHTML = `${days} d ${hours} h ${minutes} m ${seconds} s`
}

let isTrue;

function isEventListenerTriggered () {
    isTrue = true
    return isTrue;
}
button.addEventListener("click", isEventListenerTriggered);
setInterval(() => {
    if (isTrue) {
        calculateDifference()
    }
}, 1000);

