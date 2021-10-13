let isMadnessRunning;
const allButtons = document.querySelectorAll(".button");
const header = document.querySelector(".headStyle");
const inputField = document.querySelector("#inputField");
const rainbowButton = document.querySelector(".rainbow");

rainbowButton.addEventListener("click", () => {
	if (!isMadnessRunning) {
		madness();
	} else {
		stopMadness();
	}
});

rainbowButton.addEventListener("mouseenter", (e) => {
	rainbowButton.classList.add("animateButtons");
});

rainbowButton.addEventListener("mouseleave", (e) => {
	if (!isMadnessRunning) {
		rainbowButton.classList.remove("animateButtons");
	}
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

// const randomBackground = () => {
//     const rgb1 = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
//     const rgb2 = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
//     const rgb3 = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
//     if (window.scrollY > 500) {
//         document.body.style.backgroundColor = `rgb( ${rgb1}, ${rgb2}, ${rgb3})`;
//     } else {
//         document.body.removeAttribute("style");
//     }
// };

window.addEventListener("scroll", () => {
	let resultText = document.querySelectorAll(".spans");

	for (let i = resultText.length - 1; i >= 0; i--) {
		const element = resultText[i];
		let fontSize = i;

		if (fontSize > 250) {
			fontSize = 10.5 - i / 200;
		} else {
			fontSize = 12 - i / 100;
		}
		element.setAttribute("style", `font-size:${fontSize}px;`);
	}
});
