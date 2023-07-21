// No Copy and Download Pict
function rightBlock() {
    document.addEventListener('contextmenu', function (event) {
        event.preventDefault();
      });
} document.addEventListener("DOMContentLoaded",rightBlock);

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
function showNews(newsId) {
    var news1 = document.getElementById('news1');
    var news2 = document.getElementById('news2');
    var news3 = document.getElementById('news3');
    var news4 = document.getElementById('news4');

    news1.style.display = (newsId === 1) ? "block" : "none";
    news2.style.display = (newsId === 2) ? "block" : "none";
    news3.style.display = (newsId === 3) ? "block" : "none";
    news4.style.display = (newsId === 4) ? "block" : "none";
}

// Contact Form Master
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

// Hide .html Tab Browser
function fakeHtaccess() {
    // Cek apakah history API didukung oleh browser
    if (window.history && window.history.pushState) {
        // Mengubah URL saat halaman dimuat
        window.history.replaceState({}, document.title, window.location.pathname.replace('.html', ''));
  
        // Merekam aksi refresh halaman
        window.addEventListener('beforeunload', function (event) {
        // Mengembalikan ekstensi .html ke URL saat merefresh halaman
        window.history.replaceState({}, document.title, window.location.pathname + '.html');
        });
    }
} document.addEventListener("DOMContentLoaded",fakeHtaccess);

// Validasi Form Select
function validateForm() {
    var selectElement = document.getElementById("pilih-kategori");
    if (!selectElement.value) {
        selectElement.setCustomValidity("Silakan pilih kategori!");
        selectElement.reportValidity();
        return false; // Mencegah submit formulir
      }
      return true; // Submit formulir jika validasi berhasil
}

// document.addEventListener("DOMContentLoaded", function () {
//     const fileInput = document.getElementById("buktiTF");
//     const label = document.querySelector(".uploadFile");

//     fileInput.addEventListener("change", function () {
//       const fileName = fileInput.value.split("\\").pop(); // Get the selected file name

//       if (fileName) {
//         label.textContent = fileName; // Update the label text with the file name
//       } else {
//         label.innerHTML = '<i class="fa-solid fa-upload"></i> Bukti Donasi*'; // Reset label text if no file is selected
//       }
//     });
//   });
