
window.addEventListener('click', function (event) {
	if (event.target.classList.contains('btn-shop')) {
        const title = event.target.value;
        console.log(title);
        
        const activeBtn = this.document.querySelector('.btn-active');
        activeBtn.className = 'button btn-block';
        event.target.className = 'button btn-block btn-active';
        const shop = this.document.getElementById('shop');

        if (title === 'Italiano'){
            newItem('Pasta Italiano', 'Fresh Farm Pizza', 'Fish Fiesta', 'Curry Trails', 'Healthy and Tasty',  'Tibeatean Bites', 
                'assets/source/italiano-1.png', 'assets/source/italiano-2.png', 
                'assets/source/italiano-3.png', 'assets/source/italiano-4.png', 
                'assets/source/italiano-5.png', 'assets/source/italiano-6.png',
                19.99, 29.99, 34.99, 24.99, 29.99, 34.99);
        }else if(title === 'Sweeties'){
            newItem('Black Forest', 'Strawberry Smoothie', 'Banana Pancakes', 'Sugary Donuts', 'Desert on plate',  'Pizza Margarita', 
                'assets/source/sweet-1.png', 'assets/source/sweet-2.png', 
                'assets/source/sweet-5.png', 'assets/source/sweet-4.png', 
                'assets/source/sweet-3.png', 'assets/source/sweet-6.png',
                19.99, 14.99, 24.99, 19.99, 24.99, 29.99);
        }else{
            newItem('Grilled Sandwiches', 'Avocado Sandwich', 'Mexico Pizza', 'Pizza Pepperoni', 'Rolls and drools',  'Beakers Birvani', 
                'assets/source/tost-1.png', 'assets/source/tost-2.png', 
                'assets/source/tost-3.png', 'assets/source/tost-6.png', 
                'assets/source/tost-5.png', 'assets/source/tost-7.png',
                19.99, 24.99, 29.99, 34.99, 24.99, 39.99);
        }
    

    function newItem(title1, title2, title3, title4, title5, title6,
         url1, url2, url3, url4, url5, url6,
         price1, price2, price3, price4, price5, price6){
        const cartItemHTML = `
        <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div class="div-1" data-id='01'>
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
              <div class="div-1" data-id='02'>
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
              <div class="div-1" data-id='01'>
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
              <div class="div-1" data-id='02'>
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
              <div class="div-1" data-id='01'>
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
              <div class="div-1" data-id='02'>
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



// const btn = document.querySelector('.example');
// const divi = document.querySelector('.shopping');
// const item = document.querySelector('.div-1');
// const items = document.querySelector('.col-lg-8 col-md-8');
// const shops = [];
// const shop1 = document.querySelector('.btn-shop-1');
// const shop2 = document.querySelector('.btn-shop-2');
// const shop3 = document.querySelector('.btn-shop-3');
// const shop4 = document.querySelector('.btn-shop-4');
// const shop5 = document.querySelector('.btn-shop-5');
// shops.push(shop1);shops.push(shop2);shops.push(shop3);shops.push(shop4);shops.push(shop5);
// console.log(shops);

// function activeBtn(btn) {
//     shops.forEach(element => element.className='button btn-block');
//     btn.className = 'button btn-block btn-active';
// }

// shop1.addEventListener('click', () => {shops.forEach(element => element.className='button btn-block');
// shop1.className = 'button btn-block btn-active';});
// shop2.addEventListener('click', () => {shops.forEach(element => element.className='button btn-block');
// shop2.className = 'button btn-block btn-active';});
// shop3.addEventListener('click', () => {shops.forEach(element => element.className='button btn-block');
// shop3.className = 'button btn-block btn-active';});
// shop4.addEventListener('click', () => {shops.forEach(element => element.className='button btn-block');
// shop4.className = 'button btn-block btn-active';});
// shop5.addEventListener('click', () => {shops.forEach(element => element.className='button btn-block');
// shop5.className = 'button btn-block btn-active';});

// switch ('button btn-block btn-active'){
//     case shop2: items.style.display = 'none';
// }


// const toggleBackdrop = () => {
//     divi.style.display ='none';
// };

// btn.addEventListener('click', toggleBackdrop);



// class Product {
//   title = 'DEFAULT';
//   imageUrl;
//   description;
//   price;

//   constructor(title, image, price) {
//     this.title = title;
//     this.imageUrl = image;
//     this.price = price;
//   }
// }



// class ElementAttribute {
//   constructor(attrName, attrValue) {
//     this.name = attrName;
//     this.value = attrValue;
//   }
// }

// class Component {
//   constructor(renderHookId, shouldRender = true) {
//     this.hookId = renderHookId;
//     if (shouldRender) {
//       this.render();
//     }
//   }

//   render() {}

//   createRootElement(tag, cssClasses, attributes) {
//     const rootElement = document.createElement(tag);
//     if (cssClasses) {
//       rootElement.className = cssClasses;
//     }
//     if (attributes && attributes.length > 0) {
//       for (const attr of attributes) {
//         rootElement.setAttribute(attr.name, attr.value);
//       }
//     }
//     document.getElementById(this.hookId).append(rootElement);
//     return rootElement;
//   }
// }

// class ShoppingCart extends Component {
//   items = [];

//   set cartItems(value) {
//     this.items = value;
//     this.totalOutput.innerHTML = `<h2>Total: \$${this.totalAmount.toFixed(
//       2
//     )}</h2>`;
//   }

//   get totalAmount() {
//     const sum = this.items.reduce(
//       (prevValue, curItem) => prevValue + curItem.price,
//       0
//     );
//     return sum;
//   }

//   constructor(renderHookId) {
//     super(renderHookId, false);
//     this.orderProducts = () => {
//       console.log('Ordering...');
//       console.log(this.items);
//     };
//     this.render();
//   }

//   addProduct(product) {
//     const updatedItems = [...this.items];
//     updatedItems.push(product);
//     this.cartItems = updatedItems;
//   }

//   render() {
//     const cartEl = this.createRootElement('section', 'cart');
//     cartEl.innerHTML = `
//       <h2>Total: \$${0}</h2>
//       <button>Order Now!</button>
//     `;
//     const orderButton = cartEl.querySelector('button');
//     // orderButton.addEventListener('click', () => this.orderProducts());
//     orderButton.addEventListener('click', this.orderProducts);
//     this.totalOutput = cartEl.querySelector('h2');
//   }
// }

// class ProductItem extends Component {
//   constructor(product, renderHookId) {
//     super(renderHookId, false);
//     this.product = product;
//     this.render();
//   }

//   addToCart() {
//     App.addProductToCart(this.product);
//   }

//   render() {
//     const prodEl = item;
//     prodEl.innerHTML = `
//         <div>
//           <img src="${this.product.imageUrl}" alt="${this.product.title}" >
//           <div class="product-item__content">
//             <h2>${this.product.title}</h2>
//             <h3>\$${this.product.price}</h3>
//             <p>${this.product.description}</p>
//             <button>Add to Cart</button>
//           </div>
//         </div>
//       `;
//     const addCartButton = prodEl.querySelector('button');
//     addCartButton.addEventListener('click', this.addToCart.bind(this));
//   }
// }

// class ProductList extends Component {
//   #products = [];

//   constructor(renderHookId) {
//     super(renderHookId, false);
//     this.render();
//     this.fetchProducts();
//   }

//   fetchProducts() {
//     this.#products = [
//       new Product(
//         'A Pillow',
//         'https://www.maxpixel.net/static/photo/2x/Soft-Pillow-Green-Decoration-Deco-Snuggle-1241878.jpg',
//         'A soft pillow!',
//         19.99
//       ),
//       new Product(
//         'A Carpet',
//         'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Ardabil_Carpet.jpg/397px-Ardabil_Carpet.jpg',
//         'A carpet which you might like - or not.',
//         89.99
//       )
//     ];
//     this.renderProducts();
//   }

//   renderProducts() {
//     for (const prod of this.#products) {
//       new ProductItem(prod, 'prod-list');
//     }
//   }

//   render() {
//     this.createRootElement('ul', 'product-list', [
//       new ElementAttribute('id', 'prod-list')
//     ]);
//     if (this.#products && this.#products.length > 0) {
//       this.renderProducts();
//     }
//   }
// }

// class Shop {
//   constructor() {
//     this.render();
//   }

//   render() {
//     this.cart = new ShoppingCart('app');
//     new ProductList('app');
//   }
// }

// class App {
//   static cart;

//   static init() {
//     const shop = new Shop();
//     this.cart = shop.cart;
//   }

//   static addProductToCart(product) {
//     this.cart.addProduct(product);
//   }
// }

// App.init();
