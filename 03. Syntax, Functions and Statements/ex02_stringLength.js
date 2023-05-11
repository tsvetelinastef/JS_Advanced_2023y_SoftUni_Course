function stringLenght(args1, args2, args3){
    let sumLength = args1.length + args2.length + args3.length;
    console.log(sumLength);
    let avgLength = Math.floor(sumLength / 3);
    console.log(avgLength);
}

stringLenght('chocolate', 'ice cream', 'cake');
// 22
// 7
stringLenght('pasta', '5', '22.3');
// 10
// 3