let userChoice = prompt("Heads or tails?");
let randomNumber = Math.floor((Math.random() * 1) + 1);

if(randomNumber = 0) {
   computerChoice = ("heads"); 
} else if(randomNumber = 1) {
    computerChoice = ("tails");
}

if (userChoice = computerChoice) {
    alert ("You guessed right! The coin flip landed on " + userChoice);
} else {
    alert ("Sorry, the coin flip landed on " + computerChoice);
}

let birthYear = prompt("What year were you born?");

if((2024 - birthYear) > 21) {
    alert ("You are old enough to drink in the US");
} else if((2024 - birthYear) == 21) {
    alert ("You are old enough to drink in the US...barely");
} else if((2024 - birthYear) < 21) {
    alert ("Sorry, you are not old enough to drink in the US");
}