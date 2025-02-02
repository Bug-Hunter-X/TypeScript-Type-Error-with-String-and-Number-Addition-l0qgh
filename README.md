# TypeScript Type Error with String and Number Addition

This repository demonstrates a common type error in TypeScript that occurs when performing arithmetic operations with mismatched types. Specifically, it shows an error when adding a number and a string.

## Bug

The `bug.ts` file contains a function `add` that takes two numbers as input and returns their sum. However, the function is called with a string as the second argument, leading to a type error if `strictNullChecks` is enabled in your `tsconfig.json` file.

## Solution

The `bugSolution.ts` file provides a solution using type guards to ensure both arguments are numbers before performing the addition. This prevents the type error and makes the code more robust.