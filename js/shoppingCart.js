import './burger.js';
import { updateCartIconDisplay } from './cartIconDisplay.mjs';


let cart = JSON.parse(localStorage.getItem("cart")) || [];
displayCart();
updateCartIconDisplay();

function displayCart(){
    const productsContainer = document.querySelector('.product-select');
    const productsList = document.querySelector('.cart__list');
    const formPrice = document.querySelector('.product-price');
    const formTax = document.querySelector('.product-tax');
    const totalPay = document.querySelector('.total-pay p');

    if (productsList) {
        productsList.innerHTML = '';
    }
    

    if(cart.length === 0 ){
        productsContainer.innerHTML += '<p style="text-align: center;font-size: 2rem"> Your cart is empty for now </p>';
        formPrice.textContent = '0.00 USD';
        formTax.textContent = '0.00 USD';
        totalPay.textContent = '0.00 USD';
        
    } else {
        cart.forEach(element => {
            const item = document.createElement('li');
            item.classList.add('cart__item', 'flex');
            item.setAttribute('id', `${element.ID}`);
            item.innerHTML = `
            <button class="btn-reset removeProduct" aria-label="remove the product from cart">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                    d="M10.2857 5.42857H14.5714C14.5714 4.86025 14.3457 4.31521 13.9438 3.91334C13.5419 3.51148 12.9969 3.28571 12.4286 3.28571C11.8603 3.28571 11.3152 3.51148 10.9133 3.91334C10.5115 4.31521 10.2857 4.86025 10.2857 5.42857ZM9 5.42857C9 4.51926 9.36122 3.64719 10.0042 3.00421C10.6472 2.36122 11.5193 2 12.4286 2C13.3379 2 14.21 2.36122 14.8529 3.00421C15.4959 3.64719 15.8571 4.51926 15.8571 5.42857H21.2143C21.3848 5.42857 21.5483 5.4963 21.6689 5.61686C21.7894 5.73742 21.8571 5.90093 21.8571 6.07143C21.8571 6.24192 21.7894 6.40544 21.6689 6.526C21.5483 6.64656 21.3848 6.71429 21.2143 6.71429H20.0914L19.0483 19.2311C18.9724 20.1417 18.5571 20.9905 17.8847 21.6092C17.2123 22.2279 16.332 22.5714 15.4183 22.5714H9.43886C8.52514 22.5714 7.6448 22.2279 6.97243 21.6092C6.30006 20.9905 5.88475 20.1417 5.80886 19.2311L4.76571 6.71429H3.64286C3.47236 6.71429 3.30885 6.64656 3.18829 6.526C3.06773 6.40544 3 6.24192 3 6.07143C3 5.90093 3.06773 5.73742 3.18829 5.61686C3.30885 5.4963 3.47236 5.42857 3.64286 5.42857H9ZM7.09029 19.124C7.13931 19.7132 7.40796 20.2625 7.84298 20.6629C8.278 21.0633 8.84761 21.2856 9.43886 21.2857H15.4183C16.0095 21.2856 16.5791 21.0633 17.0142 20.6629C17.4492 20.2625 17.7178 19.7132 17.7669 19.124L18.8023 6.71429H6.05571L7.09029 19.124ZM10.5 9.71429C10.6705 9.71429 10.834 9.78202 10.9546 9.90257C11.0751 10.0231 11.1429 10.1866 11.1429 10.3571V17.6429C11.1429 17.8134 11.0751 17.9769 10.9546 18.0974C10.834 18.218 10.6705 18.2857 10.5 18.2857C10.3295 18.2857 10.166 18.218 10.0454 18.0974C9.92487 17.9769 9.85714 17.8134 9.85714 17.6429V10.3571C9.85714 10.1866 9.92487 10.0231 10.0454 9.90257C10.166 9.78202 10.3295 9.71429 10.5 9.71429ZM15 10.3571C15 10.1866 14.9323 10.0231 14.8117 9.90257C14.6912 9.78202 14.5276 9.71429 14.3571 9.71429C14.1866 9.71429 14.0231 9.78202 13.9026 9.90257C13.782 10.0231 13.7143 10.1866 13.7143 10.3571V17.6429C13.7143 17.8134 13.782 17.9769 13.9026 18.0974C14.0231 18.218 14.1866 18.2857 14.3571 18.2857C14.5276 18.2857 14.6912 18.218 14.8117 18.0974C14.9323 17.9769 15 17.8134 15 17.6429V10.3571Z"
                    fill="#212429" />
                </svg>
            </button>
            <div class="cart-img-box">
                <img src="${element.image}" alt="rainydays wear">
            </div>
            <div class="item__info">
                <h3 class="item__title-cp" tabindex="0">${element.name}</h3>
                <p class="item__details flex">
                    <span>Color: Purple</span>
                    <span>Size: ${element.size}</span>
                    <span>Quantity: ${element.quantity}</span>
                    <span>Price: ${element.price} USD</span>
                </p>
            </div>
            <div class="quantity-control flex">
                <button class="btn-reset decrement">-</button>
                <span class="quantity">${element.quantity}</span>
                <button class="btn-reset increment">+</button>
            </div>
            `
            productsList.appendChild(item);

            const totalCost = cart.reduce((total, item) => total + item.price * item.quantity, 0);
            formPrice.textContent = `${totalCost.toFixed(2)} USD`;
            const tax = totalCost * 0.1;
            const totalToPay = totalCost + tax;
            formTax.textContent = `${tax.toFixed(2)} USD`;
            totalPay.textContent = `${totalToPay.toFixed(2)} USD`;
        });
    }
}

