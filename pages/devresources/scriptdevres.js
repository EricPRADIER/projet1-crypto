/*
var item = document.getElementsByClassName("blackButton");
item.addEventListener("mouseover", func, false);

function func()
{  
    var item = document.getElementsByClassName("blackButton");
   item.setAttribute("style", "background-color:white;")
}*/

/*
var item = document.getElementById("button");
item.addEventListener("mouseover", func, false);

function func()
{  
   var item = document.getElementById("button");
   item.setAttribute("style", "background-color:blue;")
}*/



//const blackButton = document.querySelector(".blackButton");

const blackButton = document.getElementsByClassName("blackButton");
const whiteButton = document.getElementsByClassName("whiteButton");

blackButton.addEventListener("mouseover", function (event) {
    //blackButton.style.backgroundColor = "white";
    event.target.style.backgroundColor = "white";
  });
  
whiteButton.addEventListener("mouseover", function (event) {
    event.target.style.color = "orange";
    event.target.backgroundColor = "red";
    //whiteButton.style.backgroundColor = "white";
});


//  test.addEventListener("mouseover", function( event ) {
    // on met l'accent sur la cible de mouseover
 //   event.target.style.color = "orange";

 /*
 function calcRectArea(width, height) {
    return width * height;
  }*/
  