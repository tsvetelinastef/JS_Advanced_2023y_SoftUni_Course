/* Write a function that sorts an array of numbers so that the first element
is the smallest one, the second is the biggest one, the third is
the second smallest one, the fourth is the second biggest one, and so on.
Return the resulting array. */

function sortingNumbers(array){
    let res = [];
	array.sort((a, b) => a - b);
	while (array.length > 0) {
		res.push(array.shift(), array.pop());
	}
	return res;
}

sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);
// [-3, 65, 1, 63, 3, 56, 18, 52, 31, 48]
