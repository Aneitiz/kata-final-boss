const burgerBtn = document.querySelector('.header__burger')
const burgerCloseBtn = document.querySelector('.aside__burger-button')
const burgerBody = document.querySelector('.aside')
const asideVisibleAria = document.querySelector('.aside-modal-wrapper')
const asideVisibleAriaActive = document.querySelector('.aside-modal-wrapper--visible')
const mainContainer = document.querySelector('.container')
const mediaChangeHandlerXl = window.matchMedia('(min-width: 1366px)')


  function burgerInit() {
    burgerBtn.addEventListener('click', () => {
      asideVisibleAria.classList.toggle('aside-modal-wrapper--visible')
      asideVisibleAria.classList.contains('aside-modal-wrapper--visible')
        ? mainContainer.classList.add('scroll-lock')
        : mainContainer.classList.remove('scroll-lock')
    })
    burgerCloseBtn.addEventListener('click', () => {
      asideVisibleAria.classList.toggle('aside-modal-wrapper--visible')
      asideVisibleAria.classList.contains('aside-modal-wrapper--visible')
        ? mainContainer.classList.add('scroll-lock')
        : mainContainer.classList.remove('scroll-lock')
    })
    asideVisibleAria.addEventListener('click', (e) =>{
      const target = e.target
      if(!target.closest('.aside')){
        asideVisibleAria.classList.remove('aside-modal-wrapper--visible')
      }
    })  
  }
  burgerInit()

