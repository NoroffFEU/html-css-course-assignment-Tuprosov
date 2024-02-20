import { allProducts } from "./fetch.js";


// extract product id
const parameterString = window.location.search;
const searchParameters = new URLSearchParams(parameterString);
const productId = searchParameters.get('id');

function getClickedProduct(targetId){
    return allProducts.find(obj => obj.id === targetId)
}

function displayClickedProduct(){
    const image = document.querySelector('.target-image img');
    const imageParts = document.querySelectorAll('.image-parts img');
    const productTitle = document.querySelector('.top__item-3 h2');
    const productDescription = document.querySelector('.item-3-desc');
    const productColor = document.querySelector('.color-name');
    const colorDiv = document.querySelector('.color');

    // get targeted product
    const targetProduct = getClickedProduct(productId);

    // change the information
    image.src = targetProduct.image;
    image.alt = targetProduct.description
    image.id = targetProduct.id;
    for(const img of imageParts){
        img.src = targetProduct.image
    }

    productTitle.textContent = targetProduct.title.replace(/Rainy Days/, '');
    productDescription.innerHTML= `${targetProduct.description}<br><span aria-label="Price ${targetProduct.price}$">$${targetProduct.price}</span>`
    productColor.textContent = `Color: ${targetProduct.baseColor}`
    colorDiv.style.backgroundColor = targetProduct.baseColor
}

displayClickedProduct();
