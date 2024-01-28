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

setIconActive();
removePlaceholderIcon();
addSpacing();
updateCartIconDisplay();

