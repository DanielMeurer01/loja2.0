document.addEventListener("DOMContentLoaded", function() {
    const cartButton = document.getElementById("cart02"); /*Funcionalidade do potão carrinho*/
    const closeCartButton = document.getElementById("close-cart");
    const overlay = document.querySelector(".overlay");
    const addToCartButtons = document.querySelectorAll(".add-to-cart");
  
    let cartItems = [];
    let total = 0;
  
    addToCartButtons.forEach(button => {
      button.addEventListener("click", function() {
        const product = button.parentElement;
        const productName = product.querySelector("h2").innerText;
        const productPrice = parseFloat(product.querySelector("p").innerText.slice(3));
  
        cartItems.push({ name: productName, price: productPrice });
        total += productPrice;
        updateCart();
      });
    });
  
    cartButton.addEventListener("click", function() {
      overlay.style.display = "flex";
      updateCart();
      
    });
  
    closeCartButton.addEventListener("click", function() {
      overlay.style.display = "none";
    });
  
    function updateCart() {
      const cartList = document.getElementById("cart-items");
      cartList.innerHTML = "";
      cartItems.forEach(item => {
        const li = document.createElement("li");
        li.innerText = `${item.name}: R$ ${item.price.toFixed(2)}`;
        cartList.appendChild(li);
      });
      document.getElementById("cart-total").innerText = total.toFixed(2);
    
    }
  });