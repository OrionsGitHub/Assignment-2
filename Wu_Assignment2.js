/// Asignment 
/// Orion Wu 

// Larger or Smaller

let num1 = Number(prompt("Please enter a whole number: "));
let num2 = Number(prompt("Please enter a whole number: "));

if (num1 > num2) {
    document.write(num1, " is the larger number!");
}else if (num1 < num2) {
    document.write(num2, " is the larger number!");
}else {
    document.write(num1, " and ", num2, " are equal.");
}

// The Word Translator

let lang = prompt("Please enter a language code: ");

if (lang.toLowerCase() === 'de') {
    document.write('Hello World translated in German is: Hallo Welt');
} else if (lang.toLowerCase() === 'es') {
    document.write('Hello World translated in Spanish is: Hola Mundo');
} else if (lang.toLowerCase() === 'fr') {
    document.write('Hello World translated in French is: Bonjour le Monde ');
} else {
    document.write('Hello World translated in English is: Hello World ');
}

// The Coin Flip

let randomNum = Math.round(Math.random());
let coinFlip = randomNum;
let choice = prompt('Heads or Tails?');

if (coinFlip < 1) { 
    if ('HEADS' == choice.toUpperCase()) {
        alert("The flip was heads and you chose heads... you win!");
    } else if ('Heads' != choice){
        alert('The flip was heads and you chose tails.. you lose!');
    }
}else if (coinFlip > 0) {
    if ('TAILS' == choice.toUpperCase()) {
        alert("The flip was tails and you chose tails... you win!");
    } else if ('Heads' != choice){
        alert('The flip was tails and you chose heads.. you lose!');
    }

}

// Grade Assigner Application 

let grade = Number(prompt("Please enter a number 1 - 100"));

if (grade < 1 || grade > 100 ) {
    document.write("Please select a number within the requested range.");
} else if (grade >= 60 && grade <= 69) {
    document.write("You received a D")
}  else if (grade >= 70 && grade <= 79) {
    document.write("You received a C")
}  else if (grade >= 80 && grade <= 89) {
    document.write("You received a B")
}  else if (grade >= 90 && grade <= 100) {
    document.write("You received an A")
}  else {
    document.write("You received an F")
}

// The "Hitchhiker's guide to the Galaxy" Game
function endGame(){
    
    let gameOver = Number(prompt("Please rate the game between 1 and 10. 10 being good, and 1 being bad."))

    if (gameOver < 1 && gameOver > 10 ) {
        alert("Thanks for playing")
        
    } else if (gameOver >= 6 && gameOver <=10) {
        alert("Thanks for playing. Want to try again?")
        
    } else if (gameOver >= 1 && gameOver <=5) {
        alert("Thanks for playing. We are working hard to improve the game.")
    }

}

let start = prompt("Are you ready to play? yes or no?")

if (start.toLowerCase() == 'no') {
    alert("Thank you, feel free to try again.");
} else if (start.toLowerCase() == 'yes'){
    alert(`You are in a dark, dingy, and humid cave searching for the lost treasure of Captain Chingadera. 
    You are disoriented, lost, hungry and extremely thirsty.
    You see a speck of light in the distance ahead of you, something shimmering to your right,
    and the sound of running water to your left. Your back is against the wall.`);

    let move = prompt("Which direction would you like to head? (please enter forward, left, or right)");

    switch (move.toLowerCase()) {
        case 'left':
            alert("Your thirst has gotten the better of you. You trip on a rock, hit your head, and fall into a pool of water and drown!");
            endGame();
            break;
        case 'forward':
            alert("You walk 100 yards and safely make your way out of the cave.");
            endGame();
            break;
        case 'right':
            alert(`You found the gold! You walk into a small room and see thousands of gold coins, jewels, chalices, and more. 
                You jump into the pile of gold in celebration and immediately a hidden door slams down and traps you in the room forever!`);
            endGame();
            break;
        default:
            alert(`The ghost of Captain Chingadera has condemned you to eternal damnation and you shall now burn in the hot excoriation 
            for lifeless lowlifes for not choosing the correct option.`);
            endGame();
                }
} else {
   alert("Thank you, feel free to try again.");
}

