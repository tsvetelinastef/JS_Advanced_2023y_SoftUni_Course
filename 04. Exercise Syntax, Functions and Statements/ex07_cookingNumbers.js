function cookingNumbers(inputNum, ...commands) {
    commands.forEach((command) => {
        inputNum = numManipulator(inputNum, command);
    });

    function numManipulator(inputNum, command) {
        switch (command) {
            case 'chop':
                inputNum /= 2;
                break;
            case 'dice':
                inputNum = Math.sqrt(inputNum);
                break;
            case 'spice':
                inputNum += 1;
                break;
            case 'bake':
                inputNum *= 3;
                break;
            case 'fillet':
                inputNum *= 0.8;
                break;
        }
        console.log(inputNum);
        return inputNum;
    }
}

cookingNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
// 16
// 8
// 4
// 2
// 1

cookingNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');
// 3
// 4
// 2
// 6
// 4.8