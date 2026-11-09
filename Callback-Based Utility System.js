// Assignment 3: Callback-Based Utility System

// 1. processArray function that loops through the array and runs callback on each element
function processArray(arr, callback) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i]));
    }
    return result;
}

// 2. Square every number in an array using processArray
let numbers = [1, 2, 3, 4];
let squared = processArray(numbers, function(n) {
    return n * n;
});
console.log("Squared numbers:", squared); // [1, 4, 9, 16]


// 3. Helper function to filter arrays using a callback
function filterArray(arr, callback) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
}

let evens = filterArray([1, 2, 3, 4, 5, 6], function(n) {
    return n % 2 === 0;
});
console.log("Even numbers:", evens); // [2, 4, 6]


// 4. processString function to pass a string to a callback
function processString(str, callback) {
    return callback(str);
}

// 5. Convert a string to uppercase
let upper = processString("hello world", function(str) {
    return str.toUpperCase();
});
console.log("Uppercase:", upper); // "HELLO WORLD"


// 6. Count the number of words in a sentence
let wordCount = processString("hello world from callback utility", function(str) {
    return str.trim().split(/\s+/).length;
});
console.log("Word count:", wordCount); // 5


// 7. calculate function for math operations based on callback
function calculate(a, b, callback) {
    return callback(a, b);
}

// 8. Addition, subtraction, multiplication, and division
let add = calculate(10, 5, (a, b) => a + b);
let sub = calculate(10, 5, (a, b) => a - b);
let mul = calculate(10, 5, (a, b) => a * b);
let div = calculate(10, 5, (a, b) => b !== 0 ? a / b : "Error");

console.log("Addition:", add);         // 15
console.log("Subtraction:", sub);     // 5
console.log("Multiplication:", mul);  // 50
console.log("Division:", div);        // 2


// 9. findElement function to return the first element satisfying a condition
function findElement(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            return arr[i];
        }
    }
    return undefined;
}

let found = findElement([1, 3, 5, 8, 9], function(n) {
    return n % 2 === 0;
});
console.log("First even element found:", found); // 8


// Bonus Challenge: Menu-driven style setup
console.log("\n--- Bonus Challenge Output ---");
let sample = [5, 12, 8, 130, 44];
let tripled = processArray(sample, n => n * 3);
let firstGrtr = findElement(sample, n => n > 10);

console.log("Tripled array:", tripled);
console.log("First element greater than 10:", firstGrtr);