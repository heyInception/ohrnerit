"use strict";
"use strict";

var _Swiper;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var galleryThumbs = new Swiper('.gallery-thumbs', (_Swiper = {
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  centerInsufficientSlides: true,
  slideToClickedSlide: true,
  freeMode: true
}, _defineProperty(_Swiper, "watchSlidesProgress", true), _defineProperty(_Swiper, "draggable", false), _defineProperty(_Swiper, "allowTouchMove", false), _defineProperty(_Swiper, "slidesPerView", 4), _defineProperty(_Swiper, "breakpoints", {
  1200: {
    direction: 'vertical',
    spaceBetween: 0,
    slidesPerView: 4
  },
  1199: {
    direction: 'horizontal',
    spaceBetween: 0,
    slidesPerView: 4
  },
  768: {
    direction: 'horizontal',
    spaceBetween: 0,
    slidesPerView: 4,
    allowTouchMove: false,
    watchSlidesVisibility: false,
    watchSlidesProgress: false,
    centerInsufficientSlides: false,
    draggable: false
  }
}), _Swiper));
var myswiper = new Swiper('.swiper', {
  spaceBetween: 20,
  breakpoints: {
    1200: {
      direction: 'vertical',
      loop: false,
      allowTouchMove: false
    },
    1199: {
      direction: 'horizontal',
      loop: false,
      allowTouchMove: false
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
    slideChange: function slideChange() {
      var activeIndex = this.activeIndex + 1;
      var activeSlide = document.querySelector(".gallery-thumbs .swiper-slide:nth-child(".concat(activeIndex, ")"));
      var nextSlide = document.querySelector(".gallery-thumbs .swiper-slide:nth-child(".concat(activeIndex + 1, ")"));
      var prevSlide = document.querySelector(".gallery-thumbs .swiper-slide:nth-child(".concat(activeIndex - 1, ")"));

      if (nextSlide && !nextSlide.classList.contains('swiper-slide-visible')) {
        this.thumbs.swiper.slideNext();
      } else if (prevSlide && !prevSlide.classList.contains('swiper-slide-visible')) {
        this.thumbs.swiper.slidePrev();
      }
    }
  }
}); // color active 

var btnActive = document.getElementsByClassName('first-screen__shift');
var btns = document.getElementsByClassName('btn');

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("btn-active");
    current[0].className = current[0].className.replace(" btn-active", "");
    this.className += " btn-active";
  });
}
//# sourceMappingURL=main.js.map
