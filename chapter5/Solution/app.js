// 1. Write a program that take two numbers & add them in a new variable. Show the result in your browser.
document.write("<br>" + "<h1>1</h1>");
var a = 3;
var b = 5;
var c = a + b;
document.write("sum of " + a + " and " + b + " is " + c + "<br>");
// Repeat task1 for subtraction, multiplication, division &
// modulus
var c = a - b;
document.write("subtraction of " + a + " and " + b + " is " + c + "<br>");
var c = a * b;
document.write("multiplication of " + a + " and " + b + " is " + c + "<br>");
var c = a / b;
document.write("division of " + a + " and " + b + " is " + c + "<br>");
var c = a % b;
document.write("modulus of " + a + " and " + b + " is " + c + "<br>");

// 3. Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value
// after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial
// value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value
// after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value
// MATH EXPRESSIONS | JAVASCRIPT
// Page 2 of 9
// after addition is: 13”.
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value
// after decrement is: 12”.
// k. Show the remainder after dividing the variable’s value
// by 3.
// l. Output : “The remainder is : 0”.
document.write("<br>" + "<h1>3</h1>");
var value;
document.write("Value after variable declaration is " + value + "<br>");
value = 5;
document.write("Initial value is: " + value + "<br>");
var incrValue = ++value;
document.write("Value after increment is" + incrValue + "<br>");
var addValue = incrValue + 7;
document.write("Value after addition is " + addValue + "<br>");
var decValue = --addValue;
document.write("Value after decrement is " + decValue + "<br>");
var modValue = decValue % 3;
document.write("The remainder is " + modValue + "<br>");


//  4. Cost of one movie ticket is 600 PKR. Write a script to store ticket price in variable & calculate the cost of buying 5 tickets to a movie. Example output:
document.write("<br>" + "<h1>Movie Ticket</h1>");
var ticketCost = 600;
var buyTicket = 5;
document.write("The cost of buying " + buyTicket + " tickets to a movie is " + (ticketCost * buyTicket) + "<br>");

// 5. Write a script to display multiplication table of any number in your browser. E.g
document.write("<br>" + "<h1>Table of 4</h1>");
document.write("4 x 1 = " + (4 * 1) + "<br>");
document.write("4 x 2 = " + (4 * 2) + "<br>");
document.write("4 x 3 = " + (4 * 3) + "<br>");
document.write("4 x 4 = " + (4 * 4) + "<br>");
document.write("4 x 5 = " + (4 * 5) + "<br>");
document.write("4 x 6 = " + (4 * 6) + "<br>");
document.write("4 x 7 = " + (4 * 7) + "<br>");
document.write("4 x 8 = " + (4 * 8) + "<br>");
document.write("4 x 9 = " + (4 * 9) + "<br>");
document.write("4 x 10 = " + (4 * 10) + "<br>");

// 6. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”
document.write("<br>" + "<h1>Temperature Converter</h1>");
var Celsius = 25;
var Fahrenheit = (Celsius * 9 / 5) + 32;
document.write(Celsius + "°C is " + Fahrenheit + "°F" + "<br>");


Fahrenheit = 70;
Celsius = (Fahrenheit - 32) * 5 / 9;
document.write(Fahrenheit + "°F is " + Celsius + "°C" + "<br>");

// 7. Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges
document.write("<br>" + "<h1>Shopping Cart</h1>");
var item1 = 650;
var item2 = 100;
var qty1 = 3;
var qty2 = 7;
var shipmentCharges = 100;
var Total = (item1 * qty1) + (item2 * qty2) + shipmentCharges;

document.write("Price of item 1 " + item1 + "<br>");
document.write("Quantity of item 1 " + qty1 + "<br>");
document.write("Price of item 2 " + item2 + "<br>");
document.write("Quantity of item 2 " + qty2 + "<br>");
document.write("Total Cost of your charges is " + Total + "<br>");

// 8. Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser.
document.write("<br>" + "<h1>Marks Sheet</h1>");
var totalMarks = 980;
var obtMarks = 804;
document.write("Total Marks " + totalMarks + "<br>");
document.write("Obtained Marks " + obtMarks + "<br>");
document.write("Percentage " + (obtMarks * 100 / totalMarks) + "<br>");

// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees. Perform all calculations in a single expression.(Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee)
document.write("<br>" + "<h1>Currency Conertor</h1>");
var pakCurrency = (10 * 104.80) + (25 * 28);
document.write("Total currency " + pakCurrency + "<br>");


// 10. Write a program to initialize a variable with some number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression
document.write("<br>" + "<h1>10</h1>");
var z = 4;
z = 4 + 5 * 10 / 2;
document.write(z);

// 11. The Age Calculator: Forgot how old someone is? Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored values
document.write("<br>" + "<h1>Age Calculater </h1>");
var currentYear = 2020;
var birthYear = 1989;

document.write("current Year: " + currentYear + "<br>" +
    "Birth Year: " + birthYear + "<br>" +
    "Your Age is: " + (currentYear - birthYear));

// 13. The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is? Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life.
// Output the result to the screen like so: “You will need
// NNNN to last you until the ripe old age of NN”.

document.write("<br>" + "<h1>The Lifetime Supply Calculator</h1>");
var fvtSnack = "Choclate Chip"
var curAge = 15;
var maxAge = 65;
var perDaySnack = 3;
document.write("Your favorite snack: " + fvtSnack + "<br>");
document.write("Your current age: " + curAge + "<br>");
document.write("Esaimated Maximum Age: " + maxAge + "<br>");
document.write("Amount of snack per day:  " + perDaySnack + "<br>");
document.write("You will need  " + ((maxAge - curAge) * 3) + " to last you until the ripe old age of " + maxAge + "<br>");

