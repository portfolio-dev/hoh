// SLIDE FOTO FASLITAS HOHOPE
const slides2 = document.querySelectorAll(".slide2")
var counter2 = 0;

slides2.forEach((slide2, index) => {
    slide2.style.left = `${index*100}%`
})

const goPrev2 = () => {
    if (counter2 == 0) {
        counter2 = slides2.length - 1;
        slide2Image();
    } else {
        counter2--;
        slide2Image();
    }
}

const goNext2 = () => {
    if (counter2 == slides2.length - 1) {
        counter2 = 0;
        slide2Image();
    } else {
        counter2++;
        slide2Image();
    }
}

const slide2Image = () => {
    slides2.forEach(
        (slide2) => {
            slide2.style.transform = `translateX(-${counter2*100}%)`
        })
}