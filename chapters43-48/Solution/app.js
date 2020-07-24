// 1. Show an alert box on click on a link.

function linkAlert(){
    alert("This is a link alert box")
}

// 2. Display some Mobile images in browser. On click on an
// image Show the message in alert to user
function imgClick(){
    alert("Thanks for purchasing a phone from us")
}

// 3. Display 10 student records in table and each row should contain a delete
// button. If you click on a button to delete a record, entire row should be deleted. 

var stdNames = ["Adnan","Tasleem","Imran","Hamza","Wajahat","Aslam","Umar","Shakeel","Usman","Naveed"]
var stdClass = [9,3,5,6,2,3,7,1,3,4]
var tab;
var tableCount = 10;

function fillData(){
    for(var i = 0; i<stdNames.length;i++){
        tab = document.getElementById("tr"+String(i+1))
        tab.innerHTML += "<td>"+i+"</td>";
        tab.innerHTML += "<td>"+stdNames[i]+"</td>";
        tab.innerHTML += "<td>"+stdClass[i]+"</td>";
        tab.innerHTML += "<td><button onclick='deleteStd("+i+")'>Delete</button></td>";      
    }
}
fillData()

function deleteStd(index)
{
    stdNames.shift(index)
    stdClass.shift(index)
    for(var i = 0; i<tableCount;i++){
        var tab12 = document.getElementById("tr"+String(i+1))
        tab12.innerHTML = ""
    }
    fillData()

};
// 4. Display an image in browser. Change the picture on mouseover and set the first picture on mouseout.

var img1 = document.getElementById("img1");
function imgChng1(){    
    img1.src = "images/wp3.jpg";
}

function imgChng2(){
    img1.src = "images/wp1.jpg"
};
// 5. Show a counter in browser. Counter should increase on click on increase
// button and decrease on click on decrease button. And show updated counter value in browser.

var counterp = document.getElementById("counterp");
function increaseCounter(){
    counterp1 = parseInt(counterp.innerHTML)
    counterp1++;
    counterp.innerHTML = counterp1;
}
function decreaseCounter(){
    counterp1 = parseInt(counterp.innerHTML)
    counterp1--;
    counterp.innerHTML = counterp1;
}
