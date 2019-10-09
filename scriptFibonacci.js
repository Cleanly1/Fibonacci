
// Might add this feature later
// window.addEventListener("scroll", madness);
// window.addEventListener("onload", runningCheck());
// var isMadnessRunning = new Boolean(true);

function madness() {
  // isMadnessRunning = true;
  var allButtons = document.getElementsByClassName("rainbowButton");
  document.body.style.animation = "backg 1s infinite";
  document.getElementsByClassName("headStyle")[0].style.animation = "colorT 1s infinite";
  for (var i = 0; i < allButtons.length; i++) {
    allButtons[i].style.animation = "backg 0.5s infinite";
  }
  window.document.getElementById('inputField').style.animation = "backg 1s infinite";
};

function stopMadness() {
  // isMadnessRunning = false;
  var allButtons = document.getElementsByClassName("rainbowButton");
  document.body.style.animation = "paused";
  document.getElementsByClassName("headStyle")[0].style.animation = "paused";
  for (var i = 0; i < allButtons.length; i++) {
    allButtons[i].style.animation = "paused";
  }
  document.getElementById('inputField').style.animation = "paused";
};


// function runningCheck(){
//   if (isMadnessRunning == true){
//     madness()
//   }
//   else if (isMadnessRunning == false) {
//     console.log("hej");
//   }
// }
