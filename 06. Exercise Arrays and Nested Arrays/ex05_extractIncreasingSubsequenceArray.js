function extractIncreasingSubsequenceArray(array) {
    
    let biggest = Number.MIN_SAFE_INTEGER;
    let res = array.reduce((acc, currentElement) => {
        if (biggest <= currentElement) {
            acc.push(currentElement);
            biggest = currentElement;
        }
        return acc;
    }, []);
    return res;
}


extractIncreasingSubsequenceArray([1, 3, 8, 4, 10, 12, 3, 2, 24]);
// [1, 3, 8, 10, 12, 24]

extractIncreasingSubsequenceArray([1, 2, 3, 4]);
// [1, 2, 3, 4]

extractIncreasingSubsequenceArray([20, 3, 2, 15, 6, 1]);
// [20]
