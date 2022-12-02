
const slider = document.querySelector('.swiper')
const sliderShowBtn = document.querySelector('.card__show-more')
const sliderBtnText = document.querySelector('.card__show-more-text')
const sliderBtnImage = document.querySelector('.slider__show-image')
const cardHiddenItem = document.querySelector('.card')
export const mediaChangeHandler = window.matchMedia('(min-width: 768px)')
import Swiper, { Navigation, Pagination } from 'swiper';
export default mediaChangeHandler;
document.addEventListener('DOMContentLoaded', () => {
  let mySwiper
    function sliderToggler (elements, togglerBtn) {
    togglerBtn.addEventListener('click', () => {
      elements.classList.toggle('card__visible')
      if (elements.classList.contains('card__visible')) {
        sliderBtnText.textContent = 'скрыть'
        sliderBtnImage.src = 'img/arrows-up.svg'
      } else if (elements.classList.contains('card')) {
        sliderBtnText.textContent = 'Показать всё'
        sliderBtnImage.src = 'img/arrows-dawn.svg'
      }
    })
  }
  function mobileSlider() {
    if (!mediaChangeHandler.matches) {
      mySwiper = new Swiper(slider, {
        modules: [Navigation, Pagination],
        grabCursor: true,
        loop: true,
        slidesPerView: '1.3',
        spaceBetween: 16,
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true
        }
      })
    }
    if (mediaChangeHandler.matches) {
      if (slider.classList.contains('swiper-initialized')) {
        mySwiper.destroy()
      }
    }
  }
  mobileSlider()
  mediaChangeHandler.addEventListener('change', () => {
    mobileSlider()
  })
  sliderToggler(cardHiddenItem,sliderShowBtn);
})
