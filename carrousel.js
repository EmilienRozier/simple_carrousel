const prevBtn = document.querySelector('#left');
const nextBtn = document.querySelector('#right');
const slides = document.querySelectorAll('.gallery-item');

let x = 0;

function showSlide(n) {
    slides[x].classList.remove('active')
    x = (n + slides.length) % slides.length
    slides[x].classList.add('active')
}

prevBtn.addEventListener('click', () => {
    showSlide(x - 1);
});

nextBtn.addEventListener('click', () => {
    showSlide(x + 1);
});

showSlide(x);
