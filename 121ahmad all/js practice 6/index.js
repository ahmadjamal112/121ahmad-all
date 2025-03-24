function checkEvenOrOdd(num) {
    if (num % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

// Example usage:
console.log(checkEvenOrOdd(4)); // Output: Even
console.log(checkEvenOrOdd(7)); // Output: Odd


function findLargest(a, b) {
    return a > b ? a : b;
}

// Example usage:
console.log(findLargest(10, 20)); // Output: 20
console.log(findLargest(50, 25)); // Output: 50

function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}

// Example usage:
console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15
console.log(sumArray([10, 20, 30]));    // Output: 60
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Example usage:
console.log(reverseString("hello"));  // Output: "olleh"
console.log(reverseString("world"));  // Output: "dlrow"

function isPalindrome(str) {
    // Convert to lowercase and remove non-alphanumeric characters
    str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    // Compare the string with its reversed version
    return str === str.split('').reverse().join('');
}

// Example usage:
console.log(isPalindrome("racecar")); // Output: true
console.log(isPalindrome("hello"));   // Output: false
console.log(isPalindrome("Madam"));   // Output: true
console.log(isPalindrome("A man, a plan, a canal, Panama")); // Output: true


function countVowels(str) {
    // Convert string to lowercase and match vowels
    const matches = str.toLowerCase().match(/[aeiou]/g);
    
    // Return the count, or 0 if no vowels found
    return matches ? matches.length : 0;
}

// Example usage:
console.log(countVowels("hello"));  // Output: 2
console.log(countVowels("world"));  // Output: 1
console.log(countVowels("JavaScript")); // Output: 3
console.log(countVowels("bcdfg"));  // Output: 0
