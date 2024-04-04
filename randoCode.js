let ilove = "I" + "love" + "you"; // string concatenation
ilove;

let myMeal = "i" + " " + "had" + " " + "chicken";
console.log(myMeal);

let x = Math.floor(Math.random() * 50); // Math = built-in object, .random, .floor = method
console.log(x);
console.log(Math.round(45.8));

//variables
let price;
console.log(price); //returns undefined
price = 350;
console.log(price);
//mathematical operators
let calc = 7;
calc = calc + 4; //shortened version: "calc += 4" others to be used -=, *=, /=
console.log(calc); //output 11
calc++; // increasing by 1, '--' decreases by 1
console.log(calc);
//string concatenation- both ways work
let favAnimal = "Elephant";
console.log("my favourite animal is an" + favAnimal);
console.log(`my favourite animal is an ${favAnimal}`);

function sentanceVowel(animal) {
	const vowel = ["a", "e", "i", "o", "u"];
	let letterA = animal[0];
	//parameter is animal, which is placeholder in function for argument(actual value), we are indexing first letter of parameter^ for animal[0]
	if (vowel.includes(letterA)) {
		console.log(`my favourite animal is an ${animal}`);
	} else {
		console.log(`my favourite animal is a ${animal}`);
	}
}

sentanceVowel("horse");

function greatOrNot(animal) {
	let lettersofA = ["a", "d", "b", "g"];
	let animalLetter = animal[0];
	if (lettersofA.includes(animalLetter)) {
		console.log(`love that ${animal}`);
	} else {
		console.log(`not too sure about a ${animal}`);
	}
}
greatOrNot("bunny");

//typeof
favAnimal = favAnimal + 2; // better way favAnimal += 2
console.log(favAnimal);
favAnimal = 2;
console.log(typeof favAnimal);

//Truthy and Falsy
let wordCount = ""; //"",'', 0, null or undefined generate a false when assign to a variable but whenever text is added or number 1+ generates a true for your condition
if (wordCount) {
	console.log("Great! You've started your work!");
} else {
	console.log("Better get started");
}
//truthy falsy assignment
let username = "";
let defaultName;
if (!username) {
	console.log((defaultName = "stanger"));
} else {
	console.log((defaultName = username));
}

//ternay operators to replace if statements
let username = "";
let defaultName;
if (!username) {
	console.log((defaultName = "stanger"));
} else {
	console.log((defaultName = username));
}

//switch case to replace else if statments
let groceryItem = "papaya";

switch (groceryItem) {
	case "tomato":
		console.log("Tomatoes are $0.49");
		break;
	case "lime":
		console.log("Limes are $1.49");
		break;
	case "papaya":
		console.log("Papayas are $1.29");
		break;
	default:
		console.log("Invalid item");
		break;
}
//greater than = to
let numOne = 3;
let numTwo = 3;
numOne >= numTwo ? console.log(numOne) : console.log(numTwo);
//practicing accessing arrays and objects within them
const applications = [
	{
		name: "too",
		surname: "cool",
		activity: ["basketball", "football", "tennis", "badminton"],
		age: "school",
	},
	{
		name: "I'm",
		surname: "just",
		activity: ["swimming", "running", "hiking", "throwing"],
		age: "for",
	},
	{
		name: "been",
		surname: "waasup",
		activity: ["fencing", "climbing", "growing veg", "badminton"],
		age: "ok",
	},
];

applications[1].activity[3];

//hoisting - calling functions before they're defined
getNumber(number); // example

function getNumber(number) {
	// fuinction now being defined
	return number * 7;
}

//helper functions using function above as example
function rando(number) {
	console.log(Math.ceil(Math.random() * getNumber(number))); // get number is a helper function
}

//function expressions - below we are defining a function inside an expression, to refer to the function the function is stored in a variable
// to refer to the below, or call the below function : flowers()
const flowers = function (type, price, kg) {
	let bunch = price * kg;
	console.log(`your ${type} cost ${bunch}`);
};
//turning ths above^ function into an arrow function
const flower = (type, price, kg) => {
	const bunches = price * kg;
	console.log(`your ${type} cost ${bunches}`);
};

