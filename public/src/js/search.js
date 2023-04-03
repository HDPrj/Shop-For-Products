const searchInput = document.querySelector('.search-element');
const searchResults = document.getElementById('searchResults');

const searchProducts = async (searchTerm) => {
  try {
    const response = await axios.get('./js/product.json');
    const data = response.data;
    const products = data.product;

    const filteredProducts = products.filter(product => {
      return product.name.toLowerCase().includes(searchTerm.toLowerCase());
    });

    const productHTML = filteredProducts.slice(0, 4).map((product, index) => {
      let productClass = "";
      if (index === 0) {
        productClass = "product-btn-a";
      } else if (index === 1) {
        productClass = "product-btn-b";
      } else if (index === 2) {
        productClass = "product-btn-c";
      } else if (index === 3) {
        productClass = "product-btn-d";
      }
      console.log(product.name);
      return `
        <div class="product">
          <div class="d-flex">
            <img src="${product.image}" alt="${product.name}">
            <button type="button" class="btn btn-primary product-btn ${productClass}" data-toggle="modal" data-target="#${product.id}" data-backdrop="false">${product.name}</button>
          </div>
        </div>

        <div class="modal fade productModal" id="${product.id}">
        <div class="modal-dialog ">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="productModalDesc">Description</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="container">
                    <h1 class="text-center productModalName id="${product.id}-label"">${product.name}</h1>
                    <div class="row">
                      <div class="col-md-6">
                      <img src="${product.image}" class="img-fluid mb-3" alt="${product.name}">
                      </div>
                      <div class="col-md-6">
                        <h2>wireless headphones</h2>
                        <p>Headphone1 is a wireless device..</p>
                        <h3>Standout Features</h3>
                        <ul>
                          <li>fast charging</li>
                          <li>16 hours playtime</li>
                          <li>Gaming mode</li>
                        </ul>
                        <p>Price: ${product.price}</p>
                        <a href="" class="btn btn-primary">Buy Now</a>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </div>

        
        
      `;
    }).join('');

    searchResults.innerHTML = productHTML;
  } catch (error) {
    console.error(error);
  }
};


searchInput.addEventListener('input', (event) => {
  console.log('Search term:', event.target.value);
  searchProducts(event.target.value);
});

const searchButton = document.querySelector('.search-btn-element');
searchButton.addEventListener('click', () => {
  searchProducts(searchInput.value);
});

let searchRsltToggle = document.querySelector('.search-results-wrapper');
searchRsltToggle.classList.add('no-search-results-wrapper');

const showSearchRslts = () => {
  if (searchRsltToggle.classList.contains('no-search-results-wrapper')) {
    searchRsltToggle.classList.remove('no-search-results-wrapper');
  } else {
    searchRsltToggle.classList.add('no-search-results-wrapper');
  }
};

