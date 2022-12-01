import Swiper, { Navigation, Pagination } from 'swiper';
const technical = document.querySelector('.technical__slider');
const technicalCard = document.querySelector('.technical__card');
const technicalShowMore = document.querySelector('.technical__show-more');
const technicalShowMoreText = document.querySelector('.technical__card-show-more-text');
const technicalShowMoreImage = document.querySelector('.technical__show-more-image')
import mediaChangeHandler from '../js/repairingBrands'

document.addEventListener('DOMContentLoaded', () => {
  let technicalSwiper;
  function technicalMobileSlider() {
    if (!mediaChangeHandler.matches) {
      technicalSwiper = new Swiper(technical, {
        modules: [Navigation, Pagination],
        grabCursor: true,
        loop: true,
        slidesPerView: '1.3',
        spaceBetween: 16,
        pagination: {
          el: '.technical__pagination',
          type: 'bullets',
          clickable: true
        }
      });
    };
    if (mediaChangeHandler.matches) {
      if (technical.classList.contains('swiper-initialized')) {
        technicalSwiper.destroy()
      }
    }
  }
  function technicalToggler(elements, togglerBtn) {
    togglerBtn.addEventListener('click', () => {
      elements.classList.toggle('technical__card--visible')
      if (elements.classList.contains('technical__card--visible')) {
        technicalShowMoreText.textContent = 'скрыть'
        technicalShowMoreImage.src = 'img/arrows-up.svg'
      } else if (elements.classList.contains('technical__card')) {
        technicalShowMoreText.textContent = 'Показать всё'
        technicalShowMoreImage.src = 'img/arrows-dawn.svg'
      }
    })
  }
  technicalToggler(technicalCard, technicalShowMore);
  technicalMobileSlider();
  mediaChangeHandler.addEventListener('change', () => {
    technicalMobileSlider();
  })
});



