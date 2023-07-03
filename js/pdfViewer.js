function loadSelectedPDF() {
  const select = document.getElementById('pdfSelect');
  const selectedValue = select.value;
  const pdfUrl = selectedValue; // Menggunakan nilai yang dipilih sebagai URL PDF
  loadPDF(pdfUrl);
}

// Fungsi untuk memuat PDF
function loadPDF(url) {
  // Menghapus konten sebelumnya dari div pdfViewer
  const pdfViewer = document.getElementById('pdfViewer');
  pdfViewer.innerHTML = '';

  // Membuat instance PDFJS
  const pdfjsLib = window['pdfjs-dist/build/pdf'];

  // Membaca file PDF
  pdfjsLib.getDocument(url).promise.then(pdf => {
    // Mendapatkan jumlah halaman PDF
    const numPages = pdf.numPages;

    // Membuat div wrapper untuk halaman PDF
    const pdfWrapper = document.createElement('div');
    pdfWrapper.id = 'pdfWrapper';

    // Memuat semua halaman
    for (let pageNum = 1; pageNum <= numPages; pageNum++) {
      pdf.getPage(pageNum).then(page => {
        // Membuat elemen div untuk setiap halaman
        const pageWrapper = document.createElement('div');
        pageWrapper.classList.add('pdfPageWrapper');

        // Membuat elemen canvas untuk menampilkan halaman
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        const viewport = page.getViewport({ scale: 1 });

        // Menyesuaikan ukuran canvas dengan halaman
        canvas.width = viewport.width;
        canvas.height = viewport.height;

        // Menggambar halaman pada canvas
        page.render({ canvasContext: context, viewport: viewport });

        // Menambahkan canvas ke dalam elemen div halaman
        pageWrapper.appendChild(canvas);

        // Menambahkan elemen div halaman ke dalam wrapper
        pdfWrapper.appendChild(pageWrapper);
      });
    }

    // Menambahkan wrapper halaman PDF ke dalam pdfViewer
    pdfViewer.appendChild(pdfWrapper);
  });
}

// Memuat PDF saat halaman selesai dimuat
window.addEventListener('DOMContentLoaded', () => {
  const pdfSelect = document.getElementById('pdfSelect');

  // Memuat PDF saat pilihan diubah
  pdfSelect.addEventListener('change', loadSelectedPDF);

  // Memuat PDF saat halaman pertama kali dimuat
  loadSelectedPDF();
});

function openPdf() {
  var show1 = document.getElementById('pdfViewer');
  var show2 = document.getElementById('pdfFieldset');
  var selectPdf = document.getElementById('pdfSelect');
  var selectedOption = selectPdf.options[selectPdf.selectedIndex];
  var selectedText = selectedOption.text;

  show1.style.display = "flex";
  show2.style.display = "flex";
  document.getElementById('pdfLegend').innerHTML = '<h3><i class="fa-solid fa-eye fa-beat-fade"></i> '+selectedText+' 2023</h3>';
}

function pdfChange() {
// Mendapatkan referensi ke elemen <select>
var selectPdf = document.getElementById('pdfSelect');

// Menambahkan event listener pada perubahan nilai di elemen <select>
selectPdf.addEventListener('change', function() {
  var show1 = document.getElementById('pdfViewer');
  var show2 = document.getElementById('pdfFieldset');

  show1.style.display = "none";
  show2.style.display = "none";
});
} document.addEventListener("DOMContentLoaded", pdfChange);