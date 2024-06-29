// arrayManipulation.js
function processArray(numbers) {
    return numbers.map(num => (num % 2 === 0 ? num ** 2 : num * 3));
}

function formatArrayStrings(strings, numbers) {
    return strings.map((str, index) => {
        return (numbers[index] % 2 === 0) ? str.toUpperCase() : str.toLowerCase();
    });
}

// Example usage
let numbers = [1, 2, 3, 4, 5];
let strings = ["Hello", "World", "JavaScript", "Coding"];
let processedNumbers = processArray(numbers);
console.log(processArray(numbers));
console.log(formatArrayStrings(strings, processedNumbers));
