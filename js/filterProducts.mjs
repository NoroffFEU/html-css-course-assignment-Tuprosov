export function filterProducts(displayedProducts, displayProducts) {
    // get dropdowns for sizes and prices
    const sizeDropdown = document.getElementById('size');
    const priceDropdown = document.getElementById('price');
    const products = displayedProducts;
    const productContainer = document.querySelector('.product__list-lj');


    // function to filter products based on size
    function filterBySize(size, products) {
        const filteredProducts = products.filter(product => product.sizes.includes(size.toUpperCase()));
        displayProducts(filteredProducts);
    }

    // function to filter products based on price
    function filterByPrice(priceRange, products) {
        const [minPrice, maxPrice] = priceRange.split('-').map(str => parseInt(str.trim().replace('$', '')));
        const filteredProducts = products.filter(product => {
            const productPrice = parseInt(product.price);
            return productPrice >= minPrice && productPrice <= maxPrice;
        });
        displayProducts(filteredProducts);
    }

    // event listener for size dropdown
    sizeDropdown.addEventListener('change', function (event) {
        const selectedSize = event.detail.value;
        // productContainer.classList.add('grid-fixed-columns')
        if (selectedSize !== 'None'){
            filterBySize(selectedSize, products);
        }else {
            displayProducts(products)
        }
        
    });

    // event listener for price dropdown
    priceDropdown.addEventListener('change', function (event) {
        const selectedPrice = event.detail.value;
        // productContainer.classList.add('grid-fixed-columns')
        if (selectedPrice !== 'None'){
            filterByPrice(selectedPrice, products);
        }else {
            // productContainer.classList.remove('grid-fixed-columns')
            displayProducts(products)
        }
    });
}

export function sortProducts(products, displayProducts){
    const sortDropdown = document.getElementById('sort');

    // if sorted by price, sort the products array and display it
    sortDropdown.addEventListener('change', function(event){
        let isSorted = false
        const sortType = event.detail.value;
        if (sortType === 'Price' && !isSorted){
            const sorted = products.sort((a, b) => a.price - b.price)
            isSorted = true
            displayProducts(sorted)
        }
    })
}