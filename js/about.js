function runLogo() {
    // Ambil elemen logo
    const logoLama = document.querySelector('.logo-lama');
    const logoBaru = document.querySelector('.logo-baru');

    // Fungsi untuk memeriksa apakah elemen logo lama sedang terlihat dalam viewport
    function isLogoLamaVisible() {
    const rect = logoLama.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
    }

    // Fungsi untuk mengganti logo
    function gantiLogo() {
    // Memeriksa apakah elemen logo lama sedang terlihat dalam viewport
    if (isLogoLamaVisible()) {
        // Menghilangkan logo lama
        logoLama.style.transform = 'translateX(-200px)';
    
        // Mengubah logo baru menjadi jelas
        logoBaru.classList.add('show');
    }
    }

    // Mengecek posisi logo saat scroll atau resize
    window.addEventListener('scroll', gantiLogo);
    window.addEventListener('resize', gantiLogo);
} document.addEventListener("DOMContentLoaded", runLogo);

function runMusic() {
    window.addEventListener('DOMContentLoaded', (event) => {
        setTimeout(playMusic, 10000); // Memulai pemutaran musik setelah 10 detik
      });
    
      function playMusic() {
        var audio = document.getElementById("myAudio");
        audio.play();
      }
} document.addEventListener("DOMContentLoaded", runMusic);