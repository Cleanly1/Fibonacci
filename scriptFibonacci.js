
// Might add this feature later
// window.addEventListener("scroll", madness);
var isMadnessRunning;

  function madness() {
      isMadnessRunning = true;
      var allButtons = document.getElementsByClassName("rainbowButton");
      document.body.style.animation = "backg 1s infinite";
      document.getElementsByClassName("headStyle")[0].style.animation = "colorT 1s infinite";
      for (var i = 0; i < allButtons.length; i++) {
        allButtons[i].style.animation = "backg 0.5s infinite";
      }
      window.document.getElementById('inputField').style.animation = "backg 1s infinite";
  };

  function stopMadness() {
    isMadnessRunning = false;
    var allButtons = document.getElementsByClassName("rainbowButton");
    document.body.style.animation = "none";
    document.getElementsByClassName("headStyle")[0].style.animation = "none";
      for (var i = 0; i < allButtons.length; i++) {
      allButtons[i].style.animation = "inherit";
    }
    document.getElementById('inputField').style.animation = "none";
    };

window.addEventListener("onload", runningCheck());
    function runningCheck(){
        if (isMadnessRunning == true){
        madness()
        }
      else if (isMadnessRunning == false) {
        console.log("hej");
        }
    }
