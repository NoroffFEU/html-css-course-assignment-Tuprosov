import { updateCartIconDisplay } from "./cartIconDisplay.mjs";
import './burger.js';
import { menProducts, womenProducts} from "./fetch.js";
import { transferProductID } from "./getid.js";





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
    const imgArr = document.querySelectorAll('.product__item-lj img');
    const priceArr = document.querySelectorAll('.product__item-lj .product__price');
    const nameArr = document.querySelectorAll('.product__item-lj .product__name');
    const sizeArr = document.querySelectorAll('.product__item-lj .product__size');
    
    for (let i = 0; i<products.length; i++){
        imgArr[i].src = products[i].image
        imgArr[i].id = products[i].id
        priceArr[i].textContent = `${products[i].price}$`;
        nameArr[i].textContent = `${products[i].title.replace(/Rainy Days/, '')}`
        sizeArr[i].textContent = `${products[i].sizes.join(' ')}`
    }
}

function selectRelatedProduct(){
    if(document.querySelector('h1').textContent.toLowerCase() === 'for women'){
        console.log('active')
        displayProducts(womenProducts)        
    }else{
        console.log('active')
        displayProducts(menProducts)
    }
}


selectRelatedProduct()
toggleFilterDisplay()
updateCartIconDisplay();
transferProductID();



