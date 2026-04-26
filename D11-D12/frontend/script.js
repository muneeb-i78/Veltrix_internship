const form = document.getElementById("authForm");
const toggleBtn = document.getElementById("toggleBtn");
const formTitle = document.getElementById("formTitle");
const message = document.getElementById("message");

let isLogin = false;

// toggle login/register
const toggleText = document.getElementById("toggleText");

toggleBtn.addEventListener("click", () => {
  isLogin = !isLogin;

  if (isLogin) {
    formTitle.textContent = "Login";
    toggleBtn.textContent = "Register";
    toggleText.textContent = "Don't have an account?";
  } else {
    formTitle.textContent = "Register";
    toggleBtn.textContent = "Login";
    toggleText.textContent = "Already have an account?";
  }
});

// form submit
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const url = isLogin
    ? "http://localhost:3000/login"
    : "http://localhost:3000/register";

  const data = isLogin
    ? { email, password }
    : { name, email, password };

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    const result = await res.json();
    message.textContent = result.message;

  } catch (err) {
    message.textContent = "Server error";
  }
});