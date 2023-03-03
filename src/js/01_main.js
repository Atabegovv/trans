const swiper = new Swiper('.product__slider', {
  navigation:{
    prevEl: '.swiper-button-prev',
    nextEl: '.swiper-button-next',
  },
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },
  grabCursor: true,
  spaceBetween: 30,
  speed: 1000,
  // freeMode: true,
  slidesPerView: 2.2,
  // breakpoints:{
  //   1050: {
  //     slidesPerView: 1.2,
  //   },
  // },
});


const zhk_swiper = new Swiper('.zhk-slider', {
  navigation:{
    prevEl: '.zhk-swiper-button-prev',
    nextEl: '.zhk-swiper-button-next',
  },
  grabCursor: true,
  spaceBetween: 30,
  speed: 1000,
  // freeMode: true,
  slidesPerView: 1,
});