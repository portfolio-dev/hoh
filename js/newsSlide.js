// SLIDE NEWS
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

slides.forEach((slide) => {
    slide.addEventListener("touchstart", handleTouchStart, false);
    slide.addEventListener("touchend", handleTouchEnd, false);
});

// SLIDE NEWS
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

slides2.forEach((slide2) => {
    slide2.addEventListener("touchstart", handleTouchStart2, false);
    slide2.addEventListener("touchend", handleTouchEnd2, false);
});

// SLIDE NEWS
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

slides3.forEach((slide3) => {
    slide3.addEventListener("touchstart", handleTouchStart3, false);
    slide3.addEventListener("touchend", handleTouchEnd3, false);
});

// SLIDE NEWS
const slides4 = document.querySelectorAll(".slide4");
let counter4 = 0;
let touchStartX4 = 0;
let touchEndX4 = 0;

slides4.forEach((slide4, index) => {
    slide4.style.left = `${index * 100}%`;
});

const goPrev4 = () => {
    if (counter4 === 0) {
        counter4 = slides4.length - 1;
        slide4Image();
    } else {
        counter4--;
        slide4Image();
    }
};

const goNext4 = () => {
    if (counter4 === slides4.length - 1) {
        counter4 = 0;
        slide4Image();
    } else {
        counter4++;
        slide4Image();
    }
};

const slide4Image = () => {
    slides4.forEach((slide4) => {
        slide4.style.transform = `translateX(-${counter4 * 100}%)`;
    });
};

const handleTouchStart4 = (event) => {
    touchStartX4 = event.touches[0].clientX;
};

const handleTouchEnd4 = (event) => {
    touchEndX4 = event.changedTouches[0].clientX;
    handleGesture4();
};

const handleGesture4 = () => {
    const gestureDelta4 = touchStartX4 - touchEndX4;
    const swipeThreshold4 = 50;

    if (gestureDelta4 > swipeThreshold4) {
        goNext4();
    } else if (gestureDelta4 < -swipeThreshold4) {
        goPrev4();
    }
};

slides4.forEach((slide4) => {
    slide4.addEventListener("touchstart", handleTouchStart4, false);
    slide4.addEventListener("touchend", handleTouchEnd4, false);
});