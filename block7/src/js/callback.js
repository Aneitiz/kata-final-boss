const callbackBtn = document.querySelector('.callback-modal-button')
const callbackBtnXl = document.querySelector('.callback-modal-button-xl')
const callbackBtnClose = document.querySelector('.callback__close-button')
const callback = document.querySelector('.modal-wrapper')
const mainContainer = document.querySelector('.container')

function callbackInit(btn) {
  btn.addEventListener('click', () => {
    callback.classList.toggle('modal-wrapper--active')
    mainContainer.classList.add('scroll-lock')
  })
}
callbackBtnClose.addEventListener('click', () => {
  callback.classList.toggle('modal-wrapper--active')
  mainContainer.classList.remove('scroll-lock')
})
callback.addEventListener('click', (e) => {
  const target = e.target
  if (!target.closest('.callback')) {
    callback.classList.remove('modal-wrapper--active')
    mainContainer.classList.remove('scroll-lock')
  }
})
callbackInit(callbackBtn, callbackBtnClose)
callbackInit(callbackBtnXl)
