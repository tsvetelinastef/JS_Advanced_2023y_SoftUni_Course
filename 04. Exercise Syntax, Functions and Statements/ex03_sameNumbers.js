/* 
task description:
Write a function that takes an integer number as an input and check if all the
digits in a given number are the same or not.
Print on the console true if all numbers are the same and false if not.
On the next line print the sum of all digits.
The input comes as an integer number.
The output should be printed on the console. 
*/


function sameNumbers(number) {
    let digits = number.toString();
    let isSame = true;

    for (const el of digits) {
        if (el !== digits[0]) {
            isSame = false;
            break;
        }
    }

    let sum = digits
        .split("")
        .reduce((acc, val) => Number(acc) + Number(val), 0);
    console.log(isSame);
    console.log(sum);
}

sameNumbers(2222222);
// true
// 14
sameNumbers(1234);
// false
// 10
