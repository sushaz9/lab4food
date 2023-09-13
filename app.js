console.log("Hello!!");

let username = prompt("What is your name?");
console.log("Hello" + username);

//concatenation
//console.log("Hello" + username);

let string = prompt("Is Haggis from Scotland?");
console.log("response");


let score = prompt("How much do you like Haggis out of 10 (0-10)");

let message;
if (score < 5) {
    message = "Ouch";
} else if (score > 5) {
    message = "Mmm!";} 
 else {
message = "WRONG!";
}

message = "Hello" + username + "." + message;
document.write(message);