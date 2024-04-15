document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll('.card');

    cards.forEach(function(card) {
        card.addEventListener('click', function() {
            // Menghapus kelas 'selected' dari semua kartu
            cards.forEach(function(c) {
                c.classList.remove('selected');
            });

            // Menambahkan kelas 'selected' ke kartu yang diklik
            this.classList.add('selected');

            // Membuat efek animasi saat kartu dipilih
            setTimeout(function() {
                card.style.backgroundColor = '#ff4d4d'; // Warna merah
                card.style.transform = 'scale(1.1)'; // Pertumbuhan ukuran
            }, 100);

            // Menghapus efek animasi setelah beberapa saat
            setTimeout(function() {
                card.style.backgroundColor = '#f0f0f0'; // Warna latar belakang asli
                card.style.transform = 'scale(1)'; // Ukuran kembali normal
            }, 500);
        });
    });
});
