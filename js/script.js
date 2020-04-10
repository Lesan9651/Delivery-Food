const cartBtn = document.querySelector('#cart-btn');

const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal__close');

cartBtn.addEventListener('click', toggleModal);

modalClose.addEventListener('click', toggleModal);

function toggleModal() {
    modal.classList.toggle('is-open');
}

new WOW().init();