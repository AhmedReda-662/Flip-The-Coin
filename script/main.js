const states = ["heads.svg", "tails.svg"];
let currentState = 0;

const coinImage = document.getElementById("coin");
const resultText = document.getElementById("result");
const flipButton = document.getElementById("flip_coin");
const shadow = document.getElementById("shadow");
const indicator = document.getElementById("indicator");
document.addEventListener("DOMContentLoaded", () => {
  coinImage.src = states[currentState];
  resultText.textContent = `${currentState === 0 ? "Heads" : "Tails"}`;
});

async function flipCoin() {
  const result = rand(0, 1) == 0 ? "Heads" : "Tails";
  currentState = result === "Heads" ? 0 : 1;
  coinImage.src = "";
  coinImage.alt = "";
  shadow.classList.add("__hide");
  indicator.classList.remove("__hide");
  resultText.textContent = "Flipping...";
  await new Promise((resolve) => setTimeout(resolve, 2000));
  indicator.classList.add("__hide");
  coinImage.src = states[currentState];
  resultText.textContent = result;
  shadow.classList.remove("__hide");
}

coinImage.addEventListener("click", flipCoin);
flipButton.addEventListener("click", flipCoin);

function rand(lowest, highest) {
  var adjustedHigh = highest - lowest + 1;
  return Math.floor(Math.random() * adjustedHigh) + parseFloat(lowest);
}
