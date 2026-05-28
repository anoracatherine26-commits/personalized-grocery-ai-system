const products = [
  ["Fresh Broccoli", 45, "/ kg", "🥦", "Vegetables"], ["Spinach Bundle", 38, "/ bunch", "🥬", "Vegetables"],
  ["Carrots", 35, "/ kg", "🥕", "Vegetables"], ["Tomatoes", 55, "/ kg", "🍅", "Vegetables"],
  ["Sweet Corn", 48, "/ pack", "🌽", "Vegetables"], ["Potatoes", 42, "/ kg", "🥔", "Vegetables"],
  ["Mushrooms", 95, "/ pack", "🍄", "Vegetables"], ["Cabbage", 58, "/ head", "🥬", "Vegetables"],
  ["Eggplant", 64, "/ kg", "🍆", "Vegetables"], ["Bell Pepper", 95, "/ kg", "🫑", "Vegetables"],
  ["Cucumber", 42, "/ kg", "🥒", "Vegetables"], ["Red Apple", 50, "/ kg", "🍎", "Fruits"],
  ["Banana Cavendish", 60, "/ kg", "🍌", "Fruits"], ["Avocado", 70, "/ kg", "🥑", "Fruits"],
  ["Orange", 80, "/ kg", "🍊", "Fruits"], ["Strawberries", 180, "/ box", "🍓", "Fruits"],
  ["Grapes", 160, "/ kg", "🍇", "Fruits"], ["Watermelon", 95, "/ slice", "🍉", "Fruits"],
  ["Chicken Breast", 165, "/ kg", "🍗", "Meats"], ["Pork Chop", 245, "/ kg", "🥩", "Meats"],
  ["Beef Strips", 310, "/ kg", "🥩", "Meats"], ["Ground Beef", 285, "/ kg", "🍖", "Meats"],
  ["Chicken Wings", 190, "/ kg", "🍗", "Meats"], ["Ham Slices", 145, "/ pack", "🥓", "Meats"],
  ["Bacon Strips", 198, "/ pack", "🥓", "Meats"], ["Salmon Fillet", 356, "/ kg", "🐟", "Seafood"],
  ["Shrimp Pack", 280, "/ pack", "🍤", "Seafood"], ["Tuna Steak", 315, "/ kg", "🐟", "Seafood"],
  ["Eggs Dozen", 110, "/ tray", "🥚", "Dairy"], ["Milk 1L", 75, "/ pack", "🥛", "Dairy"],
  ["Greek Yogurt", 85, "", "🍶", "Dairy"], ["Cheddar Cheese", 140, "/ block", "🧀", "Dairy"],
  ["Butter", 98, "/ bar", "🧈", "Dairy"], ["Fresh Cream", 125, "/ pack", "🥛", "Dairy"],
  ["Chocolate Milk", 88, "/ bottle", "🥛", "Dairy"], ["Cream Cheese", 135, "/ tub", "🧀", "Dairy"],
  ["Whole Wheat Bread", 85, "/ loaf", "🍞", "Bakery"], ["Croissant", 65, "/ pair", "🥐", "Bakery"],
  ["Rice 5kg", 295, "/ sack", "🍚", "Pantry"], ["Quinoa", 120, "", "🥣", "Pantry"],
  ["Pasta", 72, "/ pack", "🍝", "Pantry"], ["Olive Oil", 245, "/ bottle", "🫒", "Pantry"],
  ["Coffee Beans", 220, "/ bag", "☕", "Beverages"], ["Orange Juice", 98, "/ bottle", "🧃", "Beverages"],
  ["Vanilla Ice Cream", 160, "/ tub", "🍨", "Ice Creams"], ["Chocolate Ice Cream", 170, "/ tub", "🍦", "Ice Creams"],
  ["Strawberry Ice Cream", 168, "/ tub", "🍧", "Ice Creams"], ["Mango Ice Cream", 175, "/ tub", "🥭", "Ice Creams"],
  ["Cookies & Cream", 185, "/ tub", "🍪", "Ice Creams"], ["Ice Cream Sandwich", 65, "/ piece", "🍦", "Ice Creams"],
  ["Toothpaste", 65, "", "🪥", "Hygienes"], ["Shampoo", 128, "", "🧴", "Hygienes"],
  ["Conditioner", 130, "", "🧴", "Hygienes"], ["Bath Soap", 55, "/ pack", "🧼", "Hygienes"],
  ["Hand Wash", 95, "/ bottle", "🧴", "Hygienes"], ["Sanitary Pads", 120, "/ pack", "🩹", "Hygienes"],
  ["Alcohol Spray", 105, "/ bottle", "🧴", "Hygienes"], ["Cotton Buds", 45, "/ pack", "🧻", "Hygienes"],
  ["Laundry Detergent", 155, "", "🧴", "Materials"], ["Paper Towel", 150, "", "🧻", "Materials"],
  ["Dishwashing Liquid", 99, "/ bottle", "🧽", "Materials"], ["Trash Bags", 110, "/ roll", "🛍️", "Materials"],
  ["Kitchen Sponge", 45, "/ pack", "🧽", "Materials"], ["Aluminum Foil", 115, "/ roll", "📦", "Materials"],
  ["Food Containers", 180, "/ set", "🥡", "Materials"], ["Tissue Box", 75, "/ box", "🧻", "Materials"],
  ["Milk Chocolate Bar", 85, "/ bar", "🍫", "Chocolates"], ["Dark Chocolate", 95, "/ bar", "🍫", "Chocolates"],
  ["Chocolate Cookies", 120, "/ pack", "🍪", "Chocolates"], ["Choco Wafer", 68, "/ pack", "🍫", "Chocolates"],
  ["Chocolate Spread", 180, "/ jar", "🍯", "Chocolates"], ["Candy Coated Choco", 75, "/ pouch", "🍬", "Chocolates"],
  ["Potato Chips", 88, "/ bag", "🍟", "Junk Foods"], ["Cheese Puffs", 72, "/ bag", "🧀", "Junk Foods"],
  ["Nacho Chips", 92, "/ bag", "🌮", "Junk Foods"], ["Instant Noodles", 45, "/ pack", "🍜", "Junk Foods"],
  ["Soda Can", 42, "/ can", "🥤", "Junk Foods"], ["Gummy Candy", 60, "/ pouch", "🍬", "Junk Foods"],
  ["Chocolate Donut", 55, "/ piece", "🍩", "Junk Foods"], ["Mixed Nuts", 190, "/ pouch", "🥜", "Snacks"],
  ["Baby Wipes", 115, "", "🧸", "Baby Care"]
].map(([name, price, unit, icon, category]) => ({ name, price, unit, icon, category }));

