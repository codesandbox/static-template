// SCRIMBA
// let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"]
// let appleShelf = document.getElementById("apple-shelf")
// let orangeShelf = document.getElementById("orange-shelf")

// Create a function that puts the apples onto the appleShelf
// and the oranges onto the orangeShelf. Use a for loop,
// a conditional statement, and the textContent property.

// function sortFruit() {
//   for (let i = 0; i < fruit.length; i++) {
//     if (fruit[i] === "🍎") {
//       appleShelf.textContent += fruit[i];
//     } else if (fruit[i] === "🍊") {
//       orangeShelf.textContent += fruit[i];
//     }
//   }
// }

// sortFruit()

// CHALLENGES

// let massMax = 78;
// let heightMax = 1.69;
// let massJohn = 92;
// let heightJohn = 1.95;

// let bmiMax = massMax / (heightMax ** 2)
// let bmiJohn = massJohn / (heightJohn ** 2)
// let markHigherBMI = bmiMax > bmiJohn

// console.log(bmiMax, bmiJohn, markHigherBMI)

// massMax = 95;
// heightMax = 1.88;
// bmiMax = massMax / (heightMax ** 2)

// massJohn = 85;
// heightJohn = 1.76;
// bmiJohn = massJohn / (heightJohn ** 2)

// markHigherBMI = bmiMax > bmiJohn
// console.log(bmiMax, bmiJohn, markHigherBMI)

// 1. Calculate the average score for each team, using
// the test data below

// 2. Compare the team's average scores to determine the
// winner of the competition, and print it to the
// console. Don't forget that there can be a draw, so
// test for that as well (draw means they have the same
// average score).

// 3. BONUS 1: Include a requirement for a minimum score
//  of 100. With this rule, a team only wins if it has a
//  higher score than the other team, and the same time a
//  score of at least 100 points. HINT: Use a logical
//  operator to test for minimum score, as well as
// multiple else-if blocks

//  4. BONUS 2: Minimum score also applies to a draw! So
//  a draw only happens when both teams have the same
//  score and both have a score greater or equal 100
// points. Otherwise, no team wins the trophy.

// TEST DATA: Dolphins score 96, 108 and 89. Koalas
// score 88, 91 and 110
// TEST DATA BODUS 1: Dolphins score 97, 112 and 101.
// Koalas score 109, 95 and 123
// TEST DATA BONUS 2: Dolphins score 97, 112 and 101.
// Koalas score 109, 95 and 106

// FIRST CHALLENGE
// let averageDolphinsScore = (96 + 108 + 89) / 3;
// console.log(averageDolphinsScore);

// let averageKoalasScore = (88 + 91 + 110) / 3;
// console.log(averageKoalasScore);

// if (averageDolphinsScore === averageKoalasScore) {
//   console.log('It\'s a draw! 🤝🏾')
// }
// else if (averageDolphinsScore > averageKoalasScore) {
//   console.log('Dolphins win 🏆!')
// }
// else {
//   console.log('Koalas win 🏆!')
// }

// BONUS 1
// let minScore = 100;

// let averageDolphinsScore = (97 + 112  + 101) / 3;
// console.log(averageDolphinsScore);

// let averageKoalasScore = (109 + 95  + 123) / 3
// console.log(averageKoalasScore);

// if (averageDolphinsScore === averageKoalasScore) {
//   console.log('It\'s a draw! 🤝🏾')
// }
// else if (averageDolphinsScore > averageKoalasScore && averageDolphinsScore >= minScore) {
//   console.log('Dolphins win 🏆!')
// }
// else if (averageKoalasScore > averageDolphinsScore && averageKoalasScore >= minScore) {
//   console.log('Koalas win 🏆!')
// }

// let minScore = 100;

// let averageDolphinsScore = (97 + 112 + 101) / 3;
// console.log(averageDolphinsScore);

// let averageKoalasScore = (109 + 95 + 106) / 3;
// console.log(averageKoalasScore);

// if (averageDolphinsScore === averageKoalasScore && averageDolphinsScore >= minScore && averageKoalasScore >= minScore) {
//   console.log('It\'s a draw! 🤝🏾! Both win 🎊')
// }
// else if (averageDolphinsScore > averageKoalasScore && averageDolphinsScore >= minScore) {
//   console.log('Dolphins win 🏆!')
// }
// else if (averageDolphinsScore > averageKoalasScore && averageDolphinsScore < minScore) {
//   console.log("Dolphins got higher than the Koalas but not more than the minimum score to win! 🤷🏾‍♂️")
// }
// else if (averageKoalasScore > averageDolphinsScore && averageKoalasScore >= minScore) {
//   console.log('Koalas win 🏆!')
// }
// else if (averageKoalasScore > averageDolphinsScore && averageKoalasScore < minScore) {
//   console.log("Koalas got higher than the Dolphins but not more than the minimum score to win! 🤷🏾‍♂️")
// }
// else {
//   console.log("Draw but una be olodo! 😒")
// }

