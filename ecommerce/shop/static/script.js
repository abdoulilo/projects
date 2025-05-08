document.addEventListener('DOMContentLoaded', function () {
    const cart = [];
    const cartItemsContainer = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
  
    function updateCart() {
      cartItemsContainer.innerHTML = '';
      let total = 0;
  
      if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="text-muted">Your cart is empty</p>';
      }
  
      cart.forEach(item => {
        total += item.price * item.quantity;
  
        const div = document.createElement('div');
        div.className = 'cart-item';
        div.innerHTML = `
  <span>${item.name} (x${item.quantity})</span>
  <span> MYR ${(item.price * item.quantity).toFixed(2)}</span>
`;
        cartItemsContainer.appendChild(div);
      });
  
      cartTotal.textContent = `MYR ${total.toFixed(2)}`;
    }
  
    document.querySelectorAll('.add-to-cart').forEach(button => {
      button.addEventListener('click', function () {
        const id = this.dataset.id;
        const name = this.dataset.name;
        const price = parseFloat(this.dataset.price);
  
        const existing = cart.find(item => item.id === id);
        if (existing) {
          existing.quantity += 1;
        } else {
          cart.push({ id, name, price, quantity: 1 });
        }
  
        updateCart();
      });
    });
  });
  