const submitBtn = document.querySelector('.btn-primary');
const addModal = document.querySelector('.form-group');
const userInputs = addModal.querySelectorAll('input');
const cardWrapper = document.querySelector('.cart-wrapper');
const cartEmptyBadge = document.querySelector('[data-cart-empty]');
const orderForm = document.querySelector('#order-form');
const totalPriceEl = document.querySelector('.total-price');
const deliveryCost = document.querySelector('.delivery-cost');
const cartDelivery = document.querySelector('[data-cart-delivery]');

const movies = [];

const submitFunc = () => {
    const telephoneValue = userInputs[0].value;
    const emailValue = userInputs[1].value;
    const adressValue = userInputs[2].value;

    if (
        telephoneValue.trim() === '' ||
        emailValue.trim() === '' ||
        adressValue.trim() === '' ||
        telephoneValue.length != 10
      ) {
        alert('Please enter valid values.');
        return;
      }
      const newMovie = {
        telephone: telephoneValue,
        email: emailValue,
        adress:adressValue
      };
    
      movies.push(newMovie);
      console.log(movies);
      alert('your order is success');
      cartEmptyBadge.classList.remove('none');
      orderForm.classList.add('none');
      cardWrapper.classList.add('none');
      cartDelivery.classList.add('none');
      totalPriceEl.innerText = 0;

}

$('form').submit(function () {
  return false;
});

submitBtn.addEventListener('click', submitFunc);