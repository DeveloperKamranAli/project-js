
let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

document.querySelectorAll('.addToCart').forEach((btn) => {
  btn.addEventListener('click', function() {

    // Get product info from the card
    let productCard = btn.closest('.card-body');
    let productName = productCard.querySelector('p').innerText;
    let productPrice = productCard.querySelector('h5').innerText;

    // Add the product to cart

    cartItems.push({
      name: productName,
      price: productPrice
    });

    // Save updated cart to localStorage
    
    localStorage.setItem('cartItems', JSON.stringify(cartItems));

    alert(`${productName} has been added to your cart!`);
  });
});



