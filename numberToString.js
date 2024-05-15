function highAndLow(numbers) {
	const newArr = numbers.split(" ");
	const numArr = [];
	const highLow = [];
	// biome-ignore lint/correctness/noConstAssign: <explanation>
	for (const i = 0; i < newArr.length; i++) {
		numArr.push(Number.parseInt(newArr[i]));
	}
	const high = Math.max(...numArr);
	highLow.push(high);
	const low = Math.min(...numArr);
	highLow.push(low);
	return `${high} ${low}`;
}
