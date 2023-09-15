console.log("Hello!!");

function greet() {
    let username = prompt("What is your name?");
    
    document.write("Welcome " + username);
}

function questionOne() {   
    let message = prompt("Haggis is from Scotland (Yes or No)");
    if (message === "Yes") {
    document.write("Well done! That wasn't so hard was it?");
    } else if (message === "No") {
    document.write("Wow. You're wrong"); 
    } else {
        document.write("Oops, try again");
    } 
}

function questionTwo() { 
    let answer = prompt("How much do you like Haggis out of 10? (0-10)"); 
    if (answer > 5 && answer <=10) { 
    document.write("An acquired taste to some but not to you!"); 
    } else if (answer <= 5 && answer >=0) {
    document.write("Sheep intestines aren't appealing to you? Okay, whatever. ");    
    }
}

function getRating() {
    let rating = prompt("Rate this site between 1-5")
    for (let i = 0; i < rating; i++){
        document.write("<img id ='bagpipes' src ='bagpipes.png'/>")
    }
}

