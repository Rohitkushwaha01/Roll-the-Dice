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