// Get all the cart items
const cartItems = document.querySelectorAll('.cart__item');

// Loop through each cart item and add event listeners to the buttons
cartItems.forEach((item, index) => {
    const decrementButton = item.querySelector('.decrement');
    const incrementButton = item.querySelector('.increment');
    const quantityDisplay = item.querySelector('.quantity');
    const quantitySpan = item.querySelector('.item__details span:nth-child(3)');
    const deleteButton = item.querySelector('.removeProduct');

    
    // Add event listener for decrement button
    decrementButton.addEventListener('click', () => {
        let currentQuantity = parseInt(quantityDisplay.textContent, 10);
        if (currentQuantity > 1) {
            currentQuantity--;
            quantityDisplay.textContent = currentQuantity;
            quantitySpan.textContent = `Quantity: ${currentQuantity}`
            updateCartItemQuantity(item.getAttribute('id'), currentQuantity);
            updateCartIconDisplay();
        }
    });

    // Add event listener for increment button
    incrementButton.addEventListener('click', () => {
        let currentQuantity = parseInt(quantityDisplay.textContent, 10);
        currentQuantity++;
        quantityDisplay.textContent = currentQuantity;
        quantitySpan.textContent = `Quantity: ${currentQuantity}`
        updateCartItemQuantity(item.getAttribute('id'), currentQuantity);
        updateCartIconDisplay();
    });

    // Add event listener for delete button
    deleteButton.addEventListener('click', () => {
        removeFromCart(item.getAttribute('id'));
        updateCartIconDisplay();
        item.remove();
    });

});

function updateCartItemQuantity(ID, newQuantity) {
    // Retrieve the cart from local storage
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    // Look for the ID in items to change the quantity
    cart.forEach(product => {
        if (product.ID === ID) {
            product.quantity = newQuantity
        }
    })

    // Save the updated cart to local storage
    localStorage.setItem("cart", JSON.stringify(cart));

    // Update the displayed total and any other relevant information
    updateCartDisplay();
}

function updateCartDisplay() {
    let totalPriceDisplay = document.querySelector('.total-pay p');

    // Retrieve the cart from local storage
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Calculate total price
    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 10);

    // Update the total price
    totalPriceDisplay.textContent = `${totalPrice.toFixed(2)} USD`;

        // Check if the cart is empty
        if (cart.length === 0) {
            let productsContainer = document.querySelector('.product-select');
            let formPrice = document.querySelector('.product-price');
            let formTax = document.querySelector('.product-tax');
            let totalPay = document.querySelector('.total-pay p');

            productsContainer.innerHTML = '<p style="text-align: center; font-size: 2rem;">Your cart is empty for now</p>';
            formPrice.textContent = '0.00 USD';
            formTax.textContent = '0.00 USD';
            totalPay.textContent = '0.00 USD';
        }
}

function removeFromCart(ID) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartIcon = document.querySelector('.cart-icon');

    // Find the index of the item with the matching custom ID
    const indexToRemove = cart.findIndex(item => item.ID === ID);

    // If found, remove the product completely
    if (indexToRemove !== -1) {
        // Remove the item from the cart
        cart.splice(indexToRemove, 1);

        // Remove active state from the icon if there is no product left
        if(cart.length === 0) {
            cartIcon.classList.remove('active');
        }

        // Save the updated cart to local storage
        localStorage.setItem("cart", JSON.stringify(cart));

        // Update the displayed total and any other relevant information with a callback
        updateCartDisplay();
    }
};

