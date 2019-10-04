function slider(){
  var slides = document.querySelectorAll('.slider__item');
  var currentSlide = 0;
  var countSlides = slides.length;

  for (let i = 0; i < countSlides; i++) {
    let dot = document.createElement('div');
    dot.classList.add('dot');
    if(i === 0) dot.classList.add('dot_active');
    document.querySelector('.slider__dots').appendChild(dot);
  }

  let dots = document.querySelectorAll('.slider__dots .dot');

  let slideInterval = setInterval(() => {
    slides[currentSlide].classList.remove('visible');
    dots[currentSlide].classList.remove('dot_active');

    currentSlide = ++currentSlide % slides.length;

    slides[currentSlide].classList.add('visible');
    dots[currentSlide].classList.add('dot_active');
  }, 2000);
}

export default slider;