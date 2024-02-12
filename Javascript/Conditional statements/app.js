//CONDITIONAL STATEMENTS
//if statement
console.log("before my if statement");//To print the statement
let age = 19;
if (age >= 18) {
    console.log("You can vote");
    console.log("You can drive");
}
if (age < 18) {
    console.log("You cannot vote");
}
console.log("after my if statement");

//else if statement
let marks = 95;
if (marks >= 80) {
    console.log("A+");
}
else if (marks >= 60) {
    console.log("A");
}
else if (marks >= 45) {
    console.log("B");
}
else if (marks < 40) {
    console.log("C");
}

//else statement
let color = "red";
if (color === "red") {
    console.log("stop");
} else if (color === "yellow") {
    console.log("slow down");
} else if (color === "green") {
    console.log("go");
}
else {
    console.log("The traffic light is broken.");
}

//nested if else statement
let score = 15;
if (score >= 33) {
    console.log("Pass");
    if (score >= 80) {
        console.log("O");
    }
    else {
        console.log("A");
    }
}
else {
    console.log("better luck next time!")
}

//switch statement
let day = 7;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Wrong day!");
}

//Alerts and Prompts
alert("Something went wrong!");//alert(pop up message)

console.log("My name is Sudha");//normal print statement

console.error("This is an error message");//error statement

console.warn("This is a warning message");//warning statement

//prompts(we can take inputs from the user)
let firstName = prompt("Enter your firstname :");
let secondName = prompt("Enter your secondname :");
alert(`Welcome ${firstName +" "+ secondName}!`);
