function mathOperations(num1, num2, string){
    let sum = 0;
    if (string === '+') {
        sum = num1 + num2
        console.log(sum);
    } else if(string === '-'){
        sum = num1 - num2;
        console.log(sum);
    } else if(string === '*') {
        sum = num1 * num2;
        console.log(sum);
    } else if (string === '/'){
        sum = num1 / num2;
        console.log(sum);
    } else if(string === '%'){
        sum = num1 % num2;
        console.log(sum);
    } else if(string === '**'){
        sum = num1 ** num2;
        console.log(sum);
    }
}

mathOperations(5, 6, '+');  // 11
mathOperations(3, 5.5, '*');  // 16.5