// Ambil semua elemen <a> di dalam navigasi
let navLinks = document.querySelectorAll('nav ul li a');

// Tambahkan event listener ke setiap elemen <a>
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        // Hapus kelas active dari semua elemen <a>
        navLinks.forEach(otherLink => {
            otherLink.classList.remove('active');
        });

        // Tambahkan kelas active ke elemen <a> yang sedang diklik
        this.classList.add('active');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.querySelector('.menu');
    const menuLinks = document.querySelector('.menu-links');

    menuIcon.addEventListener('click', function () {
        menuLinks.classList.toggle('show');
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const menu = document.querySelector('.menu');
    const menu2 = document.querySelector('.menu2');
    const navLinks = document.querySelector('nav ul');

    menu.addEventListener('click', function () {
        menu.classList.remove('active');
        // Tambahkan kelas active ke menu
        menu2.classList.add('active');
        // Toggle kelas active pada menu navLinks
        navLinks.classList.toggle('active');
    });

    menu2.addEventListener('click', function () {
        // Hilangkan kelas active dari menu2
        menu2.classList.remove('active');
        // Tambahkan kelas active ke menu
        menu.classList.add('active');
        // Toggle kelas active pada menu navLinks
        navLinks.classList.toggle('active');
    });
});