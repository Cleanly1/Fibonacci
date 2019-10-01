
// Might add this feature later
// window.addEventListener("scroll", madness);

function madness() {
  document.body.style.animation = "backg 1s infinite";
  window.document.getElementById('inputField').style.animation = "backg 1s infinite";
  document.getElementById('submitButton').style.animation = "backg 0.5s infinite";
  // document.getElementById('time').style.animation = "colorT 1s infinite";

};

function stopMadness() {
  window.document.body.style.animation = "none";
  document.getElementById('inputField').style.animation = "none";
  document.getElementById('submitButton').style.animation = "none";
  // document.getElementById('time').style.animation = "none";


};