//concise body arrow functions: if they have one parameter can be w/out parenthesis and if theres single line block don't need curly braces
const plantNeedsWater = (day) => (day === "Wednesday" ? true : false);

//Global scope, example of global variables, type of variables that can be accessed anywhere
//these variables are set outside the function and can still be accessed by statements inside the function
const satellite = "The Moon";
const galaxy = "The Milky Way";
const stars = "North Star";

const callMyNightSky = () => {
	return `Night Sky: ${satellite}, ${stars}, and ${galaxy}`;
};
console.log(callMyNightSky());

//block scope, known as local variable only accessible to lines of code within same block
//example of local variables, that variable has block scope
const logVisibleLightWaves = () => {
	const lightWaves = "Moonlight";
	console.log(lightWaves);
};

//scoping, function calls what is in the if block and what is outside the if block but still in the function
const logVisibleLightWaves = () => {
	let lightWaves = "Moonlight";
	let region = "The Arctic";
	// Add if statement here:
	if (region === "The Arctic") {
		let lightWaves = "Northern Lights";
		console.log(lightWaves);
	}
	console.log(lightWaves);
};

logVisibleLightWaves();

//arrays, each item in an array is called an element no matter the data types stored in an array
const codecademy = [
	"Keep a journal",
	"Take a falconry class",
	"Learn to juggle",
];
console.log(codecademy);
//creating variables from elements in an array
const famousSayings = [
	"Fortune favors the brave.",
	"A joke is a very serious thing.",
	"Where there is love there is life.",
];
const listItem = famousSayings[0];
//side note you can use bracket notation to access letters from a string
const wellBeing = "Peace";
console.log(wellBeing[2]);
//updating an element in an array, first you access it with bracket notation then assign the value
let groceryList = ["bread", "tomatoes", "milk"];
groceryList[1] = "avocados";
//to find out no. of items in a list can use .length property like how it is used in a string
const objectives = ["Learn a new language", "Read 52 books", "Run a marathon"];
console.log(objectives.length);
//to add items .push(method)
const chores = ["wash dishes", "do laundry", "take out trash"];
chores.push("deep breathing and relaxation", "catch up with work");
console.log(chores); // will show new items added to the end
//to remove last item from an array can use .pop() method which takes no arguments,
//meaning you do not need to specify anything in the parenthesis
const chores = [
	"wash dishes",
	"do laundry",
	"take out trash",
	"cook dinner",
	"mop floor",
];
const chore = chores.pop();
console.log(chore);
console.log(chores);
//more methods
const groceryList = [
	"orange juice",
	"bananas",
	"coffee beans",
	"brown rice",
	"pasta",
	"coconut oil",
	"plantains",
];
groceryList.shift(); //remove first element from array
console.log(groceryList); //returns whole array except 'orange juice'
groceryList.unshift("popcorn"); //add to beginning of list, .push adds to the end
console.log(groceryList); //returns array begining with popcorn
console.log(groceryList.slice(1, 4)); // returns ['bananas','coffee','brown rice']
//can also use this method and assign this edited version of the array a different name
const shortList = groceryList.slice(1, 4);
console.log(groceryList); //shows .slice method has not mutated array as all items in array are returned
//to find index of an element
const pastaIndex = groceryList.indexOf("pasta");
console.log(pastaIndex);
//manipulating arrays within functions the change is maintained outside the function
const concept = ["arrays", "can", "be", "mutated"];

function changeArr(arr) {
	arr[3] = "MUTATED";
}

changeArr(concept);
console.log(concept);

const removeElement = (newArr) => {
	newArr.pop();
};
removeElement(concept);
console.log(concept);

//nested arrays
const numberClusters = [
	[1, 2],
	[3, 4],
	[5, 6],
];
const target = numberClusters[2][1]; // to access the number 6

