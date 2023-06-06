/*  Write a program that receives a total of 4 parameters in the format 
x1, y1, x2, y2. 
Check if the distance between each point (x, y) and the beginning of the 
Cartesian coordinate system (0, 0) is valid. A distance between two points 
is considered valid if it is an integer value. 

Note: You can use the following formula to help you calculate the distance 
between the points (x1, y1) and (x2, y2).
The order of comparisons should always be first {x1, y1} to {0, 0}, 
then {x2, y2} to {0, 0} and finally {x1, y1} to {x2, y2}.
Math.sqrt((x2 - x1) ^ 2 + (y2 - y1) ^ 2 )

In case a distance is valid, print: `{x1, y1} to {x2, y2} is valid`
If the distance is invalid, print: `{x1, y1} to {x2, y2} is invalid`
The input consists of two points given as 4 numbers.
For each comparison print either `{x1, y1} to {x2, y2} is valid` if the distance is valid, or `{x1, y1} 
to {x2, y2} is invalid` if it is invalid.

Examples
Input                                   Output
3, 0, 0, 4                          {3, 0} to {0, 0} is valid
                                    {0, 4} to {0, 0} is valid
                                    {3, 0} to {0, 4} is valid
.......................................................................                                    
2, 1, 1, 1                  {2, 1} to {0, 0} is invalid
                            {1, 1} to {0, 0} is invalid
                            {2, 1} to {1, 1} is valid
 */


function validityChecker(x1, y1, x2, y2){
    function distance(x1, y1, x2, y2) {
		let distH = x1 - x2;
		let distY = y1 - y2;
		return Math.sqrt(Math.pow(distH, 2) + Math.pow(distY, 2));
	}

	Number.isInteger(distance(x1, y1, 0, 0))
		? console.log(`{${x1}, ${y1}} to {0, 0} is valid`)
		: console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);

	Number.isInteger(distance(x2, y2, 0, 0))
		? console.log(`{${x2}, ${y2}} to {0, 0} is valid`)
		: console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);

	Number.isInteger(distance(x1, y1, x2, y2))
		? console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`)
		: console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
}

validityChecker(3, 0, 0, 4 ); 
/*  {3, 0} to {0, 0} is valid
{0, 4} to {0, 0} is valid
{3, 0} to {0, 4} is valid  */ 
validityChecker(2, 1, 1, 1);
/*  {2, 1} to {0, 0} is invalid
{1, 1} to {0, 0} is invalid
{2, 1} to {1, 1} is valid  */