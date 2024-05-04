function isSquare(n) {
	const newNum = Math.sqrt(n);
	console.log(newNum);
	if (newNum % 1 === 0) {
		return true;
	} else {
		return false;
	}
}
