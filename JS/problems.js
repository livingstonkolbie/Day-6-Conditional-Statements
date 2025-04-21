
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

number = -4;

if(number > 0) {
    console.log(`${number} is a positive number`);
} else if(number < 0) {
    console.log(`${number} is a negative number`);
} else {
    console.log(`${number} is zero`);
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

let age = 15;

if (age >= 65) {
    console.log(`Eligible for Senior Citizen Discount`);
} else {
    console.log("Not eligible for Senior Citizen Discount");
}

let eligible = age >= 65 ? "Eligible" : "Not eligible";
console.log(eligible);


switch (age >= 65) {
    case true:
        console.log("Old");
        break;
    case false:
        console.log("Young");
        break;
    default:
        console.log("Wizard");
}



// Problem 4
console.log("Problem 4");

let hour = 14;

if (hour >= 5 && hour < 12) {
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
let price;

if (age < 12) {
    price = "5";
} else if (age >=12 && age <= 64) {
    price = "12";
} else if (age > 64) {
    price = "8";
}

console.log(`Price: $${price}`);


// Problem 6
console.log ("Problem 6");

let weightKg = 70;
let heightM = 1.75;

let bmi = weightKg / (heightM * heightM);
let category;

if (bmi < 18.5) {
    category = "underweight"
} else if (bmi < 25) {
    category = "normal weight"
} else if (bmi < 30) {
    category = "overweight"
} else  {
    category = "obese"
}

console.log(`BMI: ${bmi.toFixed(1)} Category: ${category}`);

let weightKg = 710;
let heightM = 1.75;

let bmi = weightKg / (heightM * heightM);

if (bmi < 18.5) {
    console.log ("This is under weight");
} else if (bmi < 25) {
    console.log ("This is normal weight");
} else if (bmi < 30) {
    console.log ("This is over weight");
} else  {
    console.log ("This is obese");
}