// To test FALSY AND TRUTHY values
// 0, '', undefined, null and NaN are all falsy values
// console.log(Boolean())

// function change(day) {
//   let result = "Dance"

//   switch (day) {
//     case 'Sunday':
//       result = "Church";
//       console.log(`It's Time!`)
//       break;
//     case 'Monday':
//       result = "Run";
//       break;
//     case 'Tuesday':
//       result = 'Fly';
//       break;
//     case 'Wednesday':
//     case 'Thursday':
//       result = "Swim";
//       break;
//     default:
//       result = "Huh?! 😒"
//   }
//   return result
// }

// console.log(change('Samstag'));

// const day = 'Tuesday';

// switch (day) {
//   case 'Monday':
//     console.log('Run');
//     break;
//   case 'Tuesday':
//     console.log('Dance');
//     break;
//   default:
//     console.log('Welp!')
// }

// const age = 45;
// age >= 18 ? console.log('You can drive!') : console.log('You can\'t drive!');
// const drink = age >= 18 ? 'Wine 🍷' : 'Water 💧';
// console.log(`I like to drink ${age >= 18 ? 'Wine 🍷' : 'Water 💧'}!`);

// if (age >= 18) {
//   console.log('Wine 🍷')
// }
// else {
//   console.log('Water 💧')
// }

// let drink3;
// if (age >= 18) {
//   drink3 = 'Wine 🍷';
// }
// else {
//   drink3 = 'Water 💧';
// }
// console.log(`I like to dink ${drink3}!`)

// let bill = 300;
// let tip = 0.15 * bill;
// let otherTip = 0.2 * bill;
// console.log(`The bill is ${bill}, the tip is ${bill >= 50 && bill <= 300 ? tip : otherTip}, and the total is ${bill >= 50 && bill <= 300 ? bill + tip : bill + otherTip}.`)

// OR

// let bill2 = 275;
// let tip2 = bill2 >= 50 && bill2 <= 300 ? bill2 * .15 : bill2 * .2;
// console.log(`The bill is ${bill2}, the tip is ${tip2}, and the total is ${bill2 + tip2}.`)

// let hasDriversLicense = false;
// let passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('I can drive! :D');

// function logName(name) {
//   console.log(`My name is ${name} `)
// }

// logName('Niran')
// logName('Joshua')
// logName('Nony')

// function fruitProcessor(apples, oranges) {
//   const juice = `We produced ${apples} apple juice boxes and ${oranges} oranges.`
//   console.log(juice)
//   return juice
// }

// fruitProcessor(10, 20)
// fruitProcessor(20, 10)

// console.log(fruitProcessor(10, 20));
// console.log(fruitProcessor(20, 10));

// const num = Number('23')
// console.log(typeof num) // number
// console.log(typeof num)

// Function Declaration
// function calcAge1(birthyear) {
//   return 2040 - birthyear
// }
// const Age1 = calcAge1(2000);

// Function Expression
// const calcAge2 = function(birthyear) {
//   return 2040 - birthyear
// }
// const Age2 = calcAge2(2020);

// Arrow Function
// const calcAge3 = birthyear => 2040 - birthyear
// const Age3 = calcAge3(2000);
// console.log(Age3);

// const yearsUntilRetirement = (birthyear, firstname) => {
//   const age = 2037 - birthyear;
//   const retirement = 70 - age;
//   // return retirement;
//   return `${firstname} retires in ${retirement} years.`
// }

// console.log(yearsUntilRetirement(2000, 'Cow'))

// const fruitPieces = function(fruit) {
//   return fruit * 5;
// }

// const fruitProcessor = function(apples, oranges) {
//   const orangePieces = fruitPieces(oranges);
//   const applePieces = fruitPieces(apples);

//   return `JUICE made from ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`
// }
// console.log(fruitProcessor(3, 5));

// const calcAge = function(birthyear) {
//   return 2050 - birthyear
// }

// const yearsUntilRetirement = function(birthyear, firstname) {
//   const age = calcAge(birthyear)
//   const retirement = 70 - age;

