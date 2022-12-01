const asideContacts = document.querySelector('.aside__contacts')
const headerContacts = document.querySelector('.header__contacts')
const callModal = document.querySelector('.request-call__modal-wrapper')
const mainContainer = document.querySelector('.container')
const requestCallCloseBtn = document.querySelector('.request-call__button')

function callInit() {
  headerContacts.addEventListener('click', (e) => {
    const target = e.target
    console.log(e.target)
    if (target.classList.contains('request-call-modal-button')) {
      callModal.classList.toggle('request-call__modal-wrapper--active')
      mainContainer.classList.toggle('scroll-lock')
    }
  })
  asideContacts.addEventListener
  requestCallCloseBtn.addEventListener('click', () => {
    callModal.classList.toggle('request-call__modal-wrapper--active')
    mainContainer.classList.toggle('scroll-lock')
  })
  asideContacts.addEventListener('click', (e) => {
    const target = e.target
    console.log(e.target)
    if (target.classList.contains('request-call-modal-button')) {
      callModal.classList.toggle('request-call__modal-wrapper--active')
      mainContainer.classList.toggle('scroll-lock')
    }
  })
  callModal.addEventListener('click', (e) => {
    const target = e.target
    if (target.classList.contains('request-call__modal-wrapper--active')) {
      callModal.classList.toggle('request-call__modal-wrapper--active')
      mainContainer.classList.toggle('scroll-lock')
    }
  })
}
callInit()
