<?php
    include "connect.php";

    $Nama = $_POST['nama'];
    $Email = $_POST['email'];
    $Telp = $_POST['telp'];
    $Kategori = $_POST['kategori'];
    $Pesan = $_POST['pesan'];

    $insert = mysqli_query($mysqli, "insert into hubungi_kami set nama='$Nama', email='$Email', telp='$Telp', kategori='$Kategori', pesan='$Pesan'");

    include "connect2.php";
?>