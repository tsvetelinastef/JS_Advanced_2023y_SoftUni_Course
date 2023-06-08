/* Write a function that finds the biggest element inside a matrix.
The input comes as an array of arrays, containing number elements 
(2D matrix of numbers).
The output is the return value of your function. Find the biggest element 
and return it. */

function biggestElement(array){
    let biggest = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < array.length; i++) {
        for (const el of array[i]) {
            if (biggest < el) {
				biggest = el;
			}
        }
    }
    return biggest;
}

biggestElement([
        [20, 50, 10],
        [8, 33, 145]]);
// 145
biggestElement([
        [3, 5, 7, 12],
        [-1, 4, 33, 2],
        [8, 3, 0, 4]]);
// 33
