console.log("Hello!!");

function greet() {
    let username = prompt("What is your name?");
    
    document.write(username);
}

function questionOne() {
let message = prompt("Haggis is from Scotland (Yes or No)");
if (message === "yes") {

} else if (message === "no") {
    
} else {
    (message = "Try again");
}
console.log("yes")
}

function questionTwo() {
let answer = prompt("How much do you like Haggis out of 10 (0-10)");
} if (answer < 5) {
    answer = "Ouch";
} else if (answer > 5) {
    answer = "Mmm!";} 
 else {
answer = "WRONG!";
}