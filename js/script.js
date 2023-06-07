// title bergerak
function mv() {
var titleText = "House of Heart - Rumah Singgah Pasien Jantung Anak  ";
        var speed = 100; // Kecepatan perubahan (ms)
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
};
setInterval(mv, 1000);

// menu-toggler tertutup otomatis
function mt() {
var menuToggle = document.getElementById('menu-toggler');
var menuContent = document.querySelector('.all-links');
var menuItems = document.querySelectorAll('.all-links li');

menuItems.forEach(function(item) {
    item.addEventListener('click', function() {
        menuToggle.checked = false;
    });
});
};
setInterval(mt,1000);
