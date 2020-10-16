// Might add this feature later
// window.addEventListener("scroll", madness);
// window.addEventListener("onload", runningCheck());
// var isMadnessRunning = new Boolean(true);

const allButtons = document.querySelectorAll(".button");
const header = document.querySelector(".headStyle");
const inputField = document.querySelector("#inputField");
const rainbowButtons = document.querySelectorAll(".rainbow");

rainbowButtons.forEach(() => {});

const madness = () => {
    document.body.classList.add("animateBackground");
    header.classList.add("animateText");
    for (var i = 0; i < allButtons.length; i++) {
        allButtons[i].style.animation = "backg 0.5s infinite";
    }
    inputField.style.animation = "backg 1s infinite";
};

const stopMadness = () => {
    document.body.classList.remove("animateBackground");
    header.classList.remove("animateText");
    for (var i = 0; i < allButtons.length; i++) {
        allButtons[i].style.animation = "paused";
    }
    inputField.style.animation = "paused";
};

const randomBackground = () => {
    const rgb1 = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
    const rgb2 = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
    const rgb3 = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
    if (window.scrollY > 500) {
        document.body.style.backgroundColor = `rgb( ${rgb1}, ${rgb2}, ${rgb3})`;
    } else {
        document.body.style.backgroundColor = `rgb( 143, 188, 143)`;
    }
};

window.onscroll = setInterval(randomBackground, 1000);