//   if (retirement == 0) {
//     return `${firstname} retires this year.`
//   } else if (retirement > 0) {
//     return `${firstname} retires in ${retirement} years.`
//   } else {
//     return `${firstname} already retired ${retirement * -1} years ago.`
//   }
// }

// console.log(yearsUntilRetirement(1945, 'Cow'))

// function calcAge(birthyear, firstname) {
//   const age = 2037 - birthyear;
//   console.log(`${firstname} is ${age} years old.`);
//   return age;
// }

// calcAge(2000, 'Jonas');

// const cutPieces = function(fruit) {
//   return fruit * 5
// }

// const fruitProcessor = function(apples, oranges) {
//   const applePieces = cutPieces(apples);
//   const orangePieces = cutPieces(oranges);

//   return `Juice made from ${applePieces} pieces of apple and ${orangePieces} pieces of orange`
// }

// console.log(fruitProcessor(5, 6));

// CHALLENGE

// const calcAverage = (num1, num2, num3) => {
//   const Average = (num1 + num2 + num3) / 3
//   console.log(Average);
//   return Average;
// }

// // TEST 1
// let avgDolphins = calcAverage(44, 23, 71);
// let avgKoalas = calcAverage(65, 54, 49);

// const checkWinner = function(avgDolphins, avgKoalas) {
//   if (avgDolphins >= (avgKoalas * 2)) {
//     const dolphinsWin = `Dolphins win (${avgDolphins} vs. ${avgKoalas})! 🏆`;
//     return dolphinsWin;
//   }
//   else if (avgKoalas >= (avgDolphins * 2)) {
//     const koalasWin = `Koalas win (${avgKoalas} vs. ${avgDolphins})! 🏆`;
//     return koalasWin;
//   } else {
//     const noWinner = `Nobody wins! 🤝🏾`;
//     return noWinner;
//   }
// };

// console.log(checkWinner(avgDolphins, avgKoalas));

// // TEST 2
// avgDolphins = calcAverage(85, 54, 41);
// avgKoalas = calcAverage(23, 34, 27);
// console.log(checkWinner(avgDolphins, avgKoalas));

// Arrays
// const friends = ['Abha', 'Joko', 'Yori', 'Asi'];
// console.log(friends[0]);

// OR

// const years = Array(1800, 1700, 1600, 1500, 1400)
// console.log(years[0]);
// console.log(friends[friends.length-1]);
// friends[4] = 'Eli'
// console.log(friends);

// const calcAge = function(birthyear) {
//   return 2022 - birthyear
// }

// const years = Array(1800, 1700, 1600, 1500, 1400);
// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[2]);
// const age3 = calcAge(years[years.length - 1]);

// console.log(age1, age2, age3);

// const ages = [calcAge(years[0]), calcAge(years[2]), calcAge(years[years.length - 1])];
// console.log(ages);

// const friends = ['Abha', 'Joko', 'Yori', 'Asi'];
// friends.push('Eli');
// console.log(friends);

// friends.unshift('Shuri');
// console.log(friends);

// friends.pop();
// console.log(friends);

// friends.shift();
// console.log(friends);

// console.log(friends.indexOf('Abha'));
// console.log(friends.indexOf('Monkey'));

// console.log(friends.includes('Abha'));
// console.log(friends.includes('Monkey'));

// const calcTip = function(bill) {
//   let tip = bill >= 50 && bill <= 300 ? bill * .15 : bill * .2;
//   console.log(`The bill is ${bill} and the tip is ${tip}. The total is ${bill + tip}.`);
//   return tip;
// }

// const bills = [150, 700, 45];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// console.log(tips);
// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(total);

const Niran = {
  firstName: "Adeniran",
  lastName: "Adeyemo",
  realAge: 2022 - 1500,
  job: "Designer/Developer",
  friends: ["Abha", "Joko", "Yori", "Asi"]
};

console.log(`${Niran.firstName} ${Niran["lastName"]}.`);

const ageKey = "Age";
console.log(Niran["real" + ageKey]);

const nameKey = "Name";
console.log(Niran["first" + nameKey]);

const interestedIn = prompt(
  "What do you want to know about Niran? Choose between firstName, lastName, realAge, job and friends."
);

if (Niran[interestedIn]) {
  console.log(Niran[interestedIn]);
} else {
  console.log(
    "Not available! Choose between firstName, lastName, realAge, job and friends."
  );
}

Niran.location = "Ago Are";
Niran["twitter"] = "@_deniran";
console.log(Niran);
