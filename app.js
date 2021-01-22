let slidepos = 0;
const slides = document.getElementsByClassName('carousel__item');
const len = slides.length;
const next = document.getElementById('next');
const prev = document.getElementById('prev');

next.addEventListener("click", function(){
  moveToNextSlide();
});

prev.addEventListener("click", function(){
  moveToPrevSlide();
});

function updateSlidePos(){
  for(let slide of slides) {
    slide.classList.remove('carousel__item-visible');
    slide.classList.add('carousel__item-hidden');
  }

  slides[slidepos].classList.add('carousel__item-visible');
}

function moveToNextSlide() {
  if(slidepos === len - 1){
    slidepos = 0;
  }else {

    slidepos++;
  }

  updateSlidePos();
}

function moveToPrevSlide() {
  if(slidepos === 0){
    slidepos = len - 1;
  }else{

  slidepos--;
  }
  updateSlidePos();
}

