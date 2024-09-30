'use strict'

const burger = document.querySelector('.header__burger')
const menu = document.querySelector('.header__menu')
const link = document.querySelector('.header__link')

burger.addEventListener('click', () => {
    menu.classList.toggle('header__menu_active')
    document.body.classList.toggle('unscroll')
})

menu.addEventListener('click', (e) => {
    if ([...e.target.classList].includes('header__link')) {
        menu.classList.remove('header__menu_active')
        document.body.classList.remove('unscroll')
    }
})