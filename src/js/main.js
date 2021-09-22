var galleryThumbs = new Swiper('.gallery-thumbs', {
  breakpoints: {
    1199: {
      spaceBetween: 30,
      slidesPerView: 4,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      centerInsufficientSlides: true,
      direction: 'vertical',
      slideToClickedSlide: true,
      freeMode: true,
      watchSlidesProgress: true,
    },
    768: {
      direction: 'horizontal',
      spaceBetween: 0,
      slidesPerView: 4,
      allowTouchMove: false,
      watchSlidesVisibility: false,
      watchSlidesProgress: false,
      centerInsufficientSlides: false,
    }
  }
});
const myswiper = new Swiper('.swiper', {
  breakpoints: {
    1199: {
      direction: 'vertical',
      loop: false,
      allowTouchMove: false,
    },
    768: {
      direction: 'horizontal',
      allowTouchMove: false,
    }
  },
  // Optional parameters


  // If we need pagination
  thumbs: {
    swiper: galleryThumbs
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 4500,
    disableOnInteraction: false,
  },

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
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("btn-active");
  current[0].className = current[0].className.replace(" btn-active", "");
  this.className += " btn-active";
  });
}
