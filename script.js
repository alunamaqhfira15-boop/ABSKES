// Menangkap elemen tombol dan teks dari HTML berdasarkan ID-nya
const tombolUbah = document.getElementById("btnUbah");
const teksJudul = document.getElementById("judulUtama");

// Daftar warna pilihan secara acak
const warnaList = ["#38bdf8", "#a855f7", "#ec4899", "#eab308"];

// Event listener saat tombol diklik
if (tombolUbah) {
  tombolUbah.addEventListener("click", () => {
    // Mengubah teks judul
    teksJudul.innerText = "Halo, berhasil mengubah teks dengan JavaScript! 🚀";
    
    // Memilih warna acak dari list
    const warnaRandom = warnaList[Math.floor(Math.random() * warnaList.length)];
    
    // Mengubah warna teks judul
    teksJudul.style.color = warnaRandom;
    
    console.log("Tombol berhasil diklik dan warna diubah ke: " + warnaRandom);
  });
}
