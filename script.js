// ==========================================
// 1. FUNGSI COPY CODE KE CLIPBOARD
// ==========================================
function copyToClipboard(elementId) {
  const codeText = document.getElementById(elementId).innerText;
  
  navigator.clipboard.writeText(codeText).then(() => {
    // Tampilkan notifikasi singkat saat berhasil disalin
    showToast("Kode CSS berhasil disalin!");
  }).catch(err => {
    console.error("Gagal menyalin kode: ", err);
  });
}

function showToast(message) {
  const toast = document.createElement("div");
  toast.className = "toast-notification";
  toast.innerText = message;
  
  // Styling notifikasi popup lewat JS
  Object.assign(toast.style, {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    backgroundColor: "#a855f7",
    color: "#fff",
    padding: "12px 20px",
    borderRadius: "8px",
    fontWeight: "bold",
    boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
    zIndex: "9999",
    transition: "opacity 0.3s ease"
  });

  document.body.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    setTimeout(() => toast.remove(), 300);
  }, 2000);
}

// ==========================================
// 2. LIVE PLAYGROUND CSS CONTROL (INTERAKTIF)
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  // Ambil Elemen Input Control
  const blurInput = document.getElementById("input-blur");
  const glowColorInput = document.getElementById("input-glow");
  const pulseSpeedInput = document.getElementById("input-pulse");

  // Ambil Elemen Target Preview
  const previewCard = document.querySelector(".card-preview");
  const previewButton = document.querySelector(".btn-preview");
  const previewPulse = document.querySelector(".pulse-preview");
  const liveCodeOutput = document.getElementById("live-css-code");

  // Fungsi Update CSS Real-Time
  function updateLiveCSS() {
    const blurVal = blurInput ? blurInput.value : 10;
    const glowVal = glowColorInput ? glowColorInput.value : "#ec4899";
    const speedVal = pulseSpeedInput ? pulseSpeedInput.value : 2;

    // Apply Style ke Elemen Preview
    if (previewCard) {
      previewCard.style.backdropFilter = `blur(${blurVal}px)`;
    }
    
    if (previewButton) {
      previewButton.style.boxShadow = `0 4px 15px ${glowVal}`;
    }

    if (previewPulse) {
      previewPulse.style.animationDuration = `${speedVal}s`;
    }

    // Generate Teks Kode CSS Secara Otomatis
    if (liveCodeOutput) {
      liveCodeOutput.innerText = `/* Dynamic CSS Output */
.card-glass {
  backdrop-filter: blur(${blurVal}px);
}

.btn-neon {
  box-shadow: 0 4px 15px ${glowVal};
}

.pulse-element {
  animation: pulse-animation ${speedVal}s infinite;
}`;
    }
  }

  // Pasang Event Listener pada Input Control
  if (blurInput) blurInput.addEventListener("input", updateLiveCSS);
  if (glowColorInput) glowColorInput.addEventListener("input", updateLiveCSS);
  if (pulseSpeedInput) pulseSpeedInput.addEventListener("input", updateLiveCSS);

  // Jalankan sekali saat halaman selesai dimuat
  updateLiveCSS();
});
