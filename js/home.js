//pour animation publi

const sliderContainer = document.getElementById('product-slider');
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;
function showNextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    sliderContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
}
setInterval(showNextSlide, 3000);
