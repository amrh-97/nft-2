'use strict';

const headerNav = document.querySelector('.header__nav')
const navShowIcon = document.querySelector('.header__nav-open-icon i');
const navCloseIcon = document.querySelector('.header__nav-close-icon i');
const backDrop = document.querySelector('.backdrop');

// Show Header Nav

const showNav = () => {
    headerNav.classList.add('header__nav--active');
    backDrop.classList.remove('backdrop--hidden');
}

const navHide = () => {
    headerNav.classList.remove('header__nav--active');
    backDrop.classList.add('backdrop--hidden');

}

navShowIcon.addEventListener('click', showNav)
navCloseIcon.addEventListener('click', navHide)
backDrop.addEventListener('click', navHide)