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

// const PI = 3.14;
// let radius;
// let circumference;

// // radius = window.prompt("Enter radius.");
// // radius = Number(radius);

// document.getElementById("submitBtn").onclick = function () {
//   radius = document.getElementById("radiusInput").value;
//   radius = Number(radius);
//   circumference = 2 * PI * radius;
//   console.log(`Circumference: ${circumference.toFixed(2)} cm`);
// };

//------------------------------------------------------------------

// COUNTER PROGRAM

// let counter = document.getElementById("counter");

// function changeValue(x) {
//   let numCount = Number(counter.textContent);
//   numCount = Math.max(0, numCount + x);
//   counter.textContent = numCount;
// }

// document.getElementById("reset").onclick = function () {
//   counter.textContent = "0";
// };

// //------------------------------------------------------------------

// // RANDOM NUMBER GENERATOR

// // const min = 50;
// // const max = 100;

// // let randomNum = Math.floor(Math.random() * (max - min)) + min;

// // console.log(randomNum);

// const myButton = document.getElementById("myButton");
// const label1 = document.getElementById("label1");
// const label2 = document.getElementById("label2");
// const label3 = document.getElementById("label3");
// const min = 1;
// const max = 6;
// let randomNum1;
// let randomNum2;
// let randomNum3;

// myButton.onclick = function () {
//   randomNum1 = Math.floor(Math.random() * (max - min) + min);
//   randomNum2 = Math.floor(Math.random() * (max - min) + min);
//   randomNum3 = Math.floor(Math.random() * (max - min) + min);
//   label1.textContent = randomNum1;
//   label2.textContent = randomNum2;
//   label3.textContent = randomNum3;
// };

// //------------------------------------------------------------------

// // IF Statements

// // let age = 25;
// // let hasLicense = true;

// // if (12 <= age >= 16) {
// //   console.log("You are old enough to drive.");
// //   if (hasLicense) {
// //     console.log("You have your license.");
// //   } else {
// //     console.log("You do not have your license, yet!");
// //   }
// // } else {
// //   console.log("You are not old enough to drive.");
// // }

// //------------------------------------------------------------------

// // Checked Property

// const myCheckBox = document.getElementById("myCheckBox");
// const visaBtn = document.getElementById("visaBtn");
// const masterCardBtn = document.getElementById("masterCardBtn");
// const paypalBtn = document.getElementById("paypalBtn");
// const mySubmitBtn = document.getElementById("mySubmitBtn");
// const subResult = document.getElementById("subResult");
// const paymentResult = document.getElementById("paymentResult");

// mySubmitBtn.onclick = function () {
//   if (myCheckBox.checked) {
//     subResult.textContent = `You are monke!`;
//   } else {
//     subResult.textContent = `You are not monke!`;
//   }

//   if (visaBtn.checked) {
//     paymentResult.textContent = `You bought Robux with Visa!`;
//   } else if (masterCardBtn.checked) {
//     paymentResult.textContent = `You bought Robux with MasterCard!`;
//   } else if (paypalBtn.checked) {
//     paymentResult.textContent = `You bought Robux with PayPal!`;
//   } else {
//     paymentResult.textContent = `You MUST select a payment type!`;
//   }
// };

// //------------------------------------------------------------------

// // Ternary Operators

// // let age = 21;
// // let message = age >= 18 ? `You're an old monke` : `You're an adolescent monke`;
// // console.log(message);

// // let time = 16;
// // let greeting = time < 12 ? `Good Morning!` : `Good Afternoon!`;
// // console.log(greeting);

// // let isStudent = false;
// // let studentMessage = isStudent ? `You are a student` : `You are NOT a student`;
// // console.log(studentMessage);

// let purchaseAmount = 125;
// let discount = purchaseAmount >= 100 ? 10 : 0;
// console.log(
//   `Ternary Operators: Your total is £${
//     purchaseAmount - (purchaseAmount * discount) / 100
//   }!`
// );

// //------------------------------------------------------------------

// // Switch Case

// let day = 2;

// switch (day) {
//   case 1:
//     console.log("Switch Cases: Monday");
//     break;
//   case 2:
//     console.log("Switch Cases: Tuesday");
//     break;
//   case 3:
//     console.log("Switch Cases: Wednesday");
//     break;
//   case 4:
//     console.log("Switch Cases: Thursday");
//     break;
//   case 5:
//     console.log("Switch Cases: Friday");
//     break;
//   case 6:
//     console.log("Switch Cases: Saturday");
//     break;
//   case 7:
//     console.log("Switch Cases: Sunday");
//     break;
//   default:
//     console.log(`Switch Cases: Invalid Day Variable "${day}"`);
// }

// let testScore = 66;
// let letterGrade;

// switch (true) {
//   case testScore >= 90:
//     letterGrade = "A";
//     break;
//   case testScore >= 80:
//     letterGrade = "B";
//     break;
//   case testScore >= 70:
//     letterGrade = "C";
//     break;
//   case testScore >= 60:
//     letterGrade = "D";
//     break;
//   default:
//     letterGrade = "F";
// }

// console.log(`Switch Cases: ${letterGrade}`);

// //------------------------------------------------------------------

// // String Methods

// let username = "monke    ";
// let phoneNumber = "123-456-7890";
// let editedPhoneNum;

// editedPhoneNum = phoneNumber.replace("-", "/");
// console.log(`String Methods: .replace ${editedPhoneNum}`);

// editedPhoneNum = phoneNumber.padStart(15, "0");
// console.log(`String Methods: .padStart ${editedPhoneNum}`);

// editedPhoneNum = phoneNumber.padEnd(15, "0");
// console.log(`String Methods: .padEnd ${editedPhoneNum}`);

// console.log(`String Methods: .ChatAt(0) = ${username.charAt(0)}`);
// console.log(`String Methods: .indexOf(n) = ${username.indexOf("n")}`);
// console.log(`String Methods: .length = ${username.length}`);
// console.log(`String Methods: .trim = ${username.trim()}`);
// console.log(`String Methods: .toUpperCase = ${username.toUpperCase()}`);
// console.log(`String Methods: .toLowerCase = ${username.toLowerCase()}`);
// console.log(`String Methods: .startsWith(" ") = ${username.startsWith(" ")}`);
// console.log(`String Methods: .endsWith(" ") = ${username.endsWith(" ")}`);
// console.log(`String Methods: .include(" ") = ${username.includes(" ")}`);

// //------------------------------------------------------------------

// // String Slicing

// const fullName = "Business Monke";

// // let firstName = fullName.slice(0, 8);
// // let lastName = fullName.slice(9, 14);

// let firstName = fullName.slice(0, fullName.indexOf(" "));
// let lastName = fullName.slice(fullName.indexOf(" ") + 1);

// let firstChar = fullName.slice(0, 1);
// let lastChar = fullName.slice(-1);

// console.log(`String Slicing: My Full Name Is: ${firstName} ${lastName}`);
// console.log(
//   `String Slicing: The first character in my name is ${firstChar} and the last is ${lastChar}`
// );

// const email = "monke@monkeLand.com";

// let emailUsername = email.slice(0, email.indexOf("@"));
// let extension = email.slice(email.indexOf("@") + 1);

// console.log(`String Slicing: ${emailUsername}`);
// console.log(`String Slicing: ${extension}`);

// //------------------------------------------------------------------

// // Method Chaining

// // ----- NO METHOD CHAINING ----- //

// // let chainUser = window.prompt("Enter your username: ");

// // chainUser = chainUser.trim();
// // let letter = chainUser.charAt(0);
// // letter = letter.toUpperCase();

// // let extraChars = chainUser.slice(1);
// // extraChars = extraChars.toLowerCase();
// // chainUser = letter + extraChars;

// // console.log(`No Method Chaining: ${chainUser}`);

// // // ----- METHOD CHAINING ----- //

// // chainUser =
// //   chainUser.trim().charAt(0).toUpperCase() +
// //   chainUser.trim().slice(1).toLowerCase();

// // console.log(`Method Chaining: ${chainUser}`);

// //------------------------------------------------------------------

// // Logical Operators

// const temp = 20;
// const isSunny = false;

// if (temp > 0 && temp <= 30) {
//   console.log(`Logical Operators: The weather is GOOD`);
// } else {
//   console.log(`Logical Operators: The weather is BAD`);
// }

// if (temp <= 0 || temp > 30) {
//   console.log(`Logical Operators: The weather is BAD`);
// } else {
//   console.log(`Logical Operators: The weather is GOOD`);
// }

// if (isSunny) {
//   console.log(`Logical Operators: It is SUNNY!`);
// } else {
//   console.log(`Logical Operators: It is CLOUDY!`);
// }

// if (!isSunny) {
//   console.log(`Logical Operators: It is CLOUDY!`);
// } else {
//   console.log(`Logical Operators: It is SUNNY!`);
// }

// //------------------------------------------------------------------

// // Strict Equality

// // = assign operator
// // == comparison operator (compare if vlaues are equal)
// // === strict equality operator (compare if values & datatype are equal)
// // != inequality operator
// // !== strict inequality operator

// // if (PI == "3.14") {
// //   console.log("Strict Equality: That is Pi.");
// // } else {
// //   console.log("Strict Equality: That is NOT Pi.");
// // }

// // if (PI === "3.14") {
// //   // Number === String, hence false.
// //   console.log("Strict Equality: That is Pi.");
// // } else {
// //   console.log("Strict Equality: That is NOT Pi.");
// // }

// // if (PI != "3.14") {
// //   console.log("Strict Equality: That is NOT Pi.");
// // } else {
// //   console.log("Strict Equality: That is Pi.");
// // }

// // if (PI !== "3.14") {
// //   console.log("Strict Equality: That is NOT Pi.");
// // } else {
// //   console.log("Strict Equality: That is Pi.");
// // }

// //------------------------------------------------------------------

// // While Loops

// // let whileUsername = "";

// // while (whileUsername === "" || whileUsername === null) {
// //   whileUsername = window.prompt(`Enter your name.`);
// // }

