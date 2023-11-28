const sliderCertificates = document.querySelector('[data-swiper="certificates"]');
const buttonNext = document.querySelector('[data-button="certificates-next"]');
const buttonPrev = document.querySelector('[data-button="certificates-prev"]');

const setSlider = () => {
  return new window.Swiper(sliderCertificates, {
    slidesPerView: 2,
    spaceBetween: 10,
    slidesPerGroup: 2,
    swipe: true,
    speed: 800,

    breakpoints: {
      540: {
        slidesPerView: 3,
        spaceBetween: 15,
        slidesPerGroup: 3,
      },
    },

    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },

    navigation: {
      nextEl: buttonNext,
      prevEl: buttonPrev,
    },
  });
};

const initCertificatesSlider = () => {
  if (document.body.contains(sliderCertificates)) {
    setSlider();
  }
};

export {initCertificatesSlider};
