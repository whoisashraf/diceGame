const winner = document.querySelector('.winner');//select the element that declares the winner

const playerOne = document.querySelector('#playerOne');//select element representing player 1

const playerTwo = document.querySelector('#playerTwo');//select element representing player 2

const randomize = document.querySelector('.randomize');//select element that will generate random numbers on click

var numberOne = Math.floor((Math.random()) * 9) + 1;//1-9

var numberTwo = Math.floor((Math.random()) * 9) + 1;//1-9

playerOne.setAttribute("src", `assets/dice${numberOne}.svg`);//dice1-9.svg

playerOne.setAttribute("alt", `dice with a value of ${numberOne}`);//dice with a value of dice1-9

playerTwo.setAttribute("src", `assets/dice${numberTwo}.svg`);//dice1-9.svg

playerTwo.setAttribute("alt", `dice with a value of ${numberTwo}`);//dice with a value of dice1-9

//algorithm to determine winner of the game, just does a comparison between the two numbers and picks the greater as the winner, also takes care of draws
if (numberOne > numberTwo) {
    winner.textContent = "Player1 WINS!🎉";
} else if (numberOne < numberTwo) {
    winner.textContent = "Player2 WINS!🎉";
} else {
    winner.textContent = "It's a DRAW!😁";
}
//restart the game when "randomize!" is clicked, basically repeats the code above with a few excpetions
randomize.addEventListener('click', () => {
    numberOne = Math.floor((Math.random()) * 9) + 1;

    numberTwo = Math.floor((Math.random()) * 9) + 1;
    
    playerOne.setAttribute("src", `assets/dice${numberOne}.svg`);

    playerOne.setAttribute("alt", `dice with a value of ${numberOne}`);

    playerTwo.setAttribute("src", `assets/dice${numberTwo}.svg`);

    playerTwo.setAttribute("alt", `dice with a value of ${numberTwo}`);

    if (numberOne > numberTwo) {
        winner.textContent = "Player1 WINS!🎉";
    } else if (numberOne < numberTwo) {
        winner.textContent = "Player2 WINS!🎉";
    } else {
        winner.textContent = "It's a DRAW!😁";
    }
})