// // console.log(`Hello ${whileUsername}`);

// // let doWhileUsername;

// // do {
// //   doWhileUsername = window.prompt(`Enter your name.`);
// // } while (doWhileUsername === "" || doWhileUsername === null);

// // console.log(`Hello ${doWhileUsername}`);

// // let loggedIn = false;
// // let loginUsername;
// // let longinPassword;

// // while (!loggedIn) {
// //   loginUsername = window.prompt(`Enter your username.`);
// //   longinPassword = window.prompt(`Enter your password.`);

// //   if (loginUsername === `admin` && longinPassword === `password`) {
// //     loggedIn = true;
// //     console.log(`You are logged in!`);
// //   } else {
// //     console.log(`Invalid credentials! Please try again.`);
// //   }
// // }

// // For Loops

// for (let i = 0; i <= 10; i++) {
//   if (i == 7) {
//     continue;
//   }

//   console.log(`For Loop Continue At 7: i: ${i}`);
// }

// for (let i = 0; i <= 5; i++) {
//   if (i == 3) {
//     break;
//   }

//   console.log(`For Loop Break At 3: i: ${i}`);
// }

// //------------------------------------------------------------------

// // Number Guessing Game

// // const minNum = 1;
// // const maxNum = 100;
// // const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

// // let attempts = 0;
// // let guess;
// // let running = true;

// // while (running) {
// //   guess = window.prompt(`Guess a number between ${minNum} - ${maxNum}.`);
// //   guess = Number(guess);

// //   if (isNaN(guess) || guess < minNum || guess > maxNum) {
// //     window.alert(`Please enter a valid number!`);
// //   } else {
// //     attempts++;
// //     if (guess < answer) {
// //       window.alert(`TOO LOW! TRY AGAIN`);
// //     } else if (guess > answer) {
// //       window.alert(`TOO HIGH! TRY AGAIN`);
// //     } else {
// //       window.alert(
// //         `CORRECT! The answer was ${answer}. It took you ${attempts} attempts.`
// //       );
// //       running = false;
// //     }
// //   }
// // }

// //------------------------------------------------------------------

// // Functions

// function happyBirthday(birthdayName, age) {
//   console.log(`Functions: Happy Birthday To You!`);
//   console.log(`Functions: Happy Birthday To You!`);
//   console.log(`Functions: Happy Birthday To Dear ${birthdayName}!`);
//   console.log(`Functions: Happy Birthday To You!`);
//   console.log(`Functions: You are ${age}  years old!`);
// }

// function add(x, y) {
//   return x + y;
// }

// function subtract(x, y) {
//   return x - y;
// }

// function multiply(x, y) {
//   return x * y;
// }

// function divide(x, y) {
//   return x / y;
// }

// function isEven(number) {
//   return number % 2 === 0;
// }

// function isValidEmail(email) {
//   return email.includes(`@`);
// }

// happyBirthday("Bob", 9);
// happyBirthday("Jake", 12);
// happyBirthday("James", 14);

// console.log(`Functions Add: ${add(2, 3)}`);
// console.log(`Functions Subtract: ${subtract(2, 3)}`);
// console.log(`Functions Multiply: ${multiply(2, 3)}`);
// console.log(`Functions Divide: ${divide(2, 3)}`);
// console.log(`Functions IsEven: ${isEven(3)}`);
// console.log(
//   `Functions IsValidEmail: ${isValidEmail("monke@businessMonke.com")}`
// );

// //------------------------------------------------------------------

// // Variable Scope

// let x = 3;

// function function1() {
//   let x = 1;
//   console.log(`Variable Scope: ${x}`);
// }

// function function2() {
//   let x = 2;
//   console.log(`Variable Scope: ${x}`);
// }

// function1();
// function2();

// //------------------------------------------------------------------

// // Temperature Converter

// const temperatureInput = document.getElementById("temperatureInput");
// const toFahrenheit = document.getElementById("toFahrenheit");
// const toCelsius = document.getElementById("toCelsius");
// const result = document.getElementById("result");

// function convert() {
//   if (toFahrenheit.checked) {
//     result.textContent =
//       Number((temperatureInput.value * 9) / 5 + 32).toFixed(1) + "°F";
//   } else if (toCelsius.checked) {
//     result.textContent =
//       Number((temperatureInput.value - 32) * (5 / 9)).toFixed(1) + "°C";
//   } else {
//     result.textContent = "Select a unit";
//   }
// }

// //------------------------------------------------------------------

// // Arrays

// let fruits = ["banana", "orange", "strawberry"];

// // fruits[3] = "coconut";
// // fruits.push("coconut");
// // fruits.pop();
// // fruits.unshift("mango");
// // fruits.shift("mango");

// let numOfFruits = fruits.length;
// let index = fruits.indexOf("banana");

// console.log(`Arrays: ${fruits}`);
// console.log(`Arrays: ${fruits[0]}`);
// console.log(`Arrays: ${fruits[1]}`);
// console.log(`Arrays: ${fruits[2]}`);
// console.log(`Arrays: ${fruits[3]}`);
// console.log(`Arrays: Number Of Fruits: ${numOfFruits}`);
// console.log(`Arrays: Search For Banana's Index: ${index}`);

// // fruits.sort();
// // fruits.sort().reverse;

// for (let i = 0; i < fruits.length; i++) {
//   console.log(`Arrays: Array Loop: ${fruits[i]}`);
// }

// for (let i = fruits.length - 1; i >= 0; i--) {
//   console.log(`Arrays: Reverse: ${fruits[i]}`);
// }

// for (let fruit of fruits) {
//   console.log(`Arrays: ${fruit}`);
// }

// //------------------------------------------------------------------

// // 2D Arrays

// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// matrix[0][0] = `X`;
// matrix[0][1] = `O`;
// matrix[0][2] = `X`;

// matrix[1][0] = `O`;
// matrix[1][1] = `X`;
// matrix[1][2] = `O`;

// matrix[2][0] = `X`;
// matrix[2][1] = `O`;
// matrix[2][2] = `X`;

// for (let row of matrix) {
//   const rowString = row.join(` `);
//   console.log(`2D Arrays: ${rowString}`);
// }

// //------------------------------------------------------------------

// // Spread Operator

// let numbers = [1, 2, 3, 4, 5];
// let spreadUsername = `monke business`;
// let fruitsArr = ["apple", "orange", "banana"];
// let newFruits = [...fruitsArr];
// let vegetables = ["carrots", "celery", "potatoes"];
// let foods = [...fruits, ...vegetables, "eggs", "milk"];

// let maximum = Math.max(...numbers);
// let minimum = Math.min(...numbers);
// let letters = [...spreadUsername].join(`.`);

// console.log(`Spread Operator: Maximum Number: ${maximum}`);
// console.log(`Spread Operator: Minimum Number: ${minimum}`);
// console.log(`Spread Operator: Spread Username: ${letters}`);
// console.log(`Spread Operator: New Fruits: ${newFruits}`);
// console.log(`Spread Operator: Foods: ${foods}`);

// //------------------------------------------------------------------

// // Rest Parameters

// // function openFridge(...foodsArr) {
// //   console.log(...foodsArr);
// //   // console.log(`Rest Parameters: ${foodsArr}`);
// // }

// // function getFood(...foodsArr1) {
// //   return foodsArr1;
// // }

// // const food1 = "pizza";
// // const food2 = "hamburger";
// // const food3 = "hotdog";
// // const food4 = "sushi";
// // const food5 = "ramen";

// // // openFridge(food1, food2, food3, food4, food5);

// // const foods1 = getFood(food1, food2, food3, food4, food5);

// // console.log(`Rest Parameters: ${foods1}`);

// // function sum(...numbers) {
// //   let result = 0;
// //   for (let n of numbers) {
// //     result += n;
// //   }
// //   return result;
// // }

// // function getAverage(...numbers) {
// //   let result = 0;
// //   for (let n of numbers) {
// //     result += n;
// //   }
// //   return result / numbers.length;
// // }

// // const total = sum(1, 2, 3, 4, 5);
// // console.log(`Rest Parameters: Your total is: £${total}`);

// // const average = getAverage(75, 100, 85, 90, 50);
// // console.log(`Rest Parameters: The class average was ${average}% on the exam.`);

// function combineStrings(...strings) {
//   return strings.join(" ");
// }

// const combinedName = combineStrings("Mr.", "Banana", "Circular", "III");

// console.log(`Rest Parameters: ${combinedName}`);

// //------------------------------------------------------------------

// // Dice Roller

// function rollDice() {
//   const diceInput = document.getElementById("diceInput").value;
//   const diceResults = document.getElementById("diceResults");
//   const diceImages = document.getElementById("diceImages");
//   const max = 6;
//   const min = 1;

//   let diceResultsArr = [];
//   let diceImagesArr = [];

//   for (let i = 0; i < diceInput; i++) {
//     const value = Math.floor(Math.random() * max) + min;
//     diceResultsArr[i] = value;
//     diceImagesArr[i] = `<img id="dice" src="./images/${value}.png">`;
//   }

//   diceResults.textContent = `Dice: ${diceResultsArr}`;
//   diceImages.innerHTML = diceImagesArr.join(" ");

//   // console.log(`Dice Input: ${diceInput}, Current Rolls: ${diceResultsArr}`);
// }

// //------------------------------------------------------------------

// // Random Password Generator

// function generatePassword(
//   length,
//   includeLowercase,
//   includeUppercase,
//   includeNumbers,
//   includeSymbols
// ) {
//   const lowChars = `abcdefghijklmnopqrstuvwxyz`;
//   const upChars = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
//   const numberChars = `0123456789`;
//   const symbolChars = `!"£$%^&*()_-+=?><,./`;
//   let allowedChars = ``;
//   let password = ``;

//   // if (includeLowercase) {
//   //   allowedChars += lowChars;
//   // }

//   // if (includeUppercase) {
//   //   allowedChars += upChars;
//   // }

