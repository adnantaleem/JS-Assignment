// // 1. Write a custom function power ( a, b ), to calculate the value of a raised to b.
var base = prompt("Enter your Base value")
var pow = prompt("Enter your Power value")
function power(a,b){
    var result = 1
    if(b === undefined){
        b=2;
    }
    for(var i = 1; i <= b; i++){
        result = result*a
    }
    return result;
}
alert("your anwer is " + power(base, pow));

// // Any year is entered through the keyboard. Write a function to determine whether the year is a leap year or not.
var years = prompt("Please Enter year To Ckeck a Leap Year");  
function leapyear(year){ 
var leap = (year % 100 === 0) && (year % 400 === 0) || (year % 4 === 0);
return leap;
}
var checkYear = (leapyear(years));
if(checkYear === true){
    alert ("Your year Is Leap Year")
}
else{
    alert ("Your year Is not a Leap Year")
}
// // 3. If the lengths of the sides of a triangle are denoted by a, b, and
// // c, then area of triangle is given by area = S(S − a)(S − b)(S − c)
// // where, S = ( a + b + c ) / 2
// // Calculate area of triangle using 2 functions
var side1 = +prompt("Please Enter Side 0ne")
var side2 = +prompt("Please Enter Side two")
var side3 = +prompt("Please Enter Side three")
function area(a,b,c){
    var s = (a + b + c)/2;
    var area = Math.sqrt(s*(s-a)*(s-b)*(s-c));
    return area;
};
alert("triangle area is " + area(side1,side2,side3));

// 4. Write a function that receives marks received by a student in 3
// subjects and returns the average and percentage of these
// marks. there should be 3 functions one is the mainFunction
// and other are for average and percentage. Call those functions
// from mainFunction and display result in mainFunction.

function mainFunction(sub1Marks,sub2Marks,sub3Marks){
    var totalMarks = 100*3
    var marksObtained = sub1Marks+sub2Marks+sub3Marks
    alert("Total Marks: "+totalMarks+"\nMarksObtained: "+marksObtained+"\nAverage: "+getAverage(marksObtained,3)+"\nPercentage: "+getPercentage(totalMarks,marksObtained))

}
function getAverage(oMarks,subjects){
    return oMarks/subjects
}

function getPercentage(tMarks,oMarks){
    var perc = (oMarks/tMarks)*100
    return String(perc)+"%"
}
mainFunction(+prompt("Please enter marks for subject1"),+prompt("Please enter marks for subject1"),+prompt("Please enter marks for subject1"))

// 6. Write a function to delete all vowels from a sentence. Assume
// that the sentence is not more than 25 characters long.


var vowels = ["a","e","i","o","u"]
function deleteVowels(sentence){
    var sentOriginal = sentence;
    var sentResult = ""
    var sent1 = sentence.toLowerCase()
    var status = false
    for(var i = 0; i<sent1.length;i++){
        for(var j=0;j<vowels.length;j++){
            if(sent1[i]==vowels[j]){
                status = false;
                break
                
            }
            else{
                status = true;      
            }   
        }   
        if(status==true)
        {
            sentResult+=sentOriginal[i]
        }    
    }
    return sentResult
}

alert(deleteVowels("My name Adnan Tasleem, I am from lahore"));


// 8. The distance between two cities (in km.) is input through the
// keyboard. Write four functions to convert and print this
// distance in meters, feet, inches and centimeters.

function meter(km){
    return (km*1000)
}
function feet(km){
    return (km*3280.84)
}

function inches(km){
    return (km*39370.1)
}

function cent(km){
    return (km*100000)
}
var distance = +prompt("Please enter distance in kilometer")
document.write("<p>Distance in Meter: "+meter(distance)+"<p>")
document.write("<p>Distance in Feet: "+feet(distance)+"<p>")
document.write("<p>Distance in Inches: "+inches(distance)+"<p>")
document.write("<p>Distance in Centimeter: "+cent(distance)+"<p><br><br>");

// 9. Write a program to calculate overtime pay of employees.
// Overtime is paid at the rate of Rs. 12.00 per hour for every hour
// worked above 40 hours. Assume that employees do not work
// for fractional part of an hour.

function overTime(hours){
    var actualHours = Math.floor(hours)
    var rate = 12
    if(actualHours>40){
        document.write("Overtime is "+(actualHours-40)*rate)
        
    }
    else{
        document.write("Not eligible for overtime")
    }
}
overTime(57)

// 10. A cashier has currency notes of denominations 10, 50 and
// 100. If the amount to be withdrawn is input through the
// keyboard in hundreds, find the total number of currency notes
// of each denomination the cashier will have to give to the
// withdrawer.
function changeRequired(amount){
    var hundred = 0
    var fifty = 0
    var ten = 0
    
    if(amount>=100){
        hundred = parseInt(amount/100)
        fifty = parseInt((amount - (100*hundred))/50)
        ten = parseInt((amount-((fifty*50)+(100*hundred)))/10)
    }
    else if(amount>50){
        fifty = parseInt(amount/50)
        ten = parseInt(amount-(fifty*50))/10

    }
    else if(amount<50){
        ten = parseInt(amount/10)
    }
    // console.log(hundred,fifty,ten)
    document.write("<p>You have "+hundred+" hundred notes "+fifty+" fifty notes "+ten+" ten notes<p>")
}
changeRequired(1070);

