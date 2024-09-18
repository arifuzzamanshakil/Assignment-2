// 1) Calculate the difference between two numbers
function calculateDifference(a, b) {
    return a - b;
}
let difference = calculateDifference(10, 6);
console.log(difference);

// 2) Check if a number is odd or not
function isOdd(num) {
    return num % 2 !== 0;
}
let oddRes = isOdd(33);
if (oddRes === true) {
    console.log("This number is odd");
} else {
    console.log("This number is even");
}


// 3) Find the minimum value in an array
function findMin(numArry) {
    return Math.min(...numArry);
}
console.log(findMin([30, 20, 65, 40, 55, 50, 60, 80, 90]));


// 4) Filter even numbers from an array
function filterEvenNumbers(arr) {
    return arr.filter((num) => {
        return num % 2 === 0;
    });
}
console.log(filterEvenNumbers([2, 5, 4, 8, 9, 10, 11, 12]));


// 5) Sort an array in descending order
function sortArrayDescending(array) {
    return array.sort().reverse();
}
console.log(sortArrayDescending([35, 23, 18, 50, 10, 42]));


// 6) Lowercase the first letter of a string

function lowercaseFirstLetter(lowercase) {
    return lowercase.split(" ").map(((lowercase) => {
        return lowercase.charAt(0).toLowerCase() + lowercase.slice(1);
    })).join(" ");
}
console.log(lowercaseFirstLetter("I AM A STudent"))


// 7) Count the number of vowels in a string
function countVowels(inputString) {
    let vowels = 'aeiouAEIOU'; // List of vowels (For both cases)
    let vowelsArray = Array.from(inputString).filter(char => vowels.includes(char));
    let countValue = vowelsArray.length;
    return `The number of vowels in "${inputString}" is: ${countValue} and vowels are: ${vowelsArray.join(',')}`;
}
console.log(countVowels("Hello, I Am A Student"));


// 8) Find the average of an array of numbers
function findAverage(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum / numbers.length;
}
console.log("Average:", findAverage([10, 2, 30, 4, 50]));