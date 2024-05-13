// Functionize Minecraft Fishing Start Code

// HTML Vars
let resultImg = document.getElementById("result-img");
let numCodSpan = document.getElementById("num-cod");
let numSalmSpan = document.getElementById("num-salmon");
let numTropSpan = document.getElementById("num-tropical");
let numPuffSpan = document.getElementById("num-puffer");
// Fish Counter Variables
let numCod = 0;
let numSalmon = 0;
let numTropical = 0;
let numPuffer = 0;

// Fish Button Event Listener
document.getElementById("fish-btn").addEventListener("click", fishBtnClicked);

function fishBtnClicked() {
  // Determine Car
  let character = document.getElementById("character-select").value;

  if (character === "steve") {
    // Steve Fish Simulator
    let randNum = Math.random();
    if (randNum < 0.7) {
      console.log("Cod");
      resultImg.src = "img/Raw-Cod.png";
      numCod++;
      numCodSpan.innerHTML = numCod;
    } else if (randNum > 0.7 && randNum < 0.9) {
      console.log("Salmon");
      resultImg.src = "img/Raw-Salmon.png";
      numSalmon++;
      numSalmSpan.innerHTML = numSalmon;
    } else if (randNum > 0.9 && randNum < 0.95) {
      console.log("Tropical");
      resultImg.src = "img/Tropical-Fish.png";
      numTropical++;
      numTropSpan.innerHTML = numTropical;
    } else {
      console.log("Puffer");
      resultImg.src = "img/Pufferfish.png";
      numPuffer++;
      numPuffSpan.innerHTML = numPuffer;
    }
  } else if (character === "alex") {
    // Alex Fish Simulator
    let randNum = Math.random();
    if (randNum < 0.1) {
      console.log("Cod");
      resultImg.src = "img/Raw-Cod.png";
      numCod++;
      numCodSpan.innerHTML = numCod;
    } else if (randNum < 0.2) {
      console.log("Salmon");
      resultImg.src = "img/Raw-Salmon.png";
      numSalmon++;
      numSalmSpan.innerHTML = numSalmon;
    } else if (randNum < 0.5) {
      console.log("Tropical");
      resultImg.src = "img/Tropical-Fish.png";
      numTropical++;
      numTropSpan.innerHTML = numTropical;
    } else {
      console.log("Puffer");
      resultImg.src = "img/Pufferfish.png";
      numPuffer++;
      numPuffSpan.innerHTML = numPuffer;
    }
  } else {
    // Fish with Villager
    let randNum = Math.random();
    if (randNum < 0.25) {
      console.log("Cod");
      resultImg.src = "img/Raw-Cod.png";
      numCod++;
      numCodSpan.innerHTML = numCod;
    } else if (randNum < 0.5) {
      console.log("Salmon");
      resultImg.src = "img/Raw-Salmon.png";
      numSalmon++;
      numSalmSpan.innerHTML = numSalmon;
    } else if (randNum < 0.75) {
      console.log("Tropical");
      resultImg.src = "img/Tropical-Fish.png";
      numTropical++;
      numTropSpan.innerHTML = numTropical;
    } else {
      console.log("Puffer");
      resultImg.src = "img/Pufferfish.png";
      numPuffer++;
      numPuffSpan.innerHTML = numPuffer;
    }
  }
}
