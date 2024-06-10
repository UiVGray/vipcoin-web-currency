const swiper = new Swiper('.packages__slider', {

    slidesPerView: 4,
    loop: true,

    navigation: {
      prevEl: '.packages__slider__prev-button',
      nextEl: '.packages__slider__next-button',
    },

    pagination: {
      el:'.swiper-pagination',
      clickable: true,
    }
});

