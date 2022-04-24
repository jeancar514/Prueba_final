const botonNav = document.querySelector('.navbar-toggler');
const navbar = document.getElementById('navbarNav');

botonNav.addEventListener('click', () => {
    navbar.classList.toggle('collapse');
});

const carousel = [...document.querySelectorAll('.carousel-item')];
const carouselIndicators = [...document.querySelectorAll('.carousel-indicators button')];
console.log(carouselIndicators);
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

const avanzarCarrousel = () => {
    i = carouselIndicators.indexOf(carouselIndicators.find(element => element.className === "active")) ;
    if (i === carouselIndicators.length -1) {
       i = 0;
    }else{
        i++;
    }
    recorrerCarrousel(i);
}

setInterval(avanzarCarrousel, 2000);