//   // if (includeNumbers) {
//   //   allowedChars += numberChars;
//   // }

//   // if (includeSymbols) {
//   //   allowedChars += symbolChars;
//   // }

//   allowedChars += includeLowercase ? lowChars : ``;
//   allowedChars += includeUppercase ? upChars : ``;
//   allowedChars += includeNumbers ? numberChars : ``;
//   allowedChars += includeSymbols ? symbolChars : ``;

//   for (let i = 0; i < length; i++) {
//     password += allowedChars.charAt(
//       Math.floor(Math.random() * allowedChars.length)
//     );
//   }

//   return password;
// }

// const passwordLength = 10;
// const includeLowercase = true;
// const includeUppercase = true;
// const includeNumbers = true;
// const includeSymbols = false;

// const generatedPassword = generatePassword(
//   passwordLength,
//   includeLowercase,
//   includeUppercase,
//   includeNumbers,
//   includeSymbols
// );

// console.log(
//   `Random Password Generator: ${generatedPassword}, password length: ${generatedPassword.length}`
// );

// //------------------------------------------------------------------

// // Call Back

// // function hello() {
// //   setTimeout(function () {
// //     console.log(`Call Back: Hello!`);
// //   }, 3000);
// // }

// // function hello(callback) {
// //   console.log(`Call Back: Hello!`);
// //   callback();
// // }

// // function wait() {
// //   console.log(`Call Back: Wait!`);
// // }

// // function leave() {
// //   console.log(`Call Back: Leave!`);
// // }

// // function goodbye() {
// //   console.log(`Call Back: Good Bye!`);
// // }

// // hello(wait);

// function sum(callback, x, y) {
//   let sumResult = x + y;
//   callback(sumResult);
// }

// function displayConsole(sumResult) {
//   console.log(`Call Back: ${sumResult}`);
// }

// function displayPage(sumResult) {
//   document.getElementById("callbackH2").textContent = sumResult;
// }

// sum(displayConsole, 1, 2);
// sum(displayPage, 1, 2);

// //------------------------------------------------------------------

// // For Each

// // let numbersArr = [1, 2, 3, 4, 5];

// // function double(element, index, array) {
// //   array[index] = element * 2;
// // }

// // function triple(element, index, array) {
// //   array[index] = element * 3;
// // }

// // function square(element, index, array) {
// //   array[index] = Math.pow(element, 2);
// // }

// // function cube(element, index, array) {
// //   array[index] = Math.pow(element, 3);
// // }

// // function displayNumbers(element) {
// //   console.log(`For Each: ${element}`);
// // }

// // numbersArr.forEach(double);
// // numbersArr.forEach(triple);
// // numbersArr.forEach(square);
// // numbersArr.forEach(cube);
// // numbersArr.forEach(displayNumbers);

// let forEachFruits = [`apple`, `orange`, `banana`, `coconut`];
// let forEachFruitsUp = [`APPLE`, `ORANGE`, `BANANA`, `COCONUT`];

// function display(element) {
//   console.log(`For Each: ${element}`);
// }

// function upperCase(element, index, array) {
//   array[index] = element.toUpperCase();
// }

// function lowerCase(element, index, array) {
//   array[index] = element.toLowerCase();
// }

// function capitaliseFirst(element, index, array) {
//   array[index] =
//     element.charAt(0).toUpperCase() + element.slice(1, element.length);
// }

// // forEachFruits.forEach(upperCase);
// forEachFruits.forEach(capitaliseFirst);
// forEachFruitsUp.forEach(lowerCase);
// forEachFruits.forEach(display);
// forEachFruitsUp.forEach(display);

// //------------------------------------------------------------------

// // Map

// // Example 1.

// // const mapNumbers = [1, 2, 3, 4, 5];
// // const squares = mapNumbers.map(cube);

// // function square(element) {
// //   return Math.pow(element, 2);
// // }

// // function cube(element) {
// //   return Math.pow(element, 3);
// // }

// // console.log(`Map: ${squares}`);

// // Example 2.

// // const students = [`Spongebob`, `Patrick`, `Squidward`, `Sandy`];
// // const studentsUpper = students.map(upperCase);
// // const studentsLower = students.map(lowerCase);

// // function upperCase(element) {
// //   return element.toUpperCase();
// // }

// // function lowerCase(element) {
// //   return element.toLowerCase();
// // }

// // console.log(`Map: ${studentsUpper}`);
// // console.log(`Map: ${studentsLower}`);

// // Example 3.

// const dates = [`2024-1-10`, `2025-2-20`, `2026-3-30`];
// const formattedDates = dates.map(formatDates);

// function formatDates(element) {
//   const parts = element.split("-");
//   return `${parts[1]}/${parts[2]}/${parts[0]}`;
// }

// console.log(`Map, Unformatted Dates: ${dates}`);
// console.log(`Map, Formatted Dates: ${formattedDates}`);

// //------------------------------------------------------------------

// // Filter

// // Example 1.

// // let fNumbers = [1, 2, 3, 4, 5, 6, 7];
// // let evenNumbers = fNumbers.filter(isEven);
// // let oddNumbers = fNumbers.filter(isOdd);

// // function isEven(element) {
// //   return element % 2 === 0;
// // }

// // function isOdd(element) {
// //   return element % 2 !== 0;
// // }

// // console.log(`Filter: ${oddNumbers}`);
// // console.log(`Filter: ${evenNumbers}`);

// // Example 2.

// // const ages = [16, 17, 18, 18, 19, 20, 60];
// // const adults = ages.filter(isAdult);
// // const children = ages.filter(isChild);

// // function isAdult(element) {
// //   return element >= 18;
// // }

// // function isChild(element) {
// //   return element < 18;
// // }

// // console.log(`Filter Children: ${children}`);
// // console.log(`Filter Adults: ${adults}`);

// // Example 3.

// const words = [`apple`, `orange`, `banana`, `kiwi`, `pomegranate`, `coconut`];
// const shortWords = words.filter(getShortWords);
// const longWords = words.filter(getLongWords);

// function getShortWords(element) {
//   return element.length <= 6;
// }

// function getLongWords(element) {
//   return element.length > 6;
// }

// console.log(`Filter: ${shortWords}`);
// console.log(`Filter: ${longWords}`);

// //------------------------------------------------------------------

// // Reduce

// // Example 1.

// // const prices = [5, 30, 10, 25, 15, 20];
// // const total = prices.reduce(sumPrices);

// // function sumPrices(accumulator, element) {
// //   return accumulator + element;
// // }

// // console.log(`Reduce: £${total.toFixed(2)}`);

// // Example 2.

// const grades = [75, 50, 90, 80, 65, 95];
// const minValue = grades.reduce(getMin);
// const maxValue = grades.reduce(getMax);

// function getMin(accumulator, element) {
//   return Math.min(accumulator, element);
// }

// function getMax(accumulator, element) {
//   return Math.max(accumulator, element);
// }

// console.log(`Reduce: ${minValue}`);
// console.log(`Reduce: ${maxValue}`);

// //------------------------------------------------------------------

// // Function Expression

// // const hello = function () {
// //   console.log(`Hello!`);
// // };

// // setTimeout(function () {
// //   console.log(`Hello!`);
// // }, 3000);

// const funcNumbers = [1, 2, 3, 4, 5, 6];

// const squares = funcNumbers.map(function (element) {
//   return Math.pow(element, 2);
// });

// const cubes = funcNumbers.map(function (element) {
//   return Math.pow(element, 3);
// });

// const evenNumbers = funcNumbers.filter(function (element) {
//   return element % 2 === 0;
// });

// const oddNumbers = funcNumbers.filter(function (element) {
//   return element % 2 !== 0;
// });

// const total = funcNumbers.reduce(function (accumulator, element) {
//   return accumulator + element;
// });

// console.log(`Function Expression: ${squares}`);
// console.log(`Function Expression: ${cubes}`);
// console.log(`Function Expression: ${evenNumbers}`);
// console.log(`Function Expression: ${oddNumbers}`);
// console.log(`Function Expression: ${total}`);

// //------------------------------------------------------------------

// // Arrow Functions

// // function hello() {
// //   console.log(`Arrow Functions: Hello!`);
// // }

// // hello();

// const hello = (name, age) => {
//   console.log(`Arrow Functions: Hello, ${name}!`);
//   console.log(`Arrow Functions: You are ${age} years old.`);
// };

// hello(`Monke`, 8);

// // setTimeout(function () {
// //   console.log(`Arrow Function: Hello!`);
// // }, 3000);

// // setTimeout(() => console.log(`Arrow Functions: Hello!`), 3000);

// const arrowNumbers = [1, 2, 3, 4, 5, 6];
// const squareArrows = arrowNumbers.map((element) => Math.pow(element, 2));
// const cubeArrows = arrowNumbers.map((element) => Math.pow(element, 3));
// const evenArrowNums = arrowNumbers.filter((element) => element % 2 === 0);
// const oddArrowNums = arrowNumbers.filter((element) => element % 2 !== 0);
// const totalArrows = arrowNumbers.reduce(
//   (accumulator, element) => accumulator + element
// );

// console.log(`Arrow Functions: ${squareArrows}`);
// console.log(`Arrow Functions: ${cubeArrows}`);
// console.log(`Arrow Functions: ${evenArrowNums}`);
// console.log(`Arrow Functions: ${oddArrowNums}`);
// console.log(`Arrow Functions: ${totalArrows}`);

// //------------------------------------------------------------------

// // JavaScript Objects

// const person1 = {
//   personFirstName: `Spongebob`,
//   personLastName: `Squarepants`,
//   age: 30,
//   isEmployed: true,
//   sayHello: () => console.log(`JavaScript Objects: Hi! I am Spongebob!`),
//   eat: () => console.log(`JavaScript Objects: I am eating a Krabby Patty!`),
// };

// const person2 = {
//   personFirstName: `Patrick`,
//   personLastName: `Star`,
//   age: 42,
//   isEmployed: false,
//   sayHello: () => console.log(`JavaScript Objects: No! This is Patrick!`),
//   eat: () => console.log(`JavaScript Objects: I am eating Sandy's Cheeks!`),
// };

