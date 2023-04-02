const searchInput = document.querySelector('.search-element');
const searchResults = document.getElementById('searchResults');

const searchProducts = async (searchTerm) => {
    try {
        const response = await axios.get('./js/product.json');
        console.log(response);
        const data = response.data;
        const products = data.product;

        const filteredProducts = products.filter(product => {
            return product.name.toLowerCase().includes(searchTerm.toLowerCase());
        });
        console.log(filteredProducts);
        const productHTML = filteredProducts.slice(0,4).map(product => {
            return `
      <div class="product">
      <div class="d-flex">
        <img src="${product.image}" alt="${product.name}">
        <p>${product.name}</p>
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


