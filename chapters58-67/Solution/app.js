// 1. Consider you have following code snippet:
//  (Copy it in your HTML file)
// <div>
// <h1> DOM </h1>
// <div id=”form-content” class=”content”>
// <label for=”first-name”>First Name</label>
// <input type=”text” id=”first-name” />
// <label for=”last-name”>Last Name</label>
// <input type=”text” id=”last-name” />
// <label for=”email”>Email</label>
// <input type=”text” id=”email” />
// </div>
// <div id=”main-content” class=”content”>
// <p class=”render”> First Name : Alex</p>
// <p class=”render” id=”lastName”>Last Name: Bank</p>
// <p class=”render”> Email : alexbank@example.com</p>
// <p class=”render”> Country : Pakistan </p>
// <p class=”render”> contact : +92 300 1234567</p>
// </div>
// </div>
// i. Get element of id “main-content” and assign them in a variable.
// ii. Display all child elements of “main-content” element.
// iii. Get all elements of class “render” and show their innerHTML
// in browser.
// iv. Fill input value whose element id first-name using javascript.
// v. Repeat part iv for id ”last-name” and “email”.

// section i

var maincontent = document.getElementById("main-content");


// section ii
// c
console.log(maincontent.children)
// console.log(maincontent.childNodes)



// section iii

var classElements = document.getElementsByClassName("render")
var gap = document.createElement("br")
maincontent.appendChild(gap)

for(var i =0;i<classElements.length;i++){
    
    var result = document.createElement("p");
    var text = document.createTextNode(String(classElements[i].innerHTML))
    result.appendChild(text)
    maincontent.appendChild(result)
}


// section iv
document.getElementById("first-name").value = "Muhammad Asif"


// sectoin v
document.getElementById("last-name").value = "Ahmed"
document.getElementById("email").value = "asifahmed1us@hotmail.com"

// 2. use HTML code of question 1 and show the result on browser.
// i. What is node type of element having id “form-content”.
// ii. Show node type of element having id “lastName” and its child node.
// iii. Update child node of element having id “lastName”.
// iv. Get First and last child of id “main-content”.
// v. Get next and previous siblings of id “lastName”.
// vi. Get parent node and node type of element having id “email”

// section i
var formcontent = document.childNodes
console.log(formcontent[1].childNodes[2].childNodes[1].childNodes[3].nodeType)


// section ii
console.log(formcontent[1].childNodes[2].childNodes[1].childNodes[3].childNodes[7].nodeType)


// Task iii
formcontent[1].childNodes[2].childNodes[1].childNodes[3].childNodes[7].value = "Updated Node Ahmed"


// Task iv
console.log(formcontent[1].childNodes[2].childNodes[1].childNodes[5].firstChild)
console.log(formcontent[1].childNodes[2].childNodes[1].childNodes[5].lastChild)



// Task v
console.log(formcontent[1].childNodes[2].childNodes[1].childNodes[3].childNodes[7].nextSibling)
console.log(formcontent[1].childNodes[2].childNodes[1].childNodes[3].childNodes[7].previousSibling)


// Task vi
console.log(formcontent[1].childNodes[2].childNodes[1].childNodes[3].childNodes[11].parentNode)
console.log(formcontent[1].childNodes[2].childNodes[1].childNodes[3].childNodes[11].nodeType)