// console.log(
//   `JavaScript Objects: ${person1.personFirstName}, ${person1.personLastName}, ${person1.age}, ${person1.isEmployed}`
// );
// console.log(
//   `JavaScript Objects: ${person2.personFirstName}, ${person2.personLastName}, ${person2.age}, ${person2.isEmployed}`
// );

// person1.sayHello();
// person2.sayHello();

// person1.eat();
// person2.eat();

// //------------------------------------------------------------------

// // JavaScript `.this`

// const person3 = {
//   name: `Spongebob`,
//   favFood: `Krabby Patty`,
//   sayHello: function () {
//     console.log(`.this: Hello! I am ${this.favFood}`);
//   },
//   eat: function () {
//     console.log(`.this: ${this.name} is eating ${this.favFood}`);
//   },
// };

// const person4 = {
//   name: `Patrick`,
//   favFood: `Mr. Krabs Juicy Patties`,
//   sayHello: function () {
//     console.log(`.this: Hello! I am ${this.favFood}`);
//   },
//   eat: function () {
//     console.log(`.this: ${this.name} is eating ${this.favFood}`);
//   },
// };

// person3.sayHello();
// person3.eat();
// person4.sayHello();
// person4.eat();

// //------------------------------------------------------------------

// // Constructor

// function Car(make, model, year, colour) {
//   this.make = make;
//   this.model = model;
//   this.year = year;
//   this.colour = colour;
//   this.drive = function () {
//     console.log(`Constructor: You drive the ${this.make} ${this.model}`);
//   };
// }

// const c1 = new Car(`Ford`, `Mustang`, `2024`, `red`);
// const c2 = new Car(`Chevrolet`, `Camaro`, `2025`, `blue`);
// const c3 = new Car(`Dodge`, `Charger`, `2026`, `silver`);

// console.log(`Constructor: ${c1.make}`);
// console.log(`Constructor: ${c1.model}`);
// console.log(`Constructor: ${c1.year}`);
// console.log(`Constructor: ${c1.colour}`);
// c1.drive();

// console.log(`Constructor: ${c2.make}`);
// console.log(`Constructor: ${c2.model}`);
// console.log(`Constructor: ${c2.year}`);
// console.log(`Constructor: ${c2.colour}`);
// c2.drive();

// console.log(`Constructor: ${c3.make}`);
// console.log(`Constructor: ${c3.model}`);
// console.log(`Constructor: ${c3.year}`);
// console.log(`Constructor: ${c3.colour}`);
// c3.drive();

// //------------------------------------------------------------------

// // Classes

// class Product {
//   constructor(name, price) {
//     this.name = name;
//     this.price = price;
//   }

//   displayProduct() {
//     console.log(`Classes: Product: ${this.name}`);
//     console.log(`Classes: Product: £${this.price.toFixed(2)}`);
//   }

//   calculateTotal(salexTax) {
//     return this.price + this.price * salexTax;
//   }
// }

// const salesTax = 0.05;

// const product1 = new Product(`Shirt`, 19.99);
// const product2 = new Product(`Pants`, 22.5);
// const product3 = new Product(`Underwar`, 100.0);

// product1.displayProduct();
// product2.displayProduct();
// product3.displayProduct();

// const totalProduct1 = product1.calculateTotal(salesTax);
// const totalProduct2 = product2.calculateTotal(salesTax);
// const totalProduct3 = product3.calculateTotal(salesTax);

// console.log(`Total price (with tax): £${totalProduct1.toFixed(2)}`);
// console.log(`Total price (with tax): £${totalProduct2.toFixed(2)}`);
// console.log(`Total price (with tax): £${totalProduct3.toFixed(2)}`);

// //------------------------------------------------------------------

// // Static Keyword

// // Example 1.

// // class MathUtil {
// //   static PI = 3.14159;

// //   static getDiameter(radius) {
// //     return radius * 2;
// //   }

// //   static getCircumference(radius) {
// //     return 2 * this.PI * radius;
// //   }

// //   static getArea(radius) {
// //     return this.PI * Math.pow(radius, 2);
// //   }
// // }

// // console.log(`Static Keyword: ${MathUtil.PI}`);
// // console.log(`Static Keyword: ${MathUtil.getDiameter(10)}`);
// // console.log(`Static Keyword: ${MathUtil.getCircumference(10)}`);
// // console.log(`Static Keyword: ${MathUtil.getArea(10)}`);

// // Example 2.

// class User {
//   static userCount = 0;

//   constructor(username) {
//     this.username = username;
//     User.userCount++;
//   }

//   static getUserCount() {
//     console.log(`Static Keyword: There are ${User.userCount} users online.`);
//   }

//   sayHello() {
//     console.log(`Static Keyword: Hello, my username is ${this.username}`);
//   }
// }

// const user1 = new User(`Spongebob`);
// const user2 = new User(`Patrick`);
// const user3 = new User(`Sandy`);

// console.log(`Static Keyword: ${user1.username}`);
// console.log(`Static Keyword: ${user2.username}`);
// console.log(`Static Keyword: ${user3.username}`);

// user1.sayHello();
// user2.sayHello();
// user3.sayHello();

// User.getUserCount();

// //------------------------------------------------------------------

// // Inheritance

// class Animal {
//   alive = true;

//   eat() {
//     console.log(`Inheritance: This ${this.name} is eating.`);
//   }

//   sleep() {
//     console.log(`Inheritance: This ${this.name} is sleeping.`);
//   }
// }

// class Rabbit extends Animal {
//   name = "Rabbit";

//   run() {
//     console.log(`Inheritance: This ${this.name} is running.`);
//   }
// }

// class Fish extends Animal {
//   name = "Fish";

//   swim() {
//     console.log(`Inheritance: This ${this.name} is swimming.`);
//   }
// }

// class Hawk extends Animal {
//   name = "Hawk";

//   fly() {
//     console.log(`Inheritance: This ${this.name} is flying.`);
//   }
// }

// const r1 = new Rabbit();
// const f1 = new Fish();
// const h1 = new Hawk();

// console.log(`Inheritance: ${r1.alive}`);
// r1.eat();
// r1.sleep();
// r1.run();

// console.log(`Inheritance: ${f1.alive}`);
// f1.eat();
// f1.sleep();
// f1.swim();

// console.log(`Inheritance: ${h1.alive}`);
// h1.eat();
// h1.sleep();
// h1.fly();

// //------------------------------------------------------------------

// // Super Keyword

// class Animal1 {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   move(speed) {
//     console.log(`Super Keyword: ${this.name} moves at a speed of ${speed}mph`);
//   }
// }

// class Rabbit1 extends Animal1 {
//   constructor(name, age, runSpeed) {
//     super(name, age);
//     this.runSpeed = runSpeed;
//   }

//   run() {
//     console.log(`Super Keyword: This ${this.name} can run.`);
//     super.move(this.runSpeed);
//   }
// }

// class Fish1 extends Animal1 {
//   constructor(name, age, swimSpeed) {
//     super(name, age);
//     this.swimSpeed = swimSpeed;
//   }

//   swim() {
//     console.log(`Super Keyword: This ${this.name} can swim.`);
//     super.move(this.swimSpeed);
//   }
// }

// class Hawk1 extends Animal1 {
//   constructor(name, age, flySpeed) {
//     super(name, age);
//     this.flySpeed = flySpeed;
//   }

//   fly() {
//     console.log(`Super Keyword: This ${this.name} can fly.`);
//     super.move(this.flySpeed);
//   }
// }

// const rabbit = new Rabbit1(`Rabbit`, 1, 25);
// const fish = new Fish1(`Fish`, 2, 12);
// const hawk = new Hawk1(`Hawk`, 3, 50);

// console.log(`Super Keyword: ${rabbit.name}`);
// console.log(`Super Keyword: ${rabbit.age}`);
// console.log(`Super Keyword: ${rabbit.runSpeed}`);
// rabbit.run();

// console.log(`Super Keyword: ${fish.name}`);
// console.log(`Super Keyword: ${fish.age}`);
// console.log(`Super Keyword: ${fish.swimSpeed}`);
// fish.swim();

// console.log(`Super Keyword: ${hawk.name}`);
// console.log(`Super Keyword: ${hawk.age}`);
// console.log(`Super Keyword: ${hawk.flySpeed}`);
// hawk.fly();

// //------------------------------------------------------------------

// // Getters & Setters

// // Example 1

// class Rectangle {
//   constructor(width, height) {
//     this.width = width;
//     this.height = height;
//   }

//   set width(newWidth) {
//     if (newWidth > 0) {
//       this._width = newWidth;
//     } else {
//       console.error(`Getters & Setters: Width must be a positive number!`);
//     }
//   }

//   set height(newHeight) {
//     if (newHeight > 0) {
//       this._height = newHeight;
//     } else {
//       console.error(`Getters & Setters: Height must be a positive number!`);
//     }
//   }

//   get width() {
//     return `Getters & Setters: ${this._width.toFixed(1)}cm`;
//   }

//   get height() {
//     return `Getters & Setters: ${this._height.toFixed(1)}cm`;
//   }

//   get area() {
//     return `Getters & Setters: ${(this._width * this._height).toFixed(1)}cm^2`;
//   }
// }

// const rectangle = new Rectangle(3, 4);

// // rectangle.width = -100000;
// // rectangle.height = `pizza`;

// console.log(`Getters & Setters: ${rectangle.width}`);
// console.log(`Getters & Setters: ${rectangle.height}`);
// console.log(`Getters & Setters: ${rectangle.area}`);

// // Example 2.

// class Person {
//   constructor(firstName, lastName, age) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//   }

//   set firstName(newFirstName) {
//     if (typeof newFirstName === "string" && newFirstName.length > 0) {
//       this._firstName = newFirstName;
//     } else {
//       console.error(
//         `Getters & Setters: First Name Must Be A Non-Empty String!`
//       );
//     }
//   }

