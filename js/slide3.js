// SLIDE FOTO FASLITAS HOHEART
const slides3 = document.querySelectorAll(".slide3")
var counter3 = 0;

slides3.forEach((slide3, index) => {
    slide3.style.left = `${index*100}%`
})

const goPrev3 = () => {
    if (counter3 == 0) {
        counter3 = slides3.length - 1;
        slide3Image();
    } else {
        counter3--;
        slide3Image();
    }
}

const goNext3 = () => {
    if (counter3 == slides3.length - 1) {
        counter3 = 0;
        slide3Image();
    } else {
        counter3++;
        slide3Image();
    }
}

const slide3Image = () => {
    slides3.forEach(
        (slide3) => {
            slide3.style.transform = `translateX(-${counter3*100}%)`
        })
}