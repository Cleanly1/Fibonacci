// Might add this feature later
// window.addEventListener("scroll", madness);
// window.addEventListener("onload", runningCheck());
// var isMadnessRunning = new Boolean(true);

function madness() {
    var allButtons = document.querySelectorAll(".rainbowButton");
    document.body.style.animation = "backg 1s infinite";
    document.querySelector(".headStyle").style.animation = "colorT 1s infinite";
    for (var i = 0; i < allButtons.length; i++) {
        allButtons[i].style.animation = "backg 0.5s infinite";
    }
    window.document.querySelector("#inputField").style.animation =
        "backg 1s infinite";
}

function stopMadness() {
    var allButtons = document.querySelectorAll(".rainbowButton");
    document.body.style.animation = "paused";
    document.querySelector(".headStyle").style.animation = "paused";
    for (var i = 0; i < allButtons.length; i++) {
        allButtons[i].style.animation = "paused";
    }
    document.querySelector("#inputField").style.animation = "paused";
}

const randomBackground = function() {
    const rgb1 = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
    const rgb2 = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
    const rgb3 = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
    if (window.scrollY > 500) {
        document.body.style.backgroundColor = `rgb( ${rgb1}, ${rgb2}, ${rgb3})`;
    }
};
window.onscroll = setInterval(randomBackground, 1000);
