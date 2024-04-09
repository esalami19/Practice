function smash(words) {
	//set new variable to contain new sentence
	//loop through array with method to return all the words
	const sentence = words.toString((element) => {
		return element;
	});
	//return all the new sentence with spaces
	const newString = sentence.replaceAll(",", " ");
	return newString;
}
