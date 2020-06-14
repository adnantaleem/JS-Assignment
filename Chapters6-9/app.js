var br = "<br>";
// 1. Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser:
document.write("<h1>Task 1</h1>");
var a = 10;
document.write("Result:" + br + "The value of a is " + a + br);
document.write(br);
document.write("The value of ++a is " + ++a + br);
document.write( "Now The value of a is " + a + br);
document.write(br);
document.write("The value of a++ is " + a++ + br);
document.write("Now The value of a is " + a + br);
document.write(br);
document.write("The value of --a is " + --a + br);
document.write("The value of a is " + a + br);
document.write(br);
document.write("The value of a-- is " + a-- + br);
document.write("The value of a is " + a + br);

// 2 Write a program that takes input a name from user & greet the user.

var userName = prompt("Write Your Name");
alert(userName + " Welcome to My Website");

// 5. Write a program to take input a number from user & display it’s multiplication table on your browser. If user does not enter a new number, multiplication table of 5 should be displayed by default.
document.write(br + "<h1>Table</h1>");
table = prompt(userName + " Enter Table number");
if(!table){
    table = 5;
}
document.write(table + " x 1 = " + (table*1) + br);
document.write(table + " x 2 = " + (table*2) + br);
document.write(table + " x 3 = " + (table*3) + br);
document.write(table + " x 4 = " + (table*4) + br);
document.write(table + " x 5 = " + (table*5) + br);
document.write(table + " x 6 = " + (table*6) + br);
document.write(table + " x 7 = " + (table*7) + br);
document.write(table + " x 8 = " + (table*8) + br);
document.write(table + " x 9 = " + (table*9) + br);
document.write(table + " x 10 = " + (table*10) + br);

// 6.Take three subjects name from user and store them in 3 different variables.
// b) Total marks for each subject is 100, store it in another variable.
// c) Take obtained marks for first subject from user and stored it in different variable.
// d) Take obtained marks for remaining 2 subjects from user and store them in variables.
// e) Now calculate total marks and percentage and show the result in browser 
var sub1 = "English";
var sub2 = "Math";
var sub3 = "Urdu"
var subject1 = prompt (userName + " Enter your First Subject" , sub1);
var obtNumerSubject1 = +prompt (userName + " Enter your First Subject Number");
var subject2 = prompt (userName + " Enter your Second Subject" , sub2);
var obtNumerSubject2 = +prompt (userName + " Enter your Second Subject Number");
var subject3 = prompt (userName + " Enter your Third Subject" , sub3);
var obtNumerSubject3 = +prompt (userName + " Enter your Third Subject Number");
var totalMarks = 100;
var totalObtMarks = obtNumerSubject1 + obtNumerSubject2 + obtNumerSubject3;
document.write(br + "<h1>Mark Sheet</h1>");
document.write(subject1 + " "+" " + totalMarks + " "+" " + obtNumerSubject1 + " "+" " + (obtNumerSubject1*100/totalMarks) +"%" + br)
document.write(subject2 + " "+" " + totalMarks + " "+" " + obtNumerSubject2 + " "+" " + (obtNumerSubject2*100/totalMarks) +"%" + br)
document.write(subject3 + " "+" " + totalMarks + " "+" " + obtNumerSubject3 + " "+" " + (obtNumerSubject3*100/totalMarks) +"%" + br)
document.write("Total" + " "+" " + "300" + " "+" " + totalObtMarks + " "+" " + (totalObtMarks*100/300) +"%" + br)
