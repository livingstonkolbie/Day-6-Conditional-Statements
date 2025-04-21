
// Problem 1
console.log ("Problem 1");

let number = 2;

if (number > 0) {
    console.log ("This number is positive");
} else if (number < 0) {
    console.log ("This number is negative");
} else {
    console.log ("This number is zero");
}


//Problem 2
console.log ("Problem 2");

let score = 100;

if (score >= 90) {
    if (score === 100) {
        console.log ("Perfect score!");
    } else {
        console.log ("Grade: A");
    }
} else if (score >= 80) {
    console.log ("Grade: B");
} else if (score >= 70) {
    console.log ("Grade: C");
} else if (score >= 60) {
    console.log ("Grade: D");
} else {
    console.log("Grade: F");
}


// Problem 3 
console.log("Problem 3");

let age = 155;

if (age >= 65) {
    console.log("Eligible for Senior Citizen Discount");
} else {
    console.log("Not eligible for Senior Citizen Discount");
}


// Problem 4
console.log("Problem 4");

let hour = 14;

if (hour > 5 && hour < 12) {
    console.log("Good Morning!");
} else if (hour >= 12 && hour < 17) {
    console.log ("Good Afternoon!");
} else if (hour >= 17 && hour < 21) {
    console.log("Good Evening");
} else {
    console.log("Good Night!");
}


// Problem 5
console.log("Problem 5");

age = 74;

if (age < 12) {
    console.log ("Price is $5");
} else if (age >=12 && age <= 64) {
    console.log ("Price is $12");
} else if (age > 64) {
    console.log ("Price is $8");
}


// Problem 6
console.log ("Problem 6");

let weightKg = 70;
let heightM = 1.75;

let bmi = weightKg / (heightM * heightM);

if (bmi < 18.5) {
    console.log ("Underweight");
} else if (bmi < 25) {
    console.log ("Normal Weight");
} else if (bmi < 30) {
    console.log ("Overweight");
} else  {
    console.log ("Obese");
}