import Swiper from "swiper/bundle";



const openButton = document.getElementById("open-menu");
const closeButton = document.getElementById("close-menu");

const menu = document.getElementById("menu");
const overlay = document.getElementById("overlay");

const onCloseMenu = () => {
  menu.classList.remove("menu_open");
  overlay.classList.remove("overlay");
};

openButton.addEventListener("click", () => {
  menu.classList.add("menu_open");
  overlay.classList.add("overlay");
});

closeButton.addEventListener("click", onCloseMenu);
overlay.addEventListener("click", onCloseMenu);

new Swiper("#swiper", {
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
  navigation: {
    nextEl: ".swiper__next",
    prevEl: ".swiper__prev",
  },
  slideActiveClass: "swiper__slide_active",
});
