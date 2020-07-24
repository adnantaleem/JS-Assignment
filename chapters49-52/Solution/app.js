// 1. Create a signup form and display form data in your web
// page on submission.
var userid = document.getElementById("userid");
var passw = document.getElementById("passw");
var userinfo = document.getElementById("userinfo");
function submit1(){
    userinfo.innerHTML = "User Name: "+userid.value+" and Password is: "+passw.value+""
}

// 2. Suppose in your webpage there is content area in which
// you have entered your item details, but user can only see
// some details on first look. When user clicks on “Read
// more” button, full detail of that particular item will be
// displayed. 
function readMore(){
  var para1 = document.getElementById("para1")
  para1.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum inventore itaque fugiat beatae harum, repudiandae ipsa eius obcaecati voluptas corrupti cupiditate, odit at eaque maxime sed officia. Porro, numquam alias!"
}

// 3. In previous assignment you have created a tabular data
// using javascript. Let’s modify that. Create a form which
// takes student’s details and show each student detail in
// table. Each row of table must contain a delete button and
// an edit button. On click on delete button entire row should
// be deleted. On click on edit button, a hidden form will
// appear with the values of that row
var stdNames = ["Adnan","Tasleem","Imran","Nasir","Wajahat"]
var stdClass = [9,3,5,6,2]
var tab;
var tableCount;

function fillData(){
    for(var i = 0; i<stdNames.length;i++){
        var str1 = String("tr"+(i+1))
        // alert(str1)
        tab = document.getElementById(str1)        
        tab.innerHTML += "<td>"+i+"</td>";
        tab.innerHTML += "<td>"+stdNames[i]+"</td>";
        tab.innerHTML += "<td>"+stdClass[i]+"</td>";
        tab.innerHTML += "<td><button onclick='deleteStd("+i+")'>Delete</button></td>";      
        tab.innerHTML += "<td><button onclick='editRecord("+i+")'>Edit</button></td>";      
            
    }
}
fillData()

function deleteStd(index)
{
    tableCount = stdNames.length
    stdNames.shift(index)
    stdClass.shift(index)
    for(var i = 0; i<tableCount;i++){
        var tab12 = document.getElementById("tr"+String(i+1))
        tab12.innerHTML = ""
    }
    fillData()

}
function addRecord(){
    tableCount = stdNames.length
    var stdName1 = document.getElementById("userName")
    var stdClass1 = document.getElementById("classNo")
    stdNames.push(stdName1.value)
    stdClass.push(stdClass1.value)
    for(var i = 0; i<tableCount;i++){
        var tab12 = document.getElementById("tr"+String(i+1))
        tab12.innerHTML = ""
    }
    fillData()
}

function editRecord(index1){
    alert("Student Name is: "+stdNames[index1]+"\nStudent Class: "+stdClass[index1])

}