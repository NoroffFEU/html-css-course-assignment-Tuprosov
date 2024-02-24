import { updateCartIconDisplay } from "./cartIconDisplay.mjs";
import './burger.js';
import { menProducts, womenProducts} from "./fetch.js";
import { transferProductID } from "./getid.mjs";
import { filterProducts, sortProducts } from "./filterProducts.mjs";




// extract page name
const parameterString = window.location.search;
const searchParameters = new URLSearchParams(parameterString);
const pageName = searchParameters.get('name');


let filterBtn = document.querySelector('.filter__btn');
let filterBox = document.querySelector('.filter');

// open/close filters on smaller screen sizes
function toggleFilterDisplay(){
    filterBtn.addEventListener('click', function(){
        filterBox.classList.toggle('is-active');
    })
    
    document.addEventListener('click', function (event) {
    // Check if the click target is not the filter button or the filter box.
    if (event.target !== filterBtn && !filterBox.contains(event.target)) {
        // Click occurred outside of the filter box, so hide it.
        filterBox.classList.remove('is-active');
    }
    });
}

function displayProducts(products){
    const productContainer = document.querySelector('.product__list-lj');
    productContainer.innerHTML = '';

    if(products.length > 0) {
        for (let i = 0; i<products.length; i++){
            const li = document.createElement('li');
            li.classList.add('product__item-lj');
            li.innerHTML = `
            <a class="image-link">
                <button class="btn-reset add-to-wishlist" aria-label="add to wishlist">
                    <svg width="23" height="21" viewBox="0 0 23 21" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M20.2913 2.61183C19.7805 2.10083 19.1741 1.69547 18.5066 1.41891C17.8392 1.14235 17.1238 1 16.4013 1C15.6788 1 14.9634 1.14235 14.2959 1.41891C13.6285 1.69547 13.022 2.10083 12.5113 2.61183L11.4513 3.67183L10.3913 2.61183C9.3596 1.58013 7.96032 1.00053 6.50129 1.00053C5.04226 1.00053 3.64298 1.58013 2.61129 2.61183C1.5796 3.64352 1 5.04279 1 6.50183C1 7.96086 1.5796 9.36013 2.61129 10.3918L3.67129 11.4518L11.4513 19.2318L19.2313 11.4518L20.2913 10.3918C20.8023 9.88107 21.2076 9.27464 21.4842 8.60718C21.7608 7.93972 21.9031 7.22431 21.9031 6.50183C21.9031 5.77934 21.7608 5.06393 21.4842 4.39647C21.2076 3.72901 20.8023 3.12258 20.2913 2.61183Z"
                            fill="white" stroke="#0A3641" stroke-opacity="0.5" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </button>
                <img src=${products[i].image} alt="${products[i].description}" id=${products[i].id}>
                <div class="desc-wrapper flex">
                    <div class="desc-left">
                        <p class="product__name">${products[i].title.replace(/Rainy Days/, '')}</p> <br>
                        <p class="product__price">${products[i].price}</p>
                    </div>
                    <div class="desc-right">
                        <p class="product__size">${products[i].sizes.join(' ')}</p> <br>
                        <p class="product__color">1 color</p>
                    </div>
                </div>
            </a>`
            productContainer.appendChild(li);
        }
    }
    transferProductID();
}

function selectRelatedProduct(){
    if(pageName === 'Women'){
        document.querySelector('h1').textContent = 'FOR WOMEN';
        displayProducts(womenProducts);
        filterProducts(womenProducts, displayProducts);
        sortProducts(womenProducts, displayProducts);        
    }else{
        document.querySelector('h1').textContent = 'FOR MEN';
        displayProducts(menProducts);
        filterProducts(menProducts, displayProducts);
        sortProducts(menProducts, displayProducts);
    }
}


selectRelatedProduct()
toggleFilterDisplay()
updateCartIconDisplay();
transferProductID();
