const cercle = document.querySelector('.cercle');
const imgs = document.querySelectorAll('img');

const TL = gsap.timeline({paused: true});

TL 
.to(imgs, {scale: 1, duration: 0.4, stagger: 0.1, ease: "back.out(1.7)"});

let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
    const cerclePosition = cercle.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    const currentScrollY = window.scrollY;

    if (cerclePosition < windowHeight && cerclePosition > 0) {
        if (currentScrollY > lastScrollY) {
            // Scroll vers le bas
            TL.play();
        } else {
            // Scroll vers le haut
            TL.reverse();
        }
    }

    lastScrollY = currentScrollY; // Mettre à jour la dernière position de défilement
});