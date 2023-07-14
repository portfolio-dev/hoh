// title on browser tab running
function tabRunning() {
var titleText = "House of Heart - Rumah Singgah Khusus Pasien PJB Anak ";
        var speed = 500; // Kecepatan perubahan (ms)
        var i = 0;

        function animateTitle() {
            document.title = titleText.substring(i) + titleText.substring(0, i);
            i++;
            if (i > titleText.length) {
                i = 0;
            }
            setTimeout(animateTitle, speed);
        }

        animateTitle();
} document.addEventListener("DOMContentLoaded", tabRunning);

// redirect link
function handleClick(link, newTab) {
    if (newTab) {
        window.open(link, '_blank');
    } else {
        window.location.href = link;
    }
};


// menu-toggler auto close
function menuToggler() {
    var menuToggle = document.getElementById('menu-toggler');
    var menuItems = document.querySelectorAll('.all-links a');
    var menuContainer = document.getElementById('navbar');

    menuItems.forEach(function(item) {
        item.addEventListener('click', function() {
            if (!item.classList.contains('noToggle')) {
                menuToggle.checked = false;
            }
        });
    });

    // Menambahkan event listener ke menu-container untuk mendeteksi klik di dalamnya
    menuContainer.addEventListener('click', function(event) {
        event.stopPropagation();
    });

    // Menambahkan event listener ke elemen document untuk mendeteksi klik di luar kotak menu-toggler
    document.addEventListener('click', function(event) {
        var targetElement = event.target;

        // Periksa apakah klik dilakukan di luar kotak menu-toggler dan menu-container
        if (!menuToggle.contains(targetElement) && !menuContainer.contains(targetElement)) {
            menuToggle.checked = false;
        }
    });
} document.addEventListener("DOMContentLoaded", menuToggler);

// JavaScript to handle the FAQ interaction
function toggleFAQ(answerId) {
    var answer = document.getElementById(answerId);
    var answerStyle = window.getComputedStyle(answer);

    if (answerStyle.display === "none") {
        answer.style.display = "block";
    } else {
        answer.style.display = "none";
    }
}

// Donatur Logo Running
function sliderRun() {
    window.onload = function() {
        const slider = document.querySelector('.slider');
        const logoContainers = document.querySelectorAll('.logoContainer');
        const slideWidth = logoContainers[0].offsetWidth;
      
        slider.style.width = slideWidth + 'px';
      
        setInterval(function() {
          slider.appendChild(logoContainers[0]);
        }, 60000);
      };
} document.addEventListener("DOMContentLoaded",sliderRun);

// News Page Button
function button1() {
    var news1 = document.getElementById('news1');
    var news2 = document.getElementById('news2');

    news1.style.display = "block";
    news2.style.display = "none";
}

function button2() {
    var news1 = document.getElementById('news1');
    var news2 = document.getElementById('news2');

    news1.style.display = "none";
    news2.style.display = "block";
}

function contactForm() {
    window.addEventListener('DOMContentLoaded', function () {
        var formSection = document.getElementById('contact');
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
           if (this.readyState === 4 && this.status === 200) {
              formSection.innerHTML = this.responseText;
           }
        };
        xhr.open('GET', 'contact-master.html', true);
        xhr.send();
     });
} document.addEventListener("DOMContentLoaded",contactForm);

function contactForm2() {
    window.addEventListener('DOMContentLoaded', function () {
        var formSection2 = document.getElementById('contact');
        var xhr2 = new XMLHttpRequest();
        xhr2.onreadystatechange = function () {
           if (this.readyState === 4 && this.status === 200) {
              formSection2.innerHTML = this.responseText;
           }
        };
        xhr2.open('GET', '../contact-master.html', true);
        xhr2.send();
     });
} document.addEventListener("DOMContentLoaded",contactForm2);