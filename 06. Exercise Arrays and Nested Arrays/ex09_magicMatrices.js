/* Write a function that checks if a given matrix of numbers is magical.
A matrix is magical if the sums of the cells of every row and every column
are equal. 
The input comes as an array of arrays, containing numbers (number 2D matrix).
The input numbers will always be positive.
The output is a Boolean result indicating whether the matrix is magical or
 not */

function magicMatrices(matrix){
    for (let i = 0; i < matrix.length - 1; i++) {
		let sumRowOne = matrix[i].reduce((acc, el) => acc + el);
		let sumRowTwo = matrix[i + 1].reduce((acc, el) => acc + el);
		let sumColOne = 0;
		let sumColTwo = 0;
		for (let col = 0; col < matrix.length; col++) {
			sumColOne += matrix[i][col];
			sumColTwo += matrix[i + 1][col];
		}
		if (sumRowOne !== sumRowTwo || sumColOne !== sumColTwo) {
			return false;
		}
	}
	return true;
}

magicMatrices([[4, 5, 6], [6, 5, 4], [5, 5, 5]]);
// true

magicMatrices([[11, 32, 45], [21, 0, 1], [21, 1, 1]]);
// false

magicMatrices([[1, 0, 0], [0, 0, 1], [0, 1, 0]]);
// true
