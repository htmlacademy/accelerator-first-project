import { Swiper } from '../vendor';

import { Navigation, Pagination } from 'swiper/modules';

export function initSlider() {
  const jurySwiper = new Swiper('.jury__swiper', {
    modules: [Navigation, Pagination],
    direction: 'horizontal',
    loop: true,
    grabCursor: true, // менять иконку курсора
    navigation: {
      nextEl: '.jury__button--next',
      prevEl: '.jury__button--prev',
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      // when window width is >= 768px
      768: {
        slidesPerView: 2,
        spaceBetween: 40
      },
      // when window width is >= 1366px
      1366: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },
  });


  /*  const reviewsSlider = new Swiper('.reviews__slider', {
    direction: 'horizontal',
    slidesPerView: 1,
    spaceBetween: 33,
    centeredSlides: true,
    grabCursor: true, // менять иконку курсора
    navigation: {
      nextEl: '.reviews__button-next',
      prevEl: '.reviews__button-prev',
    },
  }); */
}


