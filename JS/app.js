

// let number = 10;
// let number = -10;
let number = 0;


if (number > 0) {
    console.log("The number is positive!");
} else if (number < 0) {
    console.log("The number is negative.");
} else {
    console.log("The number is zero.");
}



let score = 89;

// Checking for a single conditon

if (score >= 90) {
    console.log("Grade: A");
}


// if-else statement: adds a fallbackaction  if the first condition isn't met

if (score >= 90) {
    console.log("Grade: A");
} else {
    console.log("Grade: Not A");
}


// Allows multiple conditions in sequence

if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else if (score >= 60) {
    console.log("Grade: D");
} else {
    console.log("Grade: F");
}


// Nested Conditionals

if(score >= 90) {
    if(score === 100) {
        console.log("Grade: A+ with honors");
    } else {
        console.log("Grade: A");
    }
} else {
    console.log("Grade: Below A");
}


// Ternary Operator = If/else statements

let g = score >= 90 ? 'A' : 'Not A';
// let grade = score >= 90 ? 'Left side' : 'Right side'; --- it's going to show the string
console.log('Grade:', g);



// Switch Statement

let grade = "C";

switch (grade) {
    case 'A':
        console.log("Excellent!");
        break;
    case 'B':
        console.log("Good Job!");
        break;
    case 'C':
        console.log("Needs improvement.");
        break;
    default:
        console.log("Fail.");
}