function add(a: number, b: number): number {
  return a + b;
}

function isNumber(x: any): x is number {
  return typeof x === 'number';
}

let num1 = 5;
let num2 = 10;
let str1 = '10';

if (isNumber(num1) && isNumber(num2)) {
  let result = add(num1, num2);
  console.log(result); // Output: 15
}

if (isNumber(num1) && typeof str1 === 'string') {
  let parsedNum = parseInt(str1);
  if (!isNaN(parsedNum)) {
    let result = add(num1, parsedNum);
    console.log(result); //Output: 15
  } else {
    console.error('String cannot be parsed to a number');
  }
}

// another solution using type assertion
let result2 = add(num1, parseInt(str1 as string));
console.log(result2); //Output: 15