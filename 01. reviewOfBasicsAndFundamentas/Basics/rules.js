/*
input[0] 
1.trapezoid Area -> task:  reads from the console three Fractional numbers b1, b2, h and 
calculates area of the trapezoid with bases b1 and b2 and height h. Formula of the trapezoid Area is (b1 + b2) * h/2 
on the figure dwn is showed trapezoid with sides 8 , 13 and height 7 

input:                      output: 
    8                       73.50
    13
    7

    function trapezoidArea(input){
        let b1 = Number(input[0]);
        let b2 = Number(input[1]);
        let h = Number(input[2]);

        let result = ((b1 + b2) * h) / 2;
        console.log(result.toFixed(2));
    }

    trapezoidArea(["8", "13", "7"]);


ex2.fishland
palmud, safrid, mussels. For this goes to the fishland. From the console input - prices in lv. of the skumriata and tstsata.
Also quantity of the palamud, safrid, mussels in kg. How much money he will be need to pay the bill if prices in the fishland are:
Palamud 60% po-skap ot skumriata.. Safrida e 80% po-skap ot tsatsata... Midite sa 7.50 za kg... 
5 chisla se vavejdat ot consolata:
Vhod:   Parvi red - tsena na skumriata na kg. Realno chislo v intervala... Vtori,treti, chetvarti, peti
Izhod:  Da se otpechata na konsolata edno chislo s plavashta zapetaia (floating- point number): Kolko pari shte sa nujni na Georgi
za da si plati smetkata. Chisloto triabva da e formatirano do vtoriat znak sled desetichnata zapetaia (1.2457 -> 1.25)
vhod:                   Izhod: 
    6.90                42.96
    4.20
    1.5
    2.5
    1
 
        function fishland(input){
            let index = 0;
            let skumriaPrice = Number(input[index++]);
            let cacaPrice = Number(input[index++]);
            let palamudKg = Number(input[index++]);
            let safridKg = Number(input[index++]);
            let midiKg = Number(input[index++]);

            let palamudPrice = skumriaPrice + (skumriaPrice * 60) / 100;
            let safridPrice = cacaPrice + (cacaPrice * 80) / 100;
            let midiPrice = 7.5;
            
            let totalSum = palamudKg * palamudPrice + safridKg * safridPrice + midiKg * midiPrice;
            console.log(totalSum.toFixed(2));
        }

to convert values to numbers;
Number(input[0]) -> converts the value at the first index (0) of the `input` array to a number. 
    The `Number()` function in JS is used to convert a value to a number - strings, booleans
    if the value `input[0]` is already a number, it will be returned as is.

    const input = ["42", "Hello", "3.14"];
    const num = Number(input[0]);
    console.log(num); // 42 number
    string "42" is converted toa number 42

Number(input[index++]) -> converts the value at the current index indicted by `index`
    and then increments `index`by one. It is typically used when you want to convert and 
    access multiple values from an array sequentially

    const input = ["1", "2", "3"];
    let index = 0;
    const num1 = Number(input[index++]);
    console.log(num1); // 1 number
    console.log(index); // 1 index incremented to 1

    const num2 = Number(input[index++]);
    console.log(num2); // 2 number
    console.log(index);  // 2

    "1", "2" and "3" are accessed fro the `input` array. Each value is converted 
    to a number using `Number()` and the `index` is incremented after each cnversion

other number conversions:
parseInt() 
        Converts a string to an integer by parsing it until a non-digit 
        character is encountered....  parseInt("42") ->  returns 42
parseFloat() 
        Converts a string to a floating-point number.... parseFloat("3.14") -> returns 3.14
unary plus(`+`) operator -> when placed before a value, it attempts to convert the value to a number.
        +"10" -> returns 10


Number(input[index++]) ->
            convert array elements to numbers to convert a value to a number, 
            specifically when accessing elements from an array sequentially.

        input -> array containing values
        index++ -> post-incremented operator that increment the value of `index` after it is used. 
        So it first accesses the value out the current `index`and then increments `index` by one.

-> za posledovatelna obrabotka na elementi ot masiv
        Example:    const input = ["5", "10", "15"];
                    let index = 0;
                    while(index < input.length){
                        const num = Number(input[index++]);
                        console.log(num);  // 5, 10, 15  numbers
                    }

        the elements from the input array are accessed and converted to numbers sequentially 
        using `Number(input[index++])`. Each converted number is then printed.

-> Iterating through an array
        const input = ["2", "4", "6"];
        let index = 0;
        for(index = 0; index < input.length; index++){
            const num = Number(input[index++]);
            console.log(num); // 2, 4, 6 numbers
        }

        for loop to iterate through the `input` array.The `index` incremented within the loop 
        and each array element is accessed and converted to a number.

-> Mathematical calculations
        const input = ["3", "5", "7"];
        let index = 0;
        let sum = 0;
        while(index < input.length){
            const num = Number(input[index++]);
            sum += num;
        }
        console.log(sum); // 15 number
    converted to numbers and added together to calculate the sum.

-> Comparisions and conditions
        const input = ["6", "8", "4"];
        let index = 0;
        while(index < input.length){
            const num = Number(input[index++]);
            if(num > 5){
                console.log(num + " is greater than 5");
            } else {
                console.log(num + " is less or equal to 5");
            }
        }

     6, 8, 4 are converted to numbers and comparisions is made to check if each number 
     is greater than 5. The converted numbers are obtained using `Number(input[index++])`

    In all these cases, Number(input[index++])  allows you to convert the array elements
    to numbers as you access them enabling various operations and conditions based on numerical values.


-----------------------------------------------------------------------------------------------------------------------------
-----------------------------------------------------------------------------------------------------------------------------
        const and let to declare variables 
`const`
    - to declare a variable that will not be reassigned a different valuew after it's initialization
    - variables declared with "const" are block-scoped, only accessible within the block in which they are defined
    -  you must assign a value to a "const" variable when declaring it, once assigned, it's value cannot be changed.

        const pi = 3.14159;
        const name = "John";
    you cannot reassign a different value to a const variable
        pi = 3.14; // Error: Assignment to constant varaibe
    propertis of objects and arrays assigned to const can be modified
        const myArray = [1, 2, 3];
        myArray.push(4);  // vlid

 `let`
        - let when you want to declare a variable that can be reassigned a different value
        - like `const`, `let` variables are also block-scoped
        - unlike `const`, you can assign a new value to a `let`variable after its initialization

        let counter = 0;      -> counter and name variables can be reassigned new values,
        let name = "Alice";   -> while the i variable is block-scoped to the `for` loop

        you can reassign a different value to a let variable 
        counter = 1;
        name = "Bob";

        let variables can be updated within a block
        for(let i = 0; i < 5; i++){
            console.log(i);  // ouput:  0, 1, 2, 3, 4 
        }
        console.log(i);  // error:  i is not defined (block-scoped)


        difference between `const` and `let` is their mutability. 
        `const` is used for values that should remain constant let can change their values
*/