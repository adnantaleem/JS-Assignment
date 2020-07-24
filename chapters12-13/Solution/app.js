// Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.

var value1 = +prompt("please enter first value");
var value2 = +prompt("please enter second value");
if(value1 === value2){
    alert("Value Comparison\nBoth Valuue are same");
}
else if(value1 > value2){
    alert( value1 + " is Bigger");
}
else if(value1 < value2){
    alert( value2 + " is Bigger");
}
else{
    alert("please enter only number");
};

// Write a program that takes input a number from user & state whether the number is positive, negative or zero.

var number = +prompt("please enter your value");
if(number > 0){
    alert("This is postive number")
} 
else if (number < 0){
    alert("This is negtive value")
}
else if (number === 0){
    alert("This is zero value")
}
else{
    alert("please enter only number")
};

// Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwise.

var vowel = prompt("Check Word is VOWEL or not");
vowel = vowel.toLowerCase();
vovelChr = vowel.slice(0,1);
if(vovelChr === "a" || vovelChr === "e" || vovelChr === "i" || vovelChr === "o" || vovelChr === "u" ){
    alert("Your word is vowel word")
}
else{
    alert("your word is not vowel word");
};
// Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are
// same, show message “Correct! The password you
// entered matches the original password”. Show
// “Incorrect password” otherwise.

var password = prompt("Enter Your password");
var rePassword = prompt("Re Type your password");
if(password === rePassword && password !== "" || rePassword !== ""){
    alert("Correct! The password you entered matches the original password")
}
else if(password !== rePassword){
    alert("Incorrect password try again");
}
else{
    alert("Please enter your password");
};
// . This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }

var greeting;
var hour = 13;
if(hour < 18) {
greeting = "Good day";
document.write(greeting);
}
else{
greeting = "Good evening";
document.write(greeting);
};
// Write a program that takes time as input from user in 24 hours clock format like: 1900 = 7pm. Implement the following case using if, else & else if statements

var time = prompt("please enter time in 24 hour fortmat Ex. 1900= 7pm");
if(time >= 0000 && time < 1200){
    alert("Good Morning!")
}
else if(time >= 1200 && time < 1700){
    alert("Good Afternoon!")
}
else if (time >= 1700 && time < 2100){
    alert("Good Evening!")
}
else if (time >= 2100 && time < 2359){
    alert("Good Night!")
}
else{
    alert("Please enter correct time format")
};
