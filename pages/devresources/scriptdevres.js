
const blackButton = document.getElementsByClassName("blackButton");
const whiteButton = document.getElementsByClassName("whiteButton");
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

for (let i=0; i<whiteButton.length; i++) {
  whiteButton[i].addEventListener("mouseover", function (event) {
      event.target.style.backgroundColor = "white";
  });
}

for (let i=0; i<whiteButton.length; i++) {
  whiteButton[i].addEventListener("mouseleave", function (event) {
      event.target.style.backgroundColor = "rgb(128, 236, 255)";
  });
}


// A revoir
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
