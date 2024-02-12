import { allProducts } from "./fetch.js";
import { updateCartIconDisplay } from "./cartIconDisplay.mjs";
import './burger.js';
import { initializeSlider } from "./slider.js";
import {transferProductID} from "./getid.js"


const slideImg = document.querySelectorAll('.slide-image');
const slideText = document.querySelectorAll('.slide-text');

// change header logo to dark while hovering
function changeTheme() {
    const logo = document.getElementById('logo');
    logo.src = '../assets/images/logo-dark.png';
    logo.alt = 'Rainydays logo dark';
}

// reset to default logo
function resetTheme() {
    const logo = document.getElementById('logo');
    logo.src = '../assets/images/logo-light.png';
    logo.alt = 'Rainydays logo light';
}

function swtichHeaderLogo () {
    const header = document.querySelector('.header');
    header.addEventListener('mouseover', changeTheme)
    header.addEventListener('mouseout' ,resetTheme)
}

// change products on display on click
function clickEvents(){
    const featuredBtn = document.querySelector('.btn-featured');
    const newBtn = document.querySelector('.btn-new');
    featuredBtn.addEventListener('click', displayFeaturedProducts);
    newBtn.addEventListener('click', displayNewProducts);
}

function displayFeaturedProducts() {
    for (let i = 0; i<slideImg.length; i++) {
       slideImg[i].innerHTML = `<a class="image-link"><img src="${allProducts[i].image}" id="${allProducts[i].id}" alt="${allProducts[i].description}"></a>`
       slideText[i].innerHTML = `${allProducts[i].title}<br>$${allProducts[i].price}` 
    }
}

function displayNewProducts() {
    for (let i = 0; i<slideImg.length; i++) {
        slideImg[i].innerHTML = `<a class="image-link"><img src="${allProducts[i+1].image}" id="${allProducts[i].id}" alt="${allProducts[i+1].description}"></a>`
        slideText[i].innerHTML = `${allProducts[i+1].title}<br>$${allProducts[i+1].price}` 
     }
}


initializeSlider();
displayFeaturedProducts()
swtichHeaderLogo();
updateCartIconDisplay();
clickEvents()
transferProductID();
