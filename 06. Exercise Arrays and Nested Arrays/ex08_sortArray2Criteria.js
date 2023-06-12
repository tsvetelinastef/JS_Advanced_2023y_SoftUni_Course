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
