function tampilkanPesan() {
  document.getElementById("pesan").textContent = "ANGGOTA KELUARGA SEMANGGI";

  const gambar1 = document.getElementById("gambar1");
  const gambar2 = document.getElementById("gambar2");

  gambar1.src = "file:///C:/Users/lenovo/OneDrive/Documents/web-sederhana/gambar%201.jpg";
  gambar2.src = "file:///C:/Users/lenovo/OneDrive/Documents/web-sederhana/gambar%201.jpg";

  gambar1.style.display = "inline-block";
  gambar2.style.display = "inline-block";
}
