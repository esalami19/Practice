//random race number
let raceNumber = Math.floor(Math.random() * 1000);
//registration of runners
let runnerOnTime = true;
//runners age
let runnerAge = 50;
//add 1000 to the number for adults who arrived early (on time)
if (runnerOnTime === true && runnerAge > 18) {
	raceNumber += 1000;
}
//give the above a message for their tun start time
if (runnerOnTime && runnerAge > 18) {
	console.log(`runner ${raceNumber} your race time is at 9:30am`);
} else if (!runnerOnTime && runnerAge > 18) {
	console.log(`runner ${raceNumber} your race time is at 11:00am`);
} else if (runnerAge < 18) {
	console.log(`runner ${raceNumber} your race time is at 12:30pm`);
} else {
	console.log("see the registration desk");
}
