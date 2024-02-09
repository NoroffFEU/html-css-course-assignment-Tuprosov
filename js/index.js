import { allProducts } from "./fetch.js";
import { updateCartIconDisplay } from "./cartIconDisplay.mjs";
import './burger.js';
import './slider.js';

console.log(allProducts)
const featuredBtn = document.querySelector('.btn-featured');
const newBtn = document.querySelector('.btn-new');
const header = document.querySelector('.header');
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

function swtichHeaderLogo (header) {
    header.addEventListener('mouseover', changeTheme)
    header.addEventListener('mouseout' ,resetTheme)
}

// add click events
featuredBtn.addEventListener('click', displayFeatureProducts);
newBtn.addEventListener('click', displayNewProducts);

// change products on display accordingly
function displayFeatureProducts() {
    for (let i = 0; i<slideImg.length; i++) {
       slideImg[i].innerHTML = `<a href="jacket.html"><img src="${allProducts[i].image}" alt="${allProducts[i].description}"></a>`
       slideText[i].innerHTML = `${allProducts[i].title}<br>$${allProducts[i].price}` 
    }
}

function displayNewProducts() {
    for (let i = 0; i<slideImg.length; i++) {
        slideImg[i].innerHTML = `<a href="jacket.html"><img src="${allProducts[i+1].image}" alt="${allProducts[i+1].description}"></a>`
        slideText[i].innerHTML = `${allProducts[i+1].title}<br>$${allProducts[i+1].price}` 
     }
}

swtichHeaderLogo(header);
updateCartIconDisplay();
displayFeatureProducts()
