
const price = document.querySelector('.price__slider')
import mediaChangeHandler from '../js/repairingBrands'
import Swiper, { Navigation, Pagination } from 'swiper';

document.addEventListener('DOMContentLoaded', () => {
    let priceSlider;
  function priceMobileSlider() {
    if (!mediaChangeHandler.matches) {
        priceSlider = new Swiper(price, {
        modules: [Navigation, Pagination],
        grabCursor: true,
        loop: true,
        slidesPerView: '1.2',
        spaceBetween: 16,
        pagination: {
          el: '.price__pagination',
          type: 'bullets',
          clickable: true
        }
      })
    }
    if (mediaChangeHandler.matches) {
      if (price.classList.contains('swiper-initialized')) {
        priceSlider.destroy()
      }
    }
  }
  priceMobileSlider()
  mediaChangeHandler.addEventListener('change', () => {
    priceMobileSlider()
  })
})
