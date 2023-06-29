// SLIDE FOTO CHESTOF
const slides3 = document.querySelectorAll(".slide3");
let counter3 = 0;
let touchStartX3 = 0;
let touchEndX3 = 0;

slides3.forEach((slide3, index) => {
    slide3.style.left = `${index * 100}%`;
});

const goPrev3 = () => {
    if (counter3 === 0) {
        counter3 = slides3.length - 1;
        slide3Image();
    } else {
        counter3--;
        slide3Image();
    }
};

const goNext3 = () => {
    if (counter3 === slides3.length - 1) {
        counter3 = 0;
        slide3Image();
    } else {
        counter3++;
        slide3Image();
    }
};

const slide3Image = () => {
    slides3.forEach((slide3) => {
        slide3.style.transform = `translateX(-${counter3 * 100}%)`;
    });
};

const handleTouchStart3 = (event) => {
    touchStartX3 = event.touches[0].clientX;
};

const handleTouchEnd3 = (event) => {
    touchEndX3 = event.changedTouches[0].clientX;
    handleGesture3();
};

const handleGesture3 = () => {
    const gestureDelta3 = touchStartX3 - touchEndX3;
    const swipeThreshold3 = 50;

    if (gestureDelta3 > swipeThreshold3) {
        goNext3();
    } else if (gestureDelta3 < -swipeThreshold3) {
        goPrev3();
    }
};

// Menambahkan event listener untuk sentuhan
slides3.forEach((slide3) => {
    slide3.addEventListener("touchstart", handleTouchStart3, false);
    slide3.addEventListener("touchend", handleTouchEnd3, false);
});