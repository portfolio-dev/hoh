// SLIDE FOTO CHESTOF
const slides2 = document.querySelectorAll(".slide2");
let counter2 = 0;
let touchStartX2 = 0;
let touchEndX2 = 0;

slides2.forEach((slide2, index) => {
    slide2.style.left = `${index * 100}%`;
});

const goPrev2 = () => {
    if (counter2 === 0) {
        counter2 = slides2.length - 1;
        slide2Image();
    } else {
        counter2--;
        slide2Image();
    }
};

const goNext2 = () => {
    if (counter2 === slides2.length - 1) {
        counter2 = 0;
        slide2Image();
    } else {
        counter2++;
        slide2Image();
    }
};

const slide2Image = () => {
    slides2.forEach((slide2) => {
        slide2.style.transform = `translateX(-${counter2 * 100}%)`;
    });
};

const handleTouchStart2 = (event) => {
    touchStartX2 = event.touches[0].clientX;
};

const handleTouchEnd2 = (event) => {
    touchEndX2 = event.changedTouches[0].clientX;
    handleGesture2();
};

const handleGesture2 = () => {
    const gestureDelta2 = touchStartX2 - touchEndX2;
    const swipeThreshold2 = 50;

    if (gestureDelta2 > swipeThreshold2) {
        goNext2();
    } else if (gestureDelta2 < -swipeThreshold2) {
        goPrev2();
    }
};

// Menambahkan event listener untuk sentuhan
slides2.forEach((slide2) => {
    slide2.addEventListener("touchstart", handleTouchStart2, false);
    slide2.addEventListener("touchend", handleTouchEnd2, false);
});
