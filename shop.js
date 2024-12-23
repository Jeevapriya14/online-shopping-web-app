const products = [
    { id: 1, name: 'Kurti with jean', price: 500, image: 'products/jean.jpg' },
    { id: 2, name: 'Fashionable kurti with jean', price: 1200, image: 'products/kurti.jpg' },
    { id: 3, name: 'Aliya cut kurti', price: 3000, image: 'products/kurti2.jpg' },
    { id: 4, name: 'Kurti set with palazzo', price: 1500, image: 'products/kurti_set.jpg' },
    { id: 5, name: 'Jean top', price: 1000, image: 'products/jean_top.jpg'}
  ];
  
  const cart = [];
  const likedProducts = new Set();
  
  const productsGrid = document.getElementById('products-grid');
  const cartList = document.getElementById('cart-list');
  
  function renderProducts() {
    productsGrid.innerHTML = products
      .map(
        (product) => `
        <div class="product-card">
          <img src="${product.image}" alt="${product.name}">
          <h2>${product.name}</h2>
          <p>Price: ₹${product.price}</p>
          <div class="product-actions">
            <button onclick="addToCart(${product.id})">Add to Cart</button>
            <button class="${likedProducts.has(product.id) ? 'liked' : ''}" onclick="toggleLike(${product.id})">
              ${likedProducts.has(product.id) ? 'Liked ❤️' : 'Like ♡'}
            </button>
          </div>
        </div>
      `
      )
      .join('');
  }
  
  function addToCart(productId) {
    const product = products.find((p) => p.id === productId);
    if (!cart.some((item) => item.id === productId)) {
      cart.push(product);
      renderCart();
    } else {
      alert(`${product.name} is already in the cart.`);
    }
  }
  
  function toggleLike(productId) {
    if (likedProducts.has(productId)) {
      likedProducts.delete(productId);
    } else {
      likedProducts.add(productId);
    }
    renderProducts();
  }
  
  function renderCart() {
    cartList.innerHTML = cart
      .map((item) => `<li>${item.name} - ₹${item.price}</li>`)
      .join('');
  }
  
  renderProducts();
  