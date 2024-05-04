function humanYearsCatYearsDogYears(humanYears) {
	// Your code here!
	let catYearsOne;
	let dogYearsOne;
	let catYearsTwo;
	let dogYearsTwo;
	let catYears;
	let dogYears;
	if (humanYears === 1) {
		const catYearsOne = humanYears * 15;
		const dogYearsOne = humanYears * 15;
		const ages = [humanYears, catYearsOne, dogYearsOne];
		return ages;
	} else if (humanYears === 2) {
		let catYearsTwo = 24;
		let dogYearsTwo = 24;
		let ages = [humanYears, catYearsTwo, dogYearsTwo];
		return ages;
	} else if (humanYears > 2) {
		let calc = humanYears - 2;
		let nextCalcC = calc * 4;
		let nextCalcD = calc * 5;
		let catYears = nextCalcC + 24;
		let dogYears = nextCalcD + 24;
		let ages = [humanYears, catYears, dogYears];
		return ages;
	} else {
		return ages;
	}
}
