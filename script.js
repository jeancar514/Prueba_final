const botonNav = document.querySelector('.navbar-toggler');
const navbar = document.getElementById('navbarNav');

botonNav.addEventListener('click', () => {
    navbar.classList.toggle('collapse');
});

const carousel = [...document.querySelectorAll('.carousel-item')];
const carouselIndicators = [...document.querySelectorAll('.carousel-indicators button')];

const recorrerCarrousel = (index) => {
    carouselIndicators.forEach(item => item.classList.remove('active'));
    carouselIndicators[index].classList.add('active');
    setTimeout(() => {
        carousel.forEach(item => item.classList.remove('active'));
        carousel[index].classList.add('active');
    }, 100);
};
carouselIndicators.forEach((item, index) => {
    item.addEventListener('click', () => {
        recorrerCarrousel(index);
    });
});
