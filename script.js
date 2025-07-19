function toggleForm(form) {
  document.getElementById("login-box").classList.toggle("hidden", form !== "login");
  document.getElementById("register-box").classList.toggle("hidden", form !== "register");
}

function togglePassword(id, icon) {
  const field = document.getElementById(id);
  field.type = field.type === "password" ? "text" : "password";
}

function register() {
  const name = document.getElementById("reg-name").value.trim();
  const email = document.getElementById("reg-email").value.trim();
  const username = document.getElementById("reg-username").value.trim();
  const password = document.getElementById("reg-password").value;
  const confirm = document.getElementById("reg-confirm").value;

  if (!name || !email || !username || !password || !confirm) {
    alert("Please fill in all fields.");
    return;
  }

  if (password !== confirm) {
    alert("Passwords do not match.");
    return;
  }

  const users = JSON.parse(localStorage.getItem("users") || "[]");
  if (users.find(user => user.username === username)) {
    alert("Username already exists.");
    return;
  }

  users.push({ name, email, username, password });
  localStorage.setItem("users", JSON.stringify(users));
  alert("Registration successful! Please login.");
  toggleForm("login");
}

function login() {
  const username = document.getElementById("login-username").value.trim();
  const password = document.getElementById("login-password").value;

  const users = JSON.parse(localStorage.getItem("users") || "[]");
  const user = users.find(u => u.username === username && u.password === password);

  if (!user) {
    alert("Invalid credentials.");
    return;
  }

  localStorage.setItem("loggedInUser", user.name);
  window.location.href = "dashboard.html";
}
