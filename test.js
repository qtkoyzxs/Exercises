
var myName = "Alex";

let myAge = "22";


const PI = 3.1416;


let isStudent = parseInt(myAge) < 25;

let person = {
  name: "Alex",
  age: 22,
  address: {
    street: "123 Main St",
    city: "Davao",
    country: "Philippines"
  },
  contact: {
    email: "alex@example.com",
    phone: "09123456789"
  }
};

let colors = ["red", "blue", "green", "yellow", "blue"];

let words = ["apple", "banana", "cherry", "date"];
let transformedWords = [];

for (let word of words) {
  let reversed = "";
  for (let i = word.length - 1; i >= 0; i--) {
    reversed += word[i];
  }
  transformedWords.push(reversed.toUpperCase());
}

console.log("Transformed Words:", transformedWords);


let numbers = [12, 45, 67, 23, 90, 32, 11, 9, 28];
let filteredNumbers = [];
let count = 0;

for (let num of numbers) {
  if (num % 2 === 0 && num > 20) {
    filteredNumbers.push(num);
    count++;
  }
}

console.log(`Found ${count} numbers: [${filteredNumbers.join(", ")}]`);
