.glass-card {
  width: 320px;
  padding: 24px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  color: #f8fafc;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

/* Efek saat kursor mouse menyentuh kartu */
.glass-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 40px rgba(168, 85, 247, 0.4);
}
.btn-neon {
  padding: 12px 28px;
  font-size: 1rem;
  font-weight: 700;
  color: #ffffff;
  border: none;
  border-radius: 12px;
  background: linear-gradient(135deg, #a855f7, #ec4899);
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(236, 72, 153, 0.4);
  transition: all 0.2s ease;
}

.btn-neon:hover {
  opacity: 0.9;
  box-shadow: 0 6px 20px rgba(236, 72, 153, 0.7);
}

.btn-neon:active {
  transform: scale(0.95);
}
.gradient-title {
  font-size: 2.5rem;
  font-weight: 800;
  background: linear-gradient(135deg, #38bdf8, #a855f7, #ec4899);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
body {
  margin: 0;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0f172a;
}
