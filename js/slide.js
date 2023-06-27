// SLIDE FOTO CHESTOF
const slides = document.querySelectorAll(".slide");
let counter = 0;
let touchStartX = 0;
let touchEndX = 0;

slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
});

const goPrev = () => {
    if (counter === 0) {
        counter = slides.length - 1;
        slideImage();
    } else {
        counter--;
        slideImage();
    }
};

const goNext = () => {
    if (counter === slides.length - 1) {
        counter = 0;
        slideImage();
    } else {
        counter++;
        slideImage();
    }
};

const slideImage = () => {
    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    });
};

const handleTouchStart = (event) => {
    touchStartX = event.touches[0].clientX;
};

const handleTouchEnd = (event) => {
    touchEndX = event.changedTouches[0].clientX;
    handleGesture();
};

const handleGesture = () => {
    const gestureDelta = touchStartX - touchEndX;
    const swipeThreshold = 50;

    if (gestureDelta > swipeThreshold) {
        goNext();
    } else if (gestureDelta < -swipeThreshold) {
        goPrev();
    }
};

// Menambahkan event listener untuk sentuhan
slides.forEach((slide) => {
    slide.addEventListener("touchstart", handleTouchStart, false);
    slide.addEventListener("touchend", handleTouchEnd, false);
});