const menuCategories = [...new Set(products.map(product => product.category))];

let role = "User";
let cart = [
  { ...products[0], qty: 1 },
  { ...products[8], qty: 2 },
  { ...products[14], qty: 1 },
  { ...products[19], qty: 1 }
];

const peso = value => `₱${value.toFixed(2)}`;
const byId = id => document.getElementById(id);

function productCard(product) {
  return `<article class="product-card">
    <div class="product-art">${product.icon}</div>
    <h4>${product.name}</h4>
    <small>${product.category}</small>
    <p>${peso(product.price)} ${product.unit}</p>
    <button class="add" data-add="${product.name}" aria-label="Add ${product.name}">+</button>
  </article>`;
}

function renderProducts() {
  const category = byId("categoryFilter").value;
  const query = byId("searchInput").value.trim().toLowerCase();
  const list = products.filter(product => {
    const matchesCategory = category === "All Categories" || product.category === category;
    const matchesSearch = !query || `${product.name} ${product.category}`.toLowerCase().includes(query);
    return matchesCategory && matchesSearch;
  });
  byId("productGrid").innerHTML = list.map(productCard).join("");
  byId("recommendGrid").innerHTML = [products[25], products[20], products[1], products[14], products[9], products[11]].map(productCard).join("");
}

function renderProductMenu() {
  byId("productMenu").innerHTML = menuCategories.map(category => {
    const items = products.filter(product => product.category === category);
    return `<article class="menu-card">
      <div class="menu-card-head">
        <h3>${category}</h3>
        <button data-menu-category="${category}">View</button>
      </div>
      <div class="menu-items">
        ${items.map(item => `<button data-add="${item.name}"><span>${item.icon}</span><b>${item.name}</b><small>${peso(item.price)} ${item.unit}</small></button>`).join("")}
      </div>
    </article>`;
  }).join("");
}

