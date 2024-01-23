// console.log("Hello World!");

// window.alert("This is an alert!");
// window.alert("Enable cookies?!");

// let x = 123;
// let price = 10.99;
// let animal = "monke";
// let online = true;

// console.log(`I ate ${x} 20 hamburgers`);
// console.log(`They cost ${price} each!`);
// console.log(`I am a ${animal}.`);
// console.log(`${animal} is online: ${online}`);

// console.log(typeof price);
// console.log(typeof animal);
// console.log(typeof online);

// document.getElementById("header1").textContent = "Peepee Content";
// document.getElementById("header1").style.color = "black";

// document.getElementById("paragraph1").textContent = "I love weewees.";
// document.getElementById("paragraph1").style.color = "black";

//------------------------------------------------------------------

// let fullName = "Monke Myers";
// let age = 69;
// let isStudent = false;

// document.getElementById("p1").textContent = `They call me ${fullName}`;
// document.getElementById("p2").textContent = `You are ${age} years old`;
// document.getElementById("p3").textContent = `Enrolled: ${isStudent}`;

//------------------------------------------------------------------

// let students = 30;

// students = students + 1;
// students = students - 1;
// students = students * 2;
// students = students / 2;
// students = students ** 2; // Power of...
// students = students % 2;

// students += 2; Augmented versions...
// ...

// console.log(students);

//------------------------------------------------------------------

// User Input

// let username;

// username = window.prompt("Enter Username");
// console.log(`Whats up, ${username}?`);

// document.getElementById("submitBtn").onclick = function() {
//     username = document.getElementById("usernameTxt").value;
//     // console.log(`Welcome, ${username}`);
//     document.getElementById("myH1").textContent = `Hello ${username}!`
// }

//------------------------------------------------------------------

// let age = window.prompt("How old are you?");
// age = Number(age);
// age+=1;

// console.log(age, typeof age);

// Type Conversion

// let x = "pizza";
// let y = "pizza";
// let z = "pizza";

// x = Number(x);
// y = String(y);
// z = Boolean(z);

// console.log(x, typeof x);
// console.log(y, typeof y);
// console.log(z, typeof z);

//------------------------------------------------------------------

// let input = "4257235";
// let modifiedInput = input.substring(0, input.length - 1);

// console.log(modifiedInput);

//------------------------------------------------------------------

const PI = 3.14;
let radius;
let circumference;

// radius = window.prompt("Enter radius.");
// radius = Number(radius);

document.getElementById("submitBtn").onclick = function () {
  radius = document.getElementById("radiusInput").value;
  radius = Number(radius);
  circumference = 2 * PI * radius;
  console.log(circumference.toFixed(2) + "cm");
};

//------------------------------------------------------------------

// COUNTER PROGRAM

let counter = document.getElementById("counter");

function changeValue(x) {
  let numCount = Number(counter.textContent);
  numCount = Math.max(0, numCount + x);
  counter.textContent = numCount;
}

document.getElementById("reset").onclick = function () {
  counter.textContent = "0";
};

//------------------------------------------------------------------

// RANDOM NUMBER GENERATOR

// const min = 50;
// const max = 100;

// let randomNum = Math.floor(Math.random() * (max - min)) + min;

// console.log(randomNum);

const myButton = document.getElementById("myButton");
const label1 = document.getElementById("label1");
const label2 = document.getElementById("label2");
const label3 = document.getElementById("label3");
const min = 1;
const max = 6;
let randomNum1;
let randomNum2;
let randomNum3;

myButton.onclick = function () {
  randomNum1 = Math.floor(Math.random() * (max - min) + min);
  randomNum2 = Math.floor(Math.random() * (max - min) + min);
  randomNum3 = Math.floor(Math.random() * (max - min) + min);
  label1.textContent = randomNum1;
  label2.textContent = randomNum2;
  label3.textContent = randomNum3;
};

//------------------------------------------------------------------

// IF Statements

// let age = 25;
// let hasLicense = true;

// if (12 <= age >= 16) {
//   console.log("You are old enough to drive.");
//   if (hasLicense) {
//     console.log("You have your license.");
//   } else {
//     console.log("You do not have your license, yet!");
//   }
// } else {
//   console.log("You are not old enough to drive.");
// }

//------------------------------------------------------------------

// Checked Property

const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const paypalBtn = document.getElementById("paypalBtn");
const mySubmitBtn = document.getElementById("mySubmitBtn");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmitBtn.onclick = function () {
  if (myCheckBox.checked) {
    subResult.textContent = `You are monke!`;
  } else {
    subResult.textContent = `You are not monke!`;
  }

  if (visaBtn.checked) {
    paymentResult.textContent = `You bought Robux with Visa!`;
  } else if (masterCardBtn.checked) {
    paymentResult.textContent = `You bought Robux with MasterCard!`;
  } else if (paypalBtn.checked) {
    paymentResult.textContent = `You bought Robux with PayPal!`;
  } else {
    paymentResult.textContent = `You MUST select a payment type!`;
  }
};

//------------------------------------------------------------------

// Ternary Operators

// let age = 21;
// let message = age >= 18 ? `You're an old monke` : `You're an adolescent monke`;
// console.log(message);

// let time = 16;
// let greeting = time < 12 ? `Good Morning!` : `Good Afternoon!`;
// console.log(greeting);

// let isStudent = false;
// let studentMessage = isStudent ? `You are a student` : `You are NOT a student`;
// console.log(studentMessage);

let purchaseAmount = 125;
let discount = purchaseAmount >= 100 ? 10 : 0;
console.log(
  `Your total is £${purchaseAmount - (purchaseAmount * discount) / 100}!`
);
