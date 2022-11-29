const callbackBtn = document.querySelector('.callback-modal-button')
const callbackBtnXl = document.querySelector('.callback-modal-button-xl')
const callbackBtnClose = document.querySelector('.callback__close-button')
const callback = document.querySelector('.modal-wrapper')
const body = document.body;
document.addEventListener('DOMContentLoaded', () => {
    function callbackInit(btn){
        btn.addEventListener('click', () =>{
           callback.classList.toggle('modal-wrapper--active')
            body.classList.add('scroll-lock')
        })
    }
    callbackBtnClose.addEventListener('click', () =>{
        callback.classList.toggle('modal-wrapper--active')
        body.classList.remove('scroll-lock')
    })
    callbackInit(callbackBtn,callbackBtnClose);
    callbackInit(callbackBtnXl);
})