// Declare and initialize an empty multidimensional array. (Array of arrays);
var arr = [];
arr = [[0,1,2,3],["<br>"],
[1,0,1,2],["<br>"],
[2,1,0,1]];["<br>"],
document.write(arr + "<br>");

// . Write a program to print numeric counting from 1 to 10.
document.write("<h3>Countion from 1 to 10</h3>")
for(var i = 1; i <=10; i++){
    document.write( i + "<br>");
};

// Write a program to print multiplication table of any number using for loop. Table number & length should be taken as an input from user.

var table = +prompt("Enter a number to show its multiplication");
var tableLength = +prompt("Enter length multiplication table")
document.write("<h3>Table multipication</h3>")
for(var i = 1; i <= tableLength; i++){
    document.write(table + " x " + i + " = " + (table*i) + "<br>");
};

// Write a program to print items of the following array using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”,“strawberry”]
document.write("<h3>Fruits</h3>")
var fruits = ["apple", "banana", "mango", "orange" , "strawberry"];
for(var i = 0; i<fruits.length; i++){
    document.write(fruits[i] + "<br>");
    
};
for(var j = 0; j < fruits.length; j++){
    document.write("Element at index " + j + " is " + fruits[j] + "<br>");
};
// Generate the following series in your browser. See example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k;
document.write("<h3>Counting</h3>");
for(var i=1; i<=15; i++){
    document.write(i + ",");
};
document.write("<h3>Reverse Counting</h3>");
for(var i=10; i>=1; i--){
    document.write(i + ",");
};
document.write("<h3>Even</h3>");
for(var a= 0; a <= 20; a++){
    if(a % 2 === 0 ){
        document.write(a + ",");
    }
};
document.write("<h3>Odd</h3>");
for(var a= 0; a <= 20; a++){
    if(a % 2 !== 0 ){
        document.write(a + ",");
    }
};
document.write("<h3>Series</h3>");
for(var a= 2; a <= 20; a++){
    if(a % 2 === 0 ){
        document.write(a + "k" + ", ");
    }
};

// You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”] Write a program to enabl “search by user input” in an array.
// After searching, prompt the user whether the given item is found in the list or not. Example;

var snacks = ["cake", "apple pie", "cookie", "chips", "patties"];
var searchSnaks = prompt("Welcome to our Bakery what to you want to order")
for(var i = 0; i < snacks.length; i++){
    if(snacks[i]===searchSnaks){
        alert(searchSnaks + " is Available at index " + i + " In our bakery");
    }else{
        alert("Sorry " + searchSnaks + " is Not Available in our bakery" )
    }
    break;
};

// Write a program to identify the largest number in the given array.
// A = [24, 53, 78, 91, 12].
document.write("<br>");
var A = [24, 53, 78, 91, 12];
document.write("<br>");
document.write("Array Item is: " + A +"<br>");
document.write("<stong>The largest number is: " + (Math.max(...A)) + "<br>");
document.write("<stong>The smallest number is: " + (Math.min(...A)) + "<br>");

// Write a program to print multiples of 5 ranging 1 to 100.
 for(var i = 1; i<=20; (i++)){
     document.write((i*5) + ",");
 }