const requestCall = document.querySelector('.request-call__modal-wrapper')
const requestCallModalBtns = document.querySelectorAll('.request-call-modal-button')
const requestCloseBtn = document.querySelector('.request-call__button')
const body = document.body;
document.addEventListener('DOMContentLoaded', () =>{
    function requestCallinit(){
        for (let buttonItem of requestCallModalBtns) {
            buttonItem.addEventListener('click', () => {
                requestCall.classList.toggle('request-call__modal-wrapper--active')
                body.classList.toggle('scroll-lock')
            });
          }
          requestCloseBtn.addEventListener('click', ()=>{
            requestCall.classList.toggle('request-call__modal-wrapper--active')
            body.classList.toggle('scroll-lock')
          })
    }
    requestCallinit()
})
