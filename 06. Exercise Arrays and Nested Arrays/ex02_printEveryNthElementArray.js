function printEveryNthElementArray(array, step) {

    return array.filter((el, i) => {
        if (i % step === 0) {
            return el;
        }
    });
}

printEveryNthElementArray(['5', '20', '31', '4', '20'], 2);
// ['5', '31', '20']
printEveryNthElementArray(['dsa','asd', 'test', 'tset'], 2);
// ['dsa', 'test']
printEveryNthElementArray(['1','2','3','4','5'], 6);
// ['1']