//   set lastName(newLastName) {
//     if (typeof newLastName === "string" && newLastName.length > 0) {
//       this._lastName = newLastName;
//     } else {
//       console.error(`Getters & Setters: Last Name Must Be A Non-Empty String!`);
//     }
//   }

//   set age(newAge) {
//     if (typeof newAge === "number" && newAge >= 0) {
//       this._age = newAge;
//     } else {
//       console.error(`Getters & Setters: Age Must Be A Non-Negative Number`);
//     }
//   }

//   get firstName() {
//     return this._firstName;
//   }

//   get lastName() {
//     return this._lastName;
//   }

//   get fullName() {
//     return this._firstName + " " + this._lastName;
//   }

//   get age() {
//     return this._age;
//   }
// }

// const person = new Person(`Spongebob`, `Squarepants`, 30);

// console.log(person.firstName);
// console.log(person.lastName);
// console.log(person.fullName);
// console.log(person.age);

//------------------------------------------------------------------

// Destructuring

// // ---------- Example 1 ----------
// // SWAP THE VALUE OF TWO VARIABLES

// let a = 1;
// let b = 2;

// [a, b] = [b, a];

// console.log(`Destructuring: ${a}`);
// console.log(`Destructuring: ${b}`);

// // ---------- Example 2 ----------
// // SWAP 2 ELEMENTS IN AN ARRAY

// const colors = [`red`, `green`, `blue`, `black`, `white`];

// [colors[0], colors[4]] = [colors[4], colors[0]];

// console.log(`Destructuring: ${colors}`);

// // ---------- Example 3 ----------
// // ASSIGN ARRAY ELEMENTS TO VARIABLES

// const colors1 = [`red`, `green`, `blue`, `black`, `white`];

// const [firstColor, secondColor, thirdColor, ...extraColors] = colors1;

// console.log(`Destructuring: ${firstColor}`);
// console.log(`Destructuring: ${secondColor}`);
// console.log(`Destructuring: ${thirdColor}`);
// console.log(`Destructuring: ${extraColors}`);

// // ---------- Example 4 ----------
// // EXTRACT VALUES FROM OBJECTS

// const person11 = {
//   firstName2: `Spongebob`,
//   lastName2: `Squarepants`,
//   age2: 30,
//   job2: `Fry Cook`,
// };

// const person12 = {
//   firstName2: `Patrick`,
//   lastName2: `Star`,
//   age2: 34,
// };

// const { firstName2, lastName2, age2, job2 = `Unemployed` } = person12;

// console.log(`Destructuring: ${firstName2}`);
// console.log(`Destructuring: ${lastName2}`);
// console.log(`Destructuring: ${age2}`);
// console.log(`Destructuring: ${job2}`);

// // ---------- Example 5 ----------
// // DESTRUCTURE IN FUNCTION PARAMETERS

// function displayPerson({ firstName3, lastName3, age3, job3 = `Unemployed` }) {
//   console.log(`Destructuring: name: ${firstName3} ${lastName3}`);
//   console.log(`Destructuring: age: ${age3}`);
//   console.log(`Destructuring: job: ${job3}`);
// }

// const person13 = {
//   firstName3: `Spongebob`,
//   lastName3: `Squarepants`,
//   age3: 30,
//   job3: `Fry Cook`,
// };

// const person14 = {
//   firstName3: `Patrick`,
//   lastName3: `Star`,
//   age3: 34,
// };

// displayPerson(person13);
// displayPerson(person14);

//------------------------------------------------------------------

// Nested-Objects

// Example 1

// const person15 = {
//   fullName: `Spongebob Squarepants`,
//   age: 30,
//   isStudent: true,
//   hobbies: [`karate`, `jellyfishing`, `cooking`],
//   address: {
//     street: `124 Conch St.`,
//     city: `Bikini Bottom`,
//     country: `Int. Waters`,
//   },
// };

// for (const property in person.address) {
//   console.log(`Nested-Objects: ${person15.address[property]}`);
// }

// console.log(`Nested-Objects: ${person15.fullName}`);
// console.log(`Nested-Objects: ${person15.age}`);
// console.log(`Nested-Objects: ${person15.isStudent}`);
// console.log(`Nested-Objects: ${person15.hobbies[0]}`);
// console.log(`Nested-Objects: ${person15.hobbies[1]}`);
// console.log(`Nested-Objects: ${person15.hobbies[2]}`);
// console.log(`Nested-Objects: ${person15.address.street}`);
// console.log(`Nested-Objects: ${person15.address.city}`);
// console.log(`Nested-Objects: ${person15.address.country}`);

// // Example 2

// class Person2 {
//   constructor(name, age, ...address) {
//     this.name = name;
//     this.age = age;
//     this.address = new Address2(...address);
//   }
// }

// class Address2 {
//   constructor(street, city, country) {
//     this.street = street;
//     this.city = city;
//     this.country = country;
//   }
// }

// const person16 = new Person2(
//   `Spongebob`,
//   30,
//   `124 Conch St.`,
//   `Bikini Bottom`,
//   `Int. Waters`
// );

// const person17 = new Person2(
//   `Patrick`,
//   37,
//   `128 Conch St.`,
//   `Bikini Bottom`,
//   `Int. Waters`
// );

// const person18 = new Person2(
//   `Squidward`,
//   45,
//   `126 Conch St.`,
//   `Bikini Bottom`,
//   `Int. Waters`
// );

// console.log(`Nested-Objects: ${person16.name}`);
// console.log(`Nested-Objects: ${person16.age}`);
// console.log(`Nested-Objects: ${person16.address.street}`);
// console.log(`Nested-Objects: ${person16.address.city}`);
// console.log(`Nested-Objects: ${person16.address.country}`);

// console.log(`Nested-Objects: ${person17.name}`);
// console.log(`Nested-Objects: ${person17.age}`);
// console.log(`Nested-Objects: ${person17.address.street}`);
// console.log(`Nested-Objects: ${person17.address.city}`);
// console.log(`Nested-Objects: ${person17.address.country}`);

// console.log(`Nested-Objects: ${person18.name}`);
// console.log(`Nested-Objects: ${person18.age}`);
// console.log(`Nested-Objects: ${person18.address.street}`);
// console.log(`Nested-Objects: ${person18.address.city}`);
// console.log(`Nested-Objects: ${person18.address.country}`);

//------------------------------------------------------------------

// Arrays of Objects

// const fruits1 = [
//   { name: `apple`, color: `red`, calories: 95 },
//   { name: `orange`, color: `orange`, calories: 45 },
//   { name: `banana`, color: `yellow`, calories: 105 },
//   { name: `coconut`, color: `white`, calories: 159 },
//   { name: `pineapple`, color: `yellow`, calories: 37 },
// ];

// console.log(`Arrays of Objects: ${fruits1[0].name}`);
// console.log(`Arrays of Objects: ${fruits1[0].color}`);
// console.log(`Arrays of Objects: ${fruits1[0].calories}`);

// // Add Object
// fruits1.push({ name: `grapes`, color: `purple`, calories: 62 });
// console.log(fruits1);

// // Remove Object
// // fruits1.pop();
// // console.log(fruits1);

// // Remove Specific Object
// // fruits1.splice(1, 2);
// // console.log(fruits1);

// fruits1.forEach((fruit) => console.log(fruit.name));

// const fruitNames = fruits1.map((fruit) => fruit.name);
// console.log(fruitNames);

// const fruitColors = fruits1.map((fruit) => fruit.color);
// console.log(fruitColors);

// const fruitCalories = fruits1.map((fruit) => fruit.calories);
// console.log(fruitCalories);

// const yellowFruits = fruits1.filter((fruit) => fruit.color === `yellow`);
// console.log(yellowFruits);

// const lowCalFruits = fruits1.filter((fruit) => fruit.calories < 100);
// console.log(lowCalFruits);

// const highCalFruits = fruits1.filter((fruit) => fruit.calories > 100);
// console.log(highCalFruits);

// const maxFruit = fruits1.reduce((max, fruit) =>
//   fruit.calories > max.calories ? fruit : max
// );

// const minFruit = fruits1.reduce((min, fruit) =>
//   fruit.calories < min.calories ? fruit : min
// );

// console.log(maxFruit);
// console.log(minFruit);

//------------------------------------------------------------------

// Sorting

// let fruits3 = [`apple`, `orange`, `banana`, `coconut`, `pineapple`];
// let numbers2 = [1, 10, 2, 9, 3, 8, 4, 7, 5, 6];

// fruits3.sort();
// numbers2.sort((a, b) => b - a);

// console.log(`Sorting: ${fruits3}`);
// console.log(`Sorting: ${numbers2}`);

// const people = [
//   { name: `Spongebob`, age: 30, gpa: 3.0 },
//   { name: `Patrick`, age: 37, gpa: 1.5 },
//   { name: `Squidward`, age: 51, gpa: 2.5 },
//   { name: `Sandy`, age: 27, gpa: 4.0 },
// ];

// // people.sort((a, b) => a.age - b.age); // Numerical Ascending Order
// // people.sort((a, b) => b.age - a.age); // Numerical Descending Order
// people.sort((a, b) => a.name.localeCompare(b.name)); // Forward Order
// // people.sort((a, b) => b.name.localeCompare(a.name)); // Reverse Order

// console.log(people);

//------------------------------------------------------------------

// Shuffle - Fisher-Yates Algorithm

// const cards = [`A`, 2, 3, 4, 5, 6, 7, 8, 9, 10, `J`, `Q`, `K`];

// function shuffle(array) {
//   for (let i = array.length - 1; i > 0; i--) {
//     const random = Math.floor(Math.random() * (i + 1));
//     [array[i], array[random]] = [array[random], array[i]];
//   }
// }

// shuffle(cards);
// console.log(cards);

//------------------------------------------------------------------

// Date Objects

