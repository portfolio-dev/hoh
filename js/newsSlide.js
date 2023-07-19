// SLIDE1
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

// SLIDE2
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

// SLIDE3
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

// SLIDE4
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

// Menambahkan event listener untuk sentuhan
slides4.forEach((slide4) => {
    slide4.addEventListener("touchstart", handleTouchStart4, false);
    slide4.addEventListener("touchend", handleTouchEnd4, false);
});

// SLIDE5
const slides5 = document.querySelectorAll(".slide5");
let counter5 = 0;
let touchStartX5 = 0;
let touchEndX5 = 0;

slides5.forEach((slide5, index) => {
    slide5.style.left = `${index * 100}%`;
});

const goPrev5 = () => {
    if (counter5 === 0) {
        counter5 = slides5.length - 1;
        slide5Image();
    } else {
        counter5--;
        slide5Image();
    }
};

const goNext5 = () => {
    if (counter5 === slides5.length - 1) {
        counter5 = 0;
        slide5Image();
    } else {
        counter5++;
        slide5Image();
    }
};

const slide5Image = () => {
    slides5.forEach((slide5) => {
        slide5.style.transform = `translateX(-${counter5 * 100}%)`;
    });
};

const handleTouchStart5 = (event) => {
    touchStartX5 = event.touches[0].clientX;
};

const handleTouchEnd5 = (event) => {
    touchEndX5 = event.changedTouches[0].clientX;
    handleGesture5();
};

const handleGesture5 = () => {
    const gestureDelta5 = touchStartX5 - touchEndX5;
    const swipeThreshold5 = 50;

    if (gestureDelta5 > swipeThreshold5) {
        goNext5();
    } else if (gestureDelta5 < -swipeThreshold5) {
        goPrev5();
    }
};

// Menambahkan event listener untuk sentuhan
slides5.forEach((slide5) => {
    slide5.addEventListener("touchstart", handleTouchStart5, false);
    slide5.addEventListener("touchend", handleTouchEnd5, false);
});

// SLIDE6
const slides6 = document.querySelectorAll(".slide6");
let counter6 = 0;
let touchStartX6 = 0;
let touchEndX6 = 0;

slides6.forEach((slide6, index) => {
    slide6.style.left = `${index * 100}%`;
});

const goPrev6 = () => {
    if (counter6 === 0) {
        counter6 = slides6.length - 1;
        slide6Image();
    } else {
        counter6--;
        slide6Image();
    }
};

const goNext6 = () => {
    if (counter6 === slides6.length - 1) {
        counter6 = 0;
        slide6Image();
    } else {
        counter6++;
        slide6Image();
    }
};

const slide6Image = () => {
    slides6.forEach((slide6) => {
        slide6.style.transform = `translateX(-${counter6 * 100}%)`;
    });
};

const handleTouchStart6 = (event) => {
    touchStartX6 = event.touches[0].clientX;
};

const handleTouchEnd6 = (event) => {
    touchEndX6 = event.changedTouches[0].clientX;
    handleGesture6();
};

const handleGesture6 = () => {
    const gestureDelta6 = touchStartX6 - touchEndX6;
    const swipeThreshold6 = 50;

    if (gestureDelta6 > swipeThreshold6) {
        goNext6();
    } else if (gestureDelta6 < -swipeThreshold6) {
        goPrev6();
    }
};

// Menambahkan event listener untuk sentuhan
slides6.forEach((slide6) => {
    slide6.addEventListener("touchstart", handleTouchStart6, false);
    slide6.addEventListener("touchend", handleTouchEnd6, false);
});

// SLIDE7
const slides7 = document.querySelectorAll(".slide7");
let counter7 = 0;
let touchStartX7 = 0;
let touchEndX7 = 0;

slides7.forEach((slide7, index) => {
    slide7.style.left = `${index * 100}%`;
});

const goPrev7 = () => {
    if (counter7 === 0) {
        counter7 = slides7.length - 1;
        slide7Image();
    } else {
        counter7--;
        slide7Image();
    }
};

const goNext7 = () => {
    if (counter7 === slides7.length - 1) {
        counter7 = 0;
        slide7Image();
    } else {
        counter7++;
        slide7Image();
    }
};

const slide7Image = () => {
    slides7.forEach((slide7) => {
        slide7.style.transform = `translateX(-${counter7 * 100}%)`;
    });
};

const handleTouchStart7 = (event) => {
    touchStartX7 = event.touches[0].clientX;
};

const handleTouchEnd7 = (event) => {
    touchEndX7 = event.changedTouches[0].clientX;
    handleGesture7();
};

const handleGesture7 = () => {
    const gestureDelta7 = touchStartX7 - touchEndX7;
    const swipeThreshold7 = 50;

    if (gestureDelta7 > swipeThreshold7) {
        goNext7();
    } else if (gestureDelta7 < -swipeThreshold7) {
        goPrev7();
    }
};

// Menambahkan event listener untuk sentuhan
slides7.forEach((slide7) => {
    slide7.addEventListener("touchstart", handleTouchStart7, false);
    slide7.addEventListener("touchend", handleTouchEnd7, false);
});

// SLIDE8
const slides8 = document.querySelectorAll(".slide8");
let counter8 = 0;
let touchStartX8 = 0;
let touchEndX8 = 0;

slides8.forEach((slide8, index) => {
    slide8.style.left = `${index * 100}%`;
});

const goPrev8 = () => {
    if (counter8 === 0) {
        counter8 = slides8.length - 1;
        slide8Image();
    } else {
        counter8--;
        slide8Image();
    }
};

const goNext8 = () => {
    if (counter8 === slides8.length - 1) {
        counter8 = 0;
        slide8Image();
    } else {
        counter8++;
        slide8Image();
    }
};

const slide8Image = () => {
    slides8.forEach((slide8) => {
        slide8.style.transform = `translateX(-${counter8 * 100}%)`;
    });
};

const handleTouchStart8 = (event) => {
    touchStartX8 = event.touches[0].clientX;
};

const handleTouchEnd8 = (event) => {
    touchEndX8 = event.changedTouches[0].clientX;
    handleGesture8();
};

const handleGesture8 = () => {
    const gestureDelta8 = touchStartX8 - touchEndX8;
    const swipeThreshold8 = 50;

    if (gestureDelta8 > swipeThreshold8) {
        goNext8();
    } else if (gestureDelta8 < -swipeThreshold8) {
        goPrev8();
    }
};

// Menambahkan event listener untuk sentuhan
slides8.forEach((slide8) => {
    slide8.addEventListener("touchstart", handleTouchStart8, false);
    slide8.addEventListener("touchend", handleTouchEnd8, false);
});