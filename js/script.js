const switchSpan = document.querySelector(".switch span");
const pElements = document.querySelectorAll(".numbers p");
const switchContainer = document.querySelector(".switch");
const body = document.querySelector("body");

switchContainer.addEventListener("click", (e) => {
    const segmentWidth = switchContainer.offsetWidth / 3;
    const clickedSegment = Math.floor((e.clientX - switchContainer.getBoundingClientRect().left) / segmentWidth);
    const newPosition = pElements[clickedSegment].offsetLeft - switchSpan.parentElement.offsetLeft;
    switchSpan.style.transform = `translateX(${newPosition}px)`;

    switch (clickedSegment) {
        case 0:
            body.className = "";
            break;
        case 1:
            body.className = "theme-2";
            break;
        case 2:
            body.className = "theme-3";
            break;
    }
});

const display = document.querySelector('.display');
const gridContainer = document.querySelector('.grid-container');

gridContainer.addEventListener('click', (e) => {
    if (e.target !== gridContainer) {
        const value = e.target.innerText;

        switch (value) {
            case 'DEL':
                display.innerText = display.innerText.slice(0, -1);
                break;
            case 'RESET':
                display.innerText = '';
                break;
            case '=':
                try {
                    display.innerText = eval(display.innerText.replace(/x/g, '*'));
                } catch (error) {
                    display.innerText = 'Error';
                }
                break;
            default:
                display.innerText += value;
                break;
        }
    }
});
