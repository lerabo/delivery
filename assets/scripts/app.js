const viewCart = document.getElementById('view-cart');
const backdrop = document.getElementById('backdrop');
const cancelBtn = document.querySelector('.btn--passive');
const okBtn = document.querySelector('.btn--success');
const confirmBtn = document.querySelector('.btn--confirm');



window.addEventListener('click', function (event) {
	if (event.target.hasAttribute('data-cart')) {
    viewCart.classList.add('visible');
    backdrop.classList.add('visible');
  }
})


const closeModal = () => {
  viewCart.classList.remove('visible');
  backdrop.classList.remove('visible');
};

cancelBtn.addEventListener('click', closeModal);
okBtn.addEventListener('click', () => {viewCart.classList.remove('visible'); backdrop.classList.remove('visible');})





