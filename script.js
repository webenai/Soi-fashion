let cart = JSON.parse(localStorage.getItem("cart")) || [];

function updateCartCount() {
  document.getElementById("cart-count").innerText = cart.length;
}

function addToCart(name, price) {
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
}

function viewCart() {
  document.getElementById("cartBox").style.display = "block";

  let list = document.getElementById("cart-items");
  list.innerHTML = "";

  let total = 0;

  cart.forEach(item => {
    let li = document.createElement("li");
    li.innerText = item.name + " - ₹" + item.price;
    list.appendChild(li);
    total += item.price;
  });

  document.getElementById("total").innerText = total;
}

function showLogin() {
  document.getElementById("loginBox").style.display = "block";
}

function login() {
  let user = document.getElementById("username").value;
  let pass = document.getElementById("password").value;

  if (user === "admin" && pass === "1234") {
    alert("Login Successful");
    document.getElementById("loginBox").style.display = "none";
  } else {
    alert("Invalid Login");
  }
}

updateCartCount();