// // Date(year, month, day, hour, minute, second, milisecond)
// // const date = new Date(2024, 0, 1, 2, 3, 4, 5);
// // const date = new Date(`2014-01-20T12:00:00Z`);

// const date = new Date();

// date.setFullYear(2025);
// date.setMonth(0);
// date.setDate(1);
// date.setHours(2);
// date.setMinutes(3);
// date.setSeconds(4);

// console.log(`Date Objects: ${date}`);

// // const year = date.getFullYear();
// // const month = date.getMonth();
// // const day1 = date.getDate();
// // const hour = date.getHours();
// // const minutes = date.getMinutes();
// // const seconds = date.getSeconds();
// // const miliseconds = date.getMilliseconds();
// // const dayOfWeek = date.getDay();

// // console.log(`Date Objects: ${year}`);
// // console.log(`Date Objects: ${month}`);
// // console.log(`Date Objects: ${day1}`);
// // console.log(`Date Objects: ${hour}`);
// // console.log(`Date Objects: ${minutes}`);
// // console.log(`Date Objects: ${seconds}`);
// // console.log(`Date Objects: ${miliseconds}`);
// // console.log(`Date Objects: ${dayOfWeek}`);

// const date1 = new Date(`2023-12-31`);
// const date2 = new Date(`2024-01-01`);

// if (date2 > date1) {
//   console.log(`Date Objects: Happy New Year!`);
// }

//------------------------------------------------------------------

// Closures

// // Example 1.

// function outer() {
//   let message = `Hello`;
//   function inner() {
//     console.log(`Closures: ${message}`);
//   }
//   inner();
// }

// outer();

// // Example 2.

// function createCounter() {
//   let count = 0;
//   function increment() {
//     count++;
//     console.log(`Closures: Count1 Increased To ${count}`);
//   }

//   function getCount() {
//     return count;
//   }

//   return { increment, getCount };
// }

// const counter1 = createCounter();
// counter1.increment();
// counter1.increment();
// counter1.increment();

// console.log(`The current count is: ${counter1.getCount()}`);

// // Example 3.

// function createGame() {
//   let score = 0;

//   function increaseScore(points) {
//     score += points;
//     console.log(`Closures: +${points}pts.`);
//   }

//   function decreaseScore(points) {
//     score -= points;
//     console.log(`Closures: -${points}pts.`);
//   }

//   function getScore() {
//     return score;
//   }

//   return { increaseScore, decreaseScore, getScore };
// }

// const game = new createGame();
// game.increaseScore(5);
// game.increaseScore(6);
// game.decreaseScore(3);
// console.log(`The final score is ${game.getScore()}`);

//------------------------------------------------------------------

// setTimeOut()

// Example 1.

// function sayHello() {
//   window.alert(`Hello!`);
// }

// setTimeout(sayHello, 3000);

// Example 2.

// setTimeout(function () {
//   window.alert(`Hello!`), 3000;
// });

// const timeoutId = setTimeout(() => window.alert(`Hello`), 3000);

// clearTimeout(timeoutId);

// Example 3.

// let timeoutId;

// function startTimer() {
//   console.log(`Time Out: Started.`);
//   timeoutId = setTimeout(() => window.alert(`Hello!`), 3000);
// }

// function stopTimer() {
//   console.log(`Time Out: Stopped.`);
//   clearTimeout(timeoutId);
// }

//------------------------------------------------------------------

// console.time()

// function loadData() {
//   console.time(`loadData`);

//   for (let i = 0; i < 1000000; i++) {
//     // do code.
//   }

//   console.timeEnd(`loadData`);
// }

// function processData() {
//   console.time(`processData`);

//   for (let i = 0; i < 4000000; i++) {
//     // do code.
//   }

//   console.timeEnd(`processData`);
// }

// loadData();
// processData();

//------------------------------------------------------------------

// Format Currency

// let number = 123456.789;

// // number = number.toLocaleString(`en-US`);
// // number = number.toLocaleString(`hi-IN`);
// // number = number.toLocaleString(`de-DE`);
// // number = number.toLocaleString(undefined);

// // number = number.toLocaleString(`en-US`, { style: `currency`, currency: `USD` });
// // number = number.toLocaleString(`hi-IN`, {
// //   style: `currency`,
// //   currency: `INR`,
// // });
// number = number.toLocaleString(`de-DE`, { style: `currency`, currency: `EUR` });

// console.log(`Format Currency: ${number}`);

//------------------------------------------------------------------

// Compound Interest

// function calculateCompoundInterest() {
//   const investmentAmount = document.getElementById(`investmentInput`);
//   const interestRate = document.getElementById(`interestRateInput`);
//   const years = document.getElementById(`yearsInput`);
//   const result = document.getElementById(`compoundInterestLabel`);

//   let invAmount = Number(investmentAmount.value);
//   let intRate = Number(interestRate.value / 100);
//   let y = Number(years.value);

//   invAmount = validate(invAmount, investmentAmount);
//   intRate = validate(intRate, interestRate);
//   y = validate(y, years);

//   for (let i = 0; i < y; i++) {
//     invAmount += invAmount * intRate;
//   }

//   result.textContent = `£${invAmount.toFixed(2).toLocaleString(undefined)}`;
// }

// function validate(x, inputBox) {
//   return x < 0 ? ((inputBox.value = `0`), 0) : x;
// }

//------------------------------------------------------------------

// Digital Clock

function updateDigitalClock() {
  const date = new Date();
  const hours = date.getHours().toString().padStart(2, 0);
  const ampm = hours < 12 ? `AM` : `PM`;
  const minutes = date.getMinutes().toString().padStart(2, 0);
  const seconds = date.getSeconds().toString().padStart(2, 0);
  const fullTime = `${hours}:${minutes}:${seconds} ${ampm}`;
  document.getElementById(`digitalClock`).textContent = fullTime;
}

// updateDigitalClock();
setInterval(updateDigitalClock, 1000);

//------------------------------------------------------------------

// Stopwatch

// const stopwatchDisplay = document.getElementById(`stopwatchDisplay`);
// let timer = null;
// let startTime = 0;
// let elapsedTime = 0;
// let isRunning = false;

// function start() {
//   if (!isRunning) {
//     startTime = Date.now() - elapsedTime;
//     timer = setInterval(update, 10);
//     isRunning = true;
//   }
// }

// function stop() {
//   if (isRunning) {
//     clearInterval(timer);
//     elapsedTime = Date.now() - startTime;
//     isRunning = false;
//   }
// }

// function reset() {
//   clearInterval(timer);
//   startTime = 0;
//   elapsedTime = 0;
//   isRunning = false;
//   stopwatchDisplay.textContent = `00:00:00:00`;
// }

// function update() {
//   const currentTime = Date.now();
//   elapsedTime = currentTime - startTime;

//   let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
//   let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
//   let seconds = Math.floor((elapsedTime / 1000) % 60);
//   let miliseconds = Math.floor((elapsedTime % 1000) / 10);

//   hours = String(hours).padStart(2, `0`);
//   minutes = String(minutes).padStart(2, `0`);
//   seconds = String(seconds).padStart(2, `0`);
//   miliseconds = String(miliseconds).padStart(2, `0`);

//   stopwatchDisplay.textContent = `${hours}:${minutes}:${seconds}:${miliseconds}`;
// }

//------------------------------------------------------------------

// ES6 Modules

// import { PI, getCircumference, getArea, getVolume } from "./mathUtil.js";

// console.log(PI);
// const circumference = getCircumference(10);
// const area = getArea(10);
// const volume = getVolume(10);

// console.log(`${circumference.toFixed(2)}cm`);
// console.log(`${area.toFixed(2)}cm^2`);
// console.log(`${volume.toFixed(2)}cm^3`);

//------------------------------------------------------------------

// Asynchronous Code

// function func1(callback) {
//   setTimeout(() => {
//     console.log(`Task 1`);
//     callback();
//   }, 3000);
// }

// function func2() {
//   console.log(`Task 2`);
//   console.log(`Task 3`);
//   console.log(`Task 4`);
// }

// func1(func2);

//------------------------------------------------------------------

// Error

// Example 1.
// try {
//   console.log(`Hello.`);
//   // NETWORK ERRORS
//   // PROMISE REJECTION
//   // SECURITY ERRORS
// } catch (error) {
//   console.error(error);
// } finally {
//   console.log(`This Always Executes.`);
//   // CLOSE FILES
//   // CLOSE CONNECTIONS
//   // RELEASE RESOURCES
// }
// console.log(`You have reached the end!`);

// Example 2.

// try {
//   const dividend = Number(window.prompt(`Enter a dividend: `));
//   const divisor = Number(window.prompt(`Enter a divisor: `));

//   if (divisor === 0) {
//     throw new Error(`You can't divide by zero!`);
//   }

//   if (isNaN(dividend) || isNaN(divisor)) {
//     throw new Error(`Values must be a number!`);
//   }

//   const result = dividend / divisor;
//   console.log(result);
// } catch (error) {
//   console.error(error);
// }
// console.log(`You have reached the end!`);

//------------------------------------------------------------------

// Element Selectors

// Example 1. getElementById();

// const myHeading = document.getElementById(`myHeading`);
// myHeading.style.backgroundColor = `yellow`;
// myHeading.style.textAlign = `center`;

// Example 2. getElementsByClassName();

// const fruits = document.getElementsByClassName(`fruits`);

// fruits[0].style.backgroundColor = `green`;
// fruits[1].style.backgroundColor = `orange`;
// fruits[2].style.backgroundColor = `yellow`;

// for (let fruit of fruits) {
//   fruit.style.textAlign = `center`;
// }

// Array.from(fruits).forEach((fruit) => {
//   fruit.style.backgroundColor = `yellow`;
// });

// Example 3. getElementsByClass();

// const h4Elements = document.getElementsByTagName(`h4`);
// const liElements = document.getElementsByTagName(`li`);

// h4Elements[0].style.backgroundColor = `green`;
// h4Elements[1].style.backgroundColor = `green`;

// for (let h4Element of h4Elements) {
//   h4Element.style.backgroundColor = `green`;
// }