function renderCategories() {
  const categories = ["All Categories", ...new Set(products.map(product => product.category))];
  byId("categoryFilter").innerHTML = categories.map(category => `<option>${category}</option>`).join("");
}

function renderCart() {
  byId("cartList").innerHTML = cart.map(item => `<article class="cart-item">
    <div class="cart-icon">${item.icon}</div>
    <div><b>${item.name}</b><p>${peso(item.price)} ${item.unit}</p></div>
    <div class="qty"><button data-qty="${item.name}" data-change="-1">−</button><span>${item.qty}</span><button data-qty="${item.name}" data-change="1">+</button></div>
    <b>${peso(item.price * item.qty)}</b>
  </article>`).join("");
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  byId("subtotal").textContent = peso(subtotal);
  byId("cartTotal").textContent = peso(Math.max(subtotal + 40 - 25, 0));
}

function showPage(pageId) {
  document.querySelectorAll(".page").forEach(page => page.classList.toggle("active", page.id === pageId));
  document.querySelectorAll(".nav").forEach(button => button.classList.toggle("active", button.dataset.page === pageId));
}

document.querySelectorAll("[data-role]").forEach(button => {
  button.addEventListener("click", () => {
    role = button.dataset.role;
    document.querySelectorAll("[data-role]").forEach(item => item.classList.remove("active"));
    button.classList.add("active");
  });
});

byId("loginForm").addEventListener("submit", event => {
  event.preventDefault();
  byId("loginView").classList.remove("active");
  byId("systemView").classList.add("active");
  byId("activeRole").textContent = `${role} Mode`;
  showPage(role === "Admin" ? "admindash" : "home");
});

byId("logoutBtn").addEventListener("click", () => {
  byId("systemView").classList.remove("active");
  byId("loginView").classList.add("active");
});

byId("categoryFilter").addEventListener("change", renderProducts);
byId("searchInput").addEventListener("input", renderProducts);
byId("clearCart").addEventListener("click", () => {
  cart = [];
  renderCart();
});

document.addEventListener("click", event => {
  const pageButton = event.target.closest("[data-page]");
  if (pageButton) showPage(pageButton.dataset.page);

  const menuButton = event.target.closest("[data-menu-category]");
  if (menuButton) {
    byId("categoryFilter").value = menuButton.dataset.menuCategory;
    renderProducts();
    showPage("catalog");
  }

  const addButton = event.target.closest("[data-add]");
  if (addButton) {
    const product = products.find(item => item.name === addButton.dataset.add);
    const existing = cart.find(item => item.name === product.name);
    if (existing) existing.qty += 1;
    else cart.push({ ...product, qty: 1 });
    renderCart();
    showPage("cart");
  }

  const qtyButton = event.target.closest("[data-qty]");
  if (qtyButton) {
    const item = cart.find(product => product.name === qtyButton.dataset.qty);
    item.qty += Number(qtyButton.dataset.change);
    cart = cart.filter(product => product.qty > 0);
    renderCart();
  }
});

renderCategories();
renderProducts();
renderProductMenu();
renderCart();
