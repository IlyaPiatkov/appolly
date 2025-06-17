import Swiper from "swiper/bundle";

import { onSubscribeForm } from "./js/subscribe-form";
import { initializeMenu } from "./js/menu";
import { onClickLinks } from "./js/links";

onSubscribeForm();
initializeMenu();
onClickLinks();

new Swiper("#screenshot-swiper", {
  autoplay: {
    delay: 3000,
  },
  slidesPerView: 2,
  spaceBetween: 5,
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 120,
    modifier: 1,
    slideShadows: false,
    scale: 0.9,
  },
  loop: true,
  pagination: {
    el: ".swiper__pagination",
    clickable: true,
    bulletClass: "swiper__bullet",
    bulletActiveClass: "swiper__bullet_active",
  },
  navigation: {
    nextEl: ".swiper__next",
    prevEl: ".swiper__prev",
  },
  slideActiveClass: "swiper__slide_active",
  breakpoints: {
    768: {
      slidesPerView: 4,
    },
  },
});

new Swiper("#feedback-swiper", {
  autoplay: {
    delay: 3000,
  },
  slidesPerView: 2,
  spaceBetween: -340,
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: false,
    scale: 0.9,
  },
  loop: true,
  pagination: {
    el: ".swiper__pagination",
    clickable: true,
    bulletClass: "swiper__bullet",
    bulletActiveClass: "swiper__bullet_active",
  },
  breakpoints: {
    768: {
      spaceBetween: 0,
      coverflowEffect: {
        stretch: 535,
        depth: 0,
      },
    },
    1024: {
      coverflowEffect: {
        stretch: 250,
      },
    },
    1440: {
      coverflowEffect: {
        stretch: 290,
      },
    },
  },
});