// liElements[0].style.backgroundColor = `red`;
// liElements[1].style.backgroundColor = `red`;
// liElements[2].style.backgroundColor = `red`;

// for (let liElement of liElements) {
//   liElement.style.backgroundColor = `lightgreen`;
// }

// Array.from(h4Elements).forEach((h4Element) => {
//   h4Element.style.backgroundColor = `green`;
// });

// Array.from(liElements).forEach((liElement) => {
//   liElement.style.backgroundColor = `lightgreen`;
// });

// Example 4. // querySelector();

// const element = document.querySelector(`.fruits`);

// element.style.backgroundColor = `yellow`;

// Example 5. // querySelectorAll();

// const foods = document.querySelectorAll(`li`);

// foods[0].style.backgroundColor = `yellow`;
// foods[1].style.backgroundColor = `yellow`;
// foods[2].style.backgroundColor = `yellow`;
// foods[3].style.backgroundColor = `yellow`;

// foods.forEach((food) => {
//   food.style.backgroundColor = `yellow`;
// });

//------------------------------------------------------------------

// DOM Nagivation

// Example 1. .firstElementChild

// const element = document.getElementById(`fruits`);
// const firstChild = element.firstElementChild;
// firstChild.style.backgroundColor = `yellow`;

// const ulElements = document.querySelectorAll(`ul`);

// ulElements.forEach((ulElement) => {
//   ulElement.firstElementChild.style.backgroundColor = `yellow`;
// });

// Example 2. .lastElementChild

// const element = document.getElementById(`vegetables`);
// const lastChild = element.lastElementChild;
// lastChild.style.backgroundColor = `yellow`;

// const ulElements = document.querySelectorAll(`ul`);

// ulElements.forEach((ulElement) => {
//   ulElement.lastElementChild.style.backgroundColor = `yellow`;
// });

// Example 3. nextElementSibling

// const element = document.getElementById(`fruits`);
// const nextSibling = element.nextElementSibling;
// nextSibling.style.backgroundColor = `yellow`;

// Example 4. previousElementSibling

// const element = document.getElementById(`banana`);
// const nextSibling = element.previousElementSibling;
// nextSibling.style.backgroundColor = `yellow`;

// Example 5. parentElement

// const element = document.getElementById(`apple`);
// const parent = element.parentElement;
// parent.style.backgroundColor = `yellow`;

// Example 6. children

// const element = document.getElementById(`fruits`);
// const children = element.children;
// Array.from(children).forEach((child) => {
//   child.style.backgroundColor = `yellow`;
// });

// const element = document.getElementById(`fruits`);
// const children = element.children;
// children[0].style.backgroundColor = `yellow`;

//------------------------------------------------------------------

// ADD / CHANGE HTML in Js.

// Step 1. Create Element

// const newH1 = document.createElement(`h1`);

// Step 2. Add Attributes/Properties
// newH1.textContent = `I like pizza.`;
// newH1.id = `createdH1`;
// newH1.style.color = `tomato`;
// newH1.style.textAlign = `center`;

// Step 3 Append Element To DOM
// document.body.append(newH1);
// document.body.prepend(newH1);
// document.getElementById(`box1`).append(newH1);
// document.getElementById(`box1`).prepend(newH1);

// const box2 = document.getElementById(`box2`);
// document.body.insertBefore(newH1, box2);

// const boxes = document.querySelectorAll(`.box`);
// document.body.insertBefore(newH1, boxes[2]);

// Remove HTML Element
// document.body.removeChild(newH1);
// document.getElementById(`box1`).removeChild(newH1);

// // Example 2.
// const newListItem = document.createElement(`li`);

// newListItem.textContent = `Coconut`;
// newListItem.id = `coconut`;
// newListItem.style.fontWeight = `bold`;
// newListItem.style.backgroundColor = `lightgreen`;

// document.getElementById(`fruits`).append(newListItem);
// document.getElementById(`fruits`).prepend(newListItem);
// document.getElementById(`apple`).append(newListItem);
// const banana = document.getElementById(`banana`);
// document.getElementById(`fruits`).insertBefore(newListItem, banana);
// const listItems = document.querySelectorAll(`#fruits li`);
// document.getElementById(`fruits`).insertBefore(newListItem, listItems[1]);

// document.getElementById(`fruits`).removeChild(newListItem);

//------------------------------------------------------------------

// Mouse Events

// const myBox = document.getElementById(`myBox`);
// const myButton1 = document.getElementById(`myButton1`);

// myButton1.addEventListener("click", (event) => {
//   myBox.style.backgroundColor = `tomato`;
//   myBox.textContent = `OUCH! 😡`;
// });

// myButton1.addEventListener("mouseover", (event) => {
//   myBox.style.backgroundColor = `yellow`;
//   myBox.textContent = `Don't do it 🤔`;
// });

// myButton1.addEventListener("mouseout", (event) => {
//   myBox.style.backgroundColor = `lightgreen`;
//   myBox.textContent = `Click Me 😊`;
// });

// function changeColor(event) {
//   event.target.style.backgroundColor = `tomato`;
//   event.target.textContent = `OUCH! 😡`;
// }

//------------------------------------------------------------------

// Key Events

// const myBox = document.getElementById(`myBox`);
// const moveSpeed = 10;
// let x = 0;
// let y = 0;

// document.addEventListener("keydown", (event) => {
//   // console.log(`Key down = ${event.key}`);
//   switch (event.key) {
//     case `w`:
//       y -= moveSpeed;
//       break;
//     case `s`:
//       y += moveSpeed;
//       break;
//     case `a`:
//       x -= moveSpeed;
//       break;
//     case `d`:
//       x += moveSpeed;
//       break;
//   }
//   myBox.style.top = `${y}px`;
//   myBox.style.left = `${x}px`;
// });

// document.addEventListener("keyup", (event) => {
//   // console.log(`Key up = ${event.key}`);
// });

//------------------------------------------------------------------

// Show And Hide HTML

// const myButton2 = document.getElementById(`myButton2`);
// const foxImage = document.getElementById(`myImg`);

// myButton2.addEventListener("click", (event) => {
//   if (foxImage.style.display === "none") {
//     foxImage.style.display = "block";
//     myButton2.textContent = "Hide";
//   } else {
//     foxImage.style.display = "none";
//     myButton2.textContent = "Show";
//   }
// });

// myButton2.addEventListener("click", (event) => {
//   if (foxImage.style.visibility === "hidden") {
//     foxImage.style.visibility = "visible";
//     myButton2.textContent = "Hide";
//   } else {
//     foxImage.style.visibility = "hidden";
//     myButton2.textContent = "Show";
//   }
// });

//------------------------------------------------------------------

// NodeLists

// let buttons = document.querySelectorAll(".myButtons");

// const newButton = document.createElement(`button`);
// newButton.textContent = "Button 5";
// newButton.classList = "myButtons";
// document.body.appendChild(newButton);

// buttons = document.querySelectorAll(`.myButtons`);

// // buttons.forEach((button) => {
// //   button.style.backgroundColor = "green";
// // });

// // buttons.forEach((button) => {
// //   button.addEventListener("click", (event) => {
// //     event.target.style.backgroundColor = "tomato";
// //   });
// // });

// buttons.forEach((button) => {
//   button.addEventListener("mouseover", (event) => {
//     event.target.style.backgroundColor = `tomato`;
//   });
// });

// buttons.forEach((button) => {
//   button.addEventListener("mouseout", (event) => {
//     event.target.style.backgroundColor = `hsl(205,100%,60%)`;
//   });
// });

// buttons.forEach((button) => {
//   button.addEventListener("click", (event) => {
//     event.target.remove(); // Remove from DOM.
//     buttons = document.querySelectorAll(`.myButtons`); // Remove from NodeList.
//   });
// });

//------------------------------------------------------------------

// classList

// const myH1 = document.getElementById(`myH1`);
// const myButton = document.getElementById(`myButton`);

// myH1.classList.add(`enabled`);
// myButton.classList.add(`enabled`);

// Example 1. Add

// myButton.addEventListener("mouseover", (event) => {
//   event.target.classList.add(`hover`);
// });

// Example 2. Remove

// myButton.addEventListener("mouseout", (event) => {
//   event.target.classList.remove(`hover`);
// });

// Example 3. Toggle

// myButton.addEventListener("mouseover", (event) => {
//   event.target.classList.toggle(`hover`);
// });

// myButton.addEventListener("mouseout", (event) => {
//   event.target.classList.toggle(`hover`);
// });

// myButton.classList.add(`enabled`);

// Example 4. Replace

// myButton.addEventListener("click", event => {
//   event.target.classList.replace(`enabled`, `disabled`);
// });

// Example 5. Contains

// myButton.addEventListener("click", (event) => {
//   if (event.target.classList.contains(`disabled`)) {
//     event.target.textContent += `😡`;
//   } else {
//     event.target.classList.replace(`enabled`, `disabled`);
//   }
// });

// myH1.addEventListener("click", (event) => {
//   if (event.target.classList.contains(`disabled`)) {
//     event.target.textContent += `😡`;
//   } else {
//     event.target.classList.replace(`enabled`, `disabled`);
//   }
// });

// Challenge

// let buttons = document.querySelectorAll(`.myButtons`);

// buttons.forEach((button) => {
//   button.classList.add(`enabled`);
// });

// buttons.forEach((button) => {
//   button.addEventListener("mouseover", (event) => {
//     event.target.classList.toggle(`hover`);
//   });
// });

// buttons.forEach((button) => {
//   button.addEventListener("mouseout", (event) => {
//     event.target.classList.toggle(`hover`);
//   });
// });

// buttons.forEach((button) => {
//   button.addEventListener("click", (event) => {
//     event.target.classList.replace(`enabled`, `disabled`);

//     if (event.target.classList.contains(`disabled`)) {
//       event.target.textContent += `😡`;
//     } else {
//       event.target.add(`disabled`);
//     }
//   });
// });

