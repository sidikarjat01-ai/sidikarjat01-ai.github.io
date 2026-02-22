/**
 * 1. Tahun Otomatis di Footer
 * Mencari elemen dengan id="year" dan mengisinya dengan tahun saat ini
 */
const yearElement = document.getElementById("year");
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

/**
 * 2. Animasi Reveal & Card (Intersection Observer)
 * Menambahkan class 'active' saat elemen masuk ke dalam layar saat di-scroll
 */
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px", // Animasi muncul sedikit sebelum elemen terlihat penuh
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
      // Jika ingin animasi hanya sekali saja, aktifkan baris di bawah ini:
      // observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Daftarkan semua elemen dengan class 'reveal' dan 'card' untuk diamati
document.querySelectorAll(".reveal, .card").forEach((el) => {
  observer.observe(el);
});

/**
 * 3. Efek Form Submission
 * Memberikan feedback visual saat tombol kirim ditekan
 */
const form = document.querySelector(".contact-form");
if (form) {
  form.addEventListener("submit", function (e) {
    // e.preventDefault(); // Aktifkan ini jika ingin testing tanpa refresh halaman
    const btn = this.querySelector("button");
    if (btn) {
      btn.innerHTML = "<span>Mengirim...</span>";
      btn.style.opacity = "0.7";
      btn.style.pointerEvents = "none"; // Mencegah klik ganda
    }
  });
}

function toggleMobileDesc(btn) {
  const container = btn.parentElement;
  container.classList.toggle('active');
  
  if (container.classList.contains('active')) {
    btn.innerText = 'Sembunyikan';
  } else {
    btn.innerText = 'Lihat selengkapnya';
  }
}