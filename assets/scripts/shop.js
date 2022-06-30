
window.addEventListener('click', function (event) {
	if (event.target.classList.contains('btn-shop')) {
        const title = event.target.value;
        console.log(title);
        
        const activeBtn = this.document.querySelector('.btn-active');
        activeBtn.className = 'button btn-block';
        event.target.className = 'button btn-block btn-active';
        const shop = this.document.getElementById('shop');

        if (title === 'Italiano'){
            newItem(
                'Pasta Italiano', 'Fresh Farm Pizza', 'Fish Fiesta', 'Curry Trails', 'Healthy and Tasty',  'Tibeatean Bites', 
                07,08,09,10,11,12,
                'assets/source/italiano-1.png', 'assets/source/italiano-2.png', 
                'assets/source/italiano-3.png', 'assets/source/italiano-4.png', 
                'assets/source/italiano-5.png', 'assets/source/italiano-6.png',
                19.99, 29.99, 34.99, 24.99, 29.99, 34.99);
        }else if(title === 'Sweeties'){
            newItem(
                'Black Forest', 'Strawberry Smoothie', 'Banana Pancakes', 'Sugary Donuts', 'Desert on plate',  'Pizza Margarita', 
                13,14,15,16,17,18,
                'assets/source/sweet-1.png', 'assets/source/sweet-2.png', 
                'assets/source/sweet-5.png', 'assets/source/sweet-4.png', 
                'assets/source/sweet-3.png', 'assets/source/sweet-6.png',
                19.99, 14.99, 24.99, 19.99, 24.99, 29.99);
        }else{
            newItem(
                'Grilled Sandwiches', 'Avocado Sandwich', 'Mexico Pizza', 'Pizza Pepperoni', 'Rolls and drools',  'Beakers Birvani',
                19,20,21,22,23,24, 
                'assets/source/tost-1.png', 'assets/source/tost-2.png', 
                'assets/source/tost-3.png', 'assets/source/tost-6.png', 
                'assets/source/tost-5.png', 'assets/source/tost-7.png',
                19.99, 24.99, 29.99, 34.99, 24.99, 39.99);
        }
    

    function newItem(title1, title2, title3, title4, title5, title6, id1, id2, id3, id4, id5, id6,
         url1, url2, url3, url4, url5, url6,
         price1, price2, price3, price4, price5, price6){
        const cartItemHTML = `
        <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div class="div-1" data-id='${id1}'>
                <img src="${url1}" class="img-fluid product-img" alt="${title1}">
                <div class='product-item__content'>
                  <h2 class="item-title">${title1}</h2>
                  <h3 class="price__currency">${price1}$</h3>
                  <div class="details-wrapper">
                    <div class="items counter-wrapper">
                      <div class="items__control" data-action="minus">-</div>
                      <div class="items__current" data-counter>1</div>
                      <div class="items__control" data-action="plus">+</div>
                    </div>
                  </div>
                  <button data-cart type ="button" class="button btn-block">Add to cart</button>
                </div>
              </div>
            </div>
            
            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div class="div-1" data-id='${id2}'>
                <img src="${url2}" class="img-fluid product-img" alt="${title2}">
                <div class='product-item__content'>
                  <h2 class="item-title">${title2}</h2>
                  <h3 class="price__currency">${price2}$</h3>
                  <div class="details-wrapper">
                    <div class="items counter-wrapper">
                      <div class="items__control" data-action="minus">-</div>
                      <div class="items__current" data-counter>1</div>
                      <div class="items__control" data-action="plus">+</div>
                    </div>
                  </div>
                  <button data-cart type ="button" class="button btn-block">Add to cart</button>
                </div>
              </div>
            </div>
          </div>
          
          <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div class="div-1" data-id='${id3}'>
                <img src="${url3}" class="img-fluid product-img" alt="${title3}">
                <div class='product-item__content'>
                  <h2 class="item-title">${title3}</h2>
                  <h3 class="price__currency">${price3}$</h3>
                  <div class="details-wrapper">
                    <div class="items counter-wrapper">
                      <div class="items__control" data-action="minus">-</div>
                      <div class="items__current" data-counter>1</div>
                      <div class="items__control" data-action="plus">+</div>
                    </div>
                  </div>
                  <button data-cart type ="button" class="button btn-block">Add to cart</button>
                </div>
              </div>
            </div>
            
            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div class="div-1" data-id='${id4}'>
                <img src="${url4}" class="img-fluid product-img" alt="${title4}">
                <div class='product-item__content'>
                  <h2 class="item-title">${title4}</h2>
                  <h3 class="price__currency">${price4}$</h3>
                  <div class="details-wrapper">
                    <div class="items counter-wrapper">
                      <div class="items__control" data-action="minus">-</div>
                      <div class="items__current" data-counter>1</div>
                      <div class="items__control" data-action="plus">+</div>
                    </div>
                  </div>
                  <button data-cart type ="button" class="button btn-block">Add to cart</button>
                </div>
              </div>
            </div>
          </div>
          
          <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div class="div-1" data-id='${id5}'>
                <img src="${url5}" class="img-fluid product-img" alt="${title5}">
                <div class='product-item__content'>
                  <h2 class="item-title">${title5}</h2>
                  <h3 class="price__currency">${price5}$</h3>
                  <div class="details-wrapper">
                    <div class="items counter-wrapper">
                      <div class="items__control" data-action="minus">-</div>
                      <div class="items__current" data-counter>1</div>
                      <div class="items__control" data-action="plus">+</div>
                    </div>
                  </div>
                  <button data-cart type ="button" class="button btn-block">Add to cart</button>
                </div>
              </div>
            </div>
            
            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div class="div-1" data-id='${id6}'>
                <img src="${url6}" class="img-fluid product-img" alt="${title6}">
                <div class='product-item__content'>
                  <h2 class="item-title">${title6}</h2>
                  <h3 class="price__currency">${price6}$</h3>
                  <div class="details-wrapper">
                    <div class="items counter-wrapper">
                      <div class="items__control" data-action="minus">-</div>
                      <div class="items__current" data-counter>1</div>
                      <div class="items__control" data-action="plus">+</div>
                    </div>
                  </div>
                  <button data-cart type ="button" class="button btn-block">Add to cart</button>
                </div>
              </div>
            </div>
          </div>`;
          shop.innerHTML=cartItemHTML;
    }
    
    
}
});



