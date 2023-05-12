function squareOfStars(number) {
    const star = '* ';

    if (number === null || number === ' ' || number === 0) {
        for (let i = 0; i < 5; i++) {
            console.log(`${(star.repeat(5)).trim()}`);
        }
    } else {
        for (let i = 0; i < number; i++) {
            console.log(`${(star.repeat(number)).trim()}`);
        }
    }
}


squareOfStars(1);
// *
console.log("--------------------");
squareOfStars(2);
// * *
// * *
console.log("--------------------");
squareOfStars(5);
// * * * * *
// * * * * *
// * * * * *
// * * * * *
// * * * * *
console.log("--------------------");
squareOfStars(7);
// * * * * * * *
// * * * * * * *
// * * * * * * *
// * * * * * * *
// * * * * * * *
// * * * * * * *
// * * * * * * *
