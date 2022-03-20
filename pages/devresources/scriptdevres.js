
const blackButton = document.getElementsByClassName("blackButton");
// console.log(blackButton);

for (let i=0; i<blackButton.length; i++) {
  blackButton[i].addEventListener("mouseover", function (event) {
    //console.log('Over1 '+event.target.style.Color, event.target.style.backgroundColor);
      event.target.style.backgroundColor = "white";
      event.target.style.color = "black";
    });
} 

for (let i=0; i<blackButton.length; i++) {
  blackButton[i].addEventListener("mouseleave", function (event) {
      event.target.style.backgroundColor = "black";
      event.target.style.color = "white";
    });
}

var video = document.getElementById("background-video");
var btn = document.getElementById("btnVideo");
 
function playAndPause () {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause II";
  } else {
    video.pause();
    btn.innerHTML = "Play ▶";
  }
}

// ancienne version
/*
var angle = 0;function carrousel(sign){
  spinner=document.querySelector(".carrousel");

  if(!sign){angle = angle + 60
  }else{ 
    angle = angle - 60
  }

  spinner.setAttribute("style","transform:rotateY("+ angle +"deg);")
}
*/

// ES6
var angle = 0;
const carrousel = (sign) => {
  spinner=document.querySelector(".carrousel");
  
  !sign 
  ? angle = angle + 60
  : angle = angle - 60;

  spinner.setAttribute("style","transform:rotateY("+ angle +"deg);")
}	

