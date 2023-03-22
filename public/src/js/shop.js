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
shopWrapperDiv.appendChild(firstRowDiv);

const product1Div = createProductDiv('headphones_product1', 'Headphones1 price', link);
const product2Div = createProductDiv('headphones_product2', 'Headphones2', link);
const product3Div = createProductDiv('headphones_product3', 'Headphones3', link);


firstRowDiv.appendChild(product1Div);
firstRowDiv.appendChild(product2Div);
firstRowDiv.appendChild(product3Div);

// price tag addition


// const newNode = document.createElement("span");
// const parentDiv = document.getElementById("price").parentNode;
// let sp2 = document.getElementById("price");
// parentDiv.insertBefore(newNode, sp2);



//  let sp1 = document.createElement("span");
//  let sp2 = document.getElementById("price");
//  let ProductDiv = sp2.product1Div;
//  ProductDiv.insertBefore(sp1, sp2);


// Create the second row of products
const secondRowDiv = document.createElement('div');
secondRowDiv.classList.add('row');
shopWrapperDiv.appendChild(secondRowDiv);

const product4Div = createProductDiv('headphones_product4', 'Headphones4',link);
const product5Div = createProductDiv('headphones_product5', 'Headphones5',link);
const product6Div = createProductDiv('headphones_product6', 'Headphones6',link);

secondRowDiv.appendChild(product4Div);
secondRowDiv.appendChild(product5Div);
secondRowDiv.appendChild(product6Div);

// Function to create a product div
function createProductDiv(imgAltText, productTitle, productImgLink) {
  const productDiv = document.createElement('div');
  productDiv.classList.add('col-sm-4');

  const productImg = document.createElement('img');
  productImg.setAttribute('src', productImgLink);
  productImg.setAttribute('alt', imgAltText);
  productImg.classList.add('product-img');
  productDiv.appendChild(productImg);

  const productTitleP = document.createElement('span');
  productTitleP.textContent = '1500';
  productTitleP.classList.add("btn" ,"btn-outline-dark",'btn-cart');
  productDiv.appendChild(productTitleP);

  const addToCartBtn = document.createElement('a');
  addToCartBtn.setAttribute('href', '#');
  addToCartBtn.classList.add('btn', 'btn-secondary', 'btn-cart');
  addToCartBtn.textContent = 'Add to cart' ;
  productDiv.appendChild(addToCartBtn);



  return productDiv;
}

// Add the shop section to the document
document.body.appendChild(shopSection);