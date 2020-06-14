var br = "<br>"
// 1. Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this: “Welcome to city of lights"

city = prompt("Enter City Name Ex. Lahore, Karachi, Multan");
if(city==="lahore"){
alert("Welcome to the city of Loving People")
}
else if(city==="karachi"){
    alert("Welcome to the city Light")
}
else if(city==="islamabad"){
    alert("Welcome to the Capital city of Pakistan")
}
else{
    alert("Please enter correct City Name")
};

// 2. Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir. If the user is female, give the message: Good Morning Ma’am.

var gender = prompt("Please Enter your gender male,female");
if(gender==="male"){
    alert("Good Morning Sir.")
}
else if (gender === "female"){
    alert("Good Morning Ma’am.")
}
else{
    alert(
        'Please enter write correct gender'
    )
};

// 3 .Write a program to take input color of road traffic signal
// from the user & show the message according to this table:

lightSign = prompt("Enter Signal Light Color Ex. red,green,yellow");
if(lightSign === "red"){
    alert("MUST STOP");
}
else if(lightSign === "yellow"){
    alert("READY TO MOVE");
}
else if(lightSign === "green"){
    alert("MOVE NOW");
}
else{
    alert("Please enter correcr light color");
};

// 4. Write a program to take input remaining fuel in car (in
// litres) from user. If the current fuel is less than 0.25litres,
// show the message “Please refill the fuel in your car\

fuel = +prompt("please enter remaining fuel in your car");
if(fuel<= 0.25){
    alert("Please refil your Fuel")
}
else{
    alert("You Have Fuel");
};

// 6 .Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute
// grade as per following table:
document.write(br + "<h1>Mark Sheet</h1>");
var obtNumerSubject1 = +prompt (" Enter your First Subject Number");
var obtNumerSubject2 = +prompt (" Enter your Second Subject Number");
var obtNumerSubject3 = +prompt (" Enter your Third Subject Number");
var totalMarks = 300;
var totalObtMarks = obtNumerSubject1 + obtNumerSubject2 + obtNumerSubject3;
var totalObtPercenage =totalObtMarks*100/totalMarks;
if(totalObtPercenage >= 80 && totalObtPercenage <= 100){
    document.write("Total Marks: 300" + br +
    "Marks Obtained: " + totalObtMarks + br +
    "Percentage: " + totalObtPercenage + "%" + br +
    "Grade: A-one" + br +
    "Remaeks: Excelent")
}
else if(totalObtPercenage >= 70 && totalObtPercenage <= 80 ){
    document.write("Total Marks: 300" + br +
    "Marks Obtained: " + totalObtMarks + br +
    "Percentage: " + totalObtPercenage + "%" + br +
    "Grade: A" + br +
    "Remaeks: Good");

}
else if(totalObtPercenage >= 60 && totalObtPercenage <= 70){
    document.write("Total Marks: 300" + br +
    "Marks Obtained: " + totalObtMarks + br +
    "Percentage: " + totalObtPercenage + "%" + br +
    "Grade: B" + br +
    "Remaeks: You Need to Improve");

}
else if(totalObtPercenage < 60){
    document.write("Total Marks: 300" + br +
    "Marks Obtained: " + totalObtMarks + br +
    "Percentage: " + totalObtPercenage + "%" + br +
    "Grade: Fail" + br +
    "Remaeks: Sorry");

}
else{
    alert("Please Eter Correct Number");
}

// 7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct answer”.
// b. If the guessed number +1 is the secret number, show “Close enough to the correct answer”.
var secretNumber = 4;
guessSecretNumber = +prompt("Guess Secret Nuber from 1 to 10");

if(guessSecretNumber === 4){
    alert("Bingo! correct answer")
}
else if(guessSecretNumber === 5 || guessSecretNumber === 7){
    alert("Close enough to the correct answer")
}
else{
    alert("Try Again");
};

// Write a program to check whether the given number is divisible by 3. Show the message to the user if the number is divisible by 3.
var checkNumber = prompt("Check Number Dividable On 3 or not" , "Eneter Your Number");
checkNumber = checkNumber % 3;
if(checkNumber === 0){
    alert("Yes ! your number is dividable on 3")
}
else{
    alert("Sorry your number is not dividable on 3 check other number")
};
// Write a program that checks whether the given input is an
// even number or an odd number.
var checkEvenNumber = +prompt("Check yor number is even or odd", "Enter Your Number");
checkEvenNumber = checkEvenNumber % 2;
if(checkEvenNumber === 0){
    alert("Your Number Is Even")
}
else{
    alert("Your Number is Odd")
};
// 10. Write a program that takes temperature as input and
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”
var temperature = +prompt("Please enter temprature");
if(temperature > 40){
    alert("It is too hot outside.")
}
else if(temperature <= 40 && temperature >= 30){
    alert("The Weather today is Normal.")
}
else if(temperature <= 30 && temperature >= 20){
    alert("Today’s Weather is cool.")
}
else if(temperature < 20 ){
    alert("OMG! Today’s weather is so Cool.")
}