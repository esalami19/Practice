function getCount(str) {
	let count = 0;
	const wordCount = str.split("");
	for (let i = 0; i < wordCount.length; i++) {
		if (wordCount[i] === "u") {
			count += 1;
		} else if (wordCount[i] === "o") {
			count += 1;
		} else if (wordCount[i] === "i") {
			count += 1;
		} else if (wordCount[i] === "e") {
			count += 1;
		} else if (wordCount[i] === "a") {
			count += 1;
		}
	}
	return count;
}
