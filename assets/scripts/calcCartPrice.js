function calcCartPriceAndDelivery() {
	const cartWrapper = document.querySelector('.cart-wrapper');
    const cartItems = document.querySelector('.cart-item');
    console.log(cartItems);
	const priceElements = cartWrapper.querySelectorAll('.price__currency');
	const totalPriceEl = document.querySelector('.total-price');
	const deliveryCost = document.querySelector('.delivery-cost');
	const cartDelivery = document.querySelector('[data-cart-delivery]');

	let priceTotal = 0;

	priceElements.forEach(function (item) {
		const amountEl = item.closest('.cart-item').querySelector('[data-counter]');
		priceTotal += parseFloat(item.innerText) * parseFloat(amountEl.innerText);
	});

totalPriceEl.innerText = priceTotal.toFixed(2);

if (priceTotal > 0) {
	cartDelivery.classList.remove('none');
} else {
	cartDelivery.classList.add('none');
}

if (priceTotal >= 30) {
	deliveryCost.classList.add('free');
	deliveryCost.innerText = 'free';
} else {
	deliveryCost.classList.remove('free');
	deliveryCost.innerText = '5$';
}



}

	