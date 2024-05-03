function removeSmallest(numbers) {
	if (numbers.length === 0) {
		return numbers;
	}
	const minNum = Math.min(...numbers);
	const newArray = [];
	const minArray = [];
	const minNewArray;
	for (let i = 0; i < numbers.length; i++) {
		if (numbers[i] !== minNum) {
			newArray.push(numbers[i]);
		}
	}
	for (let i = 0; i < numbers.length; i++) {
		if (numbers[i] === minNum) minArray.push(numbers[i]);
	}
	for (let i = 0; i < minArray.length; i++) {
		if (minArray.length !== 0) {
			minNewArray = minArray.splice(1);
			newArray.push(...minNewArray);
			return newArray;
		} else {
			return newArray;
		}
	}
}
