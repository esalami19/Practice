//correct - passed test
function getGrade(s1, s2, s3) {
	// Code here
	//create calcuation for parameters
	let letterGrad = ["A", "B", "C", "D", "F"];
	let scoreAvg = (s1 + s2 + s3) / 3;
	if (scoreAvg > 90 && scoreAvg <= 100) {
		return letterGrad[0]; //A
	} else if (scoreAvg >= 80 && scoreAvg < 90) {
		return letterGrad[1]; //B
	} else if (scoreAvg >= 70 && scoreAvg < 80) {
		return letterGrad[2]; //C
	} else if (scoreAvg >= 60 && scoreAvg < 70) {
		return letterGrad[3]; //D
	} else if (scoreAvg >= 0 && scoreAvg <= 60) {
		return letterGrad[4]; //F
	}
	//create condition for each test band
}

getGrade(70, 78, 71);
console.log("hi");
