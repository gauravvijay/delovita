const mobileMenu = document.getElementById('mobile-menu');

const menuToggle = document.querySelector('.md\\:hidden');
const personsCards = document.querySelectorAll('.person-card');
const heroTitle = document.querySelector('.hero-title');
const heroDescription = document.querySelector('.hero-description');

const navbar = document.querySelector('.navbar-custom');

window.onscroll = () => {
    if (window.scrollY > 300) {
      navbar.classList.add('nav-active');
    } else {
      navbar.classList.remove('nav-active');
    }
};

const cardsObserver = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.animation = "fadeInAnimate .3s ease-in";
    }
  })
};

const heroTitleObserver = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.animation = "fadeInAnimate .8s ease-in-out";
      entry.target.style.opacity = 1;
    }
  })
}; 

const heroDescriptionObserver = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.animation = "fadeUpAnimate .7s ease-in-out";
      entry.target.style.opacity = 1;
    }
  })
}; 

const options = { 
  threshold: 0.5,
  rootMargin: '0px',
}

const myObserver = new IntersectionObserver(cardsObserver, options);
const myObserver2 = new IntersectionObserver(heroTitleObserver, options);
const myObserver3 = new IntersectionObserver(heroDescriptionObserver, options);

personsCards.forEach(function(element){
  myObserver.observe(element)
});

myObserver2.observe(heroTitle);
myObserver3.observe(heroDescription);

menuToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});