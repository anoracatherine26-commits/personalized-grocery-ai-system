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
  ["Granola Bars", 135, "/ box", "🍯", "Snacks"], ["Trail Mix", 155, "/ pouch", "🥜", "Snacks"],
  ["Pretzels", 88, "/ bag", "🥨", "Snacks"], ["Crackers", 78, "/ box", "🍘", "Snacks"],
  ["Baby Wipes", 115, "", "🧸", "Baby Care"], ["Baby Shampoo", 145, "/ bottle", "🧴", "Baby Care"],
  ["Baby Powder", 95, "/ bottle", "🍼", "Baby Care"], ["Diapers Small", 365, "/ pack", "🧷", "Baby Care"],
  ["Lettuce Head", 68, "/ head", "🥬", "Vegetables"], ["Green Beans", 72, "/ pack", "🫛", "Vegetables"],
  ["Garlic", 35, "/ pack", "🧄", "Vegetables"], ["Onions", 58, "/ kg", "🧅", "Vegetables"],
  ["Pineapple", 95, "/ piece", "🍍", "Fruits"], ["Mango", 120, "/ kg", "🥭", "Fruits"],
  ["Blueberries", 210, "/ box", "🫐", "Fruits"], ["Lemon", 65, "/ pack", "🍋", "Fruits"],
  ["Tilapia", 180, "/ kg", "🐟", "Seafood"], ["Squid Rings", 240, "/ pack", "🦑", "Seafood"],
  ["Crab Sticks", 135, "/ pack", "🦀", "Seafood"], ["Bangus", 210, "/ kg", "🐟", "Seafood"],
  ["Sliced Bread", 72, "/ loaf", "🍞", "Bakery"], ["Pandesal", 45, "/ pack", "🥖", "Bakery"],
  ["Bagels", 125, "/ pack", "🥯", "Bakery"], ["Muffins", 155, "/ box", "🧁", "Bakery"],
  ["Brown Rice 5kg", 340, "/ sack", "🍚", "Pantry"], ["Canned Tuna", 58, "/ can", "🥫", "Pantry"],
  ["Tomato Sauce", 42, "/ pack", "🥫", "Pantry"], ["Peanut Butter", 165, "/ jar", "🥜", "Pantry"],
  ["Green Tea", 120, "/ box", "🍵", "Beverages"], ["Bottled Water", 95, "/ pack", "💧", "Beverages"],
  ["Apple Juice", 105, "/ bottle", "🧃", "Beverages"], ["Cocoa Drink", 115, "/ pack", "☕", "Beverages"],
  ["Fabric Softener", 180, "/ bottle", "🧴", "Materials"], ["Floor Cleaner", 145, "/ bottle", "🧽", "Materials"],
  ["Toilet Paper", 165, "/ pack", "🧻", "Materials"], ["Zip Bags", 95, "/ box", "🛍️", "Materials"],
  ["Mouthwash", 160, "/ bottle", "🪥", "Hygienes"], ["Face Mask", 85, "/ pack", "😷", "Hygienes"],
  ["Deodorant", 118, "/ stick", "🧴", "Hygienes"], ["Lotion", 175, "/ bottle", "🧴", "Hygienes"]
].map(([name, price, unit, icon, category]) => ({ name, price, unit, icon, category }));

const menuCategories = [...new Set(products.map(product => product.category))];

let role = "User";
let selectedMenuCategory = "";
let cart = []; // start empty so it only fills when the user adds/purchases items

let favoriteNames = new Set();

const peso = value => `₱${value.toFixed(2)}`;
const byId = id => document.getElementById(id);
const findProduct = name => products.find(item => item.name === name);
const getCartItem = name => cart.find(item => item.name === name);
const getCartQty = name => {
  const item = getCartItem(name);
  return item ? item.qty : 0;
};

function addToCartByName(name, qty = 1) {
  const product = findProduct(name);
  if (!product) return;
  const existing = getCartItem(name);
  if (existing) existing.qty += qty;
  else cart.push({ ...product, qty });
  renderCart();
  renderProductMenu();
}

function removeFromCartByName(name, qty = 1) {
  const existing = getCartItem(name);
  if (!existing) return;
  existing.qty -= qty;
  cart = cart.filter(item => item.qty > 0);
  renderCart();
  renderProductMenu();
}

function toggleFavorite(name, button) {
  if (favoriteNames.has(name)) {
    favoriteNames.delete(name);
    button.textContent = "♡";
  } else {
    favoriteNames.add(name);
    button.textContent = "♥";
  }
}

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
  byId("recommendGrid").innerHTML = [products[25], products[20], products[1], products[14], products[9], products[11]].map(productCard).join("");
}

function renderProductMenu() {
  const query = byId("searchInput").value.trim().toLowerCase();
  const items = products.filter(product => {
    const matchesSearch = !query || `${product.name} ${product.category}`.toLowerCase().includes(query);
    return matchesSearch;
  });
  byId("productMenu").innerHTML = `<div class="shop-grid">
    ${items.map(item => `<article class="shop-card">
      <button class="favorite" type="button" aria-label="Save ${item.name}">${favoriteNames.has(item.name) ? "♥" : "♡"}</button>
      <div class="shop-art">${item.icon}</div>
      <span class="shop-category">${item.category}</span>
      <h3>${item.name}</h3>
      <p>${peso(item.price)} ${item.unit}</p>
      <div class="shop-actions">
        <div class="mini-qty">
          <button type="button" data-product="${item.name}" data-change="-1">−</button>
          <span>${getCartQty(item.name)}</span>
          <button type="button" data-product="${item.name}" data-change="1">+</button>
        </div>
        <button class="cart-add" data-add="${item.name}" type="button">🛒 Add</button>
      </div>
    </article>`).join("") || `<article class="empty-products">No products found. Try another search or show all products.</article>`}
  </div>`;
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

function handleTopIcon(button) {
  const label = button.textContent.trim();
  if (label === "🔔") showPage("notifications");
  if (label === "🛒") showPage("cart");
  if (label === "👩") showPage("settings");
}

let notifications = []; // { id, message, expiresAt, createdAt }

function formatDate(d) {
  return d.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });
}