//loops
//for loops contain 3 expressions separated by ;
//fist:initialization starts the loop and can be used to declare the iterator variable
//second: stopping condition for the iterator variable to evaluate true or false meaning when it will run and not
//third: iteration statement, to update iterator variable on each loop
//in this exaample initialising the number 5, telling loop to carry on the loop when less than 11(meaning 10), then telling loop to add 1 on at end of loop
for (let number = 5; number < 11; number++) {
	console.log(number); //this will console log the number untill condition is met, meaning it will log 5,6,7,8 etc untill 10
}
//looping over arrays
//i can think of it representing index
//i<.length is used here to say continue to loop untill less than length is reached
//e.g in our example legnth of our array is 3 our array is indexed like 0,1,2 so here
// we are saying i is less than length index of the last element of our array is 2 which is less than the length that is 3
const vacationSpots = ["Bali", "Paris", "Tulum"];

for (let i = 0; i < vacationSpots.length; i++) {
	console.log(`I would love to visit ${vacationSpots[i]}`);
}
//nested loops
const bobsFollowers = ["Tom", "Dick", "Harry", "Larry"];
const tinasFollowers = ["faye", "Harry", "Larry"];
let mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++) {
	for (let a = 0; a < tinasFollowers.length; a++) {
		//second loop iterating through all elements of second arrays whilst first loop is iterating through first element of first array
		if (bobsFollowers[i] === tinasFollowers[a]) {
			//if match is found
			mutualFollowers.push(tinasFollowers[a]); //push what is matching into the new array
		}
	}
}
console.log(mutualFollowers); //shows harry and larry

//while loop - while a condition is true

const cards = ["diamond", "spade", "heart", "club"];

let currentCard = "";
while (currentCard !== "spade") {
	currentCard = cards[Math.floor(Math.random() * 4)];
	console.log(currentCard);
}

//do while loop - loop through at least once and perform action which is the do part then while comes after to give condition, where it'll loop up to certain point.
const cupsOfSugarNeeded = 7;
let cupsAdded = 0;
do {
	cupsAdded++;
	console.log(cupsAdded);
} while (cupsAdded < cupsOfSugarNeeded);
//using breaks
const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];
for (let i = 0; i < rapperArray.length; i++) {
	if (rapperArray[i] === "Notorious B.I.G.") {
		console.log(rapperArray[i]);
		break;
	}
	console.log("And if you don't know, now you know.");
}
//functions are a type of object
const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
	for (let i = 1; i <= 1000000; i++) {
		if (2 + 2 != 4) {
			console.log("Something has gone very wrong :( ");
		}
	}
};
let isTwoPlusTwo = checkThatTwoPlusTwoEqualsFourAMillionTimes;
isTwoPlusTwo();
console.log(isTwoPlusTwo.name); //to find out property name of function we assigned to 2+2 variable
// Write your code below

//higher-order functions - functions that pass other functios as parameters
//the functions acting as parameters are called callback functions
// for example below: the value 2 that was passed in the highorder function is
//also being used as the parameter in the callback function which is why the
//two variables storing the value from the callback function and the highorder function matches
const addTwo = (num) => {
	return num + 2;
};

const checkConsistentOutput = (func, val) => {
	const checkA = val + 2;
	const checkB = func(val);
	if (checkA === checkB) {
		return func(val);
	} else {
		return "inconsistent results";
	}
};

console.log(checkConsistentOutput(addTwo, 2)); //returns 4

//array methods
const numbers = [1, 2, 3, 4, 5];

const squareNumbers = numbers.map((number) => {
	return number * number;
});

//Array methods continued
const cities = [
	"Orlando",
	"Dubai",
	"Edinburgh",
	"Chennai",
	"Accra",
	"Denver",
	"Eskisehir",
	"Medellin",
	"Yokohama",
];

const nums = [1, 50, 75, 200, 350, 525, 1000];

//  Choose a method that will return undefined
cities.forEach((city) => console.log("Have you visited " + city + "?"));

// Choose a method that will return a new array
const longCities = cities.filter((city) => city.length > 7);

// Choose a method that will return a single value
const word = cities.reduce((acc, currVal) => {
	return acc + currVal[0];
}, "C");

console.log(word);

// Choose a method that will return a new array
const smallerNums = nums.map((num) => num - 5);

// Choose a method that will return a boolean value
nums.sum((num) => num < 0);
