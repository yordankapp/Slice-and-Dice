var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    var nextSlide = slideIndex + n; 
    if(nextSlide > 5)
        nextSlide = 1;
    if(nextSlide == 0)
        nextSlide = 5;
    showSlides(nextSlide);

    slideIndex = nextSlide;
}

function currentSlide(n) {
    showSlides(n);
    slideIndex = n;
}

function showSlides(n) {
    var slideshow = document.getElementById('slideshow');
    var points = document.getElementsByClassName('point');
    points[slideIndex - 1].style.backgroundColor = 'white';
    points[n - 1].style.backgroundColor = 'rgb(117, 115, 115)';
    
    slideshow.style.backgroundImage = `url(./img/aurora-${n}.jpg)`;
}