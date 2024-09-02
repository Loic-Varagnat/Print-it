document.addEventListener('DOMContentLoaded', function() {
    const slides = [
        {
            "image":"slide1.jpg",
            "tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
        },
        {
            "image":"slide2.jpg",
            "tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
        },
        {
            "image":"slide3.jpg",
            "tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
        },
        {
            "image":"slide4.png",
            "tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
        }
    ];

    const bannerImg = document.querySelector('.banner-img');
    const bannerText = document.querySelector('#banner p');
    const dotsContainer = document.querySelector('.dots');
    const arrowLeft = document.querySelector('.arrow_left');
    const arrowRight = document.querySelector('.arrow_right');

    let currentIndex = 0;

    // Créer des points de navigation
    slides.forEach((slide, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('dot_selected');
        dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll('.dot');

    // Fonction pour afficher une slide
    function showSlide(index) {
        const slide = slides[index];
        bannerImg.src = `./assets/images/slideshow/${slide.image}`;
        bannerText.innerHTML = slide.tagLine;
        dots.forEach((dot, i) => {
            dot.classList.toggle('dot_selected', i === index);
        });
    }
    // slides.length défilement infini
    // Passer à l'image suivante
    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    // Revenir à l'image précédente
    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    }

    // Ajouter les événements
    arrowRight.addEventListener('click', nextSlide);
    arrowLeft.addEventListener('click', prevSlide);

    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => {
            currentIndex = i;
            showSlide(i);
        });
    });

    // Initialiser la première slide
    showSlide(currentIndex);

    // Défilement automatique toutes les 5 secondes
    setInterval(nextSlide, 5000);
});
