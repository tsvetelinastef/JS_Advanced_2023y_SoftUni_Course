/* Write a JS function that processes the elements in an array one by one 
and produces a new array. If the current element is a negative number you 
must add it to the front of the array (as the first element of the array).
Otherwise, if the current element is a positive number (or 0), 
you must add it to the end of the array (as the last element of the array).

The input comes as an array of number elements.
The output is printed on the console, each element on a new line.  */


function negativePositiveNumber(array) {
    const input = [];  // not array anymore... it's an object

    for (let num of array) {
        if (num < 0) {
            input.unshift(num);
        } else {
            input.push(num);
        }
    }

    for (let num of input) {
        console.log(num);
    }
}

negativePositiveNumber([7, -2, 8, 9]);
//   -2
//    7
//    8
//    9
negativePositiveNumber([3, -2, 0, -1]);
//     -1
//     -2
//      3
//      0


/* 
        another way to solve the problem: 
        function negativePositiveNumber(array) {
               const input = [];
    
               for (let i = 0; i < array.length; i++) {
                     if(array[i] < 0){
                            input.unshift(array[i]);
                      } else {
                            input.push(array[i]);
                      }
                }
           console.log(input.join('\n'));
         }
*/