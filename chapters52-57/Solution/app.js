var pathList = ["images/1.jpg", "images/2.png", "images/3.jpg", "images/4.png", "images/35.jpg", "images/6.jpg"]
var div = document.getElementById("maindiv")
for (var i = 0; i < pathList.length; i++) {
  div.innerHTML += "<img src=" + pathList[i] + " onclick=callModal(" + i + ") width=300px>";
}





// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
function callModal(imgPathIndex) {
  modal.style.display = "block";
  var imgplace = document.getElementById("imgplace")
  imgplace.innerHTML = "<img src=" + pathList[imgPathIndex] + " width=80%>";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



var para1 = document.getElementById("para1")
var fontSize = "16px"
function zoomIn() {
  var size2 = parseInt(fontSize.substr(0, fontSize.indexOf("px")));
  size2 += 10;
  fontSize = String(size2 + "px")
  para1.style.fontSize = fontSize;
}

function zoomOut() {
  var size2 = parseInt(fontSize.substr(0, fontSize.indexOf("px")));
  if(size2>16){
    size2 -= 10;
  }
  else{

  }
  
  fontSize = String(size2 + "px")
  para1.style.fontSize = fontSize
}