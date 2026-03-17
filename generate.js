// Di dalam <script> di akhir <body>

document.addEventListener('DOMContentLoaded', () => {
    // ... (kode JavaScript lain yang sudah ada sebelumnya) ...

    // --- LOGIKA UNTUK SINKRONISASI NAVIGASI SAAT SCROLL ---
    const navLinks = document.querySelectorAll('nav a.nav-link');
    
    // Membuat array section ID dari link navigasi yang ada
    const sectionIds = Array.from(navLinks).map(link => link.getAttribute('href').substring(1));
    const sections = sectionIds.map(id => document.getElementById(id));

    // Fungsi untuk mengubah link yang aktif
    const syncNavOnScroll = () => {
        let currentSectionIndex = sections.length - 1;

        // Mencari section yang sedang aktif dari bawah ke atas
        while (currentSectionIndex >= 0 && window.scrollY + 150 < sections[currentSectionIndex].offsetTop) {
            currentSectionIndex--;
        }

        // Membersihkan semua link lalu mengaktifkan yang benar
        navLinks.forEach((link, index) => {
            if (index === currentSectionIndex) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    };

    // Jalankan saat halaman dimuat
    syncNavOnScroll();
    
    // Jalankan setiap kali pengguna menggulir halaman
    window.addEventListener('scroll', syncNavOnScroll);
});