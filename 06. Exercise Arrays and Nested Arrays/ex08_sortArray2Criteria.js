/* Write a function that orders a given array of strings, by a length 
in ascending order as primary criteria, and by alphabetical value 
in ascending order as second criteria.
The comparison should be case-insensitive.
The input comes as an array of strings.
The output is the elements of the ordered array of strings,
printed each on a new line */

function sortArray2Criteria(array){
    return array.sort((a, b) => {
        return a.length - b.length || a.localeCompare(b);
    }).join("\n");
}

sortArray2Criteria(['alpha', 'beta','gamma']);
// beta
// alpha
// gamma

sortArray2Criteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);
// Jack
// Isacc
// George
// Theodor
// Harrison

sortArray2Criteria(['test', 'Deny', 'omen', 'Default']);
// Deny
// omen
// test
// Default
