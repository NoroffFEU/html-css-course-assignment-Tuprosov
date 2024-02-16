import { updateCartIconDisplay } from "./cartIconDisplay.mjs";


const addToCartbtn = document.querySelector('.addToCart');

addToCartbtn.addEventListener('click', () => {
    const productName = document.querySelector('.item-3-title').textContent;
    const selectedSize = document.getElementById('size').value;
    const productPrice = parseFloat(document.querySelector('.item-3-desc span').textContent.trim().replace(/[^\d.]/g, ''));
    const selectedQuantity = parseInt(document.getElementById('quantity').value, 10);
    const productImage =  document.querySelector('.target-image img').src;
    const productId = document.querySelector('.target-image img').id;

    addToCart(productName, selectedSize, productPrice, selectedQuantity, productImage, productId);
    updateCartIconDisplay();
});

// Initialize the cart from local storage or set it to an empty array
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Function to add an item to the cart
function addToCart(name, size, price, quantity, image, id) {
    // Check if the item is already in the cart
    const existingItemIndex = cart.findIndex(item => (
        item.name === name &&
        item.size === size &&
        item.price === price
    ));

    if (existingItemIndex !== -1) {
        // Item already in the cart, update quantity or take appropriate action
        const existingItem = cart[existingItemIndex];
        existingItem.quantity += quantity;
    } else {
        // Item not in the cart, add it
        const item = { name, size, price, quantity, image, id};
        cart.push(item);
    }
    saveCartToLocalStorage(); // Save the updated cart to local storage
}

function saveCartToLocalStorage() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

updateCartIconDisplay();