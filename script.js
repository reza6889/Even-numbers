// Challenge 10 : Write a JS code to print even numbers in given array

const numbers = [13, 23, 12, 45, 22, 48, 66, 100];
const evenNumbers = [];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    evenNumbers.push(numbers[i]);
  }
}

console.log(evenNumbers);
