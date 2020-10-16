// Might add this feature later
// window.addEventListener("scroll", madness);
// window.addEventListener("onload", runningCheck());

let isMadnessRunning;
let interval;
const allButtons = document.querySelectorAll(".button");
const header = document.querySelector(".headStyle");
const inputField = document.querySelector("#inputField");
const rainbowButtons = document.querySelectorAll(".rainbow");

rainbowButtons.forEach((button) => {
    button.addEventListener("mouseenter", (e) => {
        button.classList.add("animateButtons");
    });

    button.addEventListener("mouseleave", (e) => {
        if (!isMadnessRunning) {
            button.classList.remove("animateButtons");
        }
    });
});

const madness = () => {
    isMadnessRunning = !isMadnessRunning;
    document.body.classList.add("animateBackground");
    header.classList.add("animateText");
    for (var i = 0; i < allButtons.length; i++) {
        allButtons[i].classList.add("animateButtons");
    }
    inputField.classList.add("animateBackground");
};

const stopMadness = () => {
    isMadnessRunning = !isMadnessRunning;
    document.body.classList.remove("animateBackground");
    header.classList.remove("animateText");
    for (var i = 0; i < allButtons.length; i++) {
        allButtons[i].classList.remove("animateButtons");
    }
    inputField.classList.remove("animateBackground");
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

window.addEventListener("scroll", () => {
    if (!interval) {
        interval = setInterval(randomBackground, 1000);
    }
});
