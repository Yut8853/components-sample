const nextButton = document.querySelector('#next');
const prevButton = document.querySelector('#prev');
const ulEl = document.querySelector('ul');
const slides = ulEl.children
let currentIndex = 0
const dots = []

function upDateButtons() {
    prevButton.classList.remove('hidden');
    nextButton.classList.remove('hidden');

    if(currentIndex === 0) {
        prevButton.classList.add('hidden');
    }
    if(currentIndex === slides.length - 1) {
        nextButton.classList.add('hidden');
    }
}

function moveSlides() {
    const slideWidth = slides[0].getBoundingClientRect().width;
    ulEl.style.transform = `translateX(${-1 * slideWidth * currentIndex}px)`;
}

function setUpDots() {
    for(let i = 0; i < slides.length; i++) {
        const button = document.createElement('button');
        button.addEventListener('click', () => {
            currentIndex = i;
            upDataDots();
            moveSlides();
            upDateButtons();
        });
        dots.push(button);
        document.querySelector('nav').appendChild(button);
    }
    dots[0].classList.add('current');
}

function upDataDots() {
    dots.forEach(dot => {
        dot.classList.remove('current');
    })
    dots[currentIndex].classList.add('current');
}

upDateButtons();
setUpDots();
upDataDots();

nextButton.addEventListener('click', () => {
    currentIndex++;
    upDateButtons()
    moveSlides();
    upDataDots();
});
prevButton.addEventListener('click', () => {
    currentIndex--;
    upDateButtons()
    moveSlides();
    upDataDots();
});

window.addEventListener('resize', () => {
    moveSlides();
})