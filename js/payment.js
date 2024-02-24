import { updateCartIconDisplay } from "./cartIconDisplay.mjs";
import './burger.js';


// switching active state between payment options
function setIconActive(){ 
    const paymentIcons = document.querySelectorAll('.payment__options svg');
    paymentIcons.forEach(function (element) {

    element.addEventListener('click', function () {
        paymentIcons.forEach(item => {
            item.classList.remove('active-payment-svg')
        });
        element.classList.add('active-payment-svg');
    });
});
}

// placeholder svg change in inputs
function removePlaceholderIcon(){
    const inputNumber = document.querySelector('.card-details input:first-child');
    const inputCVV = document.querySelector('.input-decor');
    const inputs = [inputNumber, inputCVV];


    inputs.forEach(function (item) {

        item.addEventListener('input', function () {
            const originalBackground = getComputedStyle(item).background;

            if (this.value.length > 0) {
                this.style.background = 'none';
            } else {
                this.style.background = originalBackground;
            }
        });
    });
}

// to allow to input with spacing
function addSpacing() {
    const cardNumberInput = document.getElementById('cardnumber');

    cardNumberInput.addEventListener('input', function () {
        let inputValue = this.value.replace(/ /g, ''); // Remove any existing spaces
        let formattedValue = '';

        for (let i = 0; i < inputValue.length; i++) {
            if (i > 0 && i % 4 === 0) {
                formattedValue += ' '; // Add a space every 4 characters
            } 
            formattedValue += inputValue[i];
        }
        this.value = formattedValue;

        if (this.value.length  === 19) {
            displayWarning(this.value)
        }
    });
}

// alert warning if cardnumber input has a-z letters
function displayWarning (value){
    if (value.match(/[a-zA-Z]/g)) {
        alert("Cardnumber cannot contain letters");
    }
    return
}
// retrieve total price from local storage
function getTotalToPay() {
    const total = JSON.parse(localStorage.getItem("totalToPay")) || 0;
    const priceEl = document.getElementById('totalToPay');
    priceEl.textContent = `${total}USD`;
}

// display basket summary
function displaySummary(){
    const summaryContainer = document.getElementById('basketSummary');
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const thirdChild = document.querySelector('.payment__desc');
    const summaryTitle = document.createElement('h2');
    summaryTitle.textContent = 'Summary of products'
    summaryTitle.className='summary-title';
    
    if (cart.length != 0) {
        thirdChild.insertAdjacentElement('afterend', summaryTitle)
    }
    
    for (const item of cart){
        const li = document.createElement('li');
        const img = document.createElement('img');
        const detailsDiv = document.createElement('div');
        const title = document.createElement('h3');
        const price = document.createElement('p');
        const quantity = document.createElement('p');
        const size = document.createElement('p');
        
        // populate summary with products
        
        detailsDiv.className = 'summary-details'
        li.className = 'summary-item flex'
        img.src= item.image;
        img.style.aspectRatio = '1 / 1'
        title.textContent = item.name.replace(/Rainy Days/, '');
        price.textContent = `${item.price}USD`;
        quantity.textContent = `Quantity: ${item.quantity}`;
        size.textContent = `Size: ${item.size}`;

        li.appendChild(img);
        detailsDiv.append(title, price, quantity, size);
        li.appendChild(detailsDiv);
        summaryContainer.appendChild(li);
    }
}
setIconActive();
removePlaceholderIcon();
addSpacing();
updateCartIconDisplay();
getTotalToPay();
displaySummary();