//------------------------------------------------------------------

// ROCK PAPER SCISSORS Project

// const choices = [`rock`, `paper`, `scissors`];
// const playerDisplay = document.getElementById(`playerDisplay`);
// const computerDisplay = document.getElementById(`computerDisplay`);
// const resultDisplay = document.getElementById(`resultDisplay`);
// const playerScoreDisplay = document.getElementById(`playerScore`);
// const computerScoreDisplay = document.getElementById(`computerScore`);
// let playerScore = 0;
// let computerScore = 0;

// function playGame(choice) {
//   // Computer Pick.
//   const opponentChoice = choices[Math.floor(Math.random() * 3)];

//   // Handle Draws.
//   if (choice === opponentChoice) {
//     resultDisplay.textContent = `It's a draw.`;
//   } else if (opponentChoice !== choiceCounter(choice)) {
//     // Decide Winner
//     resultDisplay.textContent = `You won! :D`;
//     playerScore++;
//   } else {
//     resultDisplay.textContent = `You lost! :c`;
//     computerScore++;
//   }

//   updateDisplay(choice, opponentChoice);
// }

// // Provides the counter choice.
// function choiceCounter(choice) {
//   switch (choice) {
//     case `rock`:
//       return `paper`;
//     case `paper`:
//       return `scissors`;
//     case `scissors`:
//       return `rock`;
//   }
// }

// // Updates the picks and score.
// function updateDisplay(choice, opponentChoice) {
//   playerDisplay.textContent = `Player: ${choice}`;
//   computerDisplay.textContent = `Computer: ${opponentChoice}`;
//   playerScoreDisplay.textContent = `Player:${playerScore}`;
//   computerScoreDisplay.textContent = `Computer: ${computerScore}`;
// }

//------------------------------------------------------------------

// Image Slider

// const slides = document.querySelectorAll(`.slides img`);
// let slideIndex = 0;
// let intervalId = null;

// document.addEventListener(`DOMContentLoaded`, initialiseSlider);

// function initialiseSlider() {
//   if (slides.length > 0) {
//     slides[slideIndex].classList.add(`displaySlide`);
//     intervalId = setInterval(nextSlide, 5000);
//   }
// }

// function showSlide(index) {
//   if (index >= slides.length) {
//     slideIndex = 0;
//   } else if (index < 0) {
//     slideIndex = slides.length - 1;
//   }

//   slides.forEach((slide) => {
//     slide.classList.remove(`displaySlide`);
//   });
//   slides[slideIndex].classList.add(`displaySlide`);
// }

// function prevSlide() {
//   clearInterval(intervalId);
//   slideIndex--;
//   showSlide(slideIndex);
// }

// function nextSlide() {
//   slideIndex++;
//   showSlide(slideIndex);
// }

//------------------------------------------------------------------

// Callback Hell

// function task1(callback) {
//   setTimeout(() => {
//     console.log(`Task 1 complete.`);
//     callback();
//   }, 2000);
// }

// function task2(callback) {
//   setTimeout(() => {
//     console.log(`Task 2 complete.`);
//     callback();
//   }, 1000);
// }

// function task3(callback) {
//   setTimeout(() => {
//     console.log(`Task 3 complete.`);
//     callback();
//   }, 3000);
// }

// function task4(callback) {
//   setTimeout(() => {
//     console.log(`Task 4 complete.`);
//     callback();
//   }, 1500);
// }

// task1(() => {
//   task2(() => {
//     task3(() => {
//       task4(() => {
//         console.log(`All tasks completed.`);
//       });
//     });
//   });
// });

//------------------------------------------------------------------

// Promise

// function walkDog() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const dogWalked = true;

//       if (dogWalked) {
//         resolve(`You walk the dog. 🐕`);
//       } else {
//         reject(`You didn't walk the dog. 🐕`);
//       }
//     }, 1500);
//   });
// }

// function cleanKitchen() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const kitchenCleaned = true;

//       if (kitchenCleaned) {
//         resolve(`You clean the ktichen. 🧹`);
//       } else {
//         reject(`You didn't clean the ktichen. 🧹`);
//       }
//     }, 2500);
//   });
// }

// function takeOutTrash() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const trashTakeOut = false;

//       if (trashTakeOut) {
//         resolve(`You take out the trash. ♻`);
//       } else {
//         reject(`You didn't take out the trash. ♻`);
//       }
//     }, 500);
//   });
// }

// walkDog()
//   .then((value) => {
//     console.log(value);
//     return cleanKitchen();
//   })
//   .then((value) => {
//     console.log(value);
//     return takeOutTrash();
//   })
//   .then((value) => {
//     console.log(value);
//     console.log(`You've finished all the chores!`);
//   })
//   .catch((error) => console.error(error));

// Callback Hell!
// walkDog(() => {
//   cleanKitchen(() => {
//     takeOutTrash(() => console.log(`You finished all the chores!`));
//   });
// });

//------------------------------------------------------------------

// Async / Await

// function walkDog() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const dogWalked = true;

//       if (dogWalked) {
//         resolve(`You walk the dog. 🐕`);
//       } else {
//         reject(`You didn't walk the dog. 🐕`);
//       }
//     }, 1500);
//   });
// }

// function cleanKitchen() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const kitchenCleaned = true;

//       if (kitchenCleaned) {
//         resolve(`You clean the ktichen. 🧹`);
//       } else {
//         reject(`You didn't clean the ktichen. 🧹`);
//       }
//     }, 2500);
//   });
// }

// function takeOutTrash() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const trashTakeOut = true;

//       if (trashTakeOut) {
//         resolve(`You take out the trash. ♻`);
//       } else {
//         reject(`You didn't take out the trash. ♻`);
//       }
//     }, 500);
//   });
// }

// async function doChores() {
//   try {
//     const walkDogResult = await walkDog();
//     console.log(walkDogResult);

//     const cleanKitchenResult = await cleanKitchen();
//     console.log(cleanKitchenResult);

//     const takeOutTrashResult = await takeOutTrash();
//     console.log(takeOutTrashResult);

//     console.log(`You've finished all the chores!`);
//   } catch (error) {
//     console.error(error);
//   }
// }

// doChores();

//------------------------------------------------------------------

// Json Files

// const jsonNames = `["Spongebob", "Patrick", "Sandy"]`;

// const jsonPerson = `{
//   "name": "Spongebob",
//   "age": 30,
//   "isEmployed": true,
//   "hobbies": ["Jellyfishing", "karate", "cooking"]
// }`;

// const jsonPeople = `[{
//   "name":"Spongebob",
//   "age": 30,
//   "isEmployed": true
// }, {
//   "name":"Patrick",
//   "age": 34,
//   "isEmployed": false
// }, {
//   "name":"Squidward",
//   "age": 50,
//   "isEmployed": true
// }, {
//   "name":"Sandy",
//   "age": 27,
//   "isEmployed": true
// }]`;

// const parsedData = JSON.parse(jsonPeople);
// console.log(parsedData);

// console.log(JSON.stringify(names));
// console.log(JSON.stringify(person));
// console.log(JSON.stringify(people));

// fetch("jsonFiles/people.json")
//   .then((response) => response.json())
//   .then((values) => values.forEach((value) => console.log(value)))
//   .catch((error) => console.error(error));

//------------------------------------------------------------------

// Cookies

// console.log(navigator.cookieEnabled);

// document.cookie = `firstName = Patrick; expires=Sun, 1 January 2030 12:00:00 UTC; path=/`;
// document.cookie = `lastName = Star; expires=Sun, 1 January 2030 12:00:00 UTC; path=/`;

// console.log(document.cookie);

// const firstText = document.querySelector(`#firstText`);
// const lastText = document.querySelector(`#lastText`);
// const submitBtn = document.querySelector(`#submitBtn`);
// const cookieBtn = document.querySelector(`#cookieBtn`);

// submitBtn.addEventListener(`click`, () => {
//   setCookie(`firstName`, firstText.value, 365);
//   setCookie(`lastName`, lastText.value, 365);
// });

// cookieBtn.addEventListener(`click`, () => {
//   firstText.value = getCookie(`firstName`);
//   lastText.value = getCookie(`lastName`);
// });

// function setCookie(name, value, expirationDate) {
//   const date = new Date();
//   date.setTime(date.getTime() + expirationDate * 24 * 60 * 60 * 1000);
//   let expires = "expires=" + date.toUTCString();
//   document.cookie = `${name}=${value}; ${expires}; path=/`;
// }

// function deleteCookie(name) {
//   setCookie(name, null, null);
// }

// function getCookie(name) {
//   const cookieDecoded = decodeURIComponent(document.cookie);
//   const cookieArray = cookieDecoded.split("; ");
//   let result = null;
//   cookieArray.forEach((element) => {
//     if (element.indexOf(name) === 0) {
//       result = element.substring(name.length + 1);
//     }
//   });
//   return result;
// }

// deleteCookie(`firstName`);
// deleteCookie(`lastName`);

// setCookie(`firstName`, `Spongebob`, 365);
// setCookie(`lastName`, `SquarePants`, 365);
// console.log(document.cookie);
// console.log(getCookie(`firstName`));

// console.log(document.cookie);

//------------------------------------------------------------------

// Fetch Data From An API.

// fetch(`https://pokeapi.co/api/v2/pokemon/pikachu`)
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error();
//     }
//     return response.json();
//   })
//   .then((data) => console.log(data))
//   .catch((error) => console.error(error));

async function fetchData() {
  try {
    const pokemonName = document
      .getElementById(`pokemonName`)
      .value.toLowerCase();

    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );

    if (!response.ok) {
      throw new Error(`Could not fetch resource.`);
    }

    const data = await response.json();

    const pokemonSprite = data.sprites.front_default;
    const pokemonImg = document.getElementById(`pokemonSprite`);

    console.log(pokemonSprite);

    pokemonImg.src = pokemonSprite;
    pokemonImg.style.display = `block`;
  } catch (error) {
    console.error(error);
  }
}

// fetchData();
