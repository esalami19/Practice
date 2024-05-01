//https://www.codewars.com/kata/56541980fa08ab47a0000040/train/javascript
function printerError(string) {
	let newString = string.split("");
	console.log(newString);
	let newerString = [];
	for (let i = 0; i < newString.length; i++) {
		if (
			i !== "a" ||
			"b" ||
			"c" ||
			"d" ||
			"e" ||
			"f" ||
			"g" ||
			"h" ||
			"i" ||
			"j" ||
			"k" ||
			"l" ||
			"m"
		) {
			newerString.push(i);
		}
		console.log(newerString);
	}
	console.log(newerString.length);
}
