
// Might add this feature later
// window.addEventListener("scroll", madness);

  function madness() {
    var allButtons = document.getElementsByClassName("rainbowButton");
    document.body.style.animation = "backg 1s infinite";
    window.document.getElementById('inputField').style.animation = "backg 1s infinite";
    for (var i = 0; i < allButtons.length; i++) {
      allButtons[i].style.animation = "backg 0.5s infinite";
    }
  };

  function stopMadness() {
    var allButtons = document.getElementsByClassName("rainbowButton");
    document.body.style.animation = "none";
    document.getElementById('inputField').style.animation = "none";
    for (var i = 0; i < allButtons.length; i++) {
      allButtons[i].style.animation = "none";
    }
    };
