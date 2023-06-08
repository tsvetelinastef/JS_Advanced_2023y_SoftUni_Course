/* A square matrix of numbers comes as an array of arrays, each array holding
 numbers. Write a function that finds the sum at the main and the secondary 
 diagonals.
The input comes as an array of arrays, containing number elements 
(2D matrix of numbers).
The output is printed on the console, on a single line separated by space.
 First print the sum at the main diagonal, then the sum at the secondary diagonal. */

function diagonalSums(input){
    let firstDiagonal = 0;
    let secondDiagonal = 0;
    let firstIndex = 0;
    let secondIndex = input[0].length - 1;
    input.forEach(array => {
        firstDiagonal += array[firstIndex++];
        secondDiagonal += array[secondIndex--];
    });
    console.log(firstDiagonal + ' ' + secondDiagonal);
}

diagonalSums([
    [20, 40], 
    [10, 60]] );
//  80  50

diagonalSums([
    [3, 5, 17], 
    [-1, 7, 14],
    [1, -8, 89]]);
//  99  25

/* function diagonalSums(array) {
	let diagonalsObj = {
		diagonalA: 0,
		directionA: 0,
		diagonalB: 0,
		directionB: array[0].length - 1,
	};

	for (let row = 0; row < array.length; row++) {
		for (let col = 0; col < array[row].length; col++) {
			if (diagonalsObj.directionA === col) {
				diagonalsObj.diagonalA += array[row][col];
			}
			if (diagonalsObj.directionB === col) {
				diagonalsObj.diagonalB += array[row][col];
			}
		}
		diagonalsObj.directionA++;
		diagonalsObj.directionB--;
	}
	console.log(diagonalsObj.diagonalA + " " + diagonalsObj.diagonalB);
}
diagonalSums([
	[3, 5, 17],
	[-1, 7, 14],
	[1, -8, 89],
]); */
