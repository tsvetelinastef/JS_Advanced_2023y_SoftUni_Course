function sumOfNumbersN_M(n , m){
    let sum = 0;
    for (let i = Number(n); i <= Number(m); i++) {
        sum += i;
    }
    console.log(sum);
}

sumOfNumbersN_M('1', '5');  // 15
sumOfNumbersN_M('-8', '20');  // 174