//truthy, falsy assignment
const username = "li";
//ternary expression
username
	? console.log(`Hello ${username}, welcome to magic eight ball`)
	: console.log("Hello! Please enter a username");
const userQuestion = "what will the weather be";
//string interpolation
userQuestion
	? console.log(`${username}, you asked ${userQuestion}`)
	: console.log(`${username}, please ask a question`);
//Math object method?
const randomNumber = Math.floor(Math.random() * 8);
let eightBall = "";
//switch case
switch (randomNumber) {
	case 0:
		eightBall = "It is certain";
		break;
	case 1:
		eightBall = "It is decidedly so";
		break;
	case 2:
		eightBall = "Reply hazy try again";
		break;
	case 3:
		eightBall = "Cannot predict now";
		break;
	case 4:
		eightBall = "Do not count on it";
		break;
	case 5:
		eightBall = "My sources say no";
		break;
	case 6:
		eightBall = "Outlook not so good";
		break;
	case 7:
		eightBall = "Signs point to yes";
		break;
}

console.log(eightBall);
