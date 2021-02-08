const left = document.querySelector("#left");
const right = document.querySelector("#right");
const sliderContainer = document.querySelector("#slider-container");
const slider = document.querySelector("#slider");
const maxSliders = document.querySelectorAll(".slide").length - 1;

let counter = 0;

function sliderFunc() {
    if (counter < maxSliders) {
        counter++;
        slider.style.left = "-" + 800 * counter + "px";

    } else {
        counter = 0;
        slider.style.left = "-" + 800 * counter + "px";
    }
};

left.addEventListener("click", () => {
    if (counter >= 0) {
        counter--;
        slider.style.left = "-" + 800 * counter + "px";
    }
});

let timer = setInterval(sliderFunc, 2000);

sliderContainer.addEventListener("mouseover", () => {
    clearInterval(timer);
});

sliderContainer.addEventListener("mouseout", () => {
    timer = setInterval(sliderFunc, 2000);
})

right.addEventListener("click", sliderFunc);