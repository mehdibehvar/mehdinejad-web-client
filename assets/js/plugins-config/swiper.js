import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
// import Swiper styles
import 'swiper/css';
import { pauseAllAudio } from './musicPlayer';


const padcastsSwiper = new Swiper('.padcast-swiper', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  initialSlide: 1,
  effect: "cards",
  spaceBetween: -600,
  breakpoints: {
   100: {
      spaceBetween: 22,
      slidesPerView: 1,
    },
    575: {
      spaceBetween: 22,
      slidesPerView: 1,
    },
    768: {
      spaceBetween: -450,
      slidesPerView: 1,
    },
    992: {
      spaceBetween: -600,
      slidesPerView: 1,
    },
    1200: {
      spaceBetween: -660,
      slidesPerView: 1,

    },
    1400: {
      spaceBetween: -670,
      slidesPerView: 1,
    },
    1600: {
      spaceBetween: -800,
      slidesPerView: 1,
    }
  },

  on: {
    slideChange: function () {
      pauseAllAudio();
    },
  },
});
$('.button-prev').on('click', function () {
  padcastsSwiper.slidePrev();
});

$('.button-next').on('click', function () {
  padcastsSwiper.slideNext();
});
const articlesSwiper = new Swiper('.articles-swiper', {

  direction: 'horizontal',
  loop: false,
  slidesPerView: 1.2,
  effect: "cards",
  spaceBetween: 22,
  breakpoints: {
    575: {
      slidesPerView: 2,///more than 575px
      spaceBetween: 42,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 42,
    },
    1400: {
      slidesPerView: 4,
      spaceBetween: 42,
    },
    1920: {
      slidesPerView: 5,
      spaceBetween: 42,
    },
  },
 
});
const coursesSwiper = new Swiper('.courses-swiper', {
  modules: [Navigation],
  direction: 'horizontal',
  loop: false,
  slidesPerView: 1.2,
  effect: "cards",
  spaceBetween: 22,
  breakpoints: {
    575: {
      slidesPerView: 2,///more than 575px
      spaceBetween: 42,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 42,
    },
    1400: {
      slidesPerView: 4,
      spaceBetween: 42,
    },
    1920: {
      slidesPerView: 5,
      spaceBetween: 42,
    },
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});
