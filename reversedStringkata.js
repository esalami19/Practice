const word = (str) => {
	const firstStr = str.split("");
	const secStr = firstStr.reverse();
	const thirdStr = secStr.join("");
	console.log(thirdStr);
};

word("word");
word("joy");
word("freedom");
