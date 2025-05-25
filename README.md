# Unit-Testing-Examples

# JavaScript Unit Testing Examples

This repository contains example JavaScript utility functions and unit tests written using two popular testing frameworks:

- [Jasmine](https://jasmine.github.io/)
- [Mocha](https://mochajs.org/) with [Chai](https://www.chaijs.com/)

It serves as a learning project to demonstrate how to write and test small reusable functions using different testing environments.

---


## 🧠 Utility Functions Overview

### ✅ `sum(vals: number[])`
- Returns the sum of an array of numbers.

### ✅ `positive(vals: number[])`
- Filters and returns only the positive numbers from an array.

### ✅ `capitalizeText(input: string)`
- Converts a lowercase string to uppercase.  
- Throws a `TypeError` if the input is not a string.

### ✅ `createArray(number: number)`
- Returns an array from `0` to `number - 1`.  
- E.g. `createArray(3)` → `[0, 1, 2]`

---

## 🧪 Running the Tests

### 🚀 Jasmine

```bash
- npm jasmine init

- npm install -g jasmine

```
### 🚀 Mocha + Chai
```bash
- npm init -y 

- npm install --save-dev mocha chai


```

---
## 💡 Purpose of the Project
 
**This project is created to:**

- Practice writing unit tests in JavaScript

- Understand and compare Jasmine and Mocha/Chai

**Test different function behaviors including:**

- Normal outputs

- Type validation

- Array operations








