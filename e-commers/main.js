let cartCount = 0;
let cartItems = [];
let totalPrice = 0;

function addToCart(id, name, price) {
    cartCount++;
    document.getElementById('cart-count').innerText = cartCount;


    cartItems.push({ id, name, price });
    totalPrice += price;

    alert(`${name} added to the cart!`);
}

function showCart() {
    const cartModal = document.getElementById('cart-modal');
    const cartList = document.getElementById('cart-items');
    const totalElement = document.getElementById('cart-total');

    // Clear previous cart items
    cartList.innerHTML = '';

    if (cartItems.length === 0) {
        cartList.innerHTML = '<li>No items in the cart</li>';
    } else {
        cartItems.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
            cartList.appendChild(li);
        });
    }


    totalElement.textContent = totalPrice.toFixed(2);


    cartModal.style.display = 'block';
}

function closeCart() {

    document.getElementById('cart-modal').style.display = 'none';
}


window.onclick = function(event) {
    const cartModal = document.getElementById('cart-modal');
    if (event.target === cartModal) {
        cartModal.style.display = 'none';
    }
};