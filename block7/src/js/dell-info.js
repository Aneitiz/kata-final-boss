const dellInfoBtn = document.querySelector('.dell-info__button')
const dellMdText = document.querySelector('.dell-info__paragraph-md')
const dellXlText = document.querySelector('.dell-info__paragraph-xl')
const dellInfoBtnImage = document.querySelector('.dell-info__button-image')
const dellInfoBtnText = document.querySelector('.dell-info__read-more')
const dellInfoXxlText = document.querySelector('.dell-info__paragraph-xxl')

  dellInfoBtn.addEventListener('click', () => {
        dellMdText.classList.toggle('dell-info__paragraph-md--active')
        dellMdText.classList.toggle('dell-info__paragraph-md')
        dellXlText.classList.toggle('dell-info__paragraph-xl--active')
        dellXlText.classList.toggle('dell-info__paragraph-xl')
        dellInfoXxlText.classList.toggle('dell-info__paragraph-xxl--active')
        dellInfoXxlText.classList.toggle('dell-info__paragraph-xxl')
        if(dellInfoXxlText.classList.contains('dell-info__paragraph-xxl--active')){
            dellInfoBtnImage.src = 'img/arrows-up.svg'
            dellInfoBtnText.textContent = 'скрыть'
        }else{
            dellInfoBtnImage.src = 'img/arrows-dawn.svg'
            dellInfoBtnText.textContent = 'Читать далее'
        }
  })

