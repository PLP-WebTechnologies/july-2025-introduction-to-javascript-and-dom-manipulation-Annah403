// variable declaration and conditions
let age = 20;

if (age >= 18){ console.log("You can vote!")} 
else;
{console.log("sorry , you cannot vote!")}


// custom functions
// calling a user
function greetUser (username){
    console.log("Hello " + username +  " Welcome Back! ")
}

// returning the results 
function square (num){
    return num* num
}

greetUser ("Anah");
console.log("square of 6 is:" + square(6));


// Loops

// For loop
for (let i = 1; i <= 5; i++) {
  console.log("number: " + i);
}

// While loop 
let count = 1;
while (count <= 3) {
  console.log("number: " + count);
  count++;
}

// DOM interactions
// chages the content of the h1
document.getElementById('h1').textContent = "Hello there!";

// changes the colour of paragraph text
document.getElementById("paragraph").style.color ="green";

// adding content 
let enjoy = document.createElement("p");
enjoy.textContent = "happy shopping!";
document.body.appendChild(enjoy);

// changes the button color
document.getElementById("btn").style.backgroundColor ="blue";


// change page color
document.getElementById("btn").addEventListener("click", function() {
      document.body.style.backgroundColor = "lightblue"; 
    });