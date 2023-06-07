/* You are given two integers n and k. Write a JS function that generates and
 return the following sequence:
 The first element is 1
 Every following element equals the sum of the previous k elements
 The length of the sequence is n elements

The input comes as two number arguments. The first element represents the
 number n, and the second – the number k.
The output is the return value of your function and should be an array of 
numbers.
----------------------------------------------------------------------------
Input       Output                  |  Input    Output                      |
6, 3        [1, 1, 2, 4, 7, 13]     |  8, 2     [1, 1, 2, 3, 5, 8, 13, 21]  |

Explanation
The 2nd element (1) is the sum of the 3 elements before it, but there is only 1, so we take that. The third element is 
the sum of the first 2 (1 and 1) and the 4th – the sum of 1, 1, and 2. The 5th element is the sum of the 2nd, 3rd, and 4th
(1, 2, and 4) and so on */

function lastKNumbersSequence(n, k) {
    let firstElement = [1];
    while (firstElement.length < n) {
		let lastKnumbers = firstElement.slice(-k);
		firstElement.push(lastKnumbers.reduce((acc, val) => acc + val, 0));
	}
	return firstElement;
}

console.log(lastKNumbersSequence(6, 3)); 
// [1, 1, 2, 4, 7, 13] 
console.log(lastKNumbersSequence(8, 2));
// [1, 1, 2, 3, 5, 8, 13, 21]