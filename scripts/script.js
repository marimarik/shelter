document.addEventListener('DOMContentLoaded', () => {
    let burger = document.getElementById('burger');
    let burger_menu = document.querySelector('.burger-menu');
    let main_logo = document.querySelector('.main-logo');
    let body = document.querySelector('body');

    burger.addEventListener('click', () => {
        main_logo.classList.toggle('hide');
        burger.classList.toggle('rotate');
        burger_menu.classList.toggle('show');
    });
});
