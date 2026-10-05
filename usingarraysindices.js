
/*Task 1: Create the Order System
Create two arrays:
● The drinks array stores three drink orders (e.g., “Latte”, “Tea”, “Espresso”).
● The pastry array stores three pastry orders (e.g., “Croissant”, “Muffin”,
“Bagel”).*/

let drinks = ["Latte", "Tea", "Espresso"];
let pastry = ["Croissant", "Muffin", "Bagel"]; 





/*Task 2: Log the number of drinks and number of pastries by using .length on each
row.
console.log(drinks.length)
console.log(pastry.length)*/

console.log(drinks.length);
console.log(pastry.length);




/*Task 3: Access Orders Using Bracket Notation
Use bracket notation to log a specific drink and a specific pastry using
hardcoded numbers. For example, you might want to log the first drink and last
pastry. Do this for three combinations.*/



console.log(drinks[0], pastry[2]); 
console.log(drinks[2], pastry[1]); 
console.log(drinks[1], pastry[0]);



/*Task 4: Access Orders Dynamically with Variables*/

let drinkOptionOne = 0;
let drinkOptionTwo = 1;
let drinkOptionThree = 2;
let pastryOptionOne = 0;
let pastryOptionTwo = 1;
let pastryOptionThree = 2;

console.log(" Order 1 includes drink: " + drinks[drinkOptionOne] + ", pastry: " + pastry[pastryOptionThree]);
console.log(" Order 2 includes drink: " + drinks[drinkOptionThree] + ", pastry: " + pastry[pastryOptionTwo]);
console.log(" Order 3 includes drink: " + drinks[drinkOptionTwo] + ", pastry: " + pastry[pastryOptionOne]);

/*Task 5: Write a loop that logs all the items in the drink category, ensuring the loop
dynamically adjusts to the number of items using .length*/

for (let i =0; i < drinks.length; i++)
console.log(drinks[i]);



/*Task 6: Add a New Order & Track Length
Suppose a new order has been placed: a customer ordered a flat white. Add “flat
white” to the drinks category dynamically. Log the updated number of drinks after
the addition.
Declare two variables and use them with bracket notation to log the selected order
dynamically. */

drinks[3] = "flat white";
console.log(drinks.length);

let drinkOptionFour = 3;
let newPastryOption = "cronut";

console.log(" Order 4 includes drink: " + drinks[drinkOptionFour] + ", pastry: " + newPastryOption);
