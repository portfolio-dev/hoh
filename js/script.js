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

function toggleDisplay(elementId) {
    var elements = ['homepage', 'services'];

    for (var i = 0; i < elements.length; i++) {
        var element = document.getElementById(elements[i]);
        element.style.display = (elements[i] === elementId) ? 'flex' : 'none';
    }
}

function services() {
    toggleDisplay('services');
}

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