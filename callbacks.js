// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 
  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }
  // Potential Solution:
  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }
  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });
*/


function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
}

function last(arr, cb) {
  // last passes the last item of the array into the callback.
}

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
}

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
}

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
}

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}











//SOLUTIONS

//Solution for getLength using a callback function
function getLength(arr, cb) {
return cb(arr.length);
}

//Test getLength
getLength(items, function(length) {
console.log(length);
});

//Expected output: 4

//Solution for last using a callback function
function last(arr, cb) {
return cb(arr[arr.length - 1]);
}

//Test last
last(items, function(lastItem) {
console.log(lastItem);
});

//Expected output: "Gum"

//Solution for sumNums using a callback function
function sumNums(x, y, cb) {
return cb(x + y);
}

//Test sumNums
sumNums(2, 3, function(sum) {
console.log(sum);
});

//Expected output: 5

//Solution for multiplyNums using a callback function
function multiplyNums(x, y, cb) {
return cb(x * y);
}

//Test multiplyNums
multiplyNums(2, 3, function(product) {
console.log(product);
});

//Expected output: 6

//Solution for contains using a callback function
function contains(item, list, cb) {
let result = list.includes(item);
return cb(result);
}

//Test contains
contains('Pencil', items, function(result) {
console.log(result);
});

//Expected output: true

//Solution for removeDuplicates using a callback function
function removeDuplicates(array, cb) {
let uniqueArray = [...new Set(array)];
return cb(uniqueArray);
}

//Test removeDuplicates
removeDuplicates([1, 2, 2, 3, 3, 3, 4, 5, 5], function(result) {
console.log(result);
});

//Expected output: [1, 2, 3, 4, 5]
