export function initializeSlider() {
    const carousel = document.querySelector('.carousel');
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
    const slides = carousel.querySelectorAll('.slide');

    let currentIndex = 0;
    let prevIndex;

    const totalSlides = Object.keys(slides).length;
    const gap = parseInt(getComputedStyle(carousel).getPropertyValue('--gap'), 10);
    const slideWidth = slides[1].getBoundingClientRect().width + gap;

    prevButton.addEventListener('click', () => {
        prevIndex = currentIndex;
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        carousel.style.transform = `translateX(-${slideWidth}px)`;
        carousel.insertBefore(slides[currentIndex], carousel.firstChild);

        setTimeout(() => {
            carousel.classList.add("sliding-transition");
            carousel.style.transform = "";
        }, 10);

        setTimeout(() => {
            carousel.classList.remove("sliding-transition");
        }, 490);

    });

    nextButton.addEventListener('click', () => {
        carousel.classList.add("sliding-transition");
        prevIndex = currentIndex;
        currentIndex = (currentIndex + 1) % totalSlides;
        carousel.style.transform = `translateX(-${slideWidth}px)`;

        setTimeout(() => {
            carousel.appendChild(slides[prevIndex]);
            carousel.classList.remove("sliding-transition");
            carousel.style.transform = "";
        }, 500);
    });
}

