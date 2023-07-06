const btnOpen = document.querySelector('.fa-bars');
const btnClose = document.querySelector('.fa-times');
const hamburgerMenu = document.querySelector('.hamburger-menu');

btnOpen.addEventListener('click', function () {
    hamburgerMenu.classList.add('active');
})
btnClose.addEventListener('click', function () {
    hamburgerMenu.classList.remove('active');
})