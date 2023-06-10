/* Write a function that finds the elements at even positions in an array.
The input comes as an array of string elements.
The output is printed on the console. Collect all elements in a string, separated by space.
Input                                       Output
['20', '30', '40', '50', '60']              20 40 60
['5', '10']                                 5
*/

function evenPositionElements(array) {
    let result = '';

    for (let i = 0; i < array.length; i += 2) {
        result += array[i];
        result += ' ';
    }
    console.log(result);
}

evenPositionElements(['20', '30', '40', '50', '60']);
// 20 40 60
evenPositionElements(['5', '10']);
// 5 