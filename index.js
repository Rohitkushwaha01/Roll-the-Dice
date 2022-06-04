// Targeting First Dice to choose a random number 
let randomNumber1 = Math.floor(Math.random()*6)+1;
console.log(randomNumber1);
let randomDiceImages = "images/dice" + randomNumber1 + ".png";
let image1 = document.querySelectorAll("img")[0].setAttribute('src',randomDiceImages);

// Targeting Second Dice.
let randomNumber2 = Math.floor(Math.random()*6)+1;
console.log(randomNumber2);
let randomDiceImages2 = "images/dice" + randomNumber2 + ".png";
let image2 = document.querySelectorAll("img")[1].setAttribute('src',randomDiceImages2);

// Comparing both Dice and depending on both of the dice the computer will check who wins.
if (randomNumber1 > randomNumber2) {
    document.querySelector('h1').innerHTML = 'Player 1 Wons🎉';
}
else if (randomNumber2 >randomNumber1) {
    document.querySelector('h1').innerHTML = 'Player 2 Wons🎉';
}
else if (randomNumber2 = randomNumber1) {
    document.querySelector('h1').innerHTML = 'Draw🤷‍♂️';
}

// another approach but the lenght of the code is big so recommended to use the above one #Best_practices
// let Dice1 = document.querySelector(".img1");
// let Dice2 = document.querySelector(".img2");

// let randomNum1 = Math.floor(Math.random() * 7);
// randomNum1 = 1 + randomNum1;

// let randomNum2 = Math.floor(Math.random() * 7);
// randomNum2 = 1 + randomNum2;

// switch (randomNum1) {
//   case 1:
//     Dice1.setAttribute("src", "images/dice1.png");
//     break;
//   case 2:
//     Dice1.setAttribute("src", "images/dice2.png");
//     break;
//   case 3:
//     Dice1.setAttribute("src", "images/dice3.png");
//     break;
//   case 4:
//     Dice1.setAttribute("src", "images/dice4.png");
//     break;
//   case 5:
//     Dice1.setAttribute("src", "images/dice5.png");
//     break;
//   case 6:
//     Dice1.setAttribute("src", "images/dice6.png");
//     break;
//   default:
//     break;
// }

// switch (randomNum2) {
//   case 1:
//     Dice2.setAttribute("src", "images/dice1.png");
//     break;
//   case 2:
//     Dice2.setAttribute("src", "images/dice2.png");
//     break;
//   case 3:
//     Dice2.setAttribute("src", "images/dice3.png");
//     break;
//   case 4:
//     Dice2.setAttribute("src", "images/dice4.png");
//     break;
//   case 5:
//     Dice2.setAttribute("src", "images/dice5.png");
//     break;
//   case 6:
//     Dice2.setAttribute("src", "images/dice6.png");
//     break;
//   default:
//     break;
// }

// let h = document.getElementById("head");
// if (randomNum1 > randomNum2) {
//   h.innerText = "Player 1 won";
// } else if (randomNum1 < randomNum2) {
//   h.innerText = "Player 2 won";
// } else if (randomNum1 == randomNum2) {
//   h.innerText = "Draw";
// }
