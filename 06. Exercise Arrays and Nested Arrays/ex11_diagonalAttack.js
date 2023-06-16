/* Write a JS function that reads a given matrix of numbers and checks
if both main diagonals have equal sums. If they do, set every element that
is NOT part of the main diagonals to that sum, alternatively just print 
the matrix unchanged.
The input comes as an array of strings. Each element represents a string of
numbers, with spaces between them. 
Parse it into a matrix of numbers, so you can work with it.
The output is either the new matrix, with all cells not belonging to a main 
diagonal are changed to the diagonal sum,
or the original matrix if the two diagonals have different sums. You need to
print every row on a new line, with cells separated by a space. 
Check the examples below.  */

function diagonalAttack(matrixString){

    let diagonalLeftRight = 0;
	let diagonalRightLeft = 0;
	let matrix = [];

	for (let i = 0; i < matrixString.length; i++) {
		matrix.push(
			matrixString[i].split(" ").map((str) => {
				return Number(str);
			})
		);
	}

	let positionLeftRight = 0;
	let positionRightLeft = matrix[0].length - 1;

	for (let row = 0; row < matrix.length; row++) {
		for (let col = 0; col < matrix[row].length; col++) {
			let currentNum = matrix[row][col];
			let currentPosition = col;

			if (currentPosition === positionLeftRight) {
				diagonalLeftRight += currentNum;
			}

			if (currentPosition === positionRightLeft) {
				diagonalRightLeft += currentNum;
			}
		}

		positionLeftRight++;
		positionRightLeft--;
	}

	if (diagonalLeftRight === diagonalRightLeft) {
		positionLeftRight = 0;
		positionRightLeft = matrix[0].length - 1;

		for (let row = 0; row < matrix.length; row++) {
			for (let col = 0; col < matrix[row].length; col++) {
				let currentPosition = col;

				if (
					currentPosition !== positionLeftRight &&
					currentPosition !== positionRightLeft
				) {
					matrix[row][col] = diagonalLeftRight;
				}
			}
			positionLeftRight++;
			positionRightLeft--;
		}
	}

	console.log(matrix.map((arr) => arr.join(" ")).join("\n"));
}

diagonalAttack(['5 3 12 3 1',
'11 4 23 2 5',
'101 12 3 21 10',
'1 4 5 2 2',
'5 22 33 11 1']);
// 5 15 15 15 1
// 15 4 15 2 15
// 15 15 3 15 15
// 15 4 15 2 15
// 5 15 15 15 1

diagonalAttack(['1 1 1',
'1 1 1',
'1 1 0']);
// 1 1 1
// 1 1 1
// 1 1 0