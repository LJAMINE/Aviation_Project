let slideIndex = 0;

function showSlides() {
    const slides = document.querySelectorAll('.carousel-images img');
    const dots = document.querySelectorAll('.dot');
    
    slides.forEach((slide, index) => slide.style.display = 'none'); // Cacher toutes les images
    dots.forEach((dot) => dot.classList.remove('active')); // Enlever l'état actif des cercles
    
    slides[slideIndex].style.display = 'block'; // Afficher l'image actuelle
    dots[slideIndex].classList.add('active'); // Activer le cercle correspondant
}

function moveSlide(n) {
    const slides = document.querySelectorAll('.carousel-images img');
    slideIndex = (slideIndex + n + slides.length) % slides.length; // Gestion du débordement
    showSlides();
}

function setSlide(n) {
    slideIndex = n;
    showSlides();
}

showSlides(); // Afficher la première image
