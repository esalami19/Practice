function findNeedle(haystack) {
	let needleIned;
	for (let i = 0; i < haystack.length; i++) {
		if (haystack[i] === "needle") {
			const needleIned = i;
			return `found the needle at position ${needleIned}`;
		}
	}
}
