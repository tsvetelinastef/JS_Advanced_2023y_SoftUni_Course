function greatestCommonDivisorGCD(firstNum, secondNum){
    while(secondNum){
        const temp = secondNum;
        secondNum = firstNum % secondNum;
        firstNum = temp;
    }
    console.log(firstNum);
}

greatestCommonDivisorGCD(15, 5);  // 5
greatestCommonDivisorGCD(2154, 458 ); // 2