function computeExpiry(productName) {
  // simple, deterministic “expiry” rules so every purchased item gets an expiration date
  const p = findProduct(productName);
  const category = p?.category || "";
  const now = new Date();
  const days = (() => {
    if (["Fruits", "Vegetables", "Seafood", "Meats"].includes(category)) return 3;
    if (["Dairy", "Ice Creams"].includes(category)) return 5;
    return 14; // pantry / beverages / bakery / hygiene / materials / snacks
  })();
  return new Date(now.getTime() + days * 24 * 60 * 60 * 1000);
}

function pushNotification(message, productName) {
  const expiresAt = computeExpiry(productName);
  notifications.unshift({
    id: crypto?.randomUUID ? crypto.randomUUID() : String(Date.now() + Math.random()),
    message,
    createdAt: new Date(),
    expiresAt
  });
  renderNotifications();
}

function isNotificationExpired(n) {
  return new Date(n.expiresAt).getTime() < Date.now();
}

function renderNotifications() {
  const list = byId("noticeList") || byId("notifications");
  if (!list) return;

  // remove expired ones from the UI
  const active = notifications.filter(n => !isNotificationExpired(n));
  notifications = active;

  if (!active.length) {
    list.innerHTML = `<article>✨ No new notifications right now.</article>`;
    return;
  }

  list.innerHTML = active
    .slice(0, 8)
    .map(n => {
      const exp = formatDate(new Date(n.expiresAt));
      return `<article>⏳ ${n.message}<br/><small style="color:#8b6b55;font-weight:800">Expires: ${exp}</small></article>`;
    })
    .join("");
}

function handleUtilityButton(button) {
  const label = button.textContent.trim();


  if (label === "Generate New Plan") {
    showPage("meal");
    return;
  }

  if (label === "Add Meal Items to Cart") {
    ["Eggs Dozen", "Milk 1L", "Whole Wheat Bread", "Banana Cavendish"].forEach(name => addToCartByName(name));
    showPage("cart");
    return;
  }

  if (label === "Checkout") {
    // generate expiring notifications for each purchased cart item
    const purchased = [...cart];
    cart = [];

    renderCart();
    renderProductMenu();

    if (purchased.length) {
      purchased.forEach(item => {
        pushNotification(`✅ Purchased: ${item.name} (${item.qty}×)`, item.name);
      });
    } else {
      notifications = [];
      renderNotifications();
    }

    showPage("notifications");
    return;
  }

  if (label === "Save Changes") {
    button.textContent = "Saved!";
    return;
  }

  if (label === "Send Message") {
    button.textContent = "Sent!";
    return;
  }

  if (button.closest(".reorder-items")) {
    const reorderMap = {
      "🧻 Paper Towels": "Paper Towel",
      "🧼 Cleaning Wipes": "Dishwashing Liquid",
      "🧴 Laundry Detergent": "Laundry Detergent"
    };
    const productName = reorderMap[label];
    if (productName) {
      addToCartByName(productName);
      showPage("cart");
    }
  }
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

byId("searchInput").addEventListener("input", () => {
  selectedMenuCategory = "";
  renderProductMenu();
  renderProducts();
});

byId("showAllProducts").addEventListener("click", () => {
  selectedMenuCategory = "";
  byId("searchInput").value = "";
  renderProductMenu();
});

byId("clearCart").addEventListener("click", () => {
  cart = [];
  renderCart();
  renderProductMenu();
});

document.addEventListener("click", event => {
  const pageButton = event.target.closest("[data-page]");
  if (pageButton) showPage(pageButton.dataset.page);

  const addButton = event.target.closest("[data-add]");
  if (addButton) {
    addToCartByName(addButton.dataset.add);
    showPage("cart");
  }

  const productQtyButton = event.target.closest("[data-product]");
  if (productQtyButton) {
    const change = Number(productQtyButton.dataset.change);
    if (change > 0) addToCartByName(productQtyButton.dataset.product, change);
    else removeFromCartByName(productQtyButton.dataset.product, Math.abs(change));
  }

  const qtyButton = event.target.closest("[data-qty]");
  if (qtyButton) {
    const item = cart.find(product => product.name === qtyButton.dataset.qty);
    if (!item) return;
    item.qty += Number(qtyButton.dataset.change);
    cart = cart.filter(product => product.qty > 0);
    renderCart();
    renderProductMenu();
  }

  const favoriteButton = event.target.closest(".favorite");
  if (favoriteButton) {
    const card = favoriteButton.closest(".shop-card");
    const title = card?.querySelector("h3")?.textContent;
    if (title) toggleFavorite(title, favoriteButton);
  }

  const topIconButton = event.target.closest(".top-icons button");
  if (topIconButton) handleTopIcon(topIconButton);

  const utilityButton = event.target.closest("button");
  if (utilityButton) handleUtilityButton(utilityButton);
});

renderProducts();
renderProductMenu();
renderCart();
renderNotifications();

