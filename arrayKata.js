/*Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

Write a function which takes a list of strings and returns each line prepended by the correct number.

The numbering starts at 1. The format is n: string. Notice the colon and space in between.

Examples: (Input --> Output)

[] --> []
["a", "b", "c"] --> ["1: a", "2: b", "3: c"]
*/

const number = (array) => {
	//create variable for new array with indexes
	const newArr = [];
	//identify index of each string in array
	array.forEach((element, index) => {
		//pushes index of item in array followed by colon into string
		newArr.push(`${index + 1}: ${element}`);
	});
	//returns the index of each item in array
	return newArr;
};
