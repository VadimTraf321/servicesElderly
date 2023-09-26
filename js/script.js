document.addEventListener('DOMContentLoaded', () => {
    const modal = document.querySelector('#custom-modal')
    const closeModal = document.querySelectorAll('#modal-close')
    const nextModal = document.querySelector('#modal-next')
    let inputName = document.querySelector('[data-input-name]');
    let inputPhone = document.querySelector('[data-input-phone]');
    let chengeForm = document.querySelector('[data-form]')
    let modalTitle = document.querySelector('.custom-modal__title')
    let modalDescr = document.querySelector('.custom-modal__thanks-descr')





    const triggers = document.querySelectorAll('[data-modal]')

    triggers.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.classList.add('open')
            document.body.style.overflow = 'hidden';
            modalTitle.textContent = 'enter the data'
            chengeForm.style.display = 'flex'
            modalDescr.style.display = 'none'
            nextModal.style.display = 'block'
            inputName.value = ''
            inputPhone.value = ''
            inputPhone.style.border = '1px solid #000'
            inputName.style.border = '1px solid #000'
        })
    })

    nextModal.addEventListener('click', () => {
        console.log(inputName.value)
        if (inputName.value.length >= 3 && inputPhone.value.length > 3) {
            modalTitle.textContent = ''
            chengeForm.style.display = 'none'
            modalDescr.style.display = 'block'
            nextModal.style.display = 'none'
            document.body.style.overflow = 'hidden';

        } else {
            inputPhone.style.border = '2px solid red'
            inputName.style.border = '2px solid red'
        }
    })



    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('open')
            document.body.style.overflow = '';
        }
    })

    closeModal.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.classList.remove('open')
            document.body.style.overflow = '';

        })
    })



    
    document.querySelector('.header__burger').addEventListener('click', () =>{
        document.body.classList.toggle('_lock')
          document.querySelector('.menu').classList.toggle('active')
          document.querySelector('.header__burger').classList.toggle('active')
        })
        
        document.querySelectorAll('.menu__list-item__link').forEach(link =>{
          link.addEventListener('click', () =>{
            document.body.classList.remove('_lock')
          document.querySelector('.menu').classList.remove('active')
          document.querySelector('.header__burger').classList.remove('active')
          })
        })

})