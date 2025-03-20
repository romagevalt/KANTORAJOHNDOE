const carousel = document.querySelector('.photo-carousel');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const images = document.querySelectorAll('.photo-carousel img');
let counter = 0;
const imageWidth = document.querySelector('.photo-gallery').offsetWidth; // Берем ширину видимой области галереи

nextButton.addEventListener('click', () => {
    counter++;
    if (counter >= images.length) {
        counter = 0;
    }
    carousel.style.transform = 'translateX(-' + counter * imageWidth + 'px)';
});

prevButton.addEventListener('click', () => {
    counter--;
    if (counter < 0) {
        counter = images.length - 1;
    }
    carousel.style.transform = 'translateX(-' + counter * imageWidth + 'px)';
});