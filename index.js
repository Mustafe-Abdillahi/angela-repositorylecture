// Function to add as many numbers as you want
function addNumbers(...nums) {
  return nums.reduce((total, n) => total + n, 0);
}

// Examples
console.log(addNumbers(2, 5));               // 7
console.log(addNumbers(1, 2, 3, 4, 5));      // 15
console.log(addNumbers(10, 20, 30, 40, 50)); // 150
