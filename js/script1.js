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