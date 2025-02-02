function add(a: number, b: number): number {
  return a + b;
}

let result = add(5, '10'); // Type error if strictNullChecks is enabled
console.log(result);