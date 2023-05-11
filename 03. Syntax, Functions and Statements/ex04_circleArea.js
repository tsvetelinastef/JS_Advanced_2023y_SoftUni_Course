function circleArea(arg1){
    if(typeof(arg1) === 'number'){
        let area = Math.PI*arg1*arg1;
        console.log(`${area.toFixed(2)}`);
    } else {
        console.log('We can not calculate the circle area, because we receive a ' + typeof(arg1) + '.');
    }
}

circleArea(5);  // 78.54
circleArea('name'); 
// We can not calculate the circle area, because we receive a string.
