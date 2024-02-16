export function updateCartIconDisplay() {

    // Retrieve the cart from local storage
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Calculate total quantity
    const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

    if(totalQuantity != 0) {
        // Update the data-quantity attribute if true
        const cartIcon = document.querySelector('.cart-icon');
        cartIcon.setAttribute('data-quantity', totalQuantity.toString());
        // Apply active state to icon
        cartIcon.classList.add('active');
    }
}
