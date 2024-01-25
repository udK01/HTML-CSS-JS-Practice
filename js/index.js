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
  console.log(`Circumference: ${circumference.toFixed(2)} cm`);
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
  `Ternary Operators: Your total is £${
    purchaseAmount - (purchaseAmount * discount) / 100
  }!`
);

//------------------------------------------------------------------

// Switch Case

let day = 2;

switch (day) {
  case 1:
    console.log("Switch Cases: Monday");
    break;
  case 2:
    console.log("Switch Cases: Tuesday");
    break;
  case 3:
    console.log("Switch Cases: Wednesday");
    break;
  case 4:
    console.log("Switch Cases: Thursday");
    break;
  case 5:
    console.log("Switch Cases: Friday");
    break;
  case 6:
    console.log("Switch Cases: Saturday");
    break;
  case 7:
    console.log("Switch Cases: Sunday");
    break;
  default:
    console.log(`Switch Cases: Invalid Day Variable "${day}"`);
}

let testScore = 66;
let letterGrade;

switch (true) {
  case testScore >= 90:
    letterGrade = "A";
    break;
  case testScore >= 80:
    letterGrade = "B";
    break;
  case testScore >= 70:
    letterGrade = "C";
    break;
  case testScore >= 60:
    letterGrade = "D";
    break;
  default:
    letterGrade = "F";
}

console.log(`Switch Cases: ${letterGrade}`);

//------------------------------------------------------------------

// String Methods

let username = "monke    ";
let phoneNumber = "123-456-7890";
let editedPhoneNum;

editedPhoneNum = phoneNumber.replace("-", "/");
console.log(`String Methods: .replace ${editedPhoneNum}`);

editedPhoneNum = phoneNumber.padStart(15, "0");
console.log(`String Methods: .padStart ${editedPhoneNum}`);

editedPhoneNum = phoneNumber.padEnd(15, "0");
console.log(`String Methods: .padEnd ${editedPhoneNum}`);

console.log(`String Methods: .ChatAt(0) = ${username.charAt(0)}`);
console.log(`String Methods: .indexOf(n) = ${username.indexOf("n")}`);
console.log(`String Methods: .length = ${username.length}`);
console.log(`String Methods: .trim = ${username.trim()}`);
console.log(`String Methods: .toUpperCase = ${username.toUpperCase()}`);
console.log(`String Methods: .toLowerCase = ${username.toLowerCase()}`);
console.log(`String Methods: .startsWith(" ") = ${username.startsWith(" ")}`);
console.log(`String Methods: .endsWith(" ") = ${username.endsWith(" ")}`);
console.log(`String Methods: .include(" ") = ${username.includes(" ")}`);

//------------------------------------------------------------------

// String Slicing

const fullName = "Business Monke";

// let firstName = fullName.slice(0, 8);
// let lastName = fullName.slice(9, 14);

let firstName = fullName.slice(0, fullName.indexOf(" "));
let lastName = fullName.slice(fullName.indexOf(" ") + 1);

let firstChar = fullName.slice(0, 1);
let lastChar = fullName.slice(-1);

console.log(`String Slicing: My Full Name Is: ${firstName} ${lastName}`);
console.log(
  `String Slicing: The first character in my name is ${firstChar} and the last is ${lastChar}`
);

const email = "monke@monkeLand.com";

let emailUsername = email.slice(0, email.indexOf("@"));
let extension = email.slice(email.indexOf("@") + 1);

console.log(`String Slicing: ${emailUsername}`);
console.log(`String Slicing: ${extension}`);

//------------------------------------------------------------------

// Method Chaining

// ----- NO METHOD CHAINING ----- //

// let chainUser = window.prompt("Enter your username: ");

// chainUser = chainUser.trim();
// let letter = chainUser.charAt(0);
// letter = letter.toUpperCase();

// let extraChars = chainUser.slice(1);
// extraChars = extraChars.toLowerCase();
// chainUser = letter + extraChars;

