// Menangkap elemen tombol dan teks berdasarkan ID di HTML
const tombolUbah = document.getElementById("btnUbah");
const teksJudul = document.getElementById("judulUtama");

// Daftar warna pilihan acak
const warnaList = ["#06b6d4", "#3b82f6", "#10b981", "#f59e0b"];

// Event listener saat tombol diklik
if (tombolUbah) {
  tombolUbah.addEventListener("click", () => {
    // Mengubah teks judul
    teksJudul.innerText = "Halo, teks berhasil diubah dengan JavaScript! 🚀";
    
    // Memilih warna acak dari daftar
    const warnaRandom = warnaList[Math.floor(Math.random() * warnaList.length)];
    
    // Menerapkan warna baru ke teks judul
    teksJudul.style.color = warnaRandom;
  });
}
