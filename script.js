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
let angle2 = 0;
let timer = setInterval(animateDice, 200);

//Variables
let diceRollSet = document.getElementById("DRO");
let resultImg1 = document.getElementById("result-image1");
let resultImg2 = document.getElementById("result-image2");
let rollHis = document.getElementById("rollNum");
let numRolled = 0;
let numOfDice = document.getElementById("DAmnt");
let compRoll = document.getElementById("computer");
let userRoll = document.getElementById("user");
let compImg = document.getElementById("computer-img");
let userImg = document.getElementById("user-img");
let compImgs = document.getElementById("comp-imgs");
let userImgs = document.getElementById("user-imgs");
let userRolls = 0;

document.getElementById("rollbtn").addEventListener("click", diceRoll);
document.getElementById("playbtn").addEventListener("click", play);
document.getElementById("resetbtn").addEventListener("click", reset);

function animateDice() {
  //choose random dice img
  let rand = Math.floor(Math.random() * 6 + 1);
  let rand2 = Math.floor(Math.random() * 6 + 1);
  resultImg1.src = `images/${rand}.png`;
  resultImg2.src = `images/${rand2}.png`;
  //rotate img
  angle += 11;
  angle2 -= 11;
  resultImg1.style.transform = `rotate(${angle}deg)`;
  resultImg2.style.transform = `rotate(${angle2}deg)`;
}

function diceRoll() {
  //stop animation
  clearInterval(timer, 200);

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
    let t = 0;
    while (t <= x) {
      let resultNum1 = Math.floor(Math.random() * 6 + 1);
      let resultNum2 = Math.floor(Math.random() * 6 + 1);

      //Update History
      rollHis.innerHTML += `<span>${resultNum1},${resultNum2}</span>`;
      console.log(resultNum1);

      //Display Images
      resultImg1.innerHTML = `<img src="images/${resultNum1}.png">`;
      resultImg2.innerHTML = `<img src="images/${resultNum2}.png">`;
      t++;
    }
  } else if (diceRollSet.value == "DRS") {
    while (true) {
      let resultNum1 = Math.floor(Math.random() * 6 + 1);
      let resultNum2 = Math.floor(Math.random() * 6 + 1);
      //Display Images
      resultImg1.innerHTML = `<img src="images/${resultNum1}.png">`;
      resultImg2.innerHTML = `<img src="images/${resultNum2}.png">`;

      //Update History
      rollHis.innerHTML += `<span>${resultNum1},${resultNum2}</span>`;
      console.log(resultNum1);
      console.log(resultNum2);
      numRolled++;
      if (resultNum1 == 1 && resultNum2 == 1) {
        break;
      }
    }
    alert(`It took ${numRolled} rolls to get snake eyes.`);
  }
}

function play() {
  if (numOfDice.value == "oneD") {
    let compNum = Math.floor(Math.random() * 6 + 1);
    let userNum = Math.floor(Math.random() * 6 + 1);

    //Display Images
    compImg.src = `images/${compNum}.png`;
    userImg.src = `images/${userNum}.png`;

    //Display Numbers
    compRoll.innerHTML = `The Computer Rolled ${compNum}`;
    userRoll.innerHTML = `You Rolled ${userNum}`;
    console.log(compNum);
    console.log(userNum);

    if (compNum > userNum) {
      userRolls++;
      alert("You Lost :(");
    } else if (userNum > compNum) {
      if (userRolls > 1) {
        alert(`You Won!!!!! It took ${userRolls} rolls to win`);
      } else {
        alert("You Won!!!!");
      }
    }
  } else if (numOfDice.value == "twoD") {
    let compNum = Math.floor(Math.random() * 6 + 1);
    let compNum2 = Math.floor(Math.random() * 6 + 1);
    let userNum = Math.floor(Math.random() * 6 + 1);
    let userNum2 = Math.floor(Math.random() * 6 + 1);

    let compNumTotal = compNum + compNum2;
    let userNumTotal = userNum + userNum2;

    //Display Images
    compImg.src = `images/${compNum}.png`;
    userImg.src = `images/${userNum}.png`;
    compImgs.innerHTML += `<img src="images/${compNum2}>`;
    userImgs.innerHTML += `<img src="images/${userNum2}>`;

    //Display Numbers
    compRoll.innerHTML = `The Computer Rolled ${compNumTotal}`;
    userRoll.innerHTML = `You Rolled ${userNumTotal}`;
    console.log(compNumTotal);
    console.log(userNumTotal);

    if (compNumTotal > userNumTotal) {
      userRolls++;
      alert("You Lost :(");
    } else if (userNumTotal > compNumTotal) {
      if (userRolls > 1) {
        alert(`You Won!!!!! It took ${userRolls} rolls to win`);
      } else {
        alert("You Won!!!!");
      }
    }
  } else if (numOfDice.value == "threeD") {
    let compNum = Math.floor(Math.random() * 6 + 1);
    let compNum2 = Math.floor(Math.random() * 6 + 1);
    let compNum3 = Math.floor(Math.random() * 6 + 1);
    let userNum = Math.floor(Math.random() * 6 + 1);
    let userNum2 = Math.floor(Math.random() * 6 + 1);
    let userNum3 = Math.floor(Math.random() * 6 + 1);

    let compNumTotal = compNum + compNum2 + compNum3;
    let userNumTotal = userNum + userNum2 + userNum3;

    //Display Images
    compImg.src = `images/${compNum}.png`;
    userImg.src = `images/${userNum}.png`;
    compImgs.innerHTML +=
      `<img src="images/${compNum2}>` + `<img src="images/${compNum3}>`;
    userImgs.innerHTML +=
      `<img src="images/${userNum2}>` + `<img src="images/${userNum3}>`;

    //Display Numbers
    compRoll.innerHTML = `The Computer Rolled ${compNumTotal}`;
    userRoll.innerHTML = `You Rolled ${userNumTotal}`;
    console.log(compNumTotal);
    console.log(userNumTotal);

    if (compNumTotal > userNumTotal) {
      userRolls++;
      alert("You Lost :(");
    } else if (userNumTotal > compNumTotal) {
      if (userRolls > 1) {
        alert(`You Won!!!!! It took ${userRolls} rolls to win`);
      } else {
        alert("You Won!!!!");
      }
    }
  }
}

function reset() {
  document.getElementById("rollNum").innerHTML = "";
}
