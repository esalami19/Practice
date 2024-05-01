function countSheeps(sheep) {
	// TODO
	let count = 0;
	//set score to equal zero
	//find an array method that counts the true and puts it in new array
	//array length to find number of trues in new array
	//return number in new array
	sheep.forEach((element) => {
		if (element === true) {
			count++;
		}
	});
	console.log(count);
}
