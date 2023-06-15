function runLogo() {
    // Ambil elemen logo
    const logoElement = document.querySelector('.logoAbout');

    // Atur waktu pergantian logo (misalnya setelah 3 detik)
    const waktuPergantian = 10000;
    let waktuAnimasi;

    // Fungsi untuk mengganti logo
    function gantiLogo() {
        logoElement.src = 'images/logo.png';

        // Menghapus timeout untuk menghentikan animasi
        clearTimeout(waktuAnimasi);

        // Mengatur logo tetap dengan atribut src yang baru
        logoElement.removeAttribute('src');
        logoElement.setAttribute('src', 'images/logo.png');
    }

    // Mulai animasi pergantian logo setelah waktu tertentu
    waktuAnimasi = setTimeout(gantiLogo, waktuPergantian);
} document.addEventListener("DOMContentLoaded", runLogo);