// console.log(`No Method Chaining: ${chainUser}`);

// // ----- METHOD CHAINING ----- //

// chainUser =
//   chainUser.trim().charAt(0).toUpperCase() +
//   chainUser.trim().slice(1).toLowerCase();

// console.log(`Method Chaining: ${chainUser}`);

//------------------------------------------------------------------

// Logical Operators

const temp = 20;
const isSunny = false;

if (temp > 0 && temp <= 30) {
  console.log(`Logical Operators: The weather is GOOD`);
} else {
  console.log(`Logical Operators: The weather is BAD`);
}

if (temp <= 0 || temp > 30) {
  console.log(`Logical Operators: The weather is BAD`);
} else {
  console.log(`Logical Operators: The weather is GOOD`);
}

if (isSunny) {
  console.log(`Logical Operators: It is SUNNY!`);
} else {
  console.log(`Logical Operators: It is CLOUDY!`);
}

if (!isSunny) {
  console.log(`Logical Operators: It is CLOUDY!`);
} else {
  console.log(`Logical Operators: It is SUNNY!`);
}

//------------------------------------------------------------------

// Strict Equality

// = assign operator
// == comparison operator (compare if vlaues are equal)
// === strict equality operator (compare if values & datatype are equal)
// != inequality operator
// !== strict inequality operator

if (PI == "3.14") {
  console.log("Strict Equality: That is Pi.");
} else {
  console.log("Strict Equality: That is NOT Pi.");
}

if (PI === "3.14") {
  // Number === String, hence false.
  console.log("Strict Equality: That is Pi.");
} else {
  console.log("Strict Equality: That is NOT Pi.");
}

if (PI != "3.14") {
  console.log("Strict Equality: That is NOT Pi.");
} else {
  console.log("Strict Equality: That is Pi.");
}

if (PI !== "3.14") {
  console.log("Strict Equality: That is NOT Pi.");
} else {
  console.log("Strict Equality: That is Pi.");
}

//------------------------------------------------------------------

// While Loops

// let whileUsername = "";

// while (whileUsername === "" || whileUsername === null) {
//   whileUsername = window.prompt(`Enter your name.`);
// }

// console.log(`Hello ${whileUsername}`);

// let doWhileUsername;

// do {
//   doWhileUsername = window.prompt(`Enter your name.`);
// } while (doWhileUsername === "" || doWhileUsername === null);

// console.log(`Hello ${doWhileUsername}`);

// let loggedIn = false;
// let loginUsername;
// let longinPassword;

// while (!loggedIn) {
//   loginUsername = window.prompt(`Enter your username.`);
//   longinPassword = window.prompt(`Enter your password.`);

//   if (loginUsername === `admin` && longinPassword === `password`) {
//     loggedIn = true;
//     console.log(`You are logged in!`);
//   } else {
//     console.log(`Invalid credentials! Please try again.`);
//   }
// }

// For Loops

for (let i = 0; i <= 10; i++) {
  if (i == 7) {
    continue;
  }

  console.log(`For Loop Continue At 7: i: ${i}`);
}

for (let i = 0; i <= 5; i++) {
  if (i == 3) {
    break;
  }

  console.log(`For Loop Break At 3: i: ${i}`);
}

//------------------------------------------------------------------

// Number Guessing Game

const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

let attempts = 0;
let guess;
let running = true;

while (running) {
  guess = window.prompt(`Guess a number between ${minNum} - ${maxNum}.`);
  guess = Number(guess);

  if (isNaN(guess) || guess < minNum || guess > maxNum) {
    window.alert(`Please enter a valid number!`);
  } else {
    attempts++;
    if (guess < answer) {
      window.alert(`TOO LOW! TRY AGAIN`);
    } else if (guess > answer) {
      window.alert(`TOO HIGH! TRY AGAIN`);
    } else {
      window.alert(
        `CORRECT! The answer was ${answer}. It took you ${attempts} attempts.`
      );
      running = false;
    }
  }
}
