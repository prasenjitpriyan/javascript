# 🚀 JavaScript Learning Roadmap & Code Notes

## Phase 1: Core Fundamentals (COMPLETE ✅)

This phase establishes the base for all JavaScript programming.

### 1. The Console 🛠️

- **Purpose**: The browser's environment for testing code and viewing output.
- **Command**: `console.log()` is used to display data.

```javascript
// Outputting a string (text)
console.log('I am learning JavaScript!');
// Output: I am learning JavaScript!
```

---

### 2\. Variables & Data Types 📦

- **Variables**: Containers for storing reusable data.
  - `let`: For values that can **change** (mutable).
  - `const`: For values that should **not change** (constant).
- **Data Types**: The three core types: **String**, **Number**, **Boolean**.

<!-- end list -->

```javascript
// String Data Type
let myMessage = 'Time for the next step!';
console.log(myMessage);
// Output: Time for the next step!

// Number Data Type (using const for a fixed year)
const currentYear = 2025;
console.log(currentYear);
// Output: 2025

// Boolean Data Type (true or false)
const isLearningFun = true;
console.log(isLearningFun);
// Output: true
```

---

### 3\. Operators ➕

Symbols used to perform actions on data.

#### A. Arithmetic Operators (Math)

| Operator | Action              | Example                  | Result |
| :------- | :------------------ | :----------------------- | :----- |
| `+`      | Addition            | `apples + oranges`       | `8`    |
| `*`      | Multiplication      | `apples * pricePerApple` | `12.5` |
| `%`      | Modulus (Remainder) | `17 % 5`                 | `2`    |

```javascript
let apples = 5;
let oranges = 3;
const pricePerApple = 2.5;

console.log(apples + oranges); // Addition
// Output: 8

console.log(apples * pricePerApple); // Multiplication
// Output: 12.5

console.log(17 % 5); // Modulus
// Output: 2
```

#### B. Comparison Operators (Logic)

| Operator  | Question                                                  | Result (Boolean)  |
| :-------- | :-------------------------------------------------------- | :---------------- |
| `>` , `<` | Greater Than, Less Than                                   | `true` or `false` |
| `===`     | **Strict Equality**: Value **and** Type must be the same. | `true` or `false` |

```javascript
let myAge = 25;

// Greater Than Comparison
console.log(myAge > 18);
// Output: true

// Strict Equality Comparison (Types are different: Number vs String)
console.log(10 === '10');
// Output: false
```

---

### 4\. Control Flow (Decision Making) ⚙️

The **`if/else`** statement executes different code blocks based on a Boolean condition.

```javascript
let myAge = 25;

if (myAge > 18) {
  // This code block runs because the condition (25 > 18) is TRUE.
  console.log('You are eligible to vote.');
} else {
  // This code block is skipped.
  console.log('You are not old enough to vote.');
}
// Output: You are eligible to vote.
```

---

## 🗺️ JavaScript Learning Roadmap Overview

### Phase 2: Data Structures (Current Focus 🎯)

| Focus Area     | Description                                                                        |
| :------------- | :--------------------------------------------------------------------------------- |
| **Arrays 🧺**  | Ordered lists of items (e.g., a list of usernames).                                |
| **Objects 🏷️** | Complex data that groups related properties (e.g., a user's name, age, and email). |

### Phase 3: Functions and Reusability

- Writing reusable blocks of code and more advanced logic.

### Phase 4: Specialization

- **Front-End:** DOM Manipulation, Events, Fetching data.
- **Back-End:** Node.js, Express.js.
