let currentSlideIndex = 0;
const sliders = document.querySelectorAll('.slider');

function changeSlide() {
    sliders.forEach(slider => {
        const slides = slider.querySelectorAll('.slide');
        slides[currentSlideIndex].classList.remove('active');
        
        let nextSlideIndex = (currentSlideIndex + 1) % slides.length;
        slides[nextSlideIndex].classList.add('active');
    });

    currentSlideIndex = (currentSlideIndex + 1) % sliders[0].querySelectorAll('.slide').length;
}

// Запуск зміни слайдів кожні 3 секунди
setInterval(changeSlide, 3000);


const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});



