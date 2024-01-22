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
//   console.log(circumference.toFixed(2) + "cm");
// };

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
