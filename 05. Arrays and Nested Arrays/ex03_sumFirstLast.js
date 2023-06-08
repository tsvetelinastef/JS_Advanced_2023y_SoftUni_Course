/* Write a function that calculates and returns the sum of the first and 
the last elements in an array.
The input comes as an array of string elements holding numbers.
The output is the return value of your function and should be a number
Input                   Output              Input           Output
['20', '30', '40']       60                  ['5', '10']     15
*/

/*function firstSolution(arr) {
    let first = Number(arr[0]);
    let last = Number(arr[arr.length - 1]);

    return first + last;
} */

function secondSolution(arr) {
    return Number(arr.shift()) + Number(arr.pop());
}
 
secondSolution(["20", "30", "40"]);  // 60
secondSolution(['5', '10']);  // 15