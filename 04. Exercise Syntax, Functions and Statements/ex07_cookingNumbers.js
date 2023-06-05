/*
Write a program that receives 6 parameters which are a number and a list of five operations. Perform the 
operations sequentially by starting with the input number and using the result of every operation as a starting point 
for the next one. Print the result of every operation in order. The operations can be one of the following:
     chop - divide the number by two
     dice - square root of a number
     spice - add 1 to the number
     bake - multiply number by 3
     fillet - subtract 20% from the number
The input comes as 6 string elements. The first element is the starting point and must be parsed to a number. The 
remaining 5 elements are the names of the operations to be performed.
The output should be printed on the console.
*/

function cookingNumbers(inputNum, ...commands) {
    commands.forEach((command) => {
        inputNum = numManipulator(inputNum, command);
    });

    function numManipulator(inputNum, command) {
        switch (command) {
            case 'chop':
                inputNum /= 2;
                break;
            case 'dice':
                inputNum = Math.sqrt(inputNum);
                break;
            case 'spice':
                inputNum += 1;
                break;
            case 'bake':
                inputNum *= 3;
                break;
            case 'fillet':
                inputNum *= 0.8;
                break;
        }
        console.log(inputNum);
        return inputNum;
    }
}

cookingNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
// 16
// 8
// 4
// 2
// 1

cookingNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');
// 3
// 4
// 2
// 6
// 4.8