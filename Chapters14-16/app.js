// // Declare an empty array using JS literal notation to store student names in future.
// var studentsName = [];

// // Declare an empty array using JS object notation to store student names in future.
// studentsName = {};

// // Declare and initialize a strings array.
var str = ["ali", "adnan", "nasir"];

// // Declare and initialize a numbers array.
var num = [23, 45, 76];

// // Declare and initialize a boolean array.
var bool = [true, false];

// // Declare and initialize a mixed array.
var mix = ["ali", "adnan", true, 23, 54 ];

// // Declare and Initialize an array and store available education qualifications in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS, M. Phil., PhD). Show the listed
// // qualifications in your browser like:
var education = ["SSC", "HSC", "BCS", "BCOM", "MS", "M.PHIL", "PHD"];
document.write("<h1>Qualification</h1>")
document.write("1)" + education[0] + "<br>" + "2)" + education[1] + "<br>" + "3)" + education[2] + "<br>" + "4)" + education[3] + "<br>" + "5)" + education[4] + "<br>" + "6)" + education[5] + "<br>" + "7)" + education[6] + "<br>")

// // Write a program to store 3 student names in an array.Take another array to store score of these three students. Assume that total marks are 500 for each student, display
// // the scores & percentages of students like:
studentsName = ["ali", "adnan", "nasir"]
var obtMarks =[320, 439, 480];
document.write("<h1>Result Card</h1>")
document.write("Score of " + studentsName[0] + " is " + obtMarks[0] + " Percentage: " +  (obtMarks[0]*100/500) + "<br>");
document.write("Score of " + studentsName[1] + " is " + obtMarks[1] + " Percentage: " +  (obtMarks[1]*100/500) + "<br>");
document.write("Score of " + studentsName[2] + " is " + obtMarks[2] + " Percentage: " +  (obtMarks[2]*100/500) + "<br>");

// // Initialize an array with color names. Display the array elements in your browser.
// // a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array. Display the updated array in your browser.
// // b. Ask the user what color he/she wants to add to the end & add that color to the end of the array. Display the updated array in your browser.
// // c. Add two more color to the beginning of the array.
// // Display the updated array in your browser.
// // d. Delete the first color in the array. Display the updated array in your browser.
// // e. Delete the last color in the array. Display the updated array in your browser.
// // f. Ask the user at which index he/she wants to add a color & color name. Then add the color to desired position/index. . Display the updated array in your
// // browser.
// // g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete. Then remove the same number of color(s) from user-defined
// // position/index. . Display the updated array in your browser.
document.write("<h1>Colors</h1>")
var color = ["red", "green", "blue", "brown" , "purple" , "black"];
document.write(color + "<br>");
var addColorStart = prompt("Please enter the color you want to add in Start");
color.unshift(addColorStart);
document.write("<h1>Add new color at biginning</h1>")
document.write(color);

var addColorLast = prompt("Please enter the color you want to add in last");
color.push(addColorLast);
document.write("<h1>Add new color at Last</h1>")
document.write(color);

color.shift();
document.write("<h1>Remove color at biginning</h1>")
document.write(color);


color.pop();
document.write("<h1>Remove color at last</h1>")
document.write(color);
document.write("<br>");

var addColorIndex = +prompt("Please enter the index wher you want to add color 0-5");
var addColor = prompt("Please enter the color you want to add in that index");
color.splice(addColorIndex,0 , addColor);
document.write(color);
document.write("<br>");

var removeColorIndex = +prompt("Please enter the index wher you want to add color 0-5");
var removeColor = +prompt("Please enter how many color yoy want to delete 0-5");
color.splice(removeColorIndex,removeColor);
document.write(color);
document.write("<br>");

// // Write a program to store student scores in an array & sort the array in ascending order using Array’s sort method.
document.write("<h1>Student Sorted data</h1>")
var studentScore = [320,230,480,120];
document.write(studentScore);
document.write("<br>");
studentScore.sort();
document.write("<br>");
document.write(studentScore);

// // Write a program to initialize an array with city names. Copy 3 array elements from cities array to selectedCities array.
document.write("<h1>Cities List</h1>");
var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
document.write(cities);
document.write("<h1>Selected Cities</h1>");
var selectedCities = cities.slice(2,4);
document.write(selectedCities);

// 2. Write a program to create a single string from the below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];(Use array’s join method)
 var arr = ["this ", " is ", " my ", "cat"];
 document.write("<h1>Array</h1>");
 document.write(arr + "<br>");
 updatedArr = arr.join("");
 document.write("<h1>Strings</h1>");
 document.write(updatedArr);

//  Create a new array. Store values one by one in such a way that you can access the values in the order in which they were stored. (FIFO-First In First Out)

var devices = ["keybord", "mouse", "printer", "moniter"];
document.write(devices);
document.write("<h2>Devices</h2>");
document.write("<strong>Out:</strong>");
document.write(devices[0] + "<br>");
document.write("<strong>Out:</strong>");
document.write(devices[1] + "<br>");
document.write("<strong>Out:</strong>");
document.write(devices[2] + "<br>");
document.write("<strong>Out:</strong>");
document.write(devices[3] + "<br>");
var LIFO = devices.reverse();
document.write("<h2>Devices</h2>");
document.write(LIFO)
document.write("<strong>Out:</strong>");
document.write(LIFO[0] + "<br>");
document.write("<strong>Out:</strong>");
document.write(LIFO[1] + "<br>");
document.write("<strong>Out:</strong>");
document.write(LIFO[2] + "<br>");
document.write("<strong>Out:</strong>");
document.write(LIFO[3] + "<br>");


// Write a program to store phone manufacturers (Apple, Samsung, Motorola, Nokia, Sony & Haier) in an array.Display the following dropdown/select menu in your browser using document.write() method:
document.write("<br>")
var cell = ["Apple", "Samsung", "Motorola", "Nokia", "Sony"];
document.write("<select>")
for(var i = 0; i < cell.length; i++){
    document.write("<option>"+ cell[i] +"</option>")
}
document.write("</select>")







