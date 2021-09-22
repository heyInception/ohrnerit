var galleryThumbs = new Swiper('.gallery-thumbs', {
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  centerInsufficientSlides: true,
  slideToClickedSlide: true,
  freeMode: true,
  watchSlidesProgress: true,
  draggable: false,
  allowTouchMove: false,
  slidesPerView: 4,
  breakpoints: {
    1200: {
      direction: 'vertical',
      spaceBetween: 0,
      slidesPerView: 4,
    },
    1199: {
      direction: 'horizontal',
      spaceBetween: 0,
      slidesPerView: 4,
    },
    768: {
      direction: 'horizontal',
      spaceBetween: 0,
      slidesPerView: 4,
      allowTouchMove: false,
      watchSlidesVisibility: false,
      watchSlidesProgress: false,
      centerInsufficientSlides: false,
      draggable: false,
    }
  }
});
const myswiper = new Swiper('.swiper', {
  spaceBetween: 20,
  breakpoints: {
    1200: {
      direction: 'vertical',
      loop: false,
      allowTouchMove: false,
    },
    1199: {
      direction: 'horizontal',
      loop: false,
      allowTouchMove: false,
    },
    768: {
      direction: 'horizontal',
      allowTouchMove: false,
      touchRatio: 0
    }
  },
  // If we need pagination
  thumbs: {
    swiper: galleryThumbs
  },
  // autoplay: {
  //   delay: 4500,
  //   disableOnInteraction: false,
  // },

  on: {
    slideChange: function () {
      let activeIndex = this.activeIndex + 1;

      let activeSlide = document.querySelector(`.gallery-thumbs .swiper-slide:nth-child(${activeIndex})`);
      let nextSlide = document.querySelector(`.gallery-thumbs .swiper-slide:nth-child(${activeIndex + 1})`);
      let prevSlide = document.querySelector(`.gallery-thumbs .swiper-slide:nth-child(${activeIndex - 1})`);

      if (nextSlide && !nextSlide.classList.contains('swiper-slide-visible')) {
        this.thumbs.swiper.slideNext()
      } else if (prevSlide && !prevSlide.classList.contains('swiper-slide-visible')) {
        this.thumbs.swiper.slidePrev()
      }

    }
  }

});


// color active 

let btnActive = document.getElementsByClassName('first-screen__shift');
let btns = document.getElementsByClassName('btn')

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("btn-active");
    current[0].className = current[0].className.replace(" btn-active", "");
    this.className += " btn-active";
  });
}
