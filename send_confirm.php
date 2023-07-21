<?php
// Koneksi ke database
$servername = "localhost"; // Ganti dengan nama server Anda jika tidak menggunakan server lokal
$username = "root"; // Ganti dengan username database Anda
$password = ""; // Ganti dengan password database Anda
$dbname = "test"; // Ganti dengan nama database yang ingin Anda gunakan

$conn = mysqli_connect($servername, $username, $password, $dbname);

// Cek koneksi
if (!$conn) {
    die("Koneksi gagal: " . mysqli_connect_error());
}

// Ambil data dari form
$name = $_POST['name'];
$email = $_POST['email'];
$telp = $_POST['telp'];

// Memproses unggahan foto
$target_dir = "images/donation/";
$target_file = $target_dir . basename($_FILES["foto"]["name"]);
$uploadOk = 1;
$imageFileType = strtolower(pathinfo($target_file, PATHINFO_EXTENSION));

// Check apakah berkas gambar atau bukan
if(isset($_POST["submit"])) {
    $check = getimagesize($_FILES["foto"]["tmp_name"]);
    if($check !== false) {
        echo "File adalah gambar - " . $check["mime"] . ".";
        $uploadOk = 1;
    } else {
        echo "File bukan gambar. ";
        $uploadOk = 0;
    }
}

// Cek apakah berkas sudah ada di server
if (file_exists($target_file)) {
    echo "Maaf, berkas sudah ada. ";
    $uploadOk = 0;
}

// Cek ukuran berkas
if ($_FILES["foto"]["size"] > 500000) {
    echo "Maaf, ukuran berkas terlalu besar. ";
    $uploadOk = 0;
}

// Izinkan format tertentu (misalnya, JPG, JPEG, PNG)
if ($imageFileType != "jpg" && $imageFileType != "jpeg" && $imageFileType != "png") {
    echo "Maaf, hanya diperbolehkan unggah file JPG, JPEG, dan PNG. ";
    $uploadOk = 0;
}

// Cek jika $uploadOk bernilai 0 karena terdapat kesalahan
if ($uploadOk == 0) {
    echo "Maaf, berkas tidak dapat diunggah.";
// Jika semuanya berjalan lancar, coba unggah berkas
} else {
    if (move_uploaded_file($_FILES["foto"]["tmp_name"], $target_file)) {
        echo "Berkas ". basename( $_FILES["foto"]["name"]). " berhasil diunggah. ";
        
        // Simpan data ke database
        $sql = "INSERT INTO bukti_donasi (name, email, telp, foto) VALUES ('$name', '$email', '$telp', '$target_file')";
        if (mysqli_query($conn, $sql)) {
            echo "Data berhasil disimpan. ";
        } else {
            echo "Terjadi kesalahan: " . $sql . "<br>" . mysqli_error($conn);
        }
    } else {
        echo "Terjadi kesalahan saat mengunggah berkas. ";
    }
}

// Tutup koneksi
mysqli_close($conn);
?>