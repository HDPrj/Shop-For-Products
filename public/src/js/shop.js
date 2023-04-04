// Create the main section element
const shopSection = document.createElement('section');
shopSection.classList.add('shop');
shopSection.setAttribute('id', 'shop');

// Create the shop text div
const shopTextDiv = document.createElement('div');
shopTextDiv.classList.add('shop-text');
shopSection.appendChild(shopTextDiv);

// Create the shop text heading
const shopTextHeading = document.createElement('h2');
shopTextHeading.textContent = 'Latest Products';
shopTextDiv.appendChild(shopTextHeading);

// Create the shop wrapper div
const shopWrapperDiv = document.createElement('div');
shopWrapperDiv.classList.add('container', 'shop-wrapper');
shopSection.appendChild(shopWrapperDiv);

// Create the first row of products


const firstRowDiv = document.createElement('div');
firstRowDiv.classList.add('row');
firstRowDiv.classList.add('row-cols-lg-3');
firstRowDiv.classList.add('row-cols-md-2');
firstRowDiv.classList.add('row-cols-sm-1');
shopWrapperDiv.appendChild(firstRowDiv);

const product1Div = createProductDiv('headphones_product1', 'Headphones1', "https://media.istockphoto.com/id/1325906677/photo/modern-design-of-black-color-wireless-earphone-isolated.jpg?b=1&s=170667a&w=0&k=20&c=NqkzH2XxDe81TB2WzNIHDIMr_r7NCeD8y-kDRmgCg0M=", 700);
const product2Div = createProductDiv('headphones_product2', 'Headphones2', "https://cdn.pixabay.com/photo/2016/10/06/22/29/headphones-1720164__340.jpg", 702);
const product3Div = createProductDiv('headphones_product3', 'Headphones3', "https://media.istockphoto.com/id/1246138278/photo/silver-metallic-white-wireless-headphones-in-the-air-isolated-on-white-background-music.jpg?b=1&s=170667a&w=0&k=20&c=3tiFSD3oRoQXUoOVA6S2EommW5JUDciyUXBqjfSPyLQ=", 700);


firstRowDiv.appendChild(product1Div);
firstRowDiv.appendChild(product2Div);
firstRowDiv.appendChild(product3Div);


// Create the second row of products
// const secondRowDiv = document.createElement('div');
// secondRowDiv.classList.add('row');
// shopWrapperDiv.appendChild(secondRowDiv);

const product4Div = createProductDiv('headphones_product4', 'Headphones4', "https://media.istockphoto.com/id/860853774/photo/blue-headphones-isolated-on-a-white-background.jpg?b=1&s=170667a&w=0&k=20&c=gGPzyBznbjrCMb1tXjUi6js6Dh-vCp4XIgAaSERnIhs=", 700);
const product5Div = createProductDiv('headphones_product5', 'Headphones5', "https://cdn.pixabay.com/photo/2019/06/22/04/38/headphones-4290812__340.jpg", 701);
const product6Div = createProductDiv('headphones_product6', 'Headphones6', "https://media.istockphoto.com/id/1182209797/photo/close-view-of-wireless-black-gaming-headphones-with-microphone-isolated-on-white-background.jpg?b=1&s=170667a&w=0&k=20&c=YkT5jyY-NFh1Zhkhzvps_h226pLoPLie1CgpDw27SJA=", 700);

firstRowDiv.appendChild(product4Div);
firstRowDiv.appendChild(product5Div);
firstRowDiv.appendChild(product6Div);
let cartItems = [];
// Function to create a product div
function createProductDiv(imgAltText, productTitle, productImgLink, productprice) {
  const productDiv = document.createElement('div');
  productDiv.classList.add('d-flex');
  productDiv.classList.add('flex-sm-column');
  productDiv.classList.add('align-items-center');

  const productImg = document.createElement('img');
  productImg.setAttribute('src', productImgLink);
  productImg.setAttribute('alt', imgAltText);

  productImg.classList.add('product-img');
  productDiv.append(productImg);

  //price tag
  const price = document.createElement('span');
  price.setAttribute('href', productprice)
  const strong = document.createElement('strong');
  strong.innerText = productprice;
  price.append(strong);
  productDiv.appendChild(price);

  const addToCartBtn = document.createElement('a');
  addToCartBtn.setAttribute('href', '#');
  addToCartBtn.classList.add('btn', 'btn-secondary', 'btn-cart');
  addToCartBtn.innerHTML = `<box-icon name='cart' color="white" size="cssSize"></box-icon>`

  addToCartBtn.addEventListener('click', () => {
    // add item to cart
    const item = {
      imgAltText: imgAltText,
      productTitle: productTitle,
      productImgLink: productImgLink,
      productprice: productprice,
      count: 0
    };
    cartItems.push(item);

    // update cart modal
    const showCartTable = document.querySelector('.show-cart');
    const totalCart = document.querySelector('.total-cart');
    showCartTable.innerHTML = '';
    let totalPrice = 0;
    cartItems.forEach((item, index) => {
      const cartRow = document.createElement('tr');
      cartRow.dataset.index = index;
      cartRow.innerHTML = `
      <td><img src="${item.productImgLink}" alt="${item.imgAltText}" width="50"></td>
      <td>${item.productTitle}</td>
      <td>₹${item.productprice}</td>
      <td><button class="btn btn-danger btn-sm remove-btn">Remove</button></td>
      <td>
        <div class="d-flex justify-content-center align-items-center">
          <button class="btn btn-danger btn-sm remv-btn mr-2">-</button>
          <span class="mx-2 item-count">1</span>
          <button class="btn btn-success btn-sm add-btn ml-2">+</button>
        </div>
      </td>
    `;
      showCartTable.appendChild(cartRow);
      totalPrice += item.productprice;

      const remvBtn = cartRow.querySelector('.remv-btn');
      const addBtn = cartRow.querySelector('.add-btn');
      const itemCountSpan = cartRow.querySelector('.item-count');

      itemCountSpan.innerHTML = 1;

      remvBtn.addEventListener('click', function () {
        let itemCount = itemCountSpan.innerHTML;
        if (itemCount > 1) {
          itemCount--;
          itemCountSpan.innerHTML = itemCount;
// wn2d
          totalPrice = totalPrice * itemCount;
          totalCart.innerText = totalPrice;
        }
      });

      addBtn.addEventListener('click', function () {
        let itemCount = itemCountSpan.innerHTML;
        itemCount++;
        itemCountSpan.innerHTML = itemCount;
// wn2d
        totalPrice = totalPrice * itemCount;
        totalCart.innerText = totalPrice;
      });

      //remove from cart
      const removeBtns = document.querySelectorAll('.remove-btn');
      removeBtns.forEach((removeBtn) => {
        removeBtn.addEventListener('click', (event) => {
          const cartRow = event.target.closest('tr');
          const index = cartRow.dataset.index;
          cartItems.splice(index, 1);
          showCartTable.removeChild(cartRow);
          totalPrice -= item.productprice;
          totalCart.innerText = totalPrice;
        });
      });

    });

    totalCart.textContent = totalPrice;
  });



  productDiv.appendChild(addToCartBtn);

  return productDiv;
}


// Add the shop section to the document
document.body.appendChild(shopSection);