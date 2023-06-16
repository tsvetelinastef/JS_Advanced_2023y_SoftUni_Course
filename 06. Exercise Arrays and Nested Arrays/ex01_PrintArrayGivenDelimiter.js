function printArrayGivenDelimiter(array, delimiter){
    console.log(array.join(delimiter));
}

printArrayGivenDelimiter(['One', 'Two', 'Three',  'Four',  'Five'], '-');
// ne-Two-Three-Four-Five
printArrayGivenDelimiter(['How about no?','I','will','not','do','it!'], '_');
// How about 
// no?_I_will_not_do_it!
