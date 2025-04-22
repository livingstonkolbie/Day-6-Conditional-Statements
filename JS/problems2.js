// At home practice
// problem 1

let number = 0;
let result;

if(number > 0) {
    result = "positive";
} else if(number < 0) {
    result = "negative";
} else {
    result = "zero"
}

console.log(`${number} is ${result}`);


// problem 2

let score = 50;
let grade;

if(score >= 90) {
    if(score === 100) {
        grade = 'A+, Perfect Score'
    } else {
        grade = 'A'
    }
} else if(score >= 80) {
    grade = 'B';
} else if(score >= 70) {
    grade = 'C';
} else if(score >= 60) {
    grade = 'D';
} else {
    grade = 'F';
}

console.log(`your score is ${score}, so your grade is ${grade}`);


// problem 3

let age = 72;
let price; 

if(age < 12) {
    price = '5';
} else if(age >= 12 && age < 65) {
    price = '12';
} else {
    price = '8';
}

console.log(`your age is ${age}, so the ticket costs $${price}`);


// problem 4

let time = 6;
let greeting;

if(time >= 4 && time < 12) {
    greeting = 'good morning';
} else if(time >= 12 && time < 17) {
    greeting = 'good afternoon';
} else if(time >= 17 && time < 21) {
    greeting = 'good evening';
} else {
    greeting = 'good night'
}

console.log(`the time is ${time} so.... ${greeting}`);


// problem 5 

age = 92;
let eligibility;

if(age >= 65) {
    eligibility = 'you are old and eligibile'
} else {
    eligibility = 'youre too young and not eligible'
}

console.log(`you are ${age} which means ${eligibility}`);


// problem 6

let weightKg = 70;
let heightM = 1.75;
let bmi = weightKg / (heightM * heightM);
let results;

if(bmi < 18) {
    results = 'under weight';
} else if(bmi >= 18 && bmi < 25) {
    results = 'normal weight';
} else if(bmi >= 25 && bmi < 30) {
    results = 'over weight';
} else {
    results = 'obese';
}

console.log(`your BMI: ${bmi.toFixed(1)} - your results: ${results}`);
