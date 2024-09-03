//Dice Sim

//setInterval & clearinterval
// let x = 10;

// let timer = setInterval(countdown, 2000); //setInterval runs forever until interval in cleared

// function countdown() {
//   console.log("x");
//   x--;

//   if (x == 0) {
//     clearInterval(timer);
//   }
// }

//setTimeout - same as setInterval but it runs the functon a SINGLE time only
//e.g. setTimeout(animateDice, 2000) will run the animatedice function once, but after 2 seconds adn then naver again

let angle = 0;
let timer = setInterval(animateDice, 200);

//Variables
let diceRollSet = document.getElementById("DRO");
let resultImg1 = document.getElementById("result-image1");
let resultImg2 = document.getElementById("result-image2");
let rollHis = document.getElementById("rollNum");
let numRolled = 0;

document.getElementById("rollbtn").addEventListener("click", diceRoll);
document.getElementById("resetbtn").addEventListener("click", reset);

function animateDice() {
  //choose random dice img
  let rand = Math.floor(Math.random() * 6 + 1);
  let rand2 = Math.floor(Math.random() * 6 + 1);
  resultImg1.src = `images/${rand}.png`;
  resultImg2.src = `images/${rand2}.png`;
  //rotate img
  angle += 10;
  resultImg1.style.transform = `transform(${angle}deg)`;
  resultImg2.style.transform = `transform(${angle}deg)`;
}

function diceRoll() {
  //stop animation
  clearInterval(timer);

  if (diceRollSet.value == "DR1") {
    let resultNum1 = Math.floor(Math.random() * 6 + 1);
    let resultNum2 = Math.floor(Math.random() * 6 + 1);

    //Display Images
    resultImg1.src = `images/${resultNum1}.png`;
    resultImg2.src = `images/${resultNum2}.png`;

    //Update History
    rollHis.innerHTML += `<span>${resultNum1},${resultNum2}</span>`;
    console.log(resultNum1);
  } else if (diceRollSet.value == "DR5") {
    for (let i = 0; i < 5; i++) {
      let resultNum1 = Math.floor(Math.random() * 6 + 1);
      let resultNum2 = Math.floor(Math.random() * 6 + 1);

      //Display Images
      resultImg1.innerHTML = `<img src="images/${resultNum1}.png">`;
      resultImg2.innerHTML = `<img src="images/${resultNum2}.png">`;

      //Update History
      rollHis.innerHTML += `<span>${resultNum1},${resultNum2}</span>`;
      console.log(resultNum1);
    }
  } else if (diceRollSet.value == "DRX") {
    let x = +prompt("How many rolls?");
    for (let t = 0; t == x; t++) {
      let resultNum1 = Math.floor(Math.random() * 6 + 1);
      let resultNum2 = Math.floor(Math.random() * 6 + 1);

      //Display Images
      resultImg1.innerHTML = `<img src="images/${resultNum1}.png">`;
      resultImg2.innerHTML = `<img src="images/${resultNum2}.png">`;

      //Update History
      rollHis.innerHTML += `<span>${resultNum1},${resultNum2}</span>`;
      console.log(resultNum1);
    }
  } else if (diceRollSet.value == "DRS") {
    while (resultNum1 != 1 && resultNum2 != 1) {
      let resultNum1 = Math.floor(Math.random() * 6 + 1);
      let resultNum2 = Math.floor(Math.random() * 6 + 1);

      //Display Images
      resultImg1.innerHTML = `<img src="images/${resultNum1}.png">`;
      resultImg2.innerHTML = `<img src="images/${resultNum2}.png">`;

      //Update History
      rollHis.innerHTML += `<span>${resultNum1},${resultNum2}</span>`;
      console.log(resultNum1);
      numRolled++;
    }

    alert(`It took ${numRolled} rolls to get snake eyes.`);
  }
}

function reset() {
  setInterval(animateDice, 200);
  document.getElementById("rollNum").innerHTML = "";
}
