function processOddPositions(array){
    return array.filter((a, i) => i % 2 !== 0)
    .map(x => x * 2)
    .reverse()
    .join(' ');
}

console.log(processOddPositions([10, 15, 20, 25]));   //  50  30
console.log(processOddPositions([3, 0, 10, 4, 7, 3]));   // 6  8  0

/*  function processOddPositions(array) {
	return array
		.filter((n, i) => i % 2 !== 0)
		.map((n) => n * 2)
		.reverse()
		.join(" ");
}
let res = processOddPositions([10, 15, 20, 25]);
console.log(res);

*/