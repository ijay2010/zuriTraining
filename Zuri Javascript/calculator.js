const operator = prompt('Enter operator to perform the calculation(either +,-,* or /):  ');
const numBer1 = parseFloat(prompt('Enter the first number:  '));
const numBer2 = parseFloat(prompt('Enter the second number:  '));
let result;

if (operator == '+') {
    result = numBer1 + numBer2;
} else if (operator == '-') {
    result = numBer1 - numBer2;
} else if (operator == '*') {
    result = numBer1 * numBer2;
} else {
    result = numBer1 / numBer2;
}
console.log(`${numBer1} ${operator} ${numBer2} = ${result}